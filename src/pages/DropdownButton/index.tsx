import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ChatButton } from './styles';

const DropdownButton: React.FC = () => {

  const [dropdownMenu, setDropdownMenu] = React.useState(null);

  const handleClick = (event: any) => {
    setDropdownMenu(event.currentTarget);
  };

  const handleClose = () => {
    setDropdownMenu(null);
  };

  return (
    <>
    <ChatButton onClick={handleClick}>
          <MoreVertIcon />
        </ChatButton>
        <Menu
          id="simple-menu"
          anchorEl={dropdownMenu}
          keepMounted
          open={Boolean(dropdownMenu)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Finalizar atendimento</MenuItem>
          <MenuItem onClick={handleClose}>Dados do usuário</MenuItem>
        </Menu>
        </>
  )
}

export default DropdownButton;