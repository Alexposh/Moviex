import axios from "axios";
// import { ChangeEvent } from "react";
import { useQuery } from "react-query";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { CastMember } from "../Models/CastMember";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { useState } from "react";


export default function ActorsPage (){

    // const actors:number[] = [1,2,3,4,5];
    const pageNumber= useParams<{page:string | undefined}>();
    const movie_id = useParams<{movie:string | undefined}>();
    const pageNr = pageNumber.page !== undefined ? parseInt(pageNumber.page, 10) : 1;
    const movieId = movie_id.movie !== undefined ? parseInt(movie_id.movie, 10) : 1;

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    

    const searchMovie = () => {
        alert(inputValue);    
    };

    const {data, isLoading, isError} = useQuery({
        queryKey: ['actors', pageNumber],
        queryFn: () => axios.get(`http://localhost:8080/api/moviecast/${movieId}/${pageNr}`).then(res => res.data), 
        staleTime: 60000, // 1 minute
        cacheTime: 300000, // 5 minutes
        refetchOnWindowFocus: false,
    });  

    // console.log(data);
    if (isLoading) {    
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error fetching data</div>;
    }
    return(
        <div style={{display:"flex", border:"1px solid black"}}> 
        <div>
        <ButtonGroup variant="contained" aria-label="Basic button group" sx={{ marginLeft: 3, marginRight: 3, marginTop:3 }}>
            <TextField id="outlined-basic"  variant="outlined" value={inputValue} onChange={handleInputChange}/>              
            <Button   onClick={() => {  searchMovie();  }}>  Click me</Button>
        </ButtonGroup>
      
        {data.map((person:CastMember) => ( 
            <p key={person.person_id}>
                <NavLink to={`/moviecast/${movieId}/${pageNr}/${person.person_id}`}
                    key={person.person_id}     
                    className={({isActive}) => {return isActive ? "active" : ""}} 
                    style={({isActive})=>{return isActive ? {color:"red"} : {color:"green"}}}>
                        {person.person_name}                     
                </NavLink>
            </p>
        ))}
        
            </div>
            <div>Test</div>
            <div><Outlet/></div>      
        </div>
    )
}   