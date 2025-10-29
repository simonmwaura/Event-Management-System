import {FiMail,FiLock, FiEye, FiEyeOff,} from "react-icons/fi"
import { useState } from "react"

const Login = () => {
    //variables
    const[EmailAddress,SetEmailAddress]=useState("")
    const[Password,SetPassword]=useState("")
    const[ShowPassword,SetShowPassword]=useState(false)

    //Functions that handle variables
    const handleEmailAddress =(event)=>{SetEmailAddress(event.target.value)}
    const handlePassword =(event)=>{SetPassword(event.target.value)}

    //Functions that handle other variables
    const PasswordVisibility = ()=>{SetShowPassword(!ShowPassword)}


    //Function that handles the form
    const handleSubmit =(event)=>{
        event.preventDefault()
        console.log("=== FORM SUBMISSION STARTED ===")
    
        console.log("Email:", EmailAddress)
        console.log("Password:", Password)
      
        
        let isValid = true 
        if (isValid) {
            console.log("FORM IS VALID - Submitting data...")
            SetEmailAddress("")
            SetPassword("") 
            console.log("Form fields cleared successfully")
            console.log("=== FORM SUBMISSION COMPLETED ===")
        }
        else {
            console.log(" FORM HAS ERRORS - Please fix before submitting")
            console.log("=== FORM SUBMISSION STOPPED ===")}
}

    return (
    <div className="min-h-screen bg-linear-to-br from-blue-200 to-blue-700 flex items-center justify-center p-4 ">
        <section className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-blue-700 dark:text-white">
                    <img className="w-8 h-8 mr-2 " src=" Logo.png" alt="logo" />Eventium
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-blue-800 dark:border-blue-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-blue-700 md:text-2xl dark:text-white">Login into your account</h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                
                                <div>
                                    <label htmlFor="email-address" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Your email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <FiMail className="w-5 h-5 text-blue-400" /> </div>
                                        <input 
                                        type="email"
                                        name="email-address" 
                                        id="email-address" 
                                        value={EmailAddress}
                                        onChange={handleEmailAddress}
                                        className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kindly enter your email here" required/>
                                    </div>
                                    
                                </div>

                                

                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Your Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <FiLock className="w-5 h-5 text-blue-400" /> </div>
                                            <input 
                                            type={ShowPassword ? "text" : "password"}
                                            name="password" 
                                            id="password" 
                                            value ={Password}
                                            onChange={handlePassword}
                                            placeholder="Kindly enter your password here" className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                            <button
                                            type="button"
                                            onClick={PasswordVisibility}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-400 hover:text-blue-600"
                                            >
                                                {ShowPassword ? <FiEyeOff className="w-5 h-5"/> : <FiEye className="w-5 h-5"/>}
                                            </button>
                                        </div>
                                    </div>


                        
                                <button type="submit" className="w-full border  py-3 px-4 text-blue-700 font-bold rounded-lg shadow-xl transition-all duration-300 hover:bg-blue-700  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                                <p className="text-sm font-light text-blue-500 dark:text-blue-400">Don't have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create an account here</a></p>
                                 <p className="text-sm text-center">
                                <button className="text-blue-600 hover:underline font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    <a href="#" className="text-sm text-blue-500 hover:underline hover:text-blue-800 font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >Forgot Password?</a>
                                </button>
                                </p>
                            </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
export default Login