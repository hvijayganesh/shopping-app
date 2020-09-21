# Shopping Portal

## Design and Assumptions

- Only React-Redux front-end is written and as mentioned in the question, assumed we have a backend web-services
- Data to be returned by webservice are mocked and maintained in client-side
- For OutOfStock scenario, createFakeOrder function will randomly throw error during checkout. 50-50 probability for success-failure scenarios
- Used dropdown for quantity increase and decrease in productList and cart
- By default, past orders page will show seeded data. Once the user places new order it will get added up to past orders
- No user info or session is tracked to keep track of user-specifc past-orders or retaining the cart. Once browser is closed, all actions will be cleared and restart from beginning.

## Run Locally

### 1. Clone repo

```
$ git clone https://github.com/hvijayganesh/shopping-app
$ cd shopping-app
$ cd react-client
```

### 3. Run Frontend

```
$ npm install
$ npm start
```