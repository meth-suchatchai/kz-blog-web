'use client';

import { useRef, useState, useEffect } from 'react';

type MusicPlayerProps = {
  url: string;
};

export default function MusicPlayerIcon({ url }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMuted = () => {
    if (audioRef.current) {
      if (muted) {
        audioRef.current.muted = true;
      } else {
        audioRef.current.muted = false;
      }
      setMuted(!muted);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current
          .play()
          .catch((err) => console.error('Autoplay blocked:', err));
        setIsPlaying(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPlaying]);

  return (
    <div className="fixed right-5 top-5 rounded-full">
      <audio ref={audioRef} autoPlay loop muted={muted}>
        <source src={`${url}`} type="audio/mpeg" />
      </audio>
      <button onClick={() => toggleMuted()}>
        {muted ? 'UNMUTED' : 'MUTED'}
      </button>
    </div>
  );
}
