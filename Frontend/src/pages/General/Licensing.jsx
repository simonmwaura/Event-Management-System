const Licensing = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4 underline">License</h1>
                    <p className="text-xl text-blue-600">Eventium is open source and available under the MIT License</p>
                </div>

                
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="text-blue-600 prose prose-lg max-w-none">
                        <h2 className="text-2xl font-semibold mb-4">MIT License</h2>
                        
                        <p className="text-blue-600 mb-6">
                            Copyright (c) {currentYear} Eventium
                        </p>
                        
                        <p className="mb-4">
                            Permission is hereby granted, free of charge, to any person obtaining a copy
                            of this software and associated documentation files (the "Software"), to deal
                            in the Software without restriction, including without limitation the rights
                            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                            copies of the Software, and to permit persons to whom the Software is
                            furnished to do so, subject to the following conditions:
                        </p>
                        
                        <p className="mb-4">
                            The above copyright notice and this permission notice shall be included in all
                            copies or substantial portions of the Software.
                        </p>
                        
                        <p className="mb-6">
                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                            SOFTWARE.
                        </p>

                       
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">About the MIT License</h3>
                            <p className="text-blue-800 text-sm">
                                The MIT License is a permissive free software license that puts only very limited 
                                restriction on reuse and has therefore high license compatibility.
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="mt-8 text-center">
                    <p className="text-blue-600">
                        For questions about this license, please contact:{" "}
                        <a href="mailto:legal@eventium.com" className="text-blue-600 hover:underline">
                            legal@eventium.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Licensing