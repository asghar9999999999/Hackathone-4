import Image from "next/image"
import { Heart, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Car } from "../../../../types/car"

interface CarCardProps {
    car: Car
}

export default function CarCard({ car }: CarCardProps) {
    return (
        <Card className=" bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300
">
            <CardHeader className="p-4">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">{car.name}</h3>
                        <p className="text-sm text-muted-foreground">{car.type}</p>
                    </div>
                    <Button variant="ghost" size="icon" className={car.liked ? "text-red-500" : ""}>
                        <Heart className="h-5 w-5" fill={car.liked ? "currentColor" : "none"} />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-2 pt-2">
                <div className="relative aspect-[4/2] overflow-hidden rounded-md top-1 ">
                    <Image
                        src={car.image || "/c2.png?height=200&width=400"}
                        alt={car.name}
                        className="object-cover"
                        width={400}
                        height={200}                    />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-12 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <span className="text-lg">⛽</span>
                        {car.fuelCapacity}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <span className="text-lg">🔄</span>
                        {car.transmission}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {car.seatingCapacity}
                    </div>
                </div>
                {car.description && <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{car.description}</p>}
                {car.tags && car.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                        {car.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4">
                <div>
                    <p className="text-lg font-bold">
                        ${car.pricePerDay}
                        <span className="text-sm font-normal text-muted-foreground">/day</span>
                    </p>
                    <p className="text-sm text-muted-foreground line-through">${car.originalPrice}</p>
                </div>
                <Button>Rent Now</Button>
            </CardFooter>
        </Card>
    )
}


