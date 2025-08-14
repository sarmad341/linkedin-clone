import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  BriefcaseIcon,
  HomeIcon,
  MessageCircle,
  SearchIcon,
  UsersIcon,
  BellIcon,
  User,
  Grid3X3,
  Building2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between p-2 max-w-6xl mx-auto">
        {/* Logo and Search Section */}
        <div className="flex items-center flex-1 max-w-lg">
          <Link href="/" className="mr-3">
            <Image
              className="rounded"
              src="https://links.papareact.com/b3z"
              width={40}
              height={40}
              alt="LinkedIn Logo"
            />
          </Link>

          <div className="flex-1 max-w-sm">
            <form className="relative">
              <div className="flex items-center bg-blue-50 rounded-md px-3 py-2">
                <SearchIcon className="h-4 w-4 text-gray-600 mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent flex-1 outline-none text-sm placeholder-gray-600"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center space-x-4 px-6">
          <Link
            href="/"
            className="flex flex-col items-center group  text-gray-600"
          >
            <HomeIcon className="h-5 w-5" fill="currentColor" />
            <span className="text-xs font-medium">Home</span>
          </Link>

          <Link
            href=""
            className="flex flex-col items-center group  text-gray-600"
          >
            <UsersIcon className="h-5 w-5" />
            <span className="text-xs">My Network</span>
          </Link>

          <Link
            href=""
            className="flex flex-col items-center group  text-gray-600"
          >
            <BriefcaseIcon className="h-5 w-5" />
            <span className="text-xs">Jobs</span>
          </Link>

          <Link
            href=""
            className="flex flex-col items-center group  text-gray-600"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs">Messaging</span>
          </Link>

          <Link
            href=""
            className="flex flex-col items-center group  text-gray-600"
          >
            <BellIcon className="h-5 w-5" />
            <span className="text-xs">Notifications</span>
          </Link>

          {/* Divider */}
          <div className="h-8 w-px bg-gray-300"></div>

          <Link
            href=""
            className="flex flex-col items-center group text-gray-600"
          >
            <Grid3X3 className="h-5 w-5" />
            <span className="text-xs">For Business</span>
          </Link>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <Button asChild variant="secondary">
              <SignInButton />
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default Header;
