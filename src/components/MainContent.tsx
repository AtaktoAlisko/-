"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import BootstrapCarousel from "./BootstrapCarousel";

export default function MainContent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mb-10 mt-12 flex flex-col items-center justify-center text-center">
      <BootstrapCarousel />
      <div
        data-aos="fade-up"
        className="my-8 text-center font-xxx text-xl leading-loose text-[#98761A]"
      >
        Мектепке келіп ең алғаш, <br />
        Таныстым Ұстаз-Анамен. <br />
        Тәртіпті, жақсы оқитын, <br />
        Оқушы болам мына мен!
      </div>
      <div
        data-aos="fade-up"
        className="mb-8 text-center font-georgia text-[22px] uppercase leading-relaxed text-[#090909]"
      >
        Құрметті ағайын-туыс <br />
        бауырлар, құда-жекжат, <br /> нағашы-жиен, бөлелер, <br /> дос-жараңдар,
        көршілер!
      </div>
      <div
        data-aos="fade-up"
        className="mb-8 text-center font-georgia text-[22px] uppercase leading-relaxed text-[#090909]"
      >
        сіз(дер)ді <br /> қызымыз
      </div>
      <div data-aos="fade-up" className="mb-8 font-xxx text-4xl text-[#98761A]">
        Айшаның
      </div>
      <div
        data-aos="fade-up"
        className="mb-8 text-center font-georgia text-[22px] uppercase leading-relaxed text-[#090909]"
      >
        Тілашар тойына <br /> арналған салтанатты <br /> ақ дастарханымыздың{" "}
        <br />
        қадірлі қонағы болуға <br />
        шақырамыз!
      </div>
      <div className="relative mx-10 mb-16 flex h-[60vh] w-[80%] flex-col items-center rounded-xl bg-[url('/girl.webp')] bg-cover bg-center bg-no-repeat">
        <div className="pt-8 font-xxx text-3xl text-[#846718]">
          Той Салтанаты:
        </div>
        <div className="flex flex-col items-center pt-8 text-center uppercase text-[#846718]">
          <div data-aos="flip-up" className="font-georgia text-2xl">
            тамыз
          </div>
          <div
            data-aos="flip-up"
            className="pb-4 font-georgia text-7xl font-bold"
          >
            15
          </div>
          <div data-aos="flip-up" className="font-georgia text-2xl">
            2024 жыл
          </div>
          <div className="absolute bottom-8 flex flex-col text-[#846718]">
            <div className="font-xxx text-3xl capitalize">Басталуы:</div>
            <div
              data-aos="flip-up"
              data-os-easing="ease-out-cubic"
              className="font-georgia text-7xl font-bold"
            >
              18:00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
