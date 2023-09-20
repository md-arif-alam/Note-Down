import React from 'react';
import { useContext } from 'react';
import {Box,Grid} from '@mui/material';
import {styled} from '@mui/material/styles';

import DeleteNotee from './DeleteNote';
import { DataContext } from '../../Contexts/DataProvider';


 

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));



const DeletesNotes = ()=>{

  const {trashNotes} = useContext(DataContext);

    return(
        
          <Box sx={{display:'flex',width:'100%'}}>
            <Box component="main" sx={{p:3,width:'100%'}}>
              <DrawerHeader/>
                  <Grid container style={{marginTop:20}}>
                      {
                        trashNotes.map((note)=>{
                          return <Grid item>
                                <DeleteNotee note={note}/>
                                </Grid>
                        })
                      }
                  </Grid>
            </Box>
          </Box>
      
    );
}

export default DeletesNotes;