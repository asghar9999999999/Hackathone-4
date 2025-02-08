
export interface Car {
    quantity: number
    _id : string
    name: string
    brand: string
    description: string
    type: string
    fuelCapacity: string
    transmission: string
    seatingCapacity: string
    pricePerDay: number
    originalPrice: string
    tags: string[]
    image: string
    liked: boolean
    rating: number
    inventory: number
    slug: {
        _type: "slug";
        current: string;
    };
}

