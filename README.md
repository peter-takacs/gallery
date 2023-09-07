## Setup

Make sure to have node.js v16+

```
$ npm i
```

## Making changes

All the frontend code lives in the .ts(x) files. Change them, rebuild using the command in the build section. 
To test changes locally:
```
$ cd out
$ npx http-server
```
This'll get you an http server running on the local machine, it should print a URI that you can use to access it.

### Building
Do this before testing or deploying
```
$ npm run build
```
This will run the image optimizer too, any images in the `static` folder will be optimized and added to the `out` folder

## Deploying

Throw everything in the `out` folder after a build onto a server. Use any server, the generated site is static. Make sure that root routes (`/about`, `/vizdev`) get rewritten to `about.html` and `vizdev.html`, otherwise links pointing to these pages will break because we use client side routing.
