import { useState } from "react"
import {Link} from "react-router-dom"
import {FiUsers,FiUserCheck,FiDollarSign,FiCalendar} from "react-icons/fi";

const AddEventTicket = () =>{
    //variables
    const [Total_Tickets,SetTotal_Tickets] = useState("")
    const [Max_Tickets_Per_User,SetMax_Tickets_Per_User] = useState("")
    const [Price,SetPrice] = useState("")
    const [Registration_Deadline,SetRegistration_Deadline] = useState("")
    
    // function to handle variables
    const Handle_Total_Tickets = (event) => {SetTotal_Tickets(event.target.value)}
    const Handle_Max_Tickets_Per_User = (event) => {SetMax_Tickets_Per_User(event.target.value)}
    const Handle_Price = (event) => {SetPrice(event.target.value)}
    const Handle_Registration_Deadline = (event) => {SetRegistration_Deadline(event.target.value)}
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({
            Total_Tickets,
            Max_Tickets_Per_User,
            Price,
            Registration_Deadline
        })
        SetTotal_Tickets("")
        SetMax_Tickets_Per_User("")
        SetPrice("")
        SetRegistration_Deadline("")
    }
    return(
       <div className="pt-23 min-h-screen bg-linear-to-br from-blue-200 to-blue-700 flex items-center justify-center p-4 py-8">
               <section className="bg-white dark:bg-blue-900 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden">
                   <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 p-6 sm:p-8 md:p-12">
                       <div className="text-center mb-8">
                           <h2 className="text-2xl underline sm:text-3xl font-bold text-blue-700 dark:text-white mb-2">Configure Ticket Settings</h2>
                           <p className="text-blue-600 dark:text-blue-300 text-sm sm:text-base">Set up your event ticketing details</p>
                       </div>
       
                       <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                           <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                              <div className="sm:col-span-2">
                                   <label htmlFor="total-tickets" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Total Available Tickets</label>
                                   <div className="relative">
                                       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                           <FiUsers className="w-5 h-5 text-blue-400" />
                                       </div>
                                       <input value={Total_Tickets} onChange={Handle_Total_Tickets} type="number" name="total-tickets" id="total-tickets" 
                                       className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                       placeholder="Add total event tickets here" required min="1"/>
                                   </div>
                               </div>                     
                               </div>     
                               <div className="w-full">
                                   <label htmlFor="venue" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Maximum tickets Per Person</label>
                                   <div className="relative">
                                       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                           <FiUserCheck className="w-5 h-5 text-blue-400"/>
                                       </div>
                                       <input type="number" value={Max_Tickets_Per_User} onChange={Handle_Max_Tickets_Per_User} name="Max-Tickets-Per-User" id="Max-Tickets-Per-User" className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 pl-10 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Maximum Tickets Per User" required min="1"/>  
                                   </div>                              
                               </div>
                                 <div className="w-full">
                                   <label htmlFor="price" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Ticket Price (ksh)</label>
                                   <div className="relative">
                                       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                           <FiDollarSign className="w-5 h-5 text-blue-400"/>
                                       </div>
                                       <input type="number" value={Price} onChange={Handle_Price} name="price" id="price" className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 pl-10 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.00" required/>  
                                   </div>                              
                               </div>

                                <div className="w-full">
                                   <label htmlFor="registration-deadline" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Registration Deadline</label>
                                   <div className="relative">
                                       
                                       <input type="datetime-local" value={Registration_Deadline} onChange={Handle_Registration_Deadline} name="registration-deadline" id="registration-deadline" className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Tickets registration-deadline here" required/>  
                                   </div>                              
                               </div>

                                <div className="flex gap-4">
                                    <Link to="/add-event" className="w-1/2 border border-blue-700 py-3 px-4 text-blue-700 font-bold rounded-lg shadow-xl transition-all duration-300 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm text-center dark:border-blue-600 dark:text-white dark:hover:bg-blue-700">
                                     Cancel
                                    </Link>

                                    <button type="submit" className="w-1/2 bg-blue-600 py-3 px-4 text-white font-bold rounded-lg shadow-xl transition-all duration-300 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                      Save Ticket Settings
                                    </button>
                                </div>
                       </form>
                   </div>
               </section>
           </div>
    )
}
export default AddEventTicket