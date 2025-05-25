import { Link } from "react-router-dom";
import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox"
import { set } from "mongoose";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const {loading, signup} =useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    }
    
     const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className=' p-6 w-full bg-brown-600 rounded-lg bg-clip-padding backdrop-filter shadow-lg backdrop-blur-3xl 
            bg-opacity-80 border border-green-700 '>
                <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
                    <span className="text-blue-400"> DoChat</span>
                </h1>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text"
                            placeholder="Enter Full Name"
                            className="w-full input input-success h-10" 
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                            />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text"
                            placeholder="Enter username"
                            className="w-full input input-success h-10"
                             value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                             />
                    </div>
                    <div>
                        <label className="label p-2 ">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password"
                            placeholder="Enter password"
                            className="w-full input input-success h-10"
                             value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                             />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password"
                            placeholder="Confrim password"
                            className="w-full input input-success h-10" 
                             value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                            />
                    </div>

                        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                         <Link to={"/login"} className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">
                      Have an account ?
                    </Link>

                  
                    <div>
                        <button className="btn btn-block bg-green-500 border-none btn-2xl mt-2"
                        disabled={loading}
                        >{loading ? <span className="loading loading-spinner"></span> :"sign up"}</button>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp;


// import GenderCheckbox from "./GenderCheckbox"

// const SignUp = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className=' p-6 w-full bg-brown-600 rounded-lg bg-clip-padding backdrop-filter shadow-lg backdrop-blur-3xl 
//             bg-opacity-80 border border-green-700 '>
//                 <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
//                     <span className="text-blue-400"> ChatApp</span>
//                 </h1>
//                 <form >
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Full Name</span>
//                         </label>
//                         <input type="text"
//                             placeholder="Enter Full Name"
//                             className="w-full input input-success h-10" />
//                     </div>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Username</span>
//                         </label>
//                         <input type="text"
//                             placeholder="Enter username"
//                             className="w-full input input-success h-10" />
//                     </div>
//                     <div>
//                         <label className="label p-2 ">
//                             <span className="text-base label-text">Passord</span>
//                         </label>
//                         <input type="password"
//                             placeholder="Enter password"
//                             className="w-full input input-success h-10" />
//                     </div>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Confirm Passord</span>
//                         </label>
//                         <input type="password"
//                             placeholder="Confrim password"
//                             className="w-full input input-success h-10" />
//                     </div>

//                         <GenderCheckbox />

//                          <a href="#" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">
//                       Have an account ?
//                     </a>

                  
//                     <div>
//                         <button className="btn btn-block bg-green-500 border-none btn-2xl mt-2">Sign Up</button>

//                     </div>

//                 </form>
//             </div>
//         </div>
//     )
// }

// export default SignUp