function About() {
    try {
        return (
            <section id="about" className="section" data-name="about">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0" data-name="about-image">
                            <img 
                                src="https://app.trickle.so/storage/public/images/usr_0f004a86b8000001/7d623958-dbb2-42f1-8781-a5e8946c6bdd.png"
                                alt="About Our Company"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-12" data-name="about-content">
                            <h2 className="text-3xl font-bold mb-6">About Our Company</h2>
                            <div className="text-gray-600 space-y-4">
                                <p>
                                    Adiyogi IE Services is a global wholesaler and trader dedicated to delivering high-quality products tailored to customer needs. Built on trust and reliability, the company ensures a seamless import and export process.
                                </p>
                                <p>
                                    Our divisions include:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Adiyogi International Exports:</strong> Specializes in international trade with complete logistics support and 24/7 assistance.</li>
                                    <li><strong>Adiyogi IE Solutions:</strong> Offers end-to-end import/export services with personalized strategies.</li>
                                    <li><strong>Adiyogi Global Imports:</strong> Focuses on sourcing top-quality products globally with expert guidance.</li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-6 mt-8" data-name="about-stats">
                                <div className="text-center p-4 bg-purple-50 rounded-lg">
                                    <div className="text-4xl font-bold text-purple-700 mb-2">50+</div>
                                    <div className="text-gray-600">Countries Served</div>
                                </div>
                                <div className="text-center p-4 bg-purple-50 rounded-lg">
                                    <div className="text-4xl font-bold text-purple-700 mb-2">1000+</div>
                                    <div className="text-gray-600">Happy Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
