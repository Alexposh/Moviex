import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { Box } from '@mui/material';


export default function Socials (){
    return(
        <>
        {/* <span>Socials</span> */}
        <Box sx={{marginTop: "20px"}}>
            <InstagramIcon color="action" fontSize="large" sx={{marginLeft: "10px"}}/>
            <FacebookIcon color="action" fontSize="large" sx={{marginLeft: "10px"}}/>
            <XIcon color="action" fontSize="large" sx={{marginLeft: "10px"}}/>
        </Box>
        
        </>
        
    )
}   