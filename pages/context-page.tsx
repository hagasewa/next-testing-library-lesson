import React from 'react'
import { Layout } from '../components/Layout'
import { StateProvider } from '../context/StateProvider'
import ContextA from '../components/ContextA'
import ContextB from '../components/ContextB'

const ContextPage = () => {
  return (
    <Layout title="ContextPage">
      <p className="text-4xl mb-10">
        ContextPage
      </p>
      <StateProvider>
        <ContextA />
        <ContextB />
      </StateProvider>
    </Layout>
  )
}
export default ContextPage