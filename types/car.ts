
export interface Car {
    _id : string
    name: string
    brand: string
    description: string
    type: string
    fuelCapacity: string
    transmission: string
    seatingCapacity: string
    pricePerDay: string
    originalPrice: string
    tags: string[]
    image: string
    liked: boolean
    rating: number
    slug: {
        current: string;
    };
}

