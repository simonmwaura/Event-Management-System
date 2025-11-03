import {FiMail,FiPhone,FiUser,FiLock, FiChevronDown, FiBriefcase, FiEye, FiEyeOff,} from "react-icons/fi"
import { useState } from "react"
import { toast } from "react-toastify"
import {Link} from "react-router-dom"
const SignUp = () => {
    //variables
    const[FullName,SetFullName]=useState("")
    const[EmailAddress,SetEmailAddress]=useState("")
    const[PhoneNumber,SetPhoneNumber]=useState("")
    const[Password,SetPassword]=useState("")
    const[ConfirmPassword,SetConfirmPassword]=useState("")
    const[AccountType,SetAccountType]=useState("")

    //error variables
    const[PhoneNumberError,SetPhoneNumberError]=useState("")
    const[PasswordError,SetPasswordError]=useState("")
    const[ConfirmPasswordError,SetConfrimPasswordError]=useState("")
    const[EmailAddressError,SetEmailAddressError]=useState("")
    const[GeneralError,SetGeneralError]=useState("")

    //other variables
    const[ShowPassword,SetShowPassword]=useState(false)
    const[ShowConfirmPassword,SetShowConfirmPassword]=useState(false)
    const[isHovered, SetIsHovered] = useState(false)

    //Functions that handle variables
    const handleFullName =(event)=>{SetFullName(event.target.value)}
    const handleEmailAddress =(event)=>{SetEmailAddress(event.target.value)}
    const handlePhoneNumber =(event)=>{SetPhoneNumber(event.target.value)}
    const handlePassword =(event)=>{SetPassword(event.target.value)}
    const handleConfirmPassword =(event)=>{SetConfirmPassword(event.target.value)}
    const handleAccountTypeOrganizer =()=>{SetAccountType("EVENT_ORGANIZER")}
    const handleAccountTypeAttendee =() => {SetAccountType("EVENT_ATTENDEE")}

    //Functions that handle other variables
    const PasswordVisibility = ()=>{SetShowPassword(!ShowPassword)}
    const ConfirmPasswordVisibility = ()=>{SetShowConfirmPassword(!ShowConfirmPassword)}

    //Function that handles the form
    const handleSubmit =(event)=>{
        event.preventDefault()
        toast.success("=== FORM SUBMISSION STARTED ===")
        toast.success("Full Name:", FullName)
        toast.success("Email:", EmailAddress)
        toast.success("Phone:", PhoneNumber)
        toast.success("Password:", Password)
        toast.success("Confirm Password:", ConfirmPassword)
        toast.success("Account Type:", AccountType)
        
        SetPasswordError("")
        SetConfrimPasswordError("")
        SetPhoneNumberError("")
        SetEmailAddressError("")
        SetGeneralError("")
        
        let isValid = true 
        
        if (Password.length < 8) {
            SetPasswordError("Password must be at least 8 characters long")
           toast.error("Password validation failed: Too short")
            isValid = false}   
        else {toast.success("Password length is valid")}

        if (Password !== ConfirmPassword) {
            SetConfrimPasswordError("Passwords do not match")
           toast.error("Password confirmation failed: Passwords don't match")
            isValid = false} 
        else {toast.success("Password confirmation valid")}

        if (!EmailAddress.includes("@")) {
            SetEmailAddressError("Please enter a valid email address")
           toast.error("Email validation failed: Missing @")
            isValid = false} 
        else {toast.success("Email format is valid")}

        if (PhoneNumber.length < 10) {
            SetPhoneNumberError("Please enter a valid phone number")
           toast.error("Phone validation failed: Too short")
            isValid = false}
        else {toast.success("Phone number is valid")}

        if (FullName.trim().length < 2) {
           toast.error("Full name validation failed: Too short")
            isValid = false} 
        else {toast.success("Full name is valid")}

        if (!AccountType) {
           toast.error("Account type validation failed: Not selected")
            isValid = false} 
        else {toast.success("Account type is selected")}

        if (isValid) {
           toast.success("FORM IS VALID - Submitting data...")
            
            SetFullName("")
            SetEmailAddress("")
            SetPhoneNumber("")
            SetPassword("")
            SetConfirmPassword("")
            SetAccountType("")
            
           toast.success("Form fields cleared successfully")
           toast.success("=== FORM SUBMISSION COMPLETED ===")
        }
        else {
           toast.error(" FORM HAS ERRORS - Please fix before submitting")
           toast.error("=== FORM SUBMISSION STOPPED ===")}
}

    return (
    <div className="min-h-screen bg-linear-to-br from-blue-200 to-blue-700 flex items-center justify-center p-4">
        <section className="mt-19 mb-19 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-blue-700 dark:text-white">
                    <img className="w-8 h-8 mr-2 " src=" Logo.png" alt="logo" />
                     <div>
                        <span className="text-blue-700">Event</span>
                        <span className="text-blue-400">ium</span>
                    </div>
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-blue-800 dark:border-blue-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-700 md:text-2xl text-center dark:text-white">Create an account</h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                 <div>
                                    <label htmlFor="full-name" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Your full name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <FiUser className="w-5 h-5 text-blue-400" /> </div>
                                        <input 
                                        type="text" 
                                        name="full-name" 
                                        id="full-name"
                                        value={FullName}
                                        onChange={handleFullName}
                                        className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your full name" required/>
                                    </div>
                                    
                                </div>

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
                                        className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required/>
                                    </div>
                                    
                                </div>

                                <div>
                                    <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Your Phone Number</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <FiPhone className="w-5 h-5 text-blue-400" /> </div>
                                        <input 
                                         type="tel" 
                                         name="phone-number"
                                         id="phone-number"
                                         value={PhoneNumber}
                                         onChange={handlePhoneNumber}
                                         className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your phone number" required/>
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
                                            placeholder="Enter your password" className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 pr-10 p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                            <button
                                            type="button"
                                            onClick={PasswordVisibility}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-400 hover:text-blue-600"
                                            >
                                                {ShowPassword ? <FiEyeOff className="w-5 h-5"/> : <FiEye className="w-5 h-5"/>}
                                            </button>
                                        </div>
                                    </div>

                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Confirm password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <FiLock className="w-5 h-5 text-blue-400" /> </div>

                                        <input 
                                        type={ShowConfirmPassword ? "text" : "password"} name="confirm-password" id="confirm-password"
                                        value={ConfirmPassword}
                                        onChange={handleConfirmPassword}
                                         placeholder="Confirm your password" className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-2.5 pr-10 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                         <button
                                            type="button"
                                            onClick={ConfirmPasswordVisibility}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-400 hover:text-blue-600"
                                            >
                                                {ShowPassword ? <FiEyeOff className="w-5 h-5"/> : <FiEye className="w-5 h-5"/>}
                                            </button>
                                    </div>
                                   
                                </div>

                               <div className="w-full">
                                    <label className="block mb-3 text-sm font-medium text-blue-700 dark:text-white"> Select your Account Type </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button type="button" onClick={handleAccountTypeOrganizer} className={`flex items-center justify-center p-3  border rounded-lg text-sm font-medium transition-colors ${ AccountType === "EVENT_ORGANIZER" ? "bg-blue-600 text-white border-blue-600": "bg-white text-blue-700 border-blue-300 hover:bg-blue-50" }`} >
                                            <FiBriefcase className="w-5 h-5 mr-2" /> Organizer 
                                        </button>
                                        <button onClick={handleAccountTypeAttendee} className={`flex items-center justify-center p-3 border rounded-lg text-sm font-medium transition-colors ${AccountType === "EVENT_ATTENDEE" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"}`}>
                                            <FiUser className="w-5 h-5 mr-2" /> Attendee
                                        </button>
                                   </div>
                                </div>

                                <button type="submit" className="w-full border  py-3 px-4 text-blue-700 font-bold rounded-lg shadow-xl transition-all duration-300 hover:bg-blue-700  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                                <p className="text-sm text-center font-light text-blue-500 dark:text-blue-400">Already have an account? <Link to="/login" className="text-sm text-blue-500 hover:underline hover:text-blue-800 font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Login here</Link></p>
                                 <p className="text-sm text-center">
                                
                                </p>
                            </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
export default SignUp
