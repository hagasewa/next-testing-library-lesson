
/**
* @jest-environment jsdom
*/

import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import userEvent from "@testing-library/user-event"
import { getPage } from "next-page-tester"
import { initTestHelpers } from "next-page-tester"
import "setimmediate"

initTestHelpers()

describe('Navigation by link ', () => {
  it('Should route to selected page in navbar', async () => {
    const { page } = await getPage({
      route: '/index',
    })
    render(page)
    
    userEvent.click(screen.getByTestId('blog-nav'))
    expect(await screen.findByText('BlogPage')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('comment-nav'))
    expect(await screen.findByText('CommentPage')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('context-nav'))
    expect(await screen.findByText('ContextPage')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('task-nav'))
    expect(await screen.findByText('ToDos')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('home-nav'))
    expect(await screen.findByText('welcome to NextJS')).toBeInTheDocument()
  })
})