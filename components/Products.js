function ProductCard({ product, onRequestQuote }) {
    try {
        return (
            <div className="product-card bg-white rounded-lg shadow-lg overflow-hidden" data-name="product-card">
                <ProductCarousel images={product.images} />
                <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    {product.features && (
                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">Key Features:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="text-gray-600">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {product.packaging && (
                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">Available In:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                {product.packaging.map((pack, index) => (
                                    <li key={index} className="text-gray-600">{pack}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="mb-4">
                        <span className="text-sm font-medium text-gray-500">HSN Code: </span>
                        <span className="text-sm text-gray-700">{product.hsnCode}</span>
                    </div>

                    <button
                        onClick={() => onRequestQuote(product)}
                        className="btn-primary w-full"
                    >
                        Request a Quote
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
