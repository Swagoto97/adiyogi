function Products() {
    try {
        const [isQuoteFormOpen, setIsQuoteFormOpen] = React.useState(false);

        const allProducts = [...products, ...productsData2, ...productsData3, ...productsData4];

        const handleRequestQuote = () => {
            setIsQuoteFormOpen(true);
        };

        return (
            <section id="products" className="section bg-gray-50" data-name="products">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Our Products</h2>
                    <p className="text-center text-gray-600 mb-8">
                        All products are sourced directly from farmers or manufacturers, sorted hygienically, 
                        and delivered with premium quality assurance.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allProducts.map((product, index) => (
                            <ProductCard
                                key={index}
                                product={product}
                                onRequestQuote={handleRequestQuote}
                            />
                        ))}
                    </div>

                    {isQuoteFormOpen && (
                        <QuoteForm onClose={() => setIsQuoteFormOpen(false)} />
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error('Products component error:', error);
        reportError(error);
        return null;
    }
}
