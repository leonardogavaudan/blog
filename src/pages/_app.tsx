import { Layout } from '../components/layout';
import '../src/styles/globals.css';

interface props {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: props) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
