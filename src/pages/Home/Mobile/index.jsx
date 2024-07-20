import React from "react";
import { Divider, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { Primary, Secondary } from "@/UI";
import { TutorCard, CourseCard } from "@/components";
import { arrowWhite, forChild, tutor, arrowCourseCard, mobileImg } from "@/assets";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MobileHome = () => {
  const settings = {
    dots: false,
    center: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const settings2 = {
    dots: true,
    arrows: false,
    center: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const info = {
    name: "Smith",
    country: "UK",
    rating: 5,
  };

  const reviews = {
    img: "https://picsum.photos/200/300",
    name: "Munisa",
    country: "UK",
    review:
      "I have experienced a growth in my confidence as an English-speaker, with a host of idioms now at my disposal. No matter where you come from or who you are,   edu-bilim will be your best companion on journey toward better English",
  };

  const course = {
    name: 'John Doe',
    img: 'https://picsum.photos/305/320',
    country: 'USA',
    rating: 4.5,
    title: 'Basic Conversation Topics',
    degree: 'Beginner',
    lessonsCount: '12'
  };

  const a = Array.from({ length: 8 }, () => Math.random());
  const c = Array.from({ length: 4 }, () => Math.random());

  return (
    <>
      <div className="flex flex-col">
        <h2 className="uppercase max-w-[670px] font-[800] leading-[54px] mb-2 text-[44px]">
          Qulay va sifatli o'rganing!
        </h2>
        <img src={mobileImg} alt="Introduce Photo" />
        <h3 className="max-w-[340px] mt-5 text-base text-gray-CCC mb-4">
          O'z ishida usta, ko'p yillik tajribaga ega ustozlardan dars olishingiz uchun xizmatdamiz.
        </h3>
        <Link to="/teachers">
          <Secondary icon={arrowWhite}>
            Birinchi dars siz uchun bepul
          </Secondary>
        </Link>
      </div>
      <Divider />
      <Slider {...settings2}>
        {c.map(i => (
          <TutorCard key={i} info={info} />
        ))}
      </Slider>
      <p className="text-[32px] max-w-[250px] font-extrabold mt-[40px] leading-[40px]">
        Eng yaxshi ustozlarda tahsil oling
      </p>
      <p className="max-w-[340px] mt-5 text-base text-gray-CCC mb-4">
        Doim siz kutgan natijani berishga tayyor ustozlardan kurslarni sinab ko'ring!
      </p>
      <Link to="/teachers">
        <Secondary icon={arrowWhite}>
          Bepul sinov muddatini boshlash
        </Secondary>
      </Link>
      <Divider className="mt-[70px]" />
      <div className="grid-template">
        {a.map(i => (
          <CourseCard course={course} key={i} />
        ))}
      </div>
      <p className="main-title mt-10 leading-[48px]">
        Siz xohlagan darajadagi kurslar
      </p>
      <p className="max-w-[340px] mt-5 text-base text-gray-CCC mb-4">
      Akademik testlarga tayyorgarlik, biznes, ingliz tili, intervyu amaliyoti va boshqalar
      </p>
      <Link to="/courses">
        <Secondary icon={arrowWhite}>
          Hamma kurslar
        </Secondary>
      </Link>
      <Slider className="mt-20" {...settings}>
        {c.map((i) => (
          <div key={i} className="slide">
            <div className="flex-center gap-5">
              <img src={reviews?.img} alt="Student's avatar" />
              <div>
                <h4>{reviews?.name}</h4>
                <p>{reviews?.country}</p>
              </div>
            </div>
            <Divider className="my-5" />
            <p className="text-base leading-6 text-gray-800">
              "{reviews?.review}"
            </p>
          </div>
        ))}
      </Slider>
      <p className="main-title leading-[48px] mt-28 mb-3">
        Bugundanmi yoki bugun dammi?
      </p>
      <h3 className="text-base text-[#5C5C5C] mb-4">
        Bugunoq o'z kelajagingiz uchun birinchi qadamni bosing. Qani kettik!
      </h3>
      <Link to="#">
        <Secondary icon={arrowWhite}>
          Bepul sinov muddatini boshlash
        </Secondary>
      </Link>
      <div className="bg-[#E6E6E6] mt-20 p-6 rounded-2xl flex-col justify-center items-center">
        <img src={forChild} alt="" />
        <div className="flex-col">
          <h3 className="font-semibold text-[20px] mt-4 text-[#5C5C5C]">
            Farzandingizning porloq kelajagini bizga ishonib topshiring!
          </h3>
          <Link to="/sign-in" className="flex justify-between gap-2 mt-5">
            <Primary className="white-btn text-[#1A1A1A] w-full font-medium border-none justify-center !py-1 !px-10">
              Bolalar uchun kurslar
            </Primary>
            <Primary className="white-btn border-none !p-3">
              <img src={arrowCourseCard} alt="Icon" />
            </Primary>
          </Link>
        </div>
      </div>
      <div className="flex-col mt-10">
        <img src={tutor} alt="Tutor" />
        <div>
          <h3 className="text-4xl font-extrabold mt-10 mb-3">Become a tutor</h3>
          <p className="maxtext-base text-[#5C5C5C] mb-[44px]">
            Dunyo bo'ylab 1000dan ortiq o'zbeklarga masofadan turib o'z bilim va tajribalaringizni ulashing.
          </p>
          <Link to="/sign-up/teacher">
            <Secondary icon={arrowWhite}>
              Boshlash
            </Secondary>
          </Link>
        </div>
      </div>
    </>
  )
};
