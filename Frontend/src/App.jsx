import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route,} from'react-router-dom';
import Layout from "./Layout"




const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path ="/login" element={<Login/>} />
      <Route path = "register" element = {<SignUp/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}
export default App
