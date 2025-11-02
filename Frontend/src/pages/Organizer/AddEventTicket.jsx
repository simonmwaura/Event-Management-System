import { useState } from "react"
import {Link} from "react-router-dom"

const AddEventTicket = () =>{
    //variables
    const [Total_Tickets,SetTotal_Tickets] = useState("")
    const [Tickets_Sold,SetTickets_Sold] = useState("")
    const [Available_Tickets,SetAvailable_Tickets] = useState("")
    const [Max_Tickets_Per_User,SetMax_Tickets_Per_User] = useState("")
    const [Price,SetPrice] = useState("")
    const [Registration_Deadline,SetRegistration_Deadline] = useState("")
    
    // function to handle variables
    const Handle_Total_Tickets = (event) => {SetTotal_Tickets(event.target.value)}
    const Handle_Tickets_Sold = (event) => {SetTickets_Sold(event.target.value)}
    const Handle_Available_Tickets = (event) => {SetAvailable_Tickets(event.target.value)}
    const Handle_Max_Tickets_Per_User = (event) => {SetMax_Tickets_Per_User(event.target.value)}
    const Handle_Price = (event) => {SetPrice(event.target.value)}
    const Handle_Registration_Deadline = (event) => {SetRegistration_Deadline(event.target.value)}
    return(
        <>
        
        </>
    )
}
export default AddEventTicket