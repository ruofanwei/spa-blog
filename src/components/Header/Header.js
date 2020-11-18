import React, {useState, useContext} from "react";
import styled from "styled-components";
import {Link, useLocation, useHistory} from "react-router-dom";
import {AuthContext} from '../../context'
import {setAuthToken} from '../../utils'
const HeaderContainer = styled.nav`
  height: 64px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.brightYellow};
  padding: 0 32px;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.brightYellow};
`
const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
  font-family: 'Neucha';
  letter-spacing: 5px;
  color: ${(props) => props.theme.colors.brightGrey};
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`
const Nav = styled(Link)`
  display: flex;
  font-family: 'Neucha';
  letter-spacing: 3px;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 32px;
  box-sizing: border-box;
  width: 100px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  font-size: ${(props) => props.theme.fonts.LG};
  color: ${(props) => props.theme.colors.darkWhite};
  
 &:hover{
   color: ${(props) => props.theme.colors.white};
   text-decoration: none;
 }
`

export default function Header(){
  const location = useLocation()
  const history = useHistory();
  const {user, setUser} = useContext(AuthContext)
  const handleLogout = () => {
    setAuthToken('')
    setUser(null)
    if(location.pathname !== '/'){
      history.push('/')
    }
  }
  console.log(location.pathname)
    return (
    <HeaderContainer>
      <Wrapper>
        <Logo>Blog</Logo>
        <NavbarList>
         <Nav to="/" $active={location.pathname === '/'}>Home</Nav>
         <Nav to="/about" $active={location.pathname === '/about'}>About</Nav>
         {user && <Nav to="/new-post" $active={location.pathname === '/new-post'}>Post</Nav>}
        </NavbarList>
      </Wrapper>
      <NavbarList>
        {!user && (
        <>
          <Nav to="/login" $active={location.pathname === '/login'}>Login</Nav>
          <Nav to="/register" $active={location.pathname === '/register'}>Register</Nav>
        </>
        )}
        
        {user && <Nav onClick={handleLogout}>Logout</Nav>}
      </NavbarList>
      
    </HeaderContainer>
  )
}