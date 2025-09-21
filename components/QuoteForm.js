function QuoteForm({ onClose }) {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            company: '',
            product: '',
            quantity: '',
            message: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission logic here
            console.log('Quote request submitted:', formData);
            onClose();
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-name="quote-form-modal">
                <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-semibold">Request Quote</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <i className="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="text"
                            name="product"
                            placeholder="Product Name"
                            value={formData.product}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <textarea
                            name="message"
                            rows="3"
                            placeholder="Additional Details"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300"
                        >
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        );
    } catch (error) {
        console.error('QuoteForm component error:', error);
        reportError(error);
        return null;
    }
}