import SignUp from "./pages/General/SignUp"
import Login from "./pages/General/Login"
import { BrowserRouter, Routes, Route,} from'react-router-dom';
import Layout from "./Layout"
import AddEvent from "./pages/Organizer/AddEvent"




const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path ="/login" element={<Login/>} />
      <Route path = "/register" element = {<SignUp/>}/>
      <Route path ="/addevent" element ={ <AddEvent/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>

   
  )
}
export default App
