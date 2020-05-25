# Test coding

To run project run `yarn`

To start project run `yarn dev` it will run webpack dev server

To build project in production mode run `yarn build` output will be in dist folder

To test project run `yarn test`

## URLs

Firebase hosting: https://roadio-6cc05.firebaseapp.com/#/

GitHub - Frontend: https://github.com/Futy99/bsc-fe
GitHub - Backend: https://github.com/Futy99/bsc-be

## Testing 

I modified `ButtonLoading/index.tsx` for testing purpose so I could show base test case

I didn't write more tests since it's bit time comsuming for test coding

I use `jest` and `testing` for tests

## Webpack

Webpack config is really nothing special

It's divided to 3 files `common, dev, production`

In `common.js` I use classic loaders `css-loader babel-loader` and also aliases (because no one likes old imports)

I could use `Fork TS Checker Webpack Plugin` for much better performance but I started with `Awesome typescript loader` and it's fast enough for such small project

## Theme and styles

As theme I chose Material UI since it was best choice from task but I am fan of `react-native-paper` and `ant-design`

For basic components I used `styled-components`

## Languages

For diffent languages I used `i18next` and `i18next-react`

## Networking

Requests handled by `axios`

## Routing

For routing I used `connected-react-router` (since I am using redux) and also `hash-router`

## State management

For state managing I used `redux` with `redux-sagas` and `reselect`

Basic flow is action => saga listener => request => reducer

We have 3 types of actions [ACTION, ACTION_SUCCESS, ACTION_FAILURE]

As soons as we send action it's processed in saga and based on request we get back SUCCESS or FAILURE

Lastly se use custom hook `useSelectors` to select our data from redux

## Backend

I wrote my own backend based on task routes. Backend is nodejs using express server and for database I used Firebase firestore.

GitHub url: https://github.com/Futy99/bsc-be
Server url: https://bsc-be.herokuapp.com

## PS

There is much to improve but in my humble opinion this devstack is decent for test coding (It takes days to prepare devstack). I put together this project completely on my own and it's my work. 