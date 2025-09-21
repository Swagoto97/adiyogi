function ServiceCard({ title, image, description, features, benefits }) {
    try {
        const [imageLoaded, setImageLoaded] = React.useState(false);

        return (
            <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden" data-name="service-card">
                <div className="relative h-48">
                    {!imageLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
                        </div>
                    )}
                    <img 
                        src={image} 
                        alt={title}
                        className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    
                    <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            {features.map((feature, index) => (
                                <li key={index} className="text-gray-600">{feature}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold mb-2">Benefits:</h4>
                        <p className="text-gray-600">{benefits}</p>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ServiceCard component error:', error);
        reportError(error);
        return null;
    }
}

function Services() {
    try {
        const [isLoading, setIsLoading] = React.useState(true);

        React.useEffect(() => {
            setIsLoading(false);
        }, []);

        const services = [
            {
                title: "Customs Clearance Service",
                image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55",
                description: "Expert customs clearance solutions ensuring smooth import/export processes with complete documentation support.",
                features: [
                    "24/7 customs support",
                    "Documentation assistance",
                    "Regulatory compliance",
                    "Fast clearance processing"
                ],
                benefits: "Save time and avoid delays with our professional customs clearance service. We handle all paperwork and ensure compliance with local regulations."
            },
            {
                title: "Logistics & Freight Services",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
                description: "Comprehensive logistics solutions covering air, sea, and land transportation needs.",
                features: [
                    "Global freight network",
                    "Real-time tracking",
                    "Multimodal solutions",
                    "Temperature-controlled shipping"
                ],
                benefits: "End-to-end logistics management with cost-effective solutions and reliable delivery timelines."
            },
            {
                title: "Documentation Services",
                image: "https://app.trickle.so/storage/public/images/usr_0f004a86b8000001/c3e2a961-8937-4fe5-be2b-af0e67280d72.jpeg",
                description: "Complete documentation support for all import/export requirements.",
                features: [
                    "Digital documentation",
                    "Legal compliance check",
                    "Certificate management",
                    "Translation services"
                ],
                benefits: "Ensure compliance and avoid delays with our expert documentation handling services."
            },
            {
                title: "Customised Services",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
                description: "Tailored solutions to meet your specific import/export needs.",
                features: [
                    "Personalized strategy",
                    "Dedicated account manager",
                    "Market analysis",
                    "Trade consultation"
                ],
                benefits: "Get solutions designed specifically for your business needs with our expert consultation and support."
            }
        ];

        if (isLoading) {
            return (
                <section className="section" data-name="services-loading">
                    <div className="container mx-auto px-4 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                </section>
            );
        }

        return (
            <section id="services" className="section" data-name="services">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        reportError(error);
        return null;
    }
}
