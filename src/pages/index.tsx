import { Inter } from '@next/font/google';
import Layout from '../components/LayoutSideBar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <div>Dashboard</div>
    </Layout>
  );
}
