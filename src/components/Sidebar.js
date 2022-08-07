import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

import logoTeste from "../assets/CebasVetorizado.png";


const Nav = styled.div`
  background: #15171c;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;  height: 80px;
  width: 320px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav style={{justifyContent:"space-between", maxHeight:"100%"}}>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>

            <div style={{fontSize:"25px", padding:"10px"}}>
              <NavIcon to='/home'>
                <img src={logoTeste} alt="logo" style={{maxHeight:"60px"}}/>
              </NavIcon>
            </div>

          <div style={{display:"flex", padding:"10px"}}>
            <NavIcon to='#'>
              <FaIcons.FaRegEdit/>
            </NavIcon>
            <NavIcon to='#'>
              <FaIcons.FaRegShareSquare/>
            </NavIcon>
          </div>


        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
