import reducer from '../../reducers/cartReducer'
import * as types from '../../actions/types'
import {storeProducts} from '../../test-data/data'

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        items: {},
        total: 0,
        error: null
      }
    )
  })

  it('add a new item to cart', () => {
    let expectedState = {"error": null, "items": {"1": {"company": "GOOGLE", "count": 0, "id": 1, "img": "img/product-1.png", "inCart": false, "info": "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.", "itemTotal": 10, "price": 10, "quantity": 1, "title": "Google Pixel - Black", "total": 0}}, "total": 10}

    expect(
      reducer(undefined, {
        type: types.ADD_TO_CART,
        item: storeProducts[0],
        quantity: 1
      })
    ).toEqual(expectedState)

    expect(expectedState.items[1].quantity).toEqual(1)
  })

  it('add multiple quantities to existing item in cart', () => {
    let currentState = {"error": null, "items": {"1": {"company": "GOOGLE", "count": 0, "id": 1, "img": "img/product-1.png", "inCart": false, "info": "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.", "itemTotal": 10, "price": 10, "quantity": 1, "title": "Google Pixel - Black", "total": 0}}, "total": 10}
    let expectedState = {"error": null, "items": {"1": {"company": "GOOGLE", "count": 0, "id": 1, "img": "img/product-1.png", "inCart": false, "info": "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.", "itemTotal": 20, "price": 10, "quantity": 2, "title": "Google Pixel - Black", "total": 0}}, "total": 20}

    expect(
      reducer(currentState, {
        type: types.ADD_TO_CART,
        item: storeProducts[0],
        quantity: 2
      })
    ).toEqual(expectedState)

    expect(expectedState.items[1].quantity).toEqual(2)
    expect(expectedState.total).toEqual(20)
  })

  it('add multiple items to a fresh cart', () => {
    let currentState = undefined;
    // add item 1
    currentState = reducer(currentState, {
      type: types.ADD_TO_CART,
      item: storeProducts[0],
      quantity: 2
    })

    // add item 2
    let finalState = reducer(currentState, {
      type: types.ADD_TO_CART,
      item: storeProducts[1],
      quantity: 1
    })

    let expectedState = {"items":{"1":{"id":1,"title":"Google Pixel - Black","img":"img/product-1.png","price":10,"company":"GOOGLE","info":"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.","inCart":false,"count":0,"total":0,"quantity":2,"itemTotal":20},"2":{"id":2,"title":"Samsung S7","img":"img/product-2.png","price":16,"company":"SAMSUNG","info":"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.","inCart":false,"count":0,"total":0,"quantity":1,"itemTotal":16}},"total":36,"error":null}
    expect(finalState).toEqual(expectedState)
    expect(finalState.total).toEqual(36)
  })
})