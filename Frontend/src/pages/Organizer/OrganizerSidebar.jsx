import { Link } from "react-router-dom"
import {FiLogOut,FiUsers,FiCalendar,FiPlus,FiList,FiSettings,FiHome,FiX} from "react-icons/fi"
import { useState } from "react"

const OrganizerSidebar = () => {

    const [HamburgerMenu,SetHamburgerMenu] = useState(false)
    const [EventsDropdown,SetEventsDropdown] = useState(false)
    const handleHamburgerMenu = () => {SetHamburgerMenu(!HamburgerMenu)}
    const HandleEventsDropdown = () => {SetEventsDropdown(!EventsDropdown)}

    return(
    <div>
        <button onClick={handleHamburgerMenu} aria-expanded={HamburgerMenu} type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-blue-500 rounded-lg sm:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"/></svg>
        </button>

        <aside className={`${HamburgerMenu ? 'block' : 'hidden'} sm:block fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-blue-50 dark:bg-blue-800`} id="logo-sidebar"  aria-label="Sidebar">


   <div className="h-full px-3 py-4 overflow-y-auto bg-blue-50 dark:bg-blue-800">
     
       <div className="flex items-center justify-between mb-5 relative">

      
      <Link to="/organizer/dashboard" className="flex items-center ps-2.5 ">
            <img src="./Logo.png" className="h-6 me-3 sm:h-7" alt="Eventium Logo" />
            <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                <span className="text-blue-700">Event</span>
                <span className="text-blue-300">ium</span>
            </div>
      </Link>
     <button
      onClick={handleHamburgerMenu}
      type="button"
      className="p-2 text-blue-500 rounded-lg hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-700"
      aria-label="Close sidebar"
      aria-expanded={HamburgerMenu}
    >
      <FiX className="w-5 h-5" />
    </button>

</div>

      <ul className="space-y-2 font-medium">
         <li>
            <Link to="/organizer/dashboard" className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group">
               <FiHome className="w-5 h-5 text-blue-500 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white" />
               <span className="ms-3">Dashboard</span>
            </Link>
         </li>
 <li>
                            <button 
                                type="button" 
                                onClick={HandleEventsDropdown}
                                className="flex items-center w-full p-2 text-base text-blue-900 transition duration-75 rounded-lg group hover:bg-blue-100 dark:text-white dark:hover:bg-blue-700" 
                                aria-controls="dropdown-events" 
                                data-collapse-toggle="dropdown-events"
                            >
                                <FiCalendar className="shrink-0 w-5 h-5 text-blue-500 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white" />          
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Events</span>
                                <svg 
                                    className="w-3 h-3" 
                                    aria-hidden="true" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 10 6"
                                >
                                    <path 
                                        stroke="currentColor" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <ul id="dropdown-events" className={`py-2 space-y-2 ${EventsDropdown ? 'block' : 'hidden'}`}>
                                <li>
                                    <Link 
                                        to="/organizer/add-event" 
                                        className="flex items-center w-full p-2 text-blue-900 transition duration-75 rounded-lg pl-11 group hover:bg-blue-100 dark:text-white dark:hover:bg-blue-700"
                                        onClick={() => SetHamburgerMenu(false)}
                                    >    
                                     
                                        <FiCalendar className="w-4 h-4 mr-2" />
                                        Add Event
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/organizer/events" 
                                        className="flex items-center w-full p-2 text-blue-900 transition duration-75 rounded-lg pl-11 group hover:bg-blue-100 dark:text-white dark:hover:bg-blue-700"
                                        onClick={() => SetHamburgerMenu(false)}
                                    >
                                        
                                        <FiList className="w-4 h-4 mr-2" />
                                        View Events
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/organizer/ticket-settings" 
                                        className="flex items-center w-full p-2 text-blue-900 transition duration-75 rounded-lg pl-11 group hover:bg-blue-100 dark:text-white dark:hover:bg-blue-700"
                                        onClick={() => SetHamburgerMenu(false)}
                                    >
                                        <FiSettings className="w-4 h-4 mr-2" />
                                        Ticket Settings
                                    </Link>
                                </li>
                            </ul>
                        </li>
                         
                         <li>
                            <Link 
                                to="/organizer/attendees" 
                                className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group"
                                onClick={() => SetHamburgerMenu(false)}
                            >
                                <FiUsers className="shrink-0 w-5 h-5 text-blue-500 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Attendees</span>
                            </Link>
                        </li>

          <li>
                            <button 
                                onClick={() => {
                                    // Add logout logic here
                                    console.log('Logging out...')
                                }}
                                className="flex items-center w-full p-2 text-blue-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group"
                            >
                                <FiLogOut className="shrink-0 w-5 h-5 text-blue-500 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white" />
                                <span className="flex-1 ms-3 whitespace-nowrap text-left">Log Out</span>
                            </button>
                        </li>
       
      </ul>
   </div>
</aside>

</div>

    )
}
export default OrganizerSidebar