import { TextField } from "@mui/material"
import { useState } from "react"
import { Button } from "@mui/material"




export const SignUp = () => {
    const [error, setError] = useState("")


    return (
        <>
            <div className="h-screen w-screen bg-gray-950 flex flex-col">
                <span className="text-white font-bold text-4xl ml-4 mt-4">.dotChat</span>
                <div className="h-screen w-screen bg-gray-950 flex flex-col justify-center items-center">
                    <span className="text-white">{error}</span>
                    <div className="h-[85%] w-[90%] md:h-[80%] md:w-[25%] border border-gray-800 rounded  bg-opacity-5 flex flex-col pl-4 pr-4 gap-3 justify-center">

                        <span className="w-full text-center font-bold text-3xl text-white">Signup</span>
                        <TextField  id="outlined-basic" color="success" InputLabelProps={{ style: { color: 'gray' } }} inputProps={{ style: { color: 'white', borderColor: "white" } }} label="Name" variant="outlined" />
                        <TextField id="outlined-basic" color="success" InputLabelProps={{ style: { color: 'gray' } }} inputProps={{ style: { color: 'white' } }} label="Mobile" variant="outlined" />
                        <TextField id="outlined-basic" color="success" InputLabelProps={{ style: { color: 'gray' } }} inputProps={{ style: { color: 'white' } }} label="Email" variant="outlined" />
                        <TextField id="outlined-basic" color="success" type="password" InputLabelProps={{ style: { color: 'gray' } }} inputProps={{ style: { color: 'white' } }} label="Password" variant="outlined" />
                        <TextField id="outlined-basic" color="success" type="password" InputLabelProps={{ style: { color: 'gray' } }} inputProps={{ style: { color: 'white' } }} label="Confrim password" variant="outlined" />
                        <Button variant="outlined" color="success" className="bg-white" >Signup</Button>
                    </div>
                </div>
            </div>
        </>
    )
}