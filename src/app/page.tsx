/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
   { name: 'Deshboard', href: '#', current: true },
   { name: 'Team', href: '#', current: false },
   { name: 'Projects', href: '#', current: false },
   { name: 'Calendar', href: '#', current: false },
]

// function classNames(...classes: any[]) {
//   return classes.filter(Boolean).join(' ')
// }
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Home() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5"/>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon className="block h-6 w-6 group-data-[open]:hidden" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img 
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" 
                alt="9KRRG" 
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:black">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a 
                    key={item.name}
                    href={item.name}
                    aria-current={item.current ? 'page' : undefined} 
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:iutline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus-gray-800"
            >
              
            </button>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
