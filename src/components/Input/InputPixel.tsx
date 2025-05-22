'use client';
import { InputHTMLAttributes } from 'react';

type InputPixelProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function InputPixel({ label, ...props }: InputPixelProps) {
  return (
    <div className="space-x-2">
      <div>
        <label className="normal-text text-md" htmlFor={props.id}>
          {label}
        </label>
      </div>
      <input
        className={`${props.className} px-4 py-2 bg-white text-black font-mono border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:outline-none transition-all`}
        {...props}
      />
    </div>
  );
}
