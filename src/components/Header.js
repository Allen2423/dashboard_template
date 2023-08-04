import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

// profile picture
import Allen from '../assets/Allen.webp';
import AuthContext from '../store/Action';


const Header = ({toggle}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const navigate= useNavigate();
  const { profile } = useContext(AuthContext);
  // const profile = sessionStorage.getItem('profile');
  // console.log(profile.username);
  const logout=()=>{
    // setIsLogin(false);
   
   navigate('/')
   sessionStorage.setItem('isLogin', false);
   sessionStorage.clear();
   window.location.reload();
   }

  return (
    <div className='navbar px-3' >
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <MenuIcon fontSize='large'  onClick={()=>toggle()} />
          <Typography sx={{ paddingLeft: 3, flexGrow: 1 }} />{profile.status=='patient' ? (profile.fname+" "+profile.lname): profile.username}
          <div className="user d-flex notifications-popup ">
            <Tooltip title="Account settings">
              <IconButton sx={{ float: 'right' }}
                onClick={handleClick}
                size="large"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 33, height: 33 }} alt="Allen Mosha" src={Allen} />
              </IconButton>
            </Tooltip>
          </div>
        
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 1,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 1,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
          <Link onClick={()=>logout()}  >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
            </Link>
          </MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  
  )
}

export default Header
