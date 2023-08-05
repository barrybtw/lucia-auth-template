'use client';

import { bodoni_moda } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import {
  motion,
  useTransform,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
export default function HeroTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { scrollYProgress } = useScroll();
  const marginLeft = useTransform(scrollYProgress, [0, 1], ['5%', '35%']);
  return (
    <h1
      className={cn(
        bodoni_moda.className,
        'break-all text-5xl sm:text-7xl lg:text-9xl w-full leading-[1.15] md:leading-[1.25] lg:leading-[1.35] uppercase',
      )}
    >
      <motion.span style={{ marginLeft }}>J</motion.span>
      ust simple and elegant authentication in your hands
    </h1>
  );
}
