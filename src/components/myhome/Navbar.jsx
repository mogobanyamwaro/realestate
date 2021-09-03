import React, { Fragment } from 'react';
import styled, { css } from 'styled-components/macro';

import { MenuData } from '../../data/MenuData';
import { Button } from '../myhome/Button';
import { FaBars } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from '../Alert';
import { logout } from '../../actions/auth';
import ProTypes from 'prop-types';

const Navbar = ({ toggle, auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <NavMenuLinks onClick={logout} href="#!">
      Logout
    </NavMenuLinks>
  );
  const guestLinks = (
    <Fragment>
      <NavMenuLinks to="/login">Login</NavMenuLinks>
      <NavMenuLinks to="/signup">Sign Up</NavMenuLinks>
    </Fragment>
  );
  return (
    <Nav>
      <Logo to="/">Velyvx</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        <NavMenuLinks to="/home">Choose A Home</NavMenuLinks>
        <NavMenuLinks to="/listings">Listings</NavMenuLinks>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </NavMenu>
      <NavBtn>
        <Button to="/contact">Contact Us</Button>
        <Button to="/about">About us</Button>
      </NavBtn>
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

const Nav = styled.nav`
  height: 60px;
  /* background-color: #000; */
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 17px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s;
  &:hover {
    border-bottom: 2px solid red;
  }
`;

const Logo = styled(Link)`
  ${NavLink};
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    width: 40px;
    cursor: pointer;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
