import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import MessageIcon from '@mui/icons-material/Message';
import AppsIcon from '@mui/icons-material/Apps';
import { Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Appbar() {
  return (

    <AppBar position="static" sx={{ height: 60, background: "white" }}>
      <Container maxWidth="ms">
        <Grid container >
          <Grid item xs={6}>
            <Toolbar >

              <div className="logo">
                <img src="linkdin.1.jpg" alt="no img" />
              </div>
              <Search sx={{ height: 30, marginBottom: "10px ", background: "lightgray" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Toolbar>

          </Grid>
          <Grid item xs={6}>
            <Toolbar>

              <div className="iconbox" >
                <div className='icon'>
                <IconButton>
                  <HomeIcon sx={{ fontSize: "30px" }} />
                </IconButton>
                </div>
                <div className="icontext">
                <span>Home</span>
                </div>
              </div>
              <div className="iconbox" >
                <div className='icon'>
              <IconButton>
                <WorkIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              </div>
                <div className="icontext">
                <span>Job</span>
                </div>
              </div>
              
              <div className="iconbox" >
                <div className='icon'>
              <IconButton>
                <PeopleIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              </div>
                <div className="icontext">
                <span>Network</span>
                </div>
              </div>
              
              <div className="iconbox" >
                <div className='icon'>
              <IconButton>
                <NotificationsIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              </div>
                <div className="icontext">
                <span>Notifications</span>
                </div>
              </div>
              <div className="iconbox" >
                <div className='icon'>
              <IconButton>
                <AccountCircle sx={{ fontSize: "30px" }} />
              </IconButton>
              </div>
                <div className="icontext">
                <span>Me</span>
                </div>
              </div>
              <div className="iconbox" >
                <div className='icon'>
              <IconButton>
                <MessageIcon sx={{ fontSize: "30px"}} />
              </IconButton>
              </div>
                <div className="icontext">
                <span>Message</span>
                </div>
              </div>

              <IconButton>
                <MoreIcon sx={{ fontSize: "50px" }} />
              </IconButton>

              <div className="iconbox" >
                <div className='icon'>
              <IconButton>
                <AppsIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              </div>
                <div className="icontext">
                <span>Work</span>
                </div>
              </div>
            </Toolbar>

          </Grid>
        </Grid>
      </Container>

    </AppBar>
  )
}
export default Appbar;