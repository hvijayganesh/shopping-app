import React from 'react'
import { Cart } from '../../components/cart/Cart'
import {storeProducts} from '../../test-data/data'
import { render, fireEvent, screen } from '../test-utils'

it('Renders the connected app with initialState', () => {

  render(<Cart />, { initialState: { 
    cart : {
      items: {1: storeProducts[0]},
      total: 0,
      error: null
    }
  }})

  expect(screen.getByText(/Google Pixel/i)).toBeInTheDocument()
  expect(1).toEqual(1)
})