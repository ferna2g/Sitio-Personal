import React from 'react';
import { Link } from 'gatsby';

const navItems = [
  {
    caption: 'Inicio',
    href: '/'
  },
  {
    caption: 'Formación Académica',
    href: '/presencial'
  },
  {
    caption: 'Cursos en Linea',
    href: '/online'
  },
  {
    caption: 'Otros Logros Académicos',
    href: '/others'
  },
  {
    caption: 'Skills',
    href: '/skills'
  }
]

const Nav = (props) => {

  const hidden = () => {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('hidden')
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Fer/DevJr</span>
      </div>
      <div className="block md:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                onClick={hidden}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <ul id="menu" className="w-full block flex-grow md:flex md:items-center md:w-auto hidden">
        {
          navItems.map((item, index) => (
            <li className="text-sm md:flex-grow" key={index}>
              <Link className="hover:bg-blue-400 block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4" to={item.href}>{item.caption}</Link>
            </li>
          ))

        }
      </ul>
    </nav>
  )
}

export default Nav;
