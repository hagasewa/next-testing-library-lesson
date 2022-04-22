import React from 'react'
import { Layout } from '../components/Layout'
import { GetStaticProps } from 'next'
import { getAllTaskData } from '../lib/fetch'
import axios from 'axios'
import useSWR from 'swr'
import { TASK } from '../types/Types'
interface STATICPROPS {
  staticTasks: TASK[]
}

const axiosFetch = async () => {
  const result = await axios.get<TASK[]>(
    'https://jsonplaceholder.typicode.com/todos/?_limit=10'
  )
  return result.data
}
const TaskPage: React.FC<STATICPROPS> = ({ staticTasks }) => {
  const { data: tasks, error } = useSWR('todosFetch', axiosFetch, {
    fallbackData: staticTasks,
    revalidateOnMount: true
  })
  if (error) return <span>Eror!</span>
  return (
    <Layout title="ToDos">
      <p className="text-4xl mb-10">todos page</p>
      <ul>
        {tasks &&
          tasks.map((task) => {
            return (
              <li key={task.id}>{task.id}{' : '}<span>{task.title}</span></li>
            )
          })}
      </ul>
    </Layout>
  )
}
export default TaskPage

export const getStaticProps: GetStaticProps = async () => {
  const staticTasks = await getAllTaskData()
  return {
    props: { staticTasks }
  }
}


