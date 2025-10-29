import {Outlet,Link} from "react-router-dom"
import {ToastContainer} from "react-toastify"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

const Layout = () => {
    return (
        <>
        <Navbar/>
        <ToastContainer
position="top-right"
autoClose={5000}
limit={10}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored" 
/>
<Outlet/>
<Footer/>
        </>  
    )
}
export default Layout