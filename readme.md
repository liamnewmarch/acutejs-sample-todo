# acutejs-sample-todo

A sample todo app build with Acute.

https://acutejs-sample-todo.firebaseapp.com

## Install dependencies

This sample uses Firebase hosting and associated tooling to run a local server and deploy. The [firebase-tools](https://github.com/firebase/firebase-tools) CLI package can be installed globally (recommended) or locally as a peer dependency of this sample.

```sh
# With global firebase-tools
npm install --g firebase-tools
npm install @acute/sample-todo

# With local firebase-tools
npm install @acute/sample-todo firebase-tools
```

## Run locally

Build static assets, watch for changes and start a development server on port 5000.

```sh
npm start
```

## Deploy

Build static assets for production with minification and deploy to firebase hosting.

```sh
# Remember to update .firebaserc first!
npm run deploy
```

## Without firebase

It’s possible to run this sample without firebase if you provide your own development server and deployment tooling.

```sh
# Install without firebase-tools
npm install @acute/sample-todo
# Build static assets and watch for changes
npm run build:watch
# Serve (in another window) e.g. using python
pushd public; python -m SimpleHTTPServer; popd;
# Build for production
npm run build:prod
# Deploy e.g. using Google Cloud
gloud app deploy public
```
