import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

export const metadata = {
  title: 'Job Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
