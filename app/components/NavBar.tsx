"use client"; // Client component for state & hover

import { useState } from "react";
import {
  HomeIcon,
  BriefcaseIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  FolderOpenIcon,
  QuestionMarkCircleIcon,
  GlobeAltIcon,
  ChevronDownIcon, // Added for dropdown indicator
} from "@heroicons/react/24/outline";

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track which dropdown is open (by label)

  return (
    <nav className="bg-white shadow fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center space-x-12">
          {/* Home - no dropdown */}
          <a
            href="/"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors relative group"
          >
            <HomeIcon className="h-7 w-7" />
            <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Home
            </span>
          </a>

{/* Customers - with dropdown, left-aligned */}
<div
  className="relative flex flex-col items-center"
  onMouseEnter={() => setOpenDropdown("customers")}
  onMouseLeave={() => setOpenDropdown(null)}
>
  <a
    href="/customers"
    className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors relative group"
  >
    <div className="flex items-center">
      <BriefcaseIcon className="h-7 w-7" />
      <ChevronDownIcon className="h-4 w-4 ml-1 opacity-70" />
    </div>
    <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      Customers
    </span>
  </a>

  {openDropdown === "customers" && (
    <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
      <a href="/customers/itswec" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        itswec
      </a>
      <a href="/customers/john-paul" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        john-paul
      </a>
      <a href="/customers/poloforge" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        PoloForge
      </a>
      <a href="/customers/fiona" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Fiona
      </a>
      <a href="/customers/BNJ" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        BNJ
      </a>
      
    </div>
  )}
</div>
          {/* Members - no dropdown */}
          <a
            href="/members"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors relative group"
          >
            <UserGroupIcon className="h-7 w-7" />
            <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Members
            </span>
          </a>

          {/* Messages - no dropdown */}
          <a
            href="/messages"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors relative group"
          >
            <ChatBubbleLeftRightIcon className="h-7 w-7" />
            <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Messages
            </span>
          </a>

{/* Resources - with dropdown, left-aligned */}
<div
  className="relative flex flex-col items-center"
  onMouseEnter={() => setOpenDropdown("resources")}
  onMouseLeave={() => setOpenDropdown(null)}
>
  <a
    href="/resources"
    className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors relative group"
  >
    <div className="flex items-center">
      <FolderOpenIcon className="h-7 w-7" />
      <ChevronDownIcon className="h-4 w-4 ml-1 opacity-70" />
    </div>
    <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      Resources
    </span>
  </a>

  {openDropdown === "resources" && (
    <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
      <a href="/resources/ySSS" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        YSSS (YouTube Search and Store System)
      </a>
      <a href="/resources/results-engine" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Results Engine
      </a>
    </div>
  )}
</div>
          {/* Help - no dropdown */}
          <a
            href="/help"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors relative group"
          >
            <QuestionMarkCircleIcon className="h-7 w-7" />
            <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Help
            </span>
          </a>

          {/* Language - no dropdown */}
          <a
            href="/language"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors relative group"
          >
            <GlobeAltIcon className="h-7 w-7" />
            <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Language
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}