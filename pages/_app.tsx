import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import AppShellMantine from '../components/AppShellMantine';

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <AppShellMantine>
          <Component {...pageProps} />
        </AppShellMantine>
      </MantineProvider>
    </>
  );
}

export default App