import type { ReactNode, ButtonHTMLAttributes } from 'react';

export default function Button({ 
  children, 
  className, 
  isFlex = false,
  ...props 
}: { children: ReactNode, isFlex?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center
        transition-all
        duration-300
        ${className || ''}
      `}
    >
      {/* Camada delicada de preenchimento */}
      <div 
        className="
          absolute 
          inset-0 
          bg-current 
          opacity-0 
          transition-opacity 
          duration-300 
          group-hover:opacity-[0.08]
          rounded-full
        " 
      />

      <span className={`
        ${isFlex ? 'flex items-center' : 'relative'} 
        z-10
      `}>
        {children}
      </span>
    </button>
  );
}