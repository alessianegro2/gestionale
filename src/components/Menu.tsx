'use client';

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Home,
  Users,
  ListOrdered,
  Group,
  User,
  CalendarDays,
  Settings,
  LogOut,
  PartyPopper,
  Workflow
} from 'lucide-react';

const MenuItems = [
  {
    title: 'Dashboard',
    items: [
      {
        icon: Home,
        label: 'Home',
        href: '/home'
      },
      {
        icon: ListOrdered,
        label: 'Iscritti',
        href: '/iscritti'
      },
      {
        icon: PartyPopper,
        label: 'Attività',
        href: '/attivita'
      },
      {
        icon: CalendarDays,
        label: 'Turni',
        href: '/turni'
      },
      {
        icon: Workflow,
        label: 'Collaboratori',
        href: '/collaboratori'
      }
    ]
  },
  {
    title: 'Others',
    items: [
      {
        icon: User,
        label: 'Profilo',
        href: '/profilo'
      },
      {
        icon: Users,
        label: 'Utenti',
        href: '/user-management'
      },
      {
        icon: LogOut,
        label: 'Logout',
        action: true 
      }
    ]
  }
];

const Menu = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST'
      });
      router.push('/'); 
    } catch (error) {
      console.error("Errore durante il logout", error);
    }
  };

  return (
    <div className="h-full w-full text-sm text-black px-2 pt-6">
      {/* LOGO */}
      <div className="flex justify-center mb-8 border-b-white border-b-2 pb-4">
        <Image
          src="/sanca-logo.jpg"
          alt="Logo"
          width={90}
          height={90}
          className="rounded-full border-3 border-white"
        />
      </div>

      {MenuItems.map((section, index) => (
        <div key={index} className="mb-6">
          <div className="mt-3 space-y-2">
            {section.items.map((item) =>
              item.action ? (
                <button
                  key={item.label}
                  onClick={handleLogout}
                  className="flex w-full items-center md:justify-start justify-center gap-0 md:gap-4 px-4 py-3 rounded-md transition hover:bg-gray-100"
                >
                  <item.icon className="w-7 h-7 text-black" />
                  <span className="hidden lg:inline text-lg">{item.label}</span>
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="flex items-center md:justify-start justify-center gap-0 md:gap-4 px-4 py-3 rounded-md transition hover:bg-gray-100"
                >
                  <item.icon className="w-7 h-7 text-black" />
                  <span className="hidden lg:inline text-lg">{item.label}</span>
                </Link>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
