# Video-38-Deploy-App-On-Ubuntu

1. buy vps
   1. there are a lot of options like AWS Lightsail, GCP, DigitalOcean or Azure
   2. in this tutorial we use AWS LightSail
   3. open https://lightsail.aws.amazon.com and login or register your account
   4. create ubuntu instance (3 months for free)
2. get static ip address
   1. open ubuntu instance in Lightsail dashboard
   2. go to Networking tab
   3. attach static ip address
   4. let say it is your_server_ip. we use it for the rest of tutorial.
3. ssh connect to server
   1. download default ssh key (LightsailDefaultKey.pem) and save it ~/.ssh folder
   2. chmod 400 ~/.ssh/LightsailDefaultKey.pem
   3. ssh -i ~/.ssh/LightsailDefaultKey.pem ubuntu@your_server_ip
4. install node

   ```shell
    sudo apt update
    curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs
    node -v
   ```

5. install ngnix

   ```shell
    sudo apt update
    sudo apt install nginx ufw
    sudo ufw allow 'Nginx Full'
    sudo ufw allow 3001
    sudo ufw allow ssh
    sudo ufw enable
    sudo systemctl restart nginx
   ```

6. open ports on hosting control panel

   ```shell
   in lightsail go to network tab of the server and add port http (80), https(443) and 3001
   for other hosting services like digitalocean, check their docs for firewall
   ```

7. open website at http://your_server_ip
8. create project folder on server
   `mkdir -p ~/apps/next-amazona`

9. edit package.json:

   ```shell
   "deploy":"npm run build && rsync --exclude=.git -azP . ubuntu@your_server_ip:/home/ubuntu/apps/next-amazona"
   ```

10. run `npm run deploy` on project folder on local machine
11. nano ~/apps/next-amazona/.env

    ```shell

       MONGODB_URI=mongodb+srv://user:pass@cluster0.vczzh.mongodb.net/dbname?retryWrites=true&w=majority
       PAYPAL_CLIENT_ID=sb
       NEXT_PUBLIC_APP_URL=http://your_server_ip:3001/
       NEXTAUTH_URL=http://your_server_ip:3001/
       NEXTAUTH_SECRET=somethingsecret
    ```

12. install and config pm2

    ```shell
    sudo npm install pm2 -g
    pm2 start npm --watch pages --name "next-amazona" -- start --  -p 3001
    ```

13. open website at http://your_server_ip:3001

## Link IP to domain and Enable https

1. buy domain. let say example.com.
2. config domain dns

   ```shell
   login to dns management of the domain
   and add A record to the domain or subdomain (example.com) pointing to your_server_ip
   if it is not subdomain, also An A record with www.example.com pointing to your_server_ip.
   ```

3. config ngnix

   1. sudo nano /etc/nginx/sites-available/default

   ```shell
    server {
       listen 80;
       server_name example.com;

        location / {
            proxy_pass http://localhost:3001;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

    }
   ```

4. sudo systemctl reload nginx
5. open website at http://example.com
6. install and config certbot

   ```shell
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d example.com -d www.example.com
    sudo systemctl status certbot.timer
    sudo certbot renew --dry-run
   ```

7. open website at https://example.com
