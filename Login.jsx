import { useState } from "react"

// const Login=()=>{

//     const [username,setUsername]=useState("");
//     const usernameHandler=(e)=>{
//         setUsername(e.target.value);

//     }
//     const [password,setPassword]=useState("");
//     const passwordHandler=(e)=>{
//         setPassword(e.target.value);

//     }
    
//     const handleSubmit=()=>{
//         console.log("Login clicked...", username,password);

//     }
//     return (
//         <>
//             <div>
//                 <div>Username</div>
//                 <div><input type="text" value={username} onChange={usernameHandler} /></div>
//             </div>

//             <div>
//                 <div>Password</div>
//                 <div><input type="password" value={password} onChange={passwordHandler}/></div>
//             </div>
//             <div>
//                 <button onClick={handleSubmit}>Login</button>
//             </div>
//         </>
//     )


// }

const Login=()=>{

  const [formData,setFormData]=useState({});
  const [error,setError]=useState("");


  const changeHandler=(e)=>{

    //formData={username:"asd",password:"x",username:"newname"};

    setFormData({...formData,[e.target.name]:e.target.value})

    // let obj={name:'Test',age:20};
    // let key="age";
    // obj[key]="test";



  }
    
    const handleSubmit=()=>{
       // console.log("Login clicked...", username,password);
console.log(formData);

fetch("http://localhost:5000/loginReact",{
    headers:{
        "content-type":"application/json"
    },
    method:"POST",
    body:JSON.stringify(formData)
}).then((response)=>{
    return response.json();
}).then((response)=>{
    console.log(response);
    if(response.success==false)
        setError(response.message);
    


})

    }
    return (
        <>
        {error}

            <div>
                <div>Username</div>
                <div><input name="username" type="text" onChange={changeHandler} /></div>
            </div>

            <div>
                <div>Password</div>
                <div><input name="password" type="password" onChange={changeHandler} /></div>
            </div>
            <div>
                <button onClick={handleSubmit}>Login</button>
            </div>
        </>
    )


}

export default Login