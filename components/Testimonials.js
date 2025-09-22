function TestimonialCard({ name, company, country, image, flag, testimonial }) {
    try {
        return (
            <div className="testimonial-card p-6 rounded-lg bg-white shadow-lg" data-name="testimonial-card">
                <div className="flex items-center mb-4">
                    <img 
                        src={image} 
                        alt={name}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                        <h4 className="font-semibold text-lg">{name}</h4>
                        <div className="flex items-center text-sm text-gray-600">
                            <span>{company}</span>
                            <img 
                                src={flag} 
                                alt={country}
                                className="w-4 h-4 ml-2"
                            />
                        </div>
                    </div>
                </div>
                <p className="text-gray-600">{testimonial}</p>
            </div>
        );
    } catch (error) {
        console.error('TestimonialCard component error:', error);
        reportError(error);
        return null;
    }
}

function Testimonials() {
    try {
        const testimonials = [
            {
                name: "Jean-Pierre Dubois",
                company: "French Imports Co.",
                country: "France",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                flag: "https://flagcdn.com/w40/fr.png",
                testimonial: "Outstanding service and quality products. Adiyogi has been instrumental in our business growth."
            },
            {
                name: "Sarah Thompson",
                company: "Australian Trade Group",
                country: "Australia",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                flag: "https://flagcdn.com/w40/au.png",
                testimonial: "Reliable partner for our import needs. Their attention to detail and professionalism is exceptional."
            },
            {
                name: "Marcus Johnson",
                company: "Caribbean Imports Ltd",
                country: "Caribbean",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                flag: "https://flagcdn.com/w40/bb.png",
                testimonial: "Excellent communication and timely delivery. A trusted partner for our business."
            },
            {
                name: "Elena Rodriguez",
                company: "Palau Trading Co",
                country: "Palau",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                flag: "https://flagcdn.com/w40/pw.png",
                testimonial: "Professional service with great attention to detail. Highly recommended!"
            }
        ];

        return (
            <section className="section bg-gray-50" data-name="testimonials">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials component error:', error);
        reportError(error);
        return null;
    }
}
