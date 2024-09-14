import { ReactNode } from 'react'
import Content from '../content/Content';
import SideMenu from '../sidemenu/SideMenu'

interface IMainLayout {
    children : ReactNode;
}

const MainLayout = ({children} : IMainLayout) => {
  return (
    <main className='flex w-screen'>
        <SideMenu/>
        <Content>{children}</Content>
    </main>
  )
}

export default MainLayout