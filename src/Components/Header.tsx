
import { Stack } from "@mui/material";
import Logger from "./Header/Logger";

export default function Header(){
    return (
        <>
 
       
        <Stack spacing={2} direction="row">
          <Logger />
        </Stack>
        
        </>
    )
}
