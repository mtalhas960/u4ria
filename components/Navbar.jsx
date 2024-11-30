'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import { RiMenuLine, RiCloseLargeLine } from "@remixicon/react";

const Navbar = () => {
  const pathname = usePathname();
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (isAsideOpen && !e.target.closest('#sideNav') && !e.target.closest('header button')) {
        closeAside();
      }
    });
    return () => {
      window.removeEventListener('click', (e) => {
        if (isAsideOpen && !e.target.closest('#sideNav') && !e.target.closest('header button')) {
          closeAside();
        }
      });
    };
  }, [isAsideOpen]);

  const closeAside = () => {
    setIsAsideOpen(false);
  };
  const openAside = () => {
    setIsAsideOpen(true);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3">
          <div className="container-fluid align-items-center gap-4">
            <Link className="nav-logo" href="/">
              <figure>
                <img src="/logo.png" alt="logo" />
              </figure>
            </Link>
            <div className="d-flex gap-3 gap-xl-4">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav d-flex justify-content-center align-items-center gap-2 gap-xl-3">
                  <li className="nav-item px-2">
                    <Link className={`nav-link p-0 pb-1${pathname === '/' ? ' active' : ""}`} href="/" >
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item px-2">
                    <Link className={`nav-link p-0 pb-1${pathname.includes('/features') ? ' active' : ""}`} href="/features" >
                      FEATURES
                    </Link>
                  </li>
                  <li className="nav-item px-2">
                    <Link className={`nav-link p-0 pb-1${pathname.includes('/pricing') ? ' active' : ""}`} href="/pricing" >
                      PRICING
                    </Link>
                  </li>
                  <li className="nav-item px-2">
                    <Link className={`nav-link p-0 pb-1${pathname.includes('/blogs') ? ' active' : ""}`} href="/blogs" >
                      BLOGS
                    </Link>
                  </li>
                  <li className="nav-item px-2">
                    <Link className={`nav-link p-0 pb-1${pathname.includes('/retreats') ? ' active' : ""}`} href="/retreats" >
                      RETREATS
                    </Link>
                  </li>
                  <li className="nav-item px-2">
                    <Link className={`nav-link p-0 pb-1${pathname.includes('/contact') ? ' active' : ""}`} href="/contact" >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link href="https://apps.apple.com/ca/app/u4ria/id6466178488" target='_blank' className="hover1">Try App for free</Link>
              </div>
              <button onClick={openAside} type="button" aria-label="openSide">
                <RiMenuLine />
              </button>
            </div>
          </div>
        </nav>

        <aside>
          <div id="sideNav" className='position-fixed top-0' style={{ left: isAsideOpen ? '0px' : '-355px' }}>
            <div className="d-flex nav-logo justify-content-between align-items-baseline w-100">
              <figure className="navbar-brand">
                <Link href="/">
                  <figure>
                    <img src="/logo.png" alt="logo" />
                  </figure>
                </Link>
              </figure>
              <button onClick={closeAside} aria-label="closeSide">
                <RiCloseLargeLine />
              </button>
            </div>
            <ul>
              <li className="nav-item">
                <Link href='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/'>
                  FEATURES
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/'>
                  PRICING
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/'>
                  BLOGS
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/'>
                  RETREATS
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/'>
                  CONTACTS
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;