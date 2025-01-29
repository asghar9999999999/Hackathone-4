"use client";

const categories = [
    { name: "Sport", count: 10 },
    { name: "SUV", count: 12 },
    { name: "MPV", count: 16 },
    { name: "Sedan", count: 20 },
    { name: "Coupe", count: 14 },
    { name: "Hatchback", count: 14 },
];

const capacities = [
    { name: "2 Person", count: 10 },
    { name: "4 Person", count: 14 },
    { name: "6 Person", count: 12 },
    { name: "8 or More", count: 16 },
];

export const Sidebar = () => {
    return (
        <aside className="w-64 p-6 bg-white rounded-lg h-fit">
            <div className="space-y-6">
                <div>
                    <h2 className="text-lg font-semibold mb-4">TYPE</h2>
                    <div className="space-y-2">
                        {categories.map((category) => (
                            <label key={category.name} className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4 text-morent-blue rounded" />
                                <span className="text-sm text-morent-text">{category.name}</span>
                                <span className="text-sm text-morent-gray ml-auto">({category.count})</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">CAPACITY</h2>
                    <div className="space-y-2">
                        {capacities.map((capacity) => (
                            <label key={capacity.name} className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4 text-morent-blue rounded" />
                                <span className="text-sm text-morent-text">{capacity.name}</span>
                                <span className="text-sm text-morent-gray ml-auto">({capacity.count})</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mt-6 mb-4">PRICE</h2>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        className="w-full"
                    />
                    <div className="flex justify-between mt-2">
                        <span>$0</span>
                        <span>Max. $100.00</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};