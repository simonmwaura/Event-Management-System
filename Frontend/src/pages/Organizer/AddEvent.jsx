import { useState } from "react"
import { Link } from "react-router-dom"
import { FiMapPin,FiCamera,FiEdit,FiHome,FiFlag,FiGlobe,FiLink,FiFileText,FiPlus } from "react-icons/fi";

const AddEvent = () =>{
    //variables
    const [Title,SetTitle] = useState("") 
    const [Date_Time,SetDate_Time] = useState("")
    const [End_Date_Time,SetEnd_Date_Time] = useState("")
    const [Location,SetLocation] = useState("") 
    const [Venue,SetVenue] = useState("")
    const [Image,SetImage] = useState("null")
    const [Event_Status,SetEvent_Status] = useState("")
    const [Event_Type,SetEvent_Type] = useState("")
    const [Virtual_Event_Link,SetVirtual_Event_Link] = useState("")
    const [Description,SetDescription] = useState("")
    const [SelectedFileName,SetSelectedFileName] = useState("")

    //handle variables
    const Handle_Title = (event) => {SetTitle(event.target.value)}
    const Handle_Date_Time = (event) => {SetDate_Time(event.target.value)}
    const Handle_End_Date_Time = (event) => {SetEnd_Date_Time(event.target.value)}
    const Handle_Location = (event) => {SetLocation(event.target.value)}
    const Handle_Venue = (event) => {SetVenue(event.target.value)}
    const Handle_Event_Status = (event) => {SetEvent_Status(event.target.value)}
    const Handle_Event_Type = (event) => {SetEvent_Type(event.target.value)}
    const Handle_Virtual_Event_Link = (event) => {SetVirtual_Event_Link(event.target.value)}
    const Handle_Description = (event) => {SetDescription(event.target.value)}

    const Handle_Image = (event) => {
        const file = event.target.files[0];
        if (file) {
            SetImage(file);
            SetSelectedFileName(file.name);
        }}
 
    return (
    <div className="pt-23 min-h-screen bg-linear-to-br from-blue-200 to-blue-700 flex items-center justify-center p-4 py-8">
        <section className="bg-white dark:bg-blue-900 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 p-6 sm:p-8 md:p-12">
                <div className="text-center mb-8">
                    <h2 className="text-2xl underline sm:text-3xl font-bold text-blue-700 dark:text-white mb-2">Create New Event</h2>
                    <p className="text-blue-600 dark:text-blue-300 text-sm sm:text-base">Fill in the details to create your event</p>
                </div>

                <form className="space-y-6 sm:space-y-8">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                       <div className="sm:col-span-2">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Title</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FiEdit className="w-5 h-5 text-blue-400" />
                                </div>
                                <input value={Title} onChange={Handle_Title} type="text" name="title" id="title" 
                                className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Add event title here" required />
                            </div>
                        </div>

                        <div className="w-full">
                            <label htmlFor="date-time" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Select Starting Date</label>
                            <div>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                                </div>
                                <input type="date" name="date-time" id="date-time" value={Date_Time} onChange={Handle_Date_Time} className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" required/>

                            </div>
                            
                        </div>

                        <div className="w-full">
                            <label htmlFor="end-date-time" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Select Ending Date</label>
                            <div>
                                <input type="date" name="end-date-time" id="end-date-time" value={End_Date_Time} onChange={Handle_End_Date_Time} className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" required/>
                            </div>
                            
                        </div>

                        <div className="w-full">
                            <label htmlFor="location" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Location</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                     <FiMapPin className="w-5 h-5 text-blue-400" />
                                </div>
                                <input type="text" value={Location} onChange={Handle_Location} name="location" id="location" className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 pl-10 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add event location here" required/>
                            </div>           
                        </div>

                        <div className="w-full">
                            <label htmlFor="venue" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Venue</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FiHome className="w-5 h-5 text-blue-400"/>
                                </div>
                                <input type="text" value={Venue} onChange={Handle_Venue} name="venue" id="venue" className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 pl-10 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add event venue here" required/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="event-status" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Event Status</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FiFlag className="w-5 h-5 text-blue-400"/>
                                </div>
                                <select id="event-status" value={Event_Status} onChange={Handle_Event_Status}
                                className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Select event status</option>
                                    <option value="Draft">Draft</option>
                                    <option value="Published">Published</option>
                                    <option value="Cancelled">Cancelled</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Sold Out">Sold Out</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="event-type" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Event Type</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FiGlobe className="w-5 h-5 text-blue-400"/>
                                </div> 
                                <select id="event-type" value={Event_Type} onChange={Handle_Event_Type} className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Select event type</option>
                                    <option value="In Person">In Person</option>
                                    <option value="Virtual">Virtual</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="virtual-event-link" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Virtual Event Link</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <FiLink className="w-5 h-5 text-blue-400"/>
                                </div>  
                                <input value={Virtual_Event_Link} onChange={Handle_Virtual_Event_Link} type="text" name="virtual-event-link" id="virtual-event-link" className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 pl-10 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add event virtual event link here"/>
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Image</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FiCamera className="w-5 h-5 text-blue-400"/>
                                </div>
                                <input  onChange={Handle_Image} type="file" name="image" id="image" accept="image/*" className="bg-blue-50 border border-blue-300 text-blue-700 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 pl-10 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add event image here" required/>
                                 {SelectedFileName && (<p className="mt-2 text-sm text-green-600">Selected: {SelectedFileName}</p>
                                 )}
                            </div>             
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">Description</label>
                            <div className="relative">
                                <div className="absolute top-3 left-3 pointer-events-none">
                                     <FiFileText className=" w-5 h-5 text-blue-400"/>
                                </div>
                                 <textarea id="description" value={Description} onChange={Handle_Description} rows="8" className="block p-2.5 pl-10 w-full text-sm text-blue-700 bg-blue-50 rounded-lg border border-blue-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add event description here" required></textarea>
                            </div>
                        </div>
                  
                    </div>
                        <button type="submit" className="w-full border  py-3 px-4 text-blue-700 font-bold rounded-lg shadow-xl transition-all duration-300 hover:bg-blue-700  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Create Event                
                        </button>
                </form>
            </div>
        </section>
    </div>
    )
}
export default AddEvent