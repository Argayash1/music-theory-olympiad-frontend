import React from 'react';
import { Footer, Header, Main } from '../components';

const Home = () => {
  const [activeSection, setActiveSection] = React.useState<string>('');

  return (
    <div>
      <Header activeSection={activeSection} />
      <Main onSetActiveSection={(sectionId: string) => setActiveSection(sectionId)} />
      <Footer />
    </div>
  );
};

export default Home;
