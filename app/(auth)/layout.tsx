import '@/app/globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import ThemeWrapper from '@/app/providers';
import { inter } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Create User App',
  description: 'Generated by create user app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={cn(inter.className)}>
        <ThemeWrapper>
          <main>{children}</main>
          <Toaster />
        </ThemeWrapper>
      </body>
    </html>
  );
}