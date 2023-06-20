import { ReactNode } from 'react';

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return <div className='min-h-screen container'>{children}</div>;
}
