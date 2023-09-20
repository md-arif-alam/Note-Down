import React from 'react'
import NoteDrawer from './NoteDrawer';
import Notes from './NotesContainer/Notes';
import {Box} from '@mui/material';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import ArchiveNote from './archive/ArchiveNote';
import ArchivesNotes from './archive/ArchiveNotes';
// import DeleteNote from './trash/DeleteNote';
import DeleteNotes from './trash/DeleteNotes';
import AboutMe from './about/aboutme';

const Home = ()=>{
    return(
        <Box style={{display:'flex',width:'100%'}}>
          <Router>
              <NoteDrawer/>
              <Routes>
                 <Route path='/' element={ <Notes/>}/>
                 <Route path='/archive' element={ <ArchivesNotes/>}/>
                 <Route path='/trash' element={ <DeleteNotes/>}/>
                 <Route path='/about' element={<AboutMe/>}/>
              </Routes>
          </Router>
        </Box>
    );
}

export default Home;