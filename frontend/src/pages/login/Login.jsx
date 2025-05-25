import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


   const {loading, login}= useLogin()
   const  handleSubmit = async (e) =>{
    e.preventDefault();
    await login({username, password})
   }


    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className=' p-6 w-full bg-brown-600 rounded-lg bg-clip-padding backdrop-filter shadow-lg backdrop-blur-3xl 
            bg-opacity-80 border border-green-700 '>
                <h1 className="text-3xl font-semibold text-center text-gray-300">Login
                    <span className="text-blue-400"> DoChat</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text"
                            placeholder="Enter username"
                            className="w-full input input-success h-10" 
                            value={username}
                             onChange={(e) => setUsername(e.target.value)}
                            />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password"
                            placeholder="Enter password"
                            className="w-full input input-success h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                    <Link to="/signup" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">
                        {"Don't"} have an account?
                    </Link>
                    <div>
                        <button className="btn btn-block btn-2xl mt-2 bg-green-500 border-none"
                            disabled={loading}
                        >
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login



// const Login = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className=' p-6 w-full bg-brown-600 rounded-lg bg-clip-padding backdrop-filter shadow-lg backdrop-blur-3xl 
//             bg-opacity-80 border border-green-700 '>
//                 <h1 className="text-3xl font-semibold text-center text-gray-300">Login
//                     <span className="text-blue-400"> ChatApp</span>
//                 </h1>
//                 <form action="">
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Username</span>
//                         </label>
//                         <input type="text"
//                             placeholder="Enter username"
//                             className="w-full input input-success h-10" />
//                     </div>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Passord</span>
//                         </label>
//                         <input type="password"
//                             placeholder="Enter password"
//                             className="w-full input input-success h-10" />
//                     </div>
//                     <a href="#" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">
//                         {"Don't"} have an account?
//                     </a>
//                     <div>
//                         <button className="btn btn-block btn-2xl mt-2">Login</button>

//                     </div>

//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login