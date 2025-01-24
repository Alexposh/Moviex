import { Link } from "react-router-dom";
import BackButton from "../Components/Container/elements/BackButton";

export default function NotFoundPage()  {   
    const buttonMessage = "Scream STRANGER DANGER!!!"; 
    return (
        <>
        <div>
            <h1>404 NotFound - are you lost? Where are your parents? I have a bunny in my windowless van, do you want to pet it?</h1>
            {/* <Link to="/"> Scream STRANGER DANGER!!! </Link> */}
          
            <Link to="/"> <BackButton message={buttonMessage}/> </Link>
                
        </div>
            
        </>
        

    )
}