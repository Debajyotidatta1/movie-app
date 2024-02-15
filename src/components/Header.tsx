import React from 'react'
import {AppBar, Toolbar, Typography, Tab, Button} from '@mui/material'
import {NavbarWrapper} from '../styles/Styles.modules'
// import CoverPage from './CoverPage'
import { NavLink } from 'react-router-dom';
// import { link } from 'fs';


const menuItems = [
    {name: "Home", link:"/"},
    {name: "Now Playing", link: "now_playing"},
    {name: "Popular", link: "popular"},
    {name: "TV Shows", link:"tv_shows"},
] 

const Header = () => {
  return (
    <NavbarWrapper>
      <AppBar sx={{padding:"15px", backgroundColor:"#062B3F"}}>
        <Toolbar>
            <Typography className='logo'>Weekend Watch</Typography>

            <div className='navLinks'>
               {menuItems.map((nav, index) =>(
                <NavLink to={nav.link} key={index}>
                <Tab className='links' label={nav.name} />
                </NavLink>
               ))}
            </div>
            <Button className='loginBtn' variant='contained' color='info'>Log in</Button>
            {/* <Button className='loginBtn' variant='contained' color='info'>Join us</Button> */}
        </Toolbar>
      </AppBar>
      
    </NavbarWrapper>
  )
}

export default Header
