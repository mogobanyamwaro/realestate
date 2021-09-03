import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuData } from '../../data/MenuData';
import { Button } from '../myhome/Button';
import { FaTimes } from 'react-icons/fa';

function DropDown({ toggle, isOpen }) {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropDownMenu>
          {MenuData.map((item, index) => {
            return (
              <DropDownLink to={item.link} key={index}>
                {item.title}
              </DropDownLink>
            );
          })}
        </DropDownMenu>
        <BtnWrap>
          <Button round="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropDownContainer>
  );
}

export default DropDown;

const DropDownContainer = styled.div`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.4s;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;
const DropdownWrapper = styled.div``;

const DropDownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  @media screen and(max-width:480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const DropDownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    color: #000d1a;
  }
`;
