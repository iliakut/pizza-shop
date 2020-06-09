This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Description

The app gets its all menu data from firebase, you can change it in any time and you will see the changes in the app.

### Main page
In the main page you can see menu (burger menu if it is mobile) welcome page and sidebar (with cart icon)<br />
The menu (burger menu) content loads from firebase.<br />
Cart icon shows real-time changing count of your cart items and next to it you can see all items price.<br />

### Menu page
In every menu (pizza for example) you can see the name, picture, price and description of menu items.<br />
Cards have the button "add+" it will add the item to the cart.<br />

### Order page
By clicking the cart button you can go to order page.<br />
The order page has menu items with name, price and number of items in your cart.<br />
You can change the number of every menu item by clicking "-" and "+", "x" button allows you to delete item from the cart.
If it is 0 of the menu items it will be deleted automatically.<br />
  

 
