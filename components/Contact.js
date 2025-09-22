function Contact() {
    try {
        React.useEffect(() => {
            // Handle form submission message from iframe
            const handleMessage = (event) => {
                if (event.data && event.data.type === 'form_submit_success') {
                    alert("Thank you for your message. We will get back to you soon!");
                    window.location.href = 'https://87nhl9gxxyxn.trickle.host/#about';
                }
            };

            window.addEventListener('message', handleMessage);
            return () => window.removeEventListener('message', handleMessage);
        }, []);

        return (
            <section id="contact" className="section bg-gray-50" data-name="contact">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Contact Us</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="contact-info space-y-8" data-name="contact-info">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                                <p className="text-gray-600">
                                    We'd love to hear from you. Please fill out this form or reach out to us using the contact details below.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="mt-1">
                                        <i className="fas fa-map-marker-alt text-purple-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Address</h4>
                                        <p className="text-gray-600">
                                            5/25, Shastriji Colony<br />
                                            Dakhindari Rd, Lake Town<br />
                                            Kolkata, West Bengal<br />
                                            India, 700048
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="mt-1">
                                        <i className="fas fa-phone text-purple-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Phone</h4>
                                        <p className="text-gray-600">+91 9038737330</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="mt-1">
                                        <i className="fas fa-envelope text-purple-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p className="text-gray-600">abir@adiyogiexport.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-64 rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0088761533643!2d72.8270803!3d19.0748397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123f8d27b%3A0x5a7c0f0c080c1b3a!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        <div className="contact-form embedded-form" data-name="contact-form">
                            <iframe 
                                src="https://j7qqbp1r.forms.app/contact-us-form"
                                frameBorder="0"
                                style={{
                                    width: '100%',
                                    height: '600px',
                                    border: 'none',
                                    borderRadius: '8px'
                                }}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
