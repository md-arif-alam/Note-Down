import { LightbulbOutlined as LightBulb } from '@mui/icons-material';
import {Box,Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
const Light = styled(LightBulb)`
    font-size:120px;
    color:#f5f5f5;
`;
const Text = styled(Typography)`
     font-size:18px;
     color:#80868b;
`;
const Container = styled(Box)`
     display:flex;
     flex-direction:column;
     align-items:center;
     margin-top:20vh;

`;
const EmptyNote=()=>{
    return(
        <Container>
          <Light/>
          <Text>Notes you add appear here</Text>
        </Container>
    );
}
export default EmptyNote;