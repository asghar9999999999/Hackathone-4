import type { NextApiRequest, NextApiResponse } from 'next';

// Sample data
const cars = [
    { id: 1, name: "Koenigsegg", type: "Sport", price_per_day: "$99.00", image_url: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar.11698147.jpg&w=640&q=75" },
    { id: 2, name: "Nissan GT-R", type: "Sport", price_per_day: "$80.00", image_url: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcar(1).cab606a9.jpg&w=640&q=75" },
    { id: 3, name: "Rolls-Royce", type: "Sedan", price_per_day: "$96.00", image_url: "https://car-rental-website-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCar(2).bd07489a.jpg&w=1200&q=75" },
    // Add remaining cars here
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req.query; // Get query from request

    if (!query || typeof query !== 'string') {
        return res.status(400).json({ error: 'Search query is required and must be a string' });
    }

    // Filter cars based on the name
    const filteredCars = cars.filter(car =>
        car.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredCars.length === 0) {
        return res.status(404).json({ message: 'No cars found' });
    }

    res.status(200).json(filteredCars);
}
