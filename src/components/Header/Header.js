import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Navbar variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <CustomLink className='btn' to="/">HOME</CustomLink>
                        <CustomLink className='btn' to="/REVIEWS">REVIEWS</CustomLink>
                        <CustomLink className='btn' to="/DASHBOARD">DASHBOARD</CustomLink>
                        <CustomLink className='btn' to="/BLOGS">BLOGS</CustomLink>
                        <CustomLink className='btn' to="/ABOUT">ABOUT</CustomLink>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;