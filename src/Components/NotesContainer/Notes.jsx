import React from 'react';
import { useContext } from 'react';
import {Box,Grid} from '@mui/material';
import {styled} from '@mui/material/styles';
import Form from '../Form';
import CurrentNote from './CurrentNote';
import { DataContext } from '../../Contexts/DataProvider';
import EmptyNote from './EmptyNotes';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { reorder } from '../../utils/common-utils';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const reorder = (list,startIndex,endIndex)=>{
  const result = Array.from(list);
  const[removed]=result.splice(startIndex,1);
  result.splice(endIndex,0,removed);
  return result; 
}

const Notes = ()=>{

  const {notes,setNotes} = useContext(DataContext);
  const onDragEnd =(result)=>{
        if (!result.destination){
          return;  
        }

        const items = reorder(
          notes, result.source.index,
          result.destination.index);  
            
        setNotes(items);
  }
    return(
      // component="main"
        
          <Box sx={{display:'flex',width:'100%'}}>
            <Box sx={{p:3,width:'100%'}}>
              <DrawerHeader/>
              <Form/>
              {
                notes.length > 0 ?
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId='droppable'>
                      {(provided)=>(
                        <Grid container style={{marginTop:20}} 
                          {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                        {
                              notes.map((note,index)=>(
                                <Draggable key={note.id} draggableId={note.id} index={index}>
                                  {(provided)=>(
                                      <Grid ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                       item
                                      >
                                          <CurrentNote note={note}/>
                                      </Grid>

                                  )}
                                </Draggable> 
                              ))
                        }
                        </Grid>
                       )
                      }  
                    </Droppable>    
                  </DragDropContext>      
                  :
                  
                  <EmptyNote/>
                  
              }
            </Box>
          </Box>
      
    );
}

export default Notes;