import { Stack } from "@mui/material";
import UiButton from "../Container/elements/UiButton";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

export default function Logger (){

    return(
       <>
        {/* <button>Go Pro!</button>
        <button>Log in</button>
        <button>Sign up</button> */}

        
        <Stack spacing={2} direction="row">
             <Logo />
             <Searchbar/>
            {/* <Button variant="contained" color="success" sx={{marginRight: 2}}>Go Pro!</Button>
            <Button variant="contained" color="success">Sign in</Button> */}
            <UiButton content="Go Pro!" />
            <UiButton content="Sign up" />
       </Stack>

       </>
    )
}