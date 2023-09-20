import {useContext} from "react";
import {DataContext} from '../../Contexts/DataProvider'
import { Card,CardActions, CardContent, Typography} from '@mui/material';
import React from 'react';
import {styled} from '@mui/material/styles';
import { UnarchiveOutlined as Unarchive,DeleteOutlineOutlined as Delete } from '@mui/icons-material';

const CardStyle=styled(Card)`
  width:250px;
  margin:10px;
  box-shadow:none;
  border:1px solid #e0e0e0;
  border-radius:10px;
  

`;


const ArchiveNote = ({note})=>{
  const{notes,setNotes,archiveNotes,setArchiveNotes,setTrashNotes}=useContext(DataContext);

  const UnarchiveNote=(note)=>{
     const updatedNotes=archiveNotes.filter(data=>data.id !== note.id);
     setArchiveNotes(updatedNotes);
     setNotes(prevArr => [note,...prevArr]);
  }
  const deleteNote=(note)=>{
    const updatedNotes=archiveNotes.filter(data=>data.id !== note.id);
    setArchiveNotes(updatedNotes);
    setTrashNotes(prevArr => [note,...prevArr]);
  }



    return(
      <CardStyle>
        <CardContent>
           <Typography>{note.heading}</Typography>
           <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions>
            <Unarchive
              titleAccess="Unarchive"
              fontSize='small'
              style={{marginLeft:"auto"}}
              onClick={()=>UnarchiveNote(note)}
            />
            <Delete
               titleAccess="remove"
               fontSize='small'
               onClick={()=>deleteNote(note)}
            />
        </CardActions>
      </CardStyle>
    );
}

export default ArchiveNote;