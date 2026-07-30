import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router';
import HeartTransition from '../components/HeartTransition';

const Layout = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log("Playback blocked:", err);
        });
      }
      document.removeEventListener("click", playMusic);
    };

    document.addEventListener("click", playMusic);

    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, []);

  return (
    <>
      <HeartTransition />
      <Outlet />

      <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Layout;