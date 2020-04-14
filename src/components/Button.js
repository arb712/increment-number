import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: white;
font-size: 1.1em;
margin: 1em;
padding: 0.5em 1.5em;
border: 2px solid palevioletred;
border-radius: 3px;
background-color:palevioletred;
`;

export default Button;