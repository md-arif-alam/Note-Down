import {useContext} from "react";
import {DataContext} from '../../Contexts/DataProvider'
import { Card,CardActions, CardContent, Typography} from '@mui/material';
import React from 'react';
import {styled} from '@mui/material/styles';
import { ArchiveOutlined as Archive,DeleteOutlineOutlined as Delete } from '@mui/icons-material';

const CardStyle=styled(Card)`
  width:250px;
  margin:10px;
  box-shadow:none;
  border:1px solid #e0e0e0;
  border-radius:10px;
  

`;


const CurrentNote = ({note})=>{
  const{notes,setNotes,setArchiveNotes,setTrashNotes}=useContext(DataContext);

  const archiveNote=(note)=>{
     const updatedNotes=notes.filter(data=>data.id !== note.id);
     setNotes(updatedNotes);
     setArchiveNotes(prevArr => [note,...prevArr]);
  }
  const deleteNote=(note)=>{
    const updatedNotes=notes.filter(data=>data.id !== note.id);
    setNotes(updatedNotes);
    setTrashNotes(prevArr => [note,...prevArr]);
  }



    return(
      <CardStyle>
        <CardContent>
           <Typography>{note.heading}</Typography>
           <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions>
            <Archive
              fontSize='small'
              style={{marginLeft:"auto"}}
              onClick={()=>archiveNote(note)}
            />
            <Delete
               fontSize='small'
               onClick={()=>deleteNote(note)}
            />
        </CardActions>
      </CardStyle>
    );
}

export default CurrentNote;