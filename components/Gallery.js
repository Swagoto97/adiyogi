function GalleryImage({ image, title, onClick }) {
    try {
        const [isLoaded, setIsLoaded] = React.useState(false);

        return (
            <div 
                className="gallery-image-container cursor-pointer" 
                onClick={() => onClick(image, title)}
                data-name="gallery-image"
            >
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                )}
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setIsLoaded(true)}
                />
                <div className="gallery-image-overlay">
                    <h3 className="text-white text-lg font-semibold">{title}</h3>
                </div>
            </div>
        );
    } catch (error) {
        console.error('GalleryImage component error:', error);
        reportError(error);
        return null;
    }
}

function Gallery() {
    try {
        const [selectedImage, setSelectedImage] = React.useState(null);
        const [selectedTitle, setSelectedTitle] = React.useState('');

        const galleryImages = [
            // Original website images
            {
                url: "https://app.trickle.so/storage/public/images/usr_0f004a86b8000001/3acdc531-be42-478c-94c1-bde9ae37bb11.png",
                title: "Box of Alum - Natural Crystal"
            },
            {
                url: "https://app.trickle.so/storage/public/images/usr_0f004a86b8000001/3004a2e3-74d2-4128-89e4-2cc1c570c190.png",
                title: "Alum - Natural Crystal Deo"
            },
            {
                url: "https://app.trickle.so/storage/public/images/usr_0f004a86b8000001/16f8ce91-0763-4fe0-aadc-1726a1494b41.png",
                title: "Organic Makhana Sealed Pack"
            },
            // Trade event images (using placeholder images for demonstration)
            {
                url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
                title: "Canton Fair China"
            },
            {
                url: "https://images.unsplash.com/photo-1552664730-d307ca884978",
                title: "FIEO Buyer-Seller Meet"
            },
            {
                url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
                title: "International Trade Event"
            }
        ];

        const openLightbox = (image, title) => {
            setSelectedImage(image);
            setSelectedTitle(title);
        };

        const closeLightbox = () => {
            setSelectedImage(null);
            setSelectedTitle('');
        };

        return (
            <section id="gallery" className="section bg-gray-50" data-name="gallery">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Our Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <GalleryImage
                                key={index}
                                image={image.url}
                                title={image.title}
                                onClick={openLightbox}
                            />
                        ))}
                    </div>

                    {selectedImage && (
                        <div 
                            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                            onClick={closeLightbox}
                            data-name="lightbox"
                        >
                            <div className="max-w-4xl mx-auto p-4">
                                <img
                                    src={selectedImage}
                                    alt={selectedTitle}
                                    className="max-h-[80vh] w-auto"
                                />
                                <h3 className="text-white text-xl text-center mt-4">{selectedTitle}</h3>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error('Gallery component error:', error);
        reportError(error);
        return null;
    }
}
