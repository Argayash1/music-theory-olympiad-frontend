import React from 'react';
import styles from './PrepMaterials.module.scss';
import { PrepAccordionMenu, SectionTitleContainer } from '../../components';
import { AudioPlayer } from '../AudioPlayer';
import { useAppDispatch } from '../../redux/store';
import { fetchPrepMaterials } from '../../redux/prepMaterial/asyncActions';

export const PrepMaterials = React.forwardRef<HTMLElement>((props, ref) => {
  const dispatch = useAppDispatch();

  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [audioSrc, setAudioSrc] = React.useState<string>('');

  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    dispatch(fetchPrepMaterials());
  }, [dispatch]);

  const handleTogglePlay = (audioUrl: string) => {
    setAudioSrc(audioUrl);
    setIsPlaying(!isPlaying);
    audioSrc && togglePlay();
  };

  const handlClearAudioSrc = () => {
    setAudioSrc('');
  };

  const togglePlay = () => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      if (audioPlayer.paused) {
        audioPlayer.play().catch((error) => console.error('Playback prevented:', error));
      } else {
        audioPlayer.pause();
      }
      setIsPlaying(!audioPlayer.paused);
    }
  };

  return (
    <section className={styles.root} id='prep-materials' ref={ref}>
      <SectionTitleContainer text='Материалы для подготовки' />
      <PrepAccordionMenu isPlaying={isPlaying} onTogglePlay={handleTogglePlay} />
      <AudioPlayer
        isPlaying={isPlaying}
        onSetIsPlaying={(isPlaying) => setIsPlaying(isPlaying)}
        src={audioSrc}
        onClearAudioSrc={handlClearAudioSrc}
        ref={audioRef}
        onTogglePlay={togglePlay}
      />
    </section>
  );
});
