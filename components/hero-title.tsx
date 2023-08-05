'use client';

import { bodoni_moda } from '@/lib/fonts';
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
    >
      <span className={cn(`ml-[15%] md:ml-[35%]`)}>J</span>
      ust simple and elegant authentication in your hands
    </h1>
  );
}
