import React, { HTMLAttributes } from 'react';
import Title from '@/components/Typrography/Title';

type PixelCardProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  size: string | 'full';
  enabledHover?: boolean;
  children: React.ReactNode;
};

const PixelCard: React.FC<PixelCardProps> = ({
  title,
  size,
  enabledHover = false,
  children,
  ...props
}) => {
  const getCssSize = (size: string | 'full') => {
    if (size === 'full') {
      return 'w-full';
    } else {
      return `${size}`;
    }
  };

  const getCssHoverShadow = (enabledHover: boolean) => {
    if (enabledHover) {
      return 'hover:shadow-[8px_8px_0px_black,12px_12px_0px_gray,0px_0px_8px_cyan]';
    }

    return '';
  };

  return (
    <div
      {...props}
      className={`bg-white p-4 border-4 m-4 border-black shadow-[8px_8px_0px_black,12px_12px_0px_gray] font-pixel text-center transition-all duration-200 ${getCssSize(size)} ${getCssHoverShadow(enabledHover)} ${props.className}`}
    >
      <div>
        <Title className="mb-2 text-black" value={title} size="xl" />
        {children}
      </div>
    </div>
  );
};

export default PixelCard;
