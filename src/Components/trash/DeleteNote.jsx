import {useContext} from "react";
import {DataContext} from '../../Contexts/DataProvider'
import { Card,CardActions, CardContent, Typography} from '@mui/material';
import React from 'react';
import {styled} from '@mui/material/styles';
import { RestoreFromTrashOutlined as Restore,DeleteForeverOutlined as Delete } from '@mui/icons-material';

const CardStyle=styled(Card)`
  width:250px;
  margin:10px;
  box-shadow:none;
  border:1px solid #e0e0e0;
  border-radius:10px;
  

`;


const DeleteNotee = ({note})=>{
  const{notes,setNotes,trashNotes,setArchiveNotes,setTrashNotes}=useContext(DataContext);

  const restoreNote=(note)=>{
     const updatedNotes=trashNotes.filter(data=>data.id !== note.id);
     setTrashNotes(updatedNotes);
     setNotes(prevArr => [note,...prevArr]);
  }
  const deleteNote=(note)=>{
    const updatedNotes=notes.filter(data=>data.id !== note.id);
    setTrashNotes(updatedNotes);
  }



    return(
      <CardStyle>
        <CardContent>
           <Typography>{note.heading}</Typography>
           <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions>
          <Delete
             titleAccess="Delete"
             fontSize='small'
             onClick={()=>deleteNote(note)}
          />
            <Restore
              titleAccess="Restore"
              fontSize='small'
              style={{marginLeft:"auto"}}
              onClick={()=>restoreNote(note)}
            />
        </CardActions>
      </CardStyle>
    );
}

export default DeleteNotee;