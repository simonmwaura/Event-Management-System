import { Link } from "react-router-dom"
const Footer = () => {
    return(
<footer className="bg-white rounded-lg shadow-sm dark:bg-blue-900 m-4">
    <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="./Logo.png " className="h-8" alt="Eventium Logo" />
                <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    <span className="text-blue-700"> Event</span>
                    <span className="text-blue-400">ium</span>
                </div>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-blue-500 sm:mb-0 dark:text-blue-400">
                <li>
                    <Link to="/about-us" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <Link to="/licensing" className="hover:underline me-4 md:me-6">Licensing</Link>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-blue-200 sm:mx-auto dark:border-blue-700 lg:my-8" />
        <span className="text-center block text-sm text-blue-500 sm:text-center dark:text-blue-400">© 2025 <a href="#" className="hover:underline">Eventium™</a>. All Rights Reserved.</span>
    </div>
</footer>


    )
}
export default Footer