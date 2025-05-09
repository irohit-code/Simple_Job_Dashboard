'use client';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

export default function Providers({ children }) {
  return (
    <MantineProvider defaultColorScheme="light" withGlobalStyles withNormalizeCSS>
      <ModalsProvider>
        {children}
      </ModalsProvider>
    </MantineProvider>
  );
}
