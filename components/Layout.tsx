import React from 'react'
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

interface TITLE {
  title: string
  children:React.ReactNode
}
interface TypePageList {
  testId: string,
  urn: string,
  tabName: string
}

const pageList: TypePageList[] = [{
  testId: "home-nav",
  urn: "/",
  tabName: "Home"
}, {
  testId: "blog-nav",
  urn: "/blog-page",
  tabName: "Blog"
}, {
  testId: "comment-nav",
  urn: "/comment-page",
  tabName: "Comment"
}, {
  testId: "context-nav",
  urn: "/context-page",
  tabName: "Context"
}, {
  testId: "task-nav",
  urn: "/task-page",
  tabName: "Todos"
}
]

export const Layout: React.FC<TITLE> = ({ children, title = "NextJS" }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className='bg-gray-800 w-screen'>
          <div className='flex items-center pl-8 h-14'>
            <div className='flex space-x-4'>
              {
                pageList.map((nav) => {
                  const { testId, urn, tabName } = nav
                  return (
                    <Link href={urn} key={testId}>
                      <a
                        data-testid={testId}
                        className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                        {tabName}
                      </a>
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}
