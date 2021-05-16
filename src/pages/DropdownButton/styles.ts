import styled from "styled-components";
import { shade } from 'polished';

export const ChatButton = styled.button`
background-color: transparent;
display: flex;
color: #fff;
border: none;
border-radius: 50%;
padding: 5px;
transition: background-color 0.2s;

&:hover {
    background: ${shade(0.1, '#298A53')}
  }



`;
