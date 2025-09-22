function QuoteForm({ onClose }) {
    try {
        const [showConfirmation, setShowConfirmation] = React.useState(false);

        // Handle form submission message and redirect
        const handleFormSubmit = () => {
            setShowConfirmation(true);
            setTimeout(() => {
                onClose();
                window.location.href = 'https://87nhl9gxxyxn.trickle.host/#about';
            }, 2000);
        };

        // Listen for message from embedded form
        React.useEffect(() => {
            const handleMessage = (event) => {
                if (event.data === 'formSubmitted') {
                    handleFormSubmit();
                }
            };
            
            window.addEventListener('message', handleMessage);
            return () => window.removeEventListener('message', handleMessage);
        }, []);

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-name="quote-form">
                <div className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
                    <button 
                        onClick={onClose} 
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        data-name="close-button"
                    >
                        <i className="fas fa-times"></i>
                    </button>

                    {showConfirmation ? (
                        <div className="text-center p-8" data-name="confirmation-message">
                            <p className="text-lg text-green-600">
                                Thank you for your message. We will get back to you soon!
                            </p>
                        </div>
                    ) : (
                        <iframe
                            src="https://j7qqbp1r.forms.app/request-a-quote"
                            width="100%"
                            height="600px"
                            frameBorder="0"
                            data-name="quote-form-iframe"
                        ></iframe>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('QuoteForm component error:', error);
        reportError(error);
        return null;
    }
}
