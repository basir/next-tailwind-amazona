# Upgrade To Next 13

based on https://beta.nextjs.org/docs/upgrade-guide#nodejs-version

## Update Packages

```shell
$ npm i -g npm-check-updates
$ ncu -u
$ npm install
```

## Update Image and Link Component

```shell
$ npx @next/codemod next-image-to-legacy-image ./pages --force
$ npx @next/codemod next-image-experimental ./pages --force
$ npx @next/codemod new-link ./pages --force
```

no need to update Script and Font. we don't use them in the project

## Fix Next Auth 4 Errors

1. in local .env file add:

   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=somethingsecret
   ```

   in production server add the correct url in the env variables

2. replace getSession with getToken

   for example in pages/api/auth/update.js

   ```js
   import { getToken } from 'next-auth/jwt'
   ...
   const user = await getToken({ req })
   if (!user) {
       return res.status(401).send({ message: 'signin required' })
   }
   ```

   or in pages/api/admin/summary.js

   ```js
        import { getToken } from 'next-auth/jwt'
        ...
        const user = await getToken({ req })
        if (!user || (user && !user.isAdmin)) {
            return res.status(401).send('signin required')
        }
   ```

## Fix heroicons error

cart.js
replace:

```js
// cart.js
-import { XCircleIcon } from '@heroicons/react/outline'
+import XCircleIcon from '@heroicons/react/24/outline/XCircleIcon'
// Layout.js
-import { SearchIcon } from '@heroicons/react/outline'
+import SearchIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon'
// search.js
-import { XCircleIcon } from '@heroicons/react/outline'
+import XCircleIcon from '@heroicons/react/24/outline/XCircleIcon'

```

## Layout.js

```js
// remove w-full in this line and add className="flex items-center z-10"
 <form onSubmit={submitHandler} className="mx-auto  hidden  justify-center md:flex">
 ...</form>

<div className="flex items-center z-10">

```

## Remove a tags

- DropdownLink.js
- other files has <a> inside <Link>

## App Router

It's in beta. I will update to appDir when it gets stable.
