import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`{
  width: 100%;
  height: 3em;
  background-color: #383333;
  color: #ce5d6e;
  position: fixed;
  bottom: 0;
  font-size: 100%;
  font-weight: bold;
}`;

const Title = styled.div`{ 
   margin: 1em 0 1em 2em;}`;

const AppFooter = () => (
  <Footer>
    <Title>Netflixrolette</Title>
  </Footer>
);

export default AppFooter;
