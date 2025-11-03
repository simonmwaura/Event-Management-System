const AboutUs = () => {
    return(
        <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold underline text-blue-900 mb-4">About Eventium</h1>
                    <p className="text-xl text-blue-600 max-w-3xl mx-auto">
                        Learn more about our mission, vision, and the team behind Eventium
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Our Story</h2>
                        <p className="text-lg text-blue-600 mb-6 leading-relaxed">
                            Eventium was born from a simple idea: making event management accessible to everyone. 
                            Whether you're organizing a small community gathering or a large corporate conference, 
                            we provide the tools you need to create memorable experiences.
                        </p>
                        <p className="text-lg text-blue-600 mb-6 leading-relaxed">
                            Founded in 2025, our platform has helped thousands of event organizers streamline 
                            their planning process, connect with attendees, and deliver exceptional events.
                        </p>
                        <p className="text-lg text-blue-600 leading-relaxed">
                            We believe that every event, no matter how big or small, deserves to be managed 
                            with ease and professionalism.
                        </p>
                    </div>

                   
                    <div className="lg:w-1/2">
                        <img 
                            src="./EventiumAboutUs.jpeg" 
                            alt="Eventium Team" 
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h3>
                        <p className="text-blue-600 leading-relaxed">
                            To empower event organizers with intuitive tools that simplify planning, 
                            enhance attendee engagement, and drive event success through innovative technology.
                        </p>
                    </div>
                    <div className="bg-white p-8 rzounded-lg shadow-md">
                        <h3 className="text-2xl underline font-semibold text-blue-800 mb-4">Our Vision</h3>
                        <p className="text-blue-600 leading-relaxed">
                            To become the world's most trusted event management platform, connecting 
                            communities and creating unforgettable experiences through seamless digital solutions.
                        </p>
                    </div>
                </div> 

                <div className="text-center">
                    <h2 className="text-3xl underline font-semibold text-blue-800 mb-8">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-200 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold text-blue-700 mb-3">Innovation</h4>
                            <p className="text-white">Constantly pushing boundaries to deliver cutting-edge event solutions</p>
                        </div>
                        <div className="bg-blue-200 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold text-blue-700 mb-3">Community</h4>
                            <p className="text-white">Building connections that bring people together through events</p>
                        </div>
                        <div className="bg-blue-200 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold text-blue-700 mb-3">Excellence</h4>
                            <p className="text-white">Delivering exceptional experiences for organizers and attendees alike</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs