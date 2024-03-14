export interface IAudioItem {
  audioUrl: string;
  title: string;
  author: string;
}

export interface IAudioSliceState {
  audioItem: IAudioItem;
  isAudioLoaded: boolean;
  isPlaying: boolean;
}
