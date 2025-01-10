import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import WriteArticle from '../WriteArticle'

// import MenuSvg from "../assets/svg/MenuSvg";
// import { HamburgerMenu } from "./design/Header";

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm'>
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <a className='block w-[12rem] xl:mr-8' href=''>
          <img src='./src/assets/articlesymbol.svg' width={60} height={30} alt='ArticleHub' className='mt-5 mb-5'/>
        </a>

        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">

          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            <ul className="flex justify-between gap-4 lg:gap-16">
              <li>
              <a
  href="#about"
  className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
>
  About
</a>
              </li>
              <li>
              <a
  href="#view-articles"
  className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
>
  View Articles
</a>

              </li>
              <li>
                <Link
                  to="/write-article"
                  className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
                >
                  Write One
                </Link>

              </li>
            </ul>
          </div>

        </nav>

        <a href='#signup' className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'>
          New Account
        </a>

        <Button className='hidden lg:flex href="#login"'> Sign In

        </Button>
      </div>
    </div>
  )
}

export default Navbar