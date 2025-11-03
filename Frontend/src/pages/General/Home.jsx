import { FiTag, FiBarChart2, FiUsers, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="min-h-screen bg-linear-to-br from-blue-900 via-purple-900 to-indigo-900" >
         
            <div 
                className="min-h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-blue-900/70"
                style={{
                    backgroundImage: 'url("./EventiumImage.jpeg")'
                }}
            >
               
                <div className="pt-5 flex flex-col items-center justify-center text-center min-h-[80vh] px-4 sm:mb-20 pb-10">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Create <span className="text-blue-400">Unforgettable</span> Events
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
                        The all-in-one platform for event organizers. Manage tickets, engage attendees, 
                        and create amazing experiences with ease.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                            Start Planning Today
                            <FiArrowRight className="w-5 h-5" />
                        </button>
                        <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300">
                            View Demo
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">10K+</div>
                            <div className="text-gray-300">Events Created</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">500K+</div>
                            <div className="text-gray-300">Tickets Sold</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">98%</div>
                            <div className="text-gray-300">Customer Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>

         
            <div id="features" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        Everything You Need for <span className="text-blue-600">Event Success</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-blue-50 rounded-3xl">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiTag className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Easy Ticketing</h3>
                            <p className="text-gray-600">
                                Create and manage tickets with our intuitive system. Set prices, limits, and track sales in real-time.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-3xl">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ">
                                <FiBarChart2 className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Powerful Analytics</h3>
                            <p className="text-gray-600">
                                Get insights into your event performance with detailed analytics and reporting tools.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-3xl">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiUsers className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Attendee Management</h3>
                            <p className="text-gray-600">
                                Manage your attendees, send updates, and create engaging experiences for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="py-20 bg-linear-to-r from-blue-600 to-purple-700">
    <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Create Your Next Event?
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 mb-8">
            Join thousands of organizers who trust Eventium for their events.
        </p>
        <Link 
            to="/register" 
            className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition duration-300 w-full sm:w-auto"
        >
            Get Started Free
            <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
    </div>
</div>

        </div>
    )
}

export default Home