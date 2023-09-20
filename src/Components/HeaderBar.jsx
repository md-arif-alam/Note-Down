import * as React from 'react';
import { styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Menu} from '@mui/icons-material';
import logo from './logo.png';



const Header = styled(AppBar)`
  z-index:1250;
  background: #fff;
  height:70px;
  box-shadow: inset 0px -1px 0px 0px #dadce0;

`;

// const Heading = styled(Typography)`
//   color:lightGrey;
//   font-size:24px;
//   margin-left:25px;  
// `;

const HeaderBar = ({open,handleDrawer})=>{
    return(
        <Header  open={open}>
            <Toolbar>
                <IconButton
                    onClick={handleDrawer}
                    // style={{paddingLeft:'3px'}}
                    edge="start" 
                    sx={{ marginRight:"20px"}}
                >
                  <Menu/>
                </IconButton>
                <img src={logo} alt="logo"  style={{width:'150px'}}/>
                <Typography >
                    {/* <Heading>Note-Down</Heading> */}
                </Typography>
            </Toolbar>
      </Header>
    );
}
export default HeaderBar;