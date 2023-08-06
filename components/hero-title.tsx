'use client';

import { bodoni_moda, inter } from '@/lib/fonts';
import { cn } from '@/lib/utils';
export default function HeroTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <h1
      className={cn(
        bodoni_moda.className,
        'break-all text-5xl sm:text-7xl lg:text-9xl w-full leading-[1.2] md:leading-[1.25] lg:leading-[1.35] uppercase',
      )}
      {...props}
    >
      <span className={cn(`ml-[15%] md:ml-[35%]`)}>J</span>
      ust simple and elegant{' '}
      <span
        className={cn(
          'bg-gradient-to-r bg-clip-text text-transparent bg-opacity-0 from-indigo-400 to-emerald-400',
        )}
      >
        authentication
      </span>{' '}
      in your hands
    </h1>
  );
}
