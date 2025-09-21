function ProductCard({ product, onRequestQuote }) {
    try {
        const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
        const [isExpanded, setIsExpanded] = React.useState(false);

        const nextImage = () => {
            setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
        };

        const prevImage = () => {
            setCurrentImageIndex((prev) => 
                prev === 0 ? product.images.length - 1 : prev - 1
            );
        };

        return (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-name="product-card">
                <div className="relative h-64">
                    <img
                        src={product.images[currentImageIndex]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                    {product.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </>
                    )}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
                        {product.images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                    index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                                }`}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                    
                    <div className="text-gray-600 mb-4">
                        <p className={`${isExpanded ? '' : 'line-clamp-3'}`}>
                            {product.description}
                        </p>
                        {product.description.length > 150 && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-purple-600 hover:text-purple-800 mt-1"
                            >
                                {isExpanded ? 'Show Less' : 'Read More'}
                            </button>
                        )}
                    </div>

                    <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                            {product.features.slice(0, 3).map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-semibold mb-2">Available Packaging:</h4>
                        <div className="flex flex-wrap gap-1">
                            {product.packaging.slice(0, 2).map((pack, index) => (
                                <span key={index} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                                    {pack}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={onRequestQuote}
                        className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
                    >
                        Request Quote
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
        return null;
    }
}