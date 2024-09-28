import { ReactNode } from 'react'
import { useSidebarStore } from '../../stores/sidebarStore';

interface IContent {
    children : ReactNode;
}

const Content = ({children} : IContent) => {
  const { expanded } = useSidebarStore()

  return (
    <section className={`w-full bg-base-backgrond transition-width duration-700 ease-in-out ${!expanded ? "mr-32" : "mr-[22rem]"}`}>{children}</section>
  )
}

export default Content