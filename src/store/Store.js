import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';


const Store = () => {
    var display =(
        <MenuIcon fontSize='large'/>
      );
    
      var menuIcon;
    
    const menIcon = () => {
      var screenWidth = window.screen.width;
      if (screenWidth <= 926){
        menuIcon = display;
      }
      else{
        menuIcon = '';
      }
    }
}

export default Store;