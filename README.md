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
On the main page you can see menu (burger menu if it is mobile), welcome page and sidebar (with cart icon).<br />
The menu (burger menu) content loads from firebase.<br />
Cart icon shows real-time changing count of your cart items. Next to cart you can see all items price.<br />

### Menu page
In every menu (pizza's for example) you can see the name, picture, price and description of the item.<br />
Every cards have the button "add+". Pushing the button you add the item to the cart.<br />

### Order page
By clicking the cart button you move to order page.<br />
On the order page you can see the name, the price and quantity of the chosen item.<br />
You can change the quantity of every item by clicking "-" and "+". "x" button allows you to delete item from the cart.
If the quantity of the item is 0 it will be deleted automatically.<br />
At the bottom of the Order page you can see the price of all items in your cart.<br />
Also at the bottom of Order page you can repeat any of your previous orders.<br />
If you click at any of your previous orders in "order history" you will put all the items from that order into your cart. 
That allows you quickly repeat any of your previous orders.<br />
By clicking the "order now" button (if there is any item in your cart) you will go to the Confirm page.<br />

### Confirm page
The confirm page has order form (some fields are required), information about your order (price, delivery cost)
and confirm button (it's disabled if the required fields are empty).<br />
After confirmation you will see success banner with your order number, the cart will be automatically emptied.
The order will be saved in your order history.<br />
Order history is saved to localStorage. 
