import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/pages/components/Layout';
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

const fetcher = async (...args: [RequestInfo, RequestInit?]) => {
  const response = await fetch(...args);

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return response.json();
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}
