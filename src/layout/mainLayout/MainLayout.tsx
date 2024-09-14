import { ReactNode } from 'react'
import Content from '../content/content'
import SideMenu from '../sidemenu/SideMenu'

interface IMainLayout {
    children : ReactNode;
}

const MainLayout = ({children} : IMainLayout) => {
  return (
    <main>
        <SideMenu/>
        <Content>{children}</Content>
    </main>
  )
}

export default MainLayout