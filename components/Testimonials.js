function Testimonials() {
    try {
        const testimonials = [
            {
                name: "John Smith",
                company: "Global Foods Inc.",
                text: "Adiyogi IE Services has been our trusted partner for organic spice imports. Their quality control is exceptional."
            },
            {
                name: "Maria Rodriguez",
                company: "European Distributors Ltd.",
                text: "Professional service and reliable delivery. We've been working together for over 3 years now."
            },
            {
                name: "Ahmed Hassan",
                company: "Middle East Trading Co.",
                text: "Excellent product quality and competitive pricing. Highly recommend their services."
            }
        ];

        return (
            <section className="section bg-gray-50" data-name="testimonials">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="text-gray-600 mb-4 italic">"{testimonial.text}"</div>
                                <div className="font-semibold">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.company}</div>
                            </div>
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