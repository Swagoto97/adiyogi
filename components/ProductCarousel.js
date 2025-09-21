function ProductCarousel({ images }) {
    try {
        const [currentSlide, setCurrentSlide] = React.useState(0);
        const [isLoaded, setIsLoaded] = React.useState(false);

        const nextSlide = () => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        };

        const prevSlide = () => {
            setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        };

        const goToSlide = (index) => {
            setCurrentSlide(index);
        };

        React.useEffect(() => {
            const timer = setInterval(nextSlide, 5000);
            return () => clearInterval(timer);
        }, []);

        return (
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden" data-name="product-carousel">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                )}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Product slide ${index + 1}`}
                            className="w-full h-full object-cover"
                            onLoad={() => setIsLoaded(true)}
                        />
                    </div>
                ))}
                
                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
                
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentSlide ? 'bg-white' : 'bg-white opacity-50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductCarousel component error:', error);
        reportError(error);
        return null;
    }
}
