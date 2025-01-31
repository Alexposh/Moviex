import { TextField } from "@mui/material";

export default function Searchbar() {
    return (
        // <input type="text" placeholder="Search a movie" />
        <TextField id="standard-basic" label="Search" variant="standard" sx={{ marginLeft: 3, marginRight: 3 }} />
    )
}