import { Outlet } from "react-router-dom"
import OrganizerSidebar from "./OrganizerSidebar"
import Footer from "../../Components/Footer"
import { ToastContainer } from "react-toastify"

const OrganizerLayout = () => {
    return(
        <>
        <OrganizerSidebar/>
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
export default OrganizerLayout