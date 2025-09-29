import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { RoleAccess } from '@/components/RoleAccess';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <Features />
      <RoleAccess />
      <Footer />
    </Layout>
  );
};

export default Index;
