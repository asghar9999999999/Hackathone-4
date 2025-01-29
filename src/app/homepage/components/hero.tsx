import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <div className="container grid gap-6 px-4 py-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl bg-primary p-10 text-white">
                <div className="relative z-10 max-w-md">
                    <h2 className="mb-2 text-3xl font-bold">The Best Platform for Car Rental</h2>
                    <p className="mb-14 text-primary-foreground/80">
                        Ease of doing a car rental safely and reliably. Of course at a low price.
                    </p>
                    <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                        Rental Car
                    </Button>
                </div>
                <Image
                    src="/image 7.png?height=2000&width=2000"
                    alt="Sports car"
                    width={2000}
                    height={2000}
                    className="absolute bottom-5 right-12 max-w-[280px] md:max-w-[380px]"
                />
            </div>
            <div className="relative overflow-hidden rounded-xl bg-primary p-10 text-white">
                <div className="relative z-10 max-w-md">
                    <h2 className="mb-2 text-3xl font-bold">Easy way to rent a car at a low price</h2>
                    <p className="mb-14 text-primary-foreground/80">
                        Providing cheap car rental services and safe and comfortable facilities.
                    </p>
                    <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                        Rental Car
                    </Button>
                </div>
                <Image
                    src="/c1.png?height=2000&width=2000"
                    alt="Sports car"
                    width={2000}
                    height={2000}
                    className="absolute bottom-0 top-30 right-10 max-w-[380px] md:max-w-[380px]"
                />
            </div>
        </div>
    )
}

