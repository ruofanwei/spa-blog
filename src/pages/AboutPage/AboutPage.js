import React, {useState, useEffect} from "react";
import styled, { keyframes }  from "styled-components";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {getPosts} from '../../WebAPI'
const Typing = keyframes`
  from { width: 0 }
`
const Caret = keyframes`
  50% { border-color: transparent; }
  100% {border-right: none; width: none;}
`
const Wrapper = styled.div`
  margin-top: 70px;
`
const About = styled.div`
  border: 1px dash ${(props) => props.theme.colors.darkGrey};
  border-radius: 10px;
  padding: 16px;
  background: ${(props) => props.theme.colors.darkWhite};
  margin-bottom: 30px;
  box-shadow: 0 0 4px ${(props) => props.theme.colors.darkGrey};
  width: 70%;
  margin: 0 auto;
  
`
const Text = styled.h1`
  font-size: ${(props) => props.theme.fonts.LG};
  color: ${(props) => props.theme.colors.darkBlue};
  text-decoration: none;
  font-family: 'Neucha';
  letter-spacing: 4px;
  font-weight: bold;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin: 50px 0;
  line-height: 50px;
  overflow: hidden;
  white-space: nowrap;
  width: 4em;
  border-right: .05em solid;
  animation: 
    ${Typing} 10s steps(11) infinite,
     ${Caret} 1s steps(1) infinite;

  &:hover{
    text-decoration: none;
    color: ${(props) => props.theme.colors.brown};
  }
`
const Content = styled.p`
  font-size: ${(props) => props.theme.fonts.LG};
  color: ${(props) => props.theme.colors.darkBlue};
  text-decoration: none;
  font-family: 'Neucha';
  letter-spacing: 4px;
  font-weight: bold;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin: 50px 0;
  line-height: 50px;
  overflow: hidden;
  white-space: nowrap;
  width: 12em;
  border-right: .05em solid;
  animation: 
    ${Typing} 9s steps(11) infinite,
     ${Caret} 1s steps(1) infinite;

  &:hover{
    text-decoration: none;
    color: ${(props) => props.theme.colors.brown};
  }
`


export default function AboutPage(){
  
    return (
      <Wrapper>
       <About>
        <Text>Hello ☺ </Text>
         <Content> Welcome to my blog!</Content>
       </About>
      </Wrapper>
    )
}
