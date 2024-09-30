import { ReactNode, useEffect, useState } from 'react'
import { useSidebarStore } from '../../stores/sidebarStore';
import AdminMenu from '../../components/adminComponents/adminMenu/AdminMenu';

interface IContent {
    children : ReactNode;
}

const Content = ({children} : IContent) => {
  const { expanded } = useSidebarStore()
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin')
    setIsAdmin(isAdmin === "true" ? true : false)
  },[])

  return (
    <section className={`rel w-full bg-base-backgrond transition-width duration-700 ease-in-out ${!expanded ? "mr-32" : "mr-[22rem]"}`}>
      {isAdmin ? <AdminMenu /> : null}
      {children}
    </section>
  )
}

export default Content