import { ReactNode } from 'react'

interface IContent {
    children : ReactNode;
}

const content = ({children} : IContent) => {
  return (
    <section>{children}</section>
  )
}

export default content