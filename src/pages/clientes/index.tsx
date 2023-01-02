import { Inter } from '@next/font/google';
import Layout from '../../components/screen/LayoutSideBar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <div>
        <h2>Clientes</h2>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginRight: '4px',
        }}
      >
        <div
          style={{
            border: 'solid 1px',
          }}
        >
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingLeft: '10px',
              paddingRight: '10px',
              alignItems: 'center',
              textAlign: 'justify',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim
            veniam
          </p>
        </div>
        <div
          style={{
            border: 'solid 1px',
            marginLeft: '10px',
          }}
        >
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
              paddingLeft: '10px',
              paddingRight: '10px',
              alignItems: 'center',
              textAlign: 'justify',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim
            veniam
          </p>
        </div>
      </div>
    </Layout>
  );
}
