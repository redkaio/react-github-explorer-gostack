import React from 'react';
import { ChatHeader } from './styles';
import DropdownButton from '../DropdownButton/index';

const Header: React.FC = () => {

  return (
    <>
      <ChatHeader>
        Nome do cliente
        <DropdownButton />
      </ChatHeader>


    </>
  )
};
export default Header;