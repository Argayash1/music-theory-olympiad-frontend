import React from 'react';
import styles from './PrepMaterials.module.scss';
import { PrepAccordionMenu, SectionTitle } from '../../components';
import { AudioPlayer } from '../AudioPlayer';
import { useAppDispatch } from '../../redux/store';
import { fetchPrepMaterials } from '../../redux/prepMaterial/asyncActions';
import { menuItems } from '../../utils/menuItems';

interface IAudioData {
  audioUrl: string;
  title: string;
  author: string;
}

export const PrepMaterials = React.forwardRef<HTMLElement>((props, ref) => {
  const dispatch = useAppDispatch();

  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [audioData, setAudioData] = React.useState<IAudioData>({ audioUrl: '', title: '', author: '' });

  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    dispatch(fetchPrepMaterials());
  }, [dispatch]);

  const handleTogglePlay = (audioUrl: string, title: string, author: string) => {
    console.log(audioUrl !== audioData.audioUrl);
    // if (audioUrl !== audioSrc) {
    setAudioData({ audioUrl, title, author });
    // }
    setIsPlaying(!isPlaying);
    audioData.audioUrl && audioUrl !== audioData.audioUrl && togglePlay();
  };

  const togglePlay = () => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className={styles.root} id='prep-materials' ref={ref}>
      <SectionTitle text={menuItems[2].name} />
      <PrepAccordionMenu isPlaying={isPlaying} onTogglePlay={handleTogglePlay} />
      <AudioPlayer
        isPlaying={isPlaying}
        onSetIsPlaying={(isPlaying) => setIsPlaying(isPlaying)}
        src={audioData.audioUrl}
        title={audioData.title}
        author={audioData.author}
        onClearAudioData={() => setAudioData({ audioUrl: '', title: '', author: '' })}
        ref={audioRef}
        onTogglePlay={togglePlay}
      />
    </section>
  );
});
