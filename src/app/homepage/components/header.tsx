import Link from "next/link"
import { Bell, Heart, Search, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-2xl font-bold text-primary">
                    MORENT
                </Link>
                
                {/* Search */}

                <div className="hidden md:block relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search something here"
                        className="w-[400px] pl-9 pr-4"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                        <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Settings className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Image
                            src="/Profil.png?height=2000&width=2000"
                            alt="Sports car"
                            width={2000}
                            height={2000}
                        
                        />
                    </Button>
                </div>
            </div>
        </header>
    )
}

