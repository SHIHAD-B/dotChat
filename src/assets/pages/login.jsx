import { TextField } from "@mui/material"
import { useState } from "react"
import { Button } from "@mui/material"
export const Login = () => {
    const [error, setError] = useState("")


    return (
        <>
            <div className="h-screen w-screen bg-gray-950 flex flex-col">
                <span className="text-white font-bold text-4xl ml-4 mt-4">.dotChat</span>
                <div className="h-screen w-screen bg-gray-950 flex flex-col justify-center items-center">
                    <span className="text-white">{error}</span>
                    <div className="h-[60%] w-[90%] md:h-[50%] md:w-[25%] rounded border border-gray-800 bg-opacity-5 flex flex-col pl-4 pr-4 gap-3 justify-center">

                        <span className="w-full text-center font-bold text-3xl text-white">Login</span>
                        <TextField id="outlined-basic" color="success" InputLabelProps={{ style: { color: 'gray' } }} inputProps={{ style: { color: 'white' } }} label="Email" variant="outlined" />
                        <TextField id="outlined-basic" color="success" type="password" InputLabelProps={{ style: { color: 'gray' } }} inputProps={{ style: { color: 'white' } }} label="Password" variant="outlined" />
                        <Button variant="outlined" color="success"  className="bg-white" >Login</Button>
                    </div>
                </div>
            </div>
        </>
    )
}