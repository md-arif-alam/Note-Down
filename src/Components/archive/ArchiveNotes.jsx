import React from 'react';
import { useContext } from 'react';
import {Box,Grid} from '@mui/material';
import {styled} from '@mui/material/styles';
import ArchiveNote from './ArchiveNote';
import { DataContext } from '../../Contexts/DataProvider';


 

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));



const ArchivesNotes = ()=>{

  const {archiveNotes} = useContext(DataContext);

    return(
        
          <Box sx={{display:'flex',width:'100%'}}>
            <Box component="main" sx={{p:3,width:'100%'}}>
              <DrawerHeader/>

                  <Grid container style={{marginTop:20}}>
                      {
                        archiveNotes.map((archive)=>{
                          return <Grid item>
                                    <ArchiveNote note={archive}/>
                                </Grid>
                        })
                      }
                  </Grid>
            </Box>
          </Box>
      
    );
}

export default ArchivesNotes;