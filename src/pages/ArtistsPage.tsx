import { NavLink, Outlet } from "react-router-dom";

export default function ArtistsPage (){

    const artists:number[] = [1,2,3,4,5];

    return(
        <div style={{display:"flex", border:"1px solid black", justifyContent:"center"}}>
        <div style ={{     }} >
        {artists.map((artist) => ( 
            <p key={artist}><NavLink to={`/artists/${artist}`}
                    key={artist}     
                    className={({isActive}) => {return isActive ? "active" : ""}} 
                    style={({isActive})=>{return isActive ? {color:"red"} : {color:"green"}}}>
                        Artist number - {artist}
                </NavLink>
            </p>))}
            </div>
            <div><Outlet/></div>      
        </div>
    )
}   