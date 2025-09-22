function ImageCarousel() {
    try {
        const [currentSlide, setCurrentSlide] = React.useState(0);
        const images = [
            "https://app.trickle.so/storage/public/images/usr_0f004a86b8000001/c3e2a961-8937-4fe5-be2b-af0e67280d72.jpeg",
            "https://app.trickle.so/storage/public/images/usr_0f004a86b8000001/39d8db3e-a3e3-4716-8aff-f3521e4c17f3.jpeg",
            "https://app.trickle.so/storage/public/images/usr_0f004a86b8000001/1e8cbdfe-76fe-44da-a87c-ff10d606cf4a.jpeg"
        ];

        React.useEffect(() => {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % images.length);
            }, 5000);
            return () => clearInterval(timer);
        }, []);

        return (
            <div className="relative h-full" data-name="image-carousel">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentSlide ? 'bg-white' : 'bg-white/50'
                            }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('ImageCarousel component error:', error);
        reportError(error);
        return null;
    }
}

function Hero() {
    try {
        return (
            <section className="pt-24 pb-12 bg-gradient-to-r from-purple-900 to-purple-600" data-name="hero">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="md:w-1/2 text-white" data-name="hero-content">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Global Export Excellence
                            </h1>
                            <p className="text-xl mb-8">
                                Your trusted partner in international trade. We deliver quality products worldwide with reliability and excellence.
                            </p>
                            <div className="flex space-x-4" data-name="hero-cta">
                                <a href="#contact" className="btn-primary">
                                    Contact Us
                                </a>
                                <a href="#services" className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-purple-700 transition duration-300">
                                    Our Services
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 h-96" data-name="hero-carousel">
                            <ImageCarousel />
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
