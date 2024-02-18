"use client";

import Link from "next/link";

import { MessageInput } from "./components/MessageInput";
import { QuickPages } from "./components/QuickPages";
import { Copyright } from "./components/Copyright";
import { WelcomeFooter } from "./components/WelcomeFooter";

export function Footer() {
  return (
    <footer className="bg-1000">
      <div
        className="
        container
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto
        md:items-center
        lg:items-start
        md:flex-row md:flex-nowrap
      "
      >
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <WelcomeFooter />
        </div>

        <div className="justify-between w-full mt-4 text-center lg:flex">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <MessageInput />
          </div>

          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <QuickPages />
          </div>

          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-100">
              Quick Links
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 1
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 2
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 3
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center -mt-12">
        <Copyright />
      </div>
    </footer>
  );
}
