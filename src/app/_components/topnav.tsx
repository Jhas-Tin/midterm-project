import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
    return (
        <nav className="flex items-center w-full bg-gray-900 p-4 text-white border-b text-lg shadow-md justify-between">
            <span className="font-bold text-2xl tracking-wide">Storage</span>
            <div className="flex items-center gap-4">
                <SignedOut>
                    <SignInButton>
                        <span className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer font-semibold">Sign In</span>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <div className="cursor-pointer border border-blue-300 rounded-full flex items-center justify-center w-10 h-10 p-0 hover:shadow-lg transition-shadow bg-gray-800">
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </nav>
    )
}