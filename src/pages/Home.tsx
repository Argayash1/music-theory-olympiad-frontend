import React from 'react';
import { Footer, Header, Main } from '../components';
import { useDispatch } from 'react-redux';
import { setScreenWidth } from '../redux/olympData/slice';

const Home = () => {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = React.useState<string>('');

  React.useEffect(() => {
    const handleResize = () => {
      dispatch(setScreenWidth(window.screen.width));
    };

    handleResize();

    let timeoutId: NodeJS.Timeout;

    const delayedHandleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        handleResize();
      }, 500);
    };

    window.addEventListener('resize', delayedHandleResize);

    return () => {
      window.removeEventListener('resize', delayedHandleResize);
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  return (
    <div>
      <Header activeSection={activeSection} />
      <Main onSetActiveSection={(sectionId: string) => setActiveSection(sectionId)} />
      <Footer />
    </div>
  );
};

export default Home;
