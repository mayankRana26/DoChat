const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className=' p-6 w-full bg-brown-600 rounded-lg bg-clip-padding backdrop-filter shadow-lg backdrop-blur-3xl 
            bg-opacity-80 border border-green-700 '>
                <h1 className="text-3xl font-semibold text-center text-gray-300">Login
                    <span className="text-blue-400"> ChatApp</span>
                </h1>
                <form action="">
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text"
                            placeholder="Enter username"
                            className="w-full input input-success h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Passord</span>
                        </label>
                        <input type="password"
                            placeholder="Enter password"
                            className="w-full input input-success h-10" />
                    </div>
                    <a href="#" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">
                        {"Don't"} have an account?
                    </a>
                    <div>
                        <button className="btn btn-block btn-2xl mt-2 bg-green-500 border-none">Login</button>

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