'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';
import { NAVBAR_LINKS } from '@/config';
import NavItem from './NavItem';

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const isAnyOpen = activeIndex !== null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      }
    };

    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    }
  }, []);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {NAVBAR_LINKS.map((link, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = i === activeIndex;

        return (
          <NavItem
            key={link.value}
            category={link}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
