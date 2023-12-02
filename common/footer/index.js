import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Fragment } from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <Fragment>
      <div
        className='text-center p-3'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        <div>
          <Link
            type='button'
            className='btn btn-floating btn-light btn-lg'
            href=''
          >
            <FacebookIcon />
          </Link>
          <Link
            type='button'
            className='btn btn-floating btn-light btn-lg'
            href=''
          >
            <TwitterIcon />
          </Link>
          <Link
            type='button'
            className='btn btn-floating btn-light btn-lg'
            href=''
          >
            <InstagramIcon />
          </Link>
        </div>
        © 2023 Copyright:
        <Link className='text-white' href=''>
          devpedia.com
        </Link>
      </div>
    </Fragment>
  );
};

export default Footer;
