import {useState} from "react";
import axios from "axios";

const Signup =()=>{
    const [signupState, setSignupState] = useState({});
    const signUpFormData = [{attr:"username", type:"text",id:"username",label:"username"},
                            {attr:"phone_number", type:"text",id:"phoneNumber",label:"Mobile Number"},
                            {attr:"password", type:"password",id:"password",label:"Password"}]
    
    const handleUserAdd =()=>{
        axios({
            url:"http://localhost:3001/user/signup",
            method:"POST",
            headers:{

            },
            data:signupState
        })
    };
    const handleInputChange = (e,id)=>{
        if(id === "phoneNumber"){
            e.target.value = parseInt(e.target.value);
        }
        setSignupState({...signupState,[id]: e.target.value})
    }                        
    return(
        <>
        <div>
            <form>
                {signUpFormData.map((formkey)=>{
                    return(
                        <div>
                            <div>
                                <label for={formkey.id}>{formkey.label}</label>
                            </div>
                            <div>
                                <input type={formkey.type} id={formkey.id} onChange={(e)=>{handleInputChange(e,formkey.id)}}></input>
                            </div>
                        </div>
                    )
                })}
            </form>
            <button type="button" onClick={handleUserAdd}>Submit</button>
        </div>
        </>
    )                        
}

export default Signup;