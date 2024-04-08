// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import { Await } from "react-router-dom";

// function App2() {
//     const [ apiResponse, setApiResponse] = useState ('');

//     useEffect(()=>{
//         const callApi = async () =>{
//             const response = await axios.get('http://localhost:7000')
//             setApiResponse(response.data)
//         };
//         callApi();
//     }, []);

//     return(
//         <div className="App">
//             <P> {apiResponse}</P>
//         </div>
//     )
// }

// export default App2;