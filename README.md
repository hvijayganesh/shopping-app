# Shopping Portal

## Requirement

- Shopping catalogue page that provides list of all products available
- Provide ability to add products to cart
  - User could add multiple quantities of a product to cart.
  - The cart has to be managed on client side until user checks out.
- Shopping cart and checkout
  - On shopping cart page user could see all products that are added to cart along with total price.
  - Cart page provides a button to checkout the whole cart. Assume there is Web service that would take care of placing order and excepting payment
  - Order could be successfully placed and user sees order confirmation page.
  - Error scenario - Web service could return error that some products are not available any more. Show error message at the top of cart page in red color.
- Provide a screen to see their past orders
  - Assume there is a Web service could provide list of past orders
  - Provide ability to sort orders based on Order Date and Amount, sorting has to be done locally at client end.

## Design and Assumptions

- Only React-Redux front-end is written, assumed we have a backend web-services
- Data to be returned by webservice are mocked and maintained in client-side
- For OutOfStock scenario, createFakeOrder function will randomly throw error during checkout. 50-50 probability for success-failure scenarios
- Used dropdown for quantity increase and decrease in productList and cart
- By default, past orders page will show seeded data. Once the user places new order it will get added up to past orders
- No user info or session is tracked to keep track of user-specifc past-orders or retaining the cart. Once browser is closed, all actions will be cleared and restart from beginning.

## Run Locally

### Supported node version
```
node 12 and above
```

### 1. Clone repo

```
$ git clone https://github.com/hvijayganesh/shopping-app
$ cd shopping-app
$ cd react-client
```

### 2. Run Frontend

```
$ npm install
$ npm start
```

### Run tests

```
$ npm test
```