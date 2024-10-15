import { type FC, type PropsWithChildren, type ReactNode } from 'react';
import { type AppProps } from 'next/app';
import 'nextra-theme-docs/style.css';
import '../styles.css';

type Props = AppProps & {
  Component: {
    Layout?: FC<{
      children: ReactNode;
    }>;
  };
};

const Noop: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

export default function App({ Component, pageProps: { ...pageProps } }: Props) {
  const Layout = Component['Layout'] || Noop;

  return (
    <Layout>
      <Component {...pageProps} className="bg-slate-850" />
    </Layout>
  );
}
