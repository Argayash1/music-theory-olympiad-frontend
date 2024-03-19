import React from 'react';
import styles from './PrepMaterials.module.scss';
import { PrepAccordionMenu, SectionTitle, AudioPlayer } from '../../components';
import { useAppDispatch } from '../../redux/store';
import { fetchPrepMaterials } from '../../redux/prepMaterial/asyncActions';
import { menuItems } from '../../utils/menuItems';
import { selectAudioData } from '../../redux/audio/selectors';
import { useSelector } from 'react-redux';
import { setAudioItem, setIsAudioLoaded, setIsPlaying } from '../../redux/audio/slice';

export const PrepMaterials = React.forwardRef<HTMLElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const { audioItem, isPlaying, isAudioLoaded } = useSelector(selectAudioData);

  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    dispatch(fetchPrepMaterials());
  }, [dispatch]);

  const handleTogglePlay = (audioUrl: string, title: string, author: string) => {
    if (audioUrl !== audioItem.audioUrl) {
      const audioPlayer = audioRef.current;
      if (audioPlayer) {
        audioPlayer.pause();
        dispatch(setIsPlaying(true));
        dispatch(setIsAudioLoaded(false));
        dispatch(setAudioItem({ audioUrl, title, author }));
      }
    }
    audioItem.audioUrl && togglePlay(audioUrl !== audioItem.audioUrl ? 'prep' : '');
  };

  const togglePlay = (place: string) => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      if (isPlaying) {
        audioPlayer.pause();
      } else {
        audioPlayer.play();
      }
      !place && dispatch(setIsPlaying(!isPlaying));
    }
  };

  return (
    <section className={styles.root} id='prep-materials' ref={ref}>
      <SectionTitle text={menuItems[2].name} />
      <PrepAccordionMenu onTogglePlay={handleTogglePlay} />
      <AudioPlayer
        isPlaying={isPlaying}
        onSetIsPlaying={(isPlaying) => dispatch(setIsPlaying(isPlaying))}
        src={audioItem.audioUrl}
        title={audioItem.title}
        author={audioItem.author}
        onClearAudioData={() => dispatch(setAudioItem({ audioUrl: '', title: '', author: '' }))}
        ref={audioRef}
        onTogglePlay={() => togglePlay('')}
        isAudioLoaded={isAudioLoaded}
        onSetIsAudioLoaded={(isAudioLoaded) => dispatch(setIsAudioLoaded(isAudioLoaded))}
      />
    </section>
  );
});
