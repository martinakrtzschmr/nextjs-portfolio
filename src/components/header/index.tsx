import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { Icons } from '../icons';
import NavItems from '../NavItems/intex';

const Header = () => {
  // Component logic goes here

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200 ">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile Nav */}

              <div className="ml-4 flex lg:ml-0">
                <Icons.home className='h-10 w-10' />
              </div>
              <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Header;
