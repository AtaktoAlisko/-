"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const music = "/music/music.mp3";

export default function MainPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(music);
  }, []);

  const play = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="] relative flex h-screen w-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat font-xxx ">
      <Image
        className="mb-[30px] mt-[-250px] rounded-2xl"
        src="/han.jpeg"
        alt="han"
        width={250}
        height={250}
      />

      <div className="flex flex-col items-center gap-14">
        <div className="mt-10 text-5xl font-bold text-[#9F751C]">Айша </div>
        <div className="mt-[-10px] text-3xl text-[#A27821]">Тілашар</div>
      </div>
      <div className="absolute bottom-5">
        <div className="relative flex items-center justify-center">
          <Image
            src="/mus-bg.png"
            alt="music"
            width={90}
            height={90}
            priority
            className="animate-spin-slow"
          />
          <button
            onClick={play}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/mus.webp"
              alt="music"
              width={50}
              height={50}
              className={`${isPlaying ? "animate-spin-slowly" : ""}`}
            />
          </button>
        </div>
        <div className="relative mb-5 mt-[-30px] flex rotate-90 items-center justify-center">
          <div className="h-36 border-[0.5px] border-[#CC9B33]"></div>
          <div className="absolute h-3 w-3 rounded-[50%] bg-[#CC9B33]"></div>
          <div className="absolute left-8 -rotate-90 text-2xl text-[#CC9B33]">
            15/08/2024
          </div>
        </div>
      </div>
    </div>
  );
}
