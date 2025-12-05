import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
                            UniDataHub
                        </Link>
                        <p className="max-w-xs text-slate-400">
                            The most comprehensive university catalog in Kazakhstan. Compare, explore, and find your future.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/catalog" className="hover:text-blue-400 transition-colors">Universities</Link></li>
                            <li><Link href="/compare" className="hover:text-blue-400 transition-colors">Compare</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Astana, Kazakhstan</li>
                            <li>info@unidatahub.kz</li>
                            <li>+7 (777) 123-45-67</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} UniDataHub. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
