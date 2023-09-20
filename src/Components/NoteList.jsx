import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {LightbulbOutlined as Bulb,ArchiveOutlined as Archive,DeleteOutlineOutlined as Trash,InfoOutlined as Info} from '@mui/icons-material';
import { Link } from 'react-router-dom';



const NoteList = ({open})=>{
    
    const navList = [
        {id:1,name:'Notes',icon:<Bulb/>,route:'/'},
        {id:2,name:'Archive',icon:<Archive/>,route:'/archive'},
        {id:3,name:'Trash',icon:<Trash title='delete'/>,route:'/trash'},
        {id:4,name:'Info',icon:<Info/>,route:'/about'},
    
    ]
    return(
        <List>
            {
                navList.map((list) => (
                    <ListItem key={list.id}style={{paddingLeft:'3px',}}>
                      <Link to={list.route} style={{textDecoration:'none',color:'inherit',width:'100%'}}>
                        <ListItemButton >
                            <ListItemIcon>
                            {list.icon}
                            </ListItemIcon>
                            <ListItemText primary={list.name}/>
                        </ListItemButton>
                      </Link>  
                    </ListItem>
                ))
            }
        </List>
        
    );
}

export default NoteList;