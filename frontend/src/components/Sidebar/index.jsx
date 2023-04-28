import React from 'react'
import { SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElement'
import { Drawer } from "antd";

const Sidebar = ({ openMenu, setOpenMenu }) => {

  return (
    <Drawer open={openMenu}
            closable={true}
            placement="left"
            onClose={() => { setOpenMenu(false)}} 
            style={{ background: '#f2f4f5'}}
    >
            <SidebarMenu>
                <SidebarLink to="nosotros"  
                             smooth 
                            duration={500}
                            spy
                            exact='true'
                            offset={-80}> Nosotros </SidebarLink>
                <SidebarLink to="canchas" smooth 
                            duration={500}
                            spy
                            exact='true'
                            offset={-80}> Canchas </SidebarLink>
                <SidebarLink to="/contact-us"> Contact Us </SidebarLink>
                <SidebarLink to="/profile"> Profile </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/singin"> Iniciar Sesión </SidebarRoute>    
            </SideBtnWrap>   
    </Drawer>
  )
}

export default Sidebar
