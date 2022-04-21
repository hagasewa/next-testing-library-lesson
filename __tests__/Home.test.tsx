
/**
* @jest-environment jsdom
*/

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages'
import "setimmediate"

it('Should render hello text', () => {
  render(<Home />)
  //screen.debug()
  expect(screen.getByText('welcome to NextJS')).toBeInTheDocument()
})