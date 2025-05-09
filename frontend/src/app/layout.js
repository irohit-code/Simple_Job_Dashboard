// NO 'use client' here
import '@mantine/core/styles.css';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'Job Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
