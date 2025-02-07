"use client"
import { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [error, setError] = useState<string>('');

    const handleSearch = async () => {
        if (!searchTerm) return; // Empty search term check

        setError(''); // Clear any previous errors
        try {
            const res = await fetch(`/api/search?query=${searchTerm}`);
            const data = await res.json();

            if (res.ok) {
                setResults(data);
            } else {
                setError(data.message || 'An error occurred');
                setResults([]);
            }
        } catch (err) {
            setError('Failed to fetch data');
            setResults([]);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for cars..."
            />
            <button onClick={handleSearch}>Search</button>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            {results && results.length > 0 && (
                <div>
                    {results.map((car: any) => (
                        <div key={car.id}>
                            <h3>{car.name}</h3>
                            <p>Price per day: {car.price_per_day}</p>
                            <img src={car.image_url} alt={car.name} width="150" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
