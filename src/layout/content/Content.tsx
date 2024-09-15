import { ReactNode } from 'react'

interface IContent {
    children : ReactNode;
}

const content = ({children} : IContent) => {
  return (
    <section className='w-full bg-base-backgrond'>{children}</section>
  )
}

export default content