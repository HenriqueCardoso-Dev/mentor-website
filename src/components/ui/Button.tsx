import type { ReactNode, ButtonHTMLAttributes } from 'react';

export default function Button({ children, className }: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={className}>
      {children}
    </button>
  )
}