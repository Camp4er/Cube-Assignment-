import React, { useState, useEffect } from 'react';
import './PhotoGrid.css';

interface PhotoGridProps {
    customerId: number;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ customerId }) => {
    const [photos, setPhotos] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchPhotos = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 100)}&limit=9`);
            if (!response.ok) {
                throw new Error('Failed to fetch photos');
            }
            const data = await response.json();
            console.log(data); // Log to verify
            const photoUrls = data.map((photo: { download_url: string }) => photo.download_url);
            setPhotos(photoUrls);
            setError(null);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };
    

    useEffect(() => {
        fetchPhotos();
        const intervalId = setInterval(fetchPhotos, 10000);

        return () => clearInterval(intervalId);
    }, [customerId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="photo-grid">
            {photos.map((photoUrl, index) => (
                <img
                    key={index}
                    src={photoUrl}
                    alt={`Customer ${customerId} photo ${index + 1}`}
                    className="photo-grid-img"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'path/to/fallback-image.png'; // Fallback image URL
                    }}
                />
            ))}
        </div>
    );
};

export default PhotoGrid;
