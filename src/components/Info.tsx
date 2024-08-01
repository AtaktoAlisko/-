"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Info() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-08-15`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  type TimeLeft = {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        data-aos="fade-up"
        src="/decor.png"
        alt="decor"
        width={200}
        height={200}
        className="mx-auto w-[70%] -rotate-6"
      />
      <div data-aos="fade-up" className="my-4 font-xxx text-3xl text-[#846718]">
        Мекен-жайымыз:
      </div>
      <div
        data-aos="fade-up"
        className="mb-12 text-center font-georgia text-[22px] uppercase leading-relaxed"
      >
        Ақтөбе қаласы, <br /> Улица Герцена, 26 <br /> (Озёрная) “Дербес ” холы
      </div>
      <div
        data-aos="fade-up"
        className="mb-4 text-center font-georgia text-[19px] uppercase leading-relaxed"
      >
        Сізге жетуге ыңғайлы <br /> болу үшін картаны басыңыз!
      </div>
      <a href="https://2gis.kz/aktobe/firm/70000001032937199">
        <Image
          data-aos="fade-up"
          src="/2gis.jpeg"
          alt="2gis"
          width={60}
          height={60}
          className="mb-12 rounded-2xl"
        />
      </a>
      <div data-aos="fade-up" className="mb-4 font-xxx text-3xl text-[#846718]">
        Той иелері:
      </div>
      <div
        data-aos="fade-up"
        className="mb-2 font-xxx text-[30px] text-[#000000]"
      >
        Алибек && Мира
      </div>
      <Image
        data-aos="fade-up"
        src="/decor.png"
        alt="decor"
        width={200}
        height={200}
        className="mx-auto w-[70%] -rotate-6"
      />

      <div
        data-aos="fade-up"
        className="mb-10 flex items-center justify-center gap-16 font-georgia"
      ></div>
      <div className="relative flex h-[70vh] w-full justify-center bg-[url('/shanyraq.webp')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-10 flex flex-col items-center pt-10 text-center">
          <div className="mb-6 font-xxx text-2xl font-bold text-[#FFFACD] drop-shadow-md">
            Той салтанатына дейін:
          </div>
          <div className="flex space-x-10 font-comfortaa font-bold text-[#FFFACD] drop-shadow-md">
            <div className="flex flex-col items-center">
              <div className="text-4xl">{timeLeft.days}</div>
              <div className="text-md text-[#FFFACD]">күн</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl">{timeLeft.hours}</div>
              <div className="text-md text-[#FFFACD]">сағат</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl">{timeLeft.minutes}</div>
              <div className="text-md text-[#FFFACD]">минут</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl">{timeLeft.seconds}</div>
              <div className="text-md text-[#FFFACD]">секунд</div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/decor.png"
        alt="decor"
        width={200}
        height={200}
        className="mx-auto w-[70%] -rotate-[190deg]"
      />
    </div>
  );
}
