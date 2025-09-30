export default function Projects() {
    return (
        <>
            <section className="min-h-[100vh] bg-no-repeat bg-gradient-cover flex justify-center items-start text-center px-4 relative" id="projects">

                <div className="max-w-6xl mx-auto ">
                    <div className="text-center mb-12">
                        <h3 className="text-5xl font-bold mb-4">Projects</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-primary transition flex flex-col h-full">
                            <h4 className="text-2xl font-semibold mb-4">
                                Fullstack User Management
                            </h4>
                            <p className="text-gray-600 mb-4">Java Spring Boot</p>

                            {/* Este div empuja el botón hacia abajo */}
                            <div className="mt-auto pt-4">
                                <a
                                    href="https://github.com/cesarulloaa/User-Management-Springboot/tree/first_test"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block p-2 bg-primary-300 border-4 border-secondary rounded-full hover:text-secondary transition"
                                >
                                    View More
                                </a>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-primary transition flex flex-col h-full">
                            <h4 className="text-2xl font-semibold mb-4">
                                Movies App
                            </h4>
                            <p className="text-gray-600 mb-4">React + C# ASP.NET 9</p>

                            <div className="mt-auto pt-4">
                                <a
                                    href="https://github.com/cesarulloaa/movies-app/tree/in-process"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block p-2 bg-primary-300 border-4 border-secondary rounded-full hover:text-secondary transition"
                                >
                                    View More
                                </a>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-primary transition flex flex-col h-full">
                            <h4 className="text-2xl font-semibold mb-6">To Do List App</h4>
                            <p className="text-gray-600 mb-4">React</p>

                            <div className="mt-auto pt-4">
                                <a
                                    href="https://cesarulloaa.github.io/Todo-list-app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block p-2 bg-primary-300 border-4 border-secondary rounded-full hover:text-secondary transition"
                                >
                                    View More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}