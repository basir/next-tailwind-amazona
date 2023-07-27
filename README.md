# Build Nextjs ECommerce Website Like Amazon

- Tech: Nextjs 13, Next Auth 4
- UI: Tailwind, chart.js, react-chartjs
- DB: MongoDB, Mongoose
- Payment: PayPal, Stripe
- Content Hosting: cloudinary
- Deploy: Github, Vercel, MongoDB Atlas

![next amazona](/public/app.jpg)

## Resources

- Youtube Video : https://youtu.be/_IBlyR5mRzA
- Demo Website :  https://next-tailwind-amazona.vercel.app
- Source Code   :  https://github.com/basir/next-tailwind-amazona
- Full Course: [basir.thinkific.com](https://basir.thinkific.com/courses/build-ecommerce-website-like-amazon-by-next-js?coupon=SAVE90)

## What you will learn

- NextJS basics like setting up project, navigating between pages and data fetching
- NextJS advanced topics like dynamic routing, image optimization,  SSG and SSR
- Tailwind CSS framework to build responsive website using custom theme, animation and carousel
- ReactJS including decomposing components, context API and hooks
- Next Auth package to authenticate customers and admin users
- MongoDB and Mongoose to save and retrieve data like products, orders and users
- PayPal developer api to make online payment
- Deploy web applications on servers like Vercel and Netlify

## Full Course

Get this course by 90% discount on Thinkific:
https://basir.thinkific.com/courses/build-ecommerce-website-like-amazon-by-next-js?coupon=SAVE90

## Run Locally

1. Clone repo

   ```shell
    $ git clone git@github.com:basir/next-tailwind-amazona.git
    $ cd next-tailwind-amazona
   ```

2. Create .env File

   - duplicate .env.example and rename it to .env

3. Setup MongoDB

   - Local MongoDB
   - Install it from [here](https://www.mongodb.com/try/download/community)
   - In .env file update MONGODB_URI=mongodb://localhost/amazona
   - OR Atlas Cloud MongoDB
   - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
   - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

4. Install and Run

   ```shell
     npm install
     npm run dev
   ```

5. Seed Data

   - Run this on browser: http://localhost:5000/api/seed
   - It returns admin email and password and 6 sample products

6. Admin Login

   - Run http://localhost:3000/login
   - Enter admin email and password and click Login

## Lessons

1. Introduction
2. Install Tools
3. Create Next App
4. Publish to Github
5. Create Website Layout
   1. create layout component
   2. add header
   3. add main section
   4. add footer
   5. add tailwind classes
6. List Products
   1. add data.js
   2. add images
   3. render products
7. Create Product Details
   1. create product page
   2. create 3 columns
   3. show image in first column
   4. show product info in second column
   5. show add to cart action on third column
   6. add styles
8. Handle Add To Cart
   1. define react context
   2. define cart items state
   3. create addd to cart action
   4. add reducer
   5. create store provider
   6. handle add to cart button
9. Create Cart Page
   1. create cart.js
   2. use context to get cart items
   3. list items in cart items
   4. redirect to cart screen after add to cart
10. Update Quantity In The Cart
    1. add select box for quantity
    2. handle select box change
11. Save Cart Items
    1. install js-cookie package
    2. save and retreive cart items in cookies
12. Create Login Form
    1. install react hook form
    2. create input boxes
    3. add login button
13. Connect To MongoDB
    1. install mongoose
    2. install mongodb or use mongodb atlas
    3. save connection url in .env file
    4. create db utils file
    5. create sample users
14. Create Login API
    1. install next-auth
    2. create nextauth.js
    3. implement signin
    4. use signin in login form
15. Add User Menu
    1. check user authentication
    2. install headlessui
    3. show user menu
16. Create Shipping Screen
    1. display address fields
    2. save address in context
17. Create Payment Method Screen
    1. dispaly payment methods
    2. save payment method in context
18. Seed sample products
    1. create product model in mongoose
    2. insert sample products to mongodb
19. Load Products MongoDB
    1. load products in home page from mongodb
    2. load products in product page from mongodb
    3. use product api to check count in stock in add to cart
20. Create Place Order Screen
    1. display shipping address
    2. display payment method
    3. display order items
    4. implment create order
21. Create Order Screen
    1. implement backend api for order details
    2. load order data from backend
    3. display order details
22. Create Register Screen
    1. add signup api
    2. create register page
    3. call api on form submit
23. Pay Order By PayPal
    1. add paypal button
    2. handle payment
    3. create backend api
    4. update order state
24. Create Order History Screen
    1. create my order api
    2. create order history component
    3. fetch orders and display them
25. Publish On Vercel
    1. create vercel account
    2. connect to github
    3. set next auth and mongodb db in env vars
    4. push code to github
26. Update User Profile
    1. create profile screen
    2. show user info
    3. handle update user info
27. Create Admin Dashboard
    1. Create Admin Menu
    2. create dashboard screen
    3. Implement admin summary api
28. List Orders For Admin
    1. create orders page
    2. create orders api
    3. use api in page
29. Deliver Order For Admin
    1. create deliver api
    2. add deliver button
    3. implement click handler
30. List Products For Admin
    1. create products page
    2. create products api
    3. use api in page
31. Create Product Edit Page
    1. create edit page
    2. create api for product
    3. show product data in form
32. Upload Product Image
    1. create cloudinary account
    2. get cloudinary keys
    3. create upload api
    4. upload files in edit page
33. Create And Delete Products
    1. add create product button
    2. build new product api
    3. add handler for delete
    4. implement delete api
34. List Users For Admin
    1. create users page
    2. create users api
    3. use api in page
35. Add Carousel
    1. create featured products
    2. feed carousel data
    3. show popular products
36. Create Search Page
    1. create filters
    2. list products
    3. show filters
