import Link from "next/link"
import Image from "next/image"
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
} from 'lucide-react'  /* icone, lucide.dev/icons */


const MenuItems = [
    {
        title: 'Dashboard',
        items:[
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
        },
        {
            icon: Group,
            label: 'Gruppi',
            href: '/gruppi'
        }]
    },
    {
        title: 'Others',
        items:[{
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
            href: '/'
        }]
    }
]

const Menu = () => {
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
                {section.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center md:justify-start justify-center gap-0 md:gap-4 px-4 py-3 rounded-md transition"
                  >
                    <item.icon className="w-7 h-7 text-black " />
                    <span className="hidden lg:inline text-lg">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    }
  
export default Menu
