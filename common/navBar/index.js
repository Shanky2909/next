import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  console.log(router.pathname, 'query');
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark static-top'>
        <div className='container'>
          <Link className='navbar-brand' href='/'>
            <Image
              src='/images/site/devPedia.png'
              alt='...'
              width={80}
              height={80}
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className={`${
              isExpanded ? 'expanded' : 'collapse'
            } navbar-collapse`}
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    router.pathname === '/' ? 'active' : ''
                  }`}
                  aria-current='page'
                  href='/'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    router.pathname === '/blogs' ? 'active' : ''
                  }`}
                  href='/blogs'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Blogs
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    router.pathname === '/contactUs' ? 'active' : ''
                  }`}
                  href='/contactUs'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
