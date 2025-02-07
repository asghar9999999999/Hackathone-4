import Link from "next/link"

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container grid gap-8 px-4 py-10 md:grid-cols-4">
                <div className="space-y-4">
                    <Link href="/" className="text-2xl font-bold text-primary">
                        MORENT
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        Our vision is to provide convenience and help increase your sales business.
                    </p>
                </div>
                <div>
                    <h3 className="mb-4 text-sm font-semibold">About</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/Abouts/how-it-works">How it works</Link></li>
                        <li><Link href="/Abouts/featured">Featured</Link></li>
                        <li><Link href="/Abouts/partnership">Partnership</Link></li>
                        <li><Link href="/Abouts/business-relation">Business Relation</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 text-sm font-semibold">Community</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/Community/events">Events</Link></li>
                        <li><Link href="/Community/blog">Blog</Link></li>
                        <li><Link href="/Community/podcast">Podcast</Link></li>
                        <li><Link href="/Community/invite-a-friend">Invite a friend</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 text-sm font-semibold">Socials</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="https://discord.com/">Discord</Link></li>
                        <li><Link href="https://instagram.com/">Instagram</Link></li>
                        <li><Link href="https://twitter.com/">Twitter</Link></li>
                        <li><Link href="https://facebook.com/">Facebook</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t">
                <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
                    <p className="text-sm text-muted-foreground">©2024 MORENT. All rights reserved</p>
                    <div className="flex gap-4">
                        <Link href="/PrivacyPolicy " className="text-sm text-muted-foreground hover:underline">
                            Privacy & Policy
                        </Link>
                        <Link href="/TermsConditions" className="text-sm text-muted-foreground hover:underline">
                            Terms & Condition
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

