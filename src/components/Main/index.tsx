import React from 'react';
import styles from './Main.module.scss';
import { AboutMusOlymp, Adverts, Archive, BrandBunner, Jury, PrepMaterials, Results } from '../../components';

type MainProps = {
  activeSection: string;
  onSetActiveSection: (sectionId: string) => void;
};

type Section = HTMLElement | null;

export const Main = ({ activeSection, onSetActiveSection }: MainProps) => {
  const brandBunnerRef = React.useRef<HTMLElement>(null);
  const aboutMusOlympRef = React.useRef<HTMLElement>(null);
  const advertsRef = React.useRef<HTMLElement>(null);
  const prepMaterialsRef = React.useRef<HTMLElement>(null);
  const archiveRef = React.useRef<HTMLElement>(null);
  const resultsRef = React.useRef<HTMLElement>(null);
  const juryRef = React.useRef<HTMLElement>(null);

  const sectionsRef = React.useRef<Section[]>([]);

  React.useEffect(() => {
    sectionsRef.current = [
      brandBunnerRef.current,
      aboutMusOlympRef.current,
      advertsRef.current,
      prepMaterialsRef.current,
      archiveRef.current,
      resultsRef.current,
      juryRef.current,
    ];
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current?.forEach((sectionRef) => {
        const section = sectionRef;
        if (section) {
          const rect = section.getBoundingClientRect();
          const top = rect.top;
          const height = window.innerHeight;
          const id = section.id;

          if (top <= height / 2) {
            onSetActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onSetActiveSection]);

  return (
    <main className={styles.root}>
      <BrandBunner ref={brandBunnerRef} />
      <AboutMusOlymp ref={aboutMusOlympRef} />
      <Adverts ref={advertsRef} />
      <PrepMaterials ref={prepMaterialsRef} />
      <Archive ref={archiveRef} />
      <Results ref={resultsRef} />
      <Jury ref={juryRef} />
    </main>
  );
};
