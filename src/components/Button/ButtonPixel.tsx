'use client';

import { ButtonHTMLAttributes } from 'react';

type ButtonPixelProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  color?: 'default' | 'primary' | 'danger' | 'success' | 'warning';
  full?: boolean;
};

export default function ButtonPixel({
  color = 'default',
  full = false,
  children,
  ...props
}: ButtonPixelProps) {
  const setColor = (
    color: 'default' | 'primary' | 'danger' | 'success' | 'warning'
  ) => {
    let selectorClass = '';
    switch (color) {
      case 'primary':
        selectorClass = 'bg-primary';
        break;
      case 'danger':
        selectorClass =
          'bg-red-300 text-white shadow-[4px_4px_0px_rgba(255,162,162,1)] active:shadow-[2px_2px_0px_rgba(255,162,162,1)]';
        break;
      default:
        selectorClass =
          'bg-black text-white shadow-[4px_4px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]';
        break;
    }

    return selectorClass;
  };

  const setFull = (full: boolean) => {
    if (full) {
      return 'w-full';
    }
    return '';
  };

  return (
    <button 
     className={`relative cursor-pointer px-5 py-1.5 font-bold border-4 border-white transition-all ${setColor(color)} ${setFull(full)}`}
      {...props}
    >
      {children}
    </button>
  );
}
