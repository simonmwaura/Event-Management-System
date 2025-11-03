import {BrowserRouter,Routes,Route} from'react-router-dom'

//General
import Layout from "./Layout"
import SignUp from "./pages/General/SignUp"
import Login from "./pages/General/Login"
import NoPage from "./pages/General/NoPage"
import AboutUs from './pages/General/AboutUs'
import Home from './pages/General/Home'
import Licensing from './pages/General/Licensing'
//Organizer 
import OrganizerDashboard from "./pages/Organizer/OrganizerDashboard";
import OrganizerLayout from "./pages/Organizer/OrganizerLayout"
import AddEvent from "./pages/Organizer/AddEvent"
import AddEventTicket from "./pages/Organizer/AddEventTicket"
//Attendee
import AttendeeDashboard from "./pages/Attendee/AttendeeLayout"
import AttendeeLayout from "./pages/Attendee/AttendeeLayout"
import Event from "./pages/Attendee/Event"
import MyTickets from "./pages/Attendee/MyTickets"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/*General Routes*/}
        <Route path="/" element={<Layout />}>
            <Route path ="/login" element={<Login/>} />
            <Route path = "/register" element = {<SignUp/>}/>
            <Route path="/about-us" element = {<AboutUs/>}/>
            <Route path="/home" element = {<Home/>}/>
            <Route path="/licensing" element={<Licensing />} />
        </Route>

        {/*Organizer Routes*/}
        <Route path="/organizer" element={<OrganizerLayout/>}>
            <Route path="dashboard" element={<OrganizerDashboard/>}/>
            <Route path ="add-event" element ={<AddEvent/>}/>
            <Route path="add-event-ticket" element ={<AddEventTicket/>}/>
        </Route>

        {/*Attendee Routes*/}
        <Route path="/attendee" element={<AttendeeLayout/>}>
            <Route path="dashboard" element={<AttendeeDashboard/>} />
            <Route path="events" element={<Event/>} />
            <Route path="my-tickets" element={<MyTickets />} />
        </Route>

        <Route path="*" element={<NoPage/>}/>

      </Routes>
    </BrowserRouter> 
  )
}
export default App
