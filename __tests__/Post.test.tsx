import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import Post from "../components/Post"
import { POST } from "../types/Types"

describe('Post component with given props', () => {
  let dummyPorps: POST
  beforeEach(() => {
    dummyPorps = {
      userId: 1,
      id: 1,
      title: "dummy tittle 1",
      body: "dummy body 1"
    }
  })

  it('should render correctly with given props value',()=>{
    render(<Post {...dummyPorps} />)
    expect(screen.getByText(dummyPorps.id)).toBeInTheDocument()
    expect(screen.getByText(dummyPorps.title)).toBeInTheDocument()
  })
})