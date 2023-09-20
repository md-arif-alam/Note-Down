import React,{useState,useRef,useContext} from 'react';
import { Box,TextField,ClickAwayListener } from '@mui/material';
import {styled} from '@mui/material/styles';
import { DataContext} from '../Contexts/DataProvider';
import {v4 as uuid} from 'uuid'


const Container = styled(Box)`
    display:flex;
    flex-direction:column;
    width: 600px;
    margin: auto;
    box-shadow: 0 1px 2px 0 rgba(60 64 67/ 30%),0 2px 6px 2px rgba(60 64 67/ 15%);
    padding: 10px 15px;
    border-radius: 10px;
    border-color: #e0e0e0;
    min-height:30px;
`;

const noteObj = {
    id:'',
    heading:'',
    text:''
}

const Form =()=>{
    const[showText,setShowText]=useState(false);
    const containerRef=useRef();

    const{setNotes}=useContext(DataContext);
    const[addNote,setAddNote]=useState({...noteObj,id:uuid()});
    
    const onTextAreaClick = ()=>{
        setShowText(true);
        containerRef.current.style.minHeight='70px'
    }
    
    const handleClickAway =()=>{
        setShowText(false);
        containerRef.current.style.minHeight='30px'
        setAddNote({...noteObj,id:uuid()})
        if(addNote.heading || addNote.text){
            setNotes(prevArr => [addNote,...prevArr]);
        }
    }

    const onTextChange=(e)=>{
       console.log(e.target.name, e.target.value);
       let changedNote={...addNote,[e.target.name]:e.target.value}
       setAddNote(changedNote);
    }
    return(
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containerRef}>
                {showText && 
                <TextField
                placeholder='Title'
                variant='standard'
                InputProps={{disableUnderline:true}}
                style={{marginBottom:10}}
                onChange={(e)=>onTextChange(e)}
                name='heading'
                value = {addNote.heading}
                />
                }
                <TextField
                placeholder='Take a note...'
                multiline
                maxRows={Infinity}
                variant='standard'
                InputProps={{disableUnderline:true}}
                onClick={onTextAreaClick}
                onChange={(e)=>onTextChange(e)}
                name='text'
                value = {addNote.text}
                />
                
            </Container>
        </ClickAwayListener>
    );
}

export default Form;