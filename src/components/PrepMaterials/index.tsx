import React from 'react';
import styles from './PrepMaterials.module.scss';
import { PrepAccordionMenu, SectionTitleContainer } from '../../components';
import { AudioPlayer } from '../AudioPlayer';

export const PrepMaterials = React.forwardRef<HTMLElement>((props, ref) => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [audioSrc, setAudioSrc] = React.useState<string>('');

  const handleTogglePlay = (audioUrl: string) => {
    setAudioSrc(audioUrl);
    setIsPlaying(!isPlaying);
  };

  return (
    <section className={styles.root} id='prep-materials' ref={ref}>
      <SectionTitleContainer text='Материалы для подготовки' />
      <PrepAccordionMenu isPlaying={isPlaying} onTogglePlay={handleTogglePlay} />
      {/* @ts-ignore */}
      <AudioPlayer isPlaying={isPlaying} onSetIsPlaying={(isPlaying) => setIsPlaying(isPlaying)} src={audioSrc} />
    </section>
  );
});
