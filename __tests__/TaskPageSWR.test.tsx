import { render, screen, cleanup } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import { SWRConfig } from "swr"
import { rest } from "msw"
import { getPage } from 'next-page-tester'
import { setupServer } from "msw/node"
import CommentPage from "../pages/comment-page"
import { TASK } from "../types/Types"
import TaskPage from "../pages/task-page"


const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/todos/', (req, res, ctx) => {
    const query = req.url.searchParams
    const _limit = query.get('_limit')
    if (_limit === '10') {
      return res(
        ctx.status(200),
        ctx.json([
          {
            userId: 1,
            id: 31,
            title: 'Static task A',
            completed: true,
          },
          {
            userId: 2,
            id: 2,
            title: 'Static task B',
            completed: false,
          },
        ])
      )
    }
  })
)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => server.close())

describe('Tasks page with userSWR / Success+Error ', () => {
  let staticProps: TASK[]
  staticProps = [
    {
      userId: 1,
      id: 3,
      title: 'Static task C',
      completed: true,
    },
    {
      userId: 2,
      id: 4,
      title: 'Static task D',
      completed: false,
    },
  ]
  it('Should render CSF data after Pre-rendered data', async () => {
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <TaskPage staticTasks={staticProps} />
      </SWRConfig>
    )
    expect(await screen.findByText('todos page')).toBeInTheDocument()
    expect(screen.getByText('Static task C')).toBeInTheDocument()
    expect(screen.getByText('Static task D')).toBeInTheDocument()
    expect(await screen.findByText('Static task A')).toBeInTheDocument()
    expect(screen.getByText('Static task B')).toBeInTheDocument()
  })
  it("Should render the value fetch by failed", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/todos/?_limit=10",
        (rew, res, ctx) => {
          return res(
            ctx.status(400))
        }
      )
    )
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <TaskPage staticTasks={staticProps} />
      </SWRConfig>
    )
    expect(await screen.findByText("Error!")).toBeInTheDocument()
  })
})