"use client";
import styled from 'styled-components'

interface MenuProps {
    size?: string,
  }

export const MenuBar = styled.label<MenuProps>`
  position: relative;
  width: ${(props) => (props.size ? props.size : '50px')};
  height: ${(props) => (props.size ? props.size : '50px')};
  z-index: 3;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 130%;
    height: 5px;
    border-radius: 5px;
    background-color: #fff;
    transform-origin: 2px 50%;
    transition: all 0.5s;
  }
  &::before {
    /* transform: rotate(45deg); */
  }
  &::after {
    bottom: 0;
    /* transform: rotate(-45deg); */
  }
`