import React from "react";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import { Primary, Secondary } from "@/UI";
import { TutorCard, CourseCard } from "@/components";
import { intro, arrowWhite, forChild, arrowCourseCard, tutor, mobileImg } from "@/assets";
import { useMedia } from "src/libs/hooks";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MobileHome } from "./Mobile";

export default function Home() {
  const { isSmallMobile, isTablet } = useMedia()

  const teachers = [
    { name: "David Clark", experience: "5", rating: "5", img: "https://bit.ly/4cFLpTw" },
    { name: "Robert Harris", experience: "3", rating: "4", img: "https://bit.ly/3W6MKf7" },
    { name: "James Evans", experience: "2", rating: "4", img: "https://bit.ly/3zMF1LL" },
    { name: "Laura Johnson", experience: "1", rating: "3", img: "https://bit.ly/3zI5M3M" },
    { name: "Matthew Parker", experience: "1", rating: "3", img: "https://bit.ly/3y0bBcw" },
  ]

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
  };

  return (
    <>
      {isSmallMobile ? <MobileHome />
        :
        <>
          <div className="lg:flex md:flex sm:flex sm:items-start sm:justify-center items-start pt-[30px] justify-between">
            <div className="sm:flex-col items-center w-full">
              <h2 className="uppercase text-4xl lg:leading-[70px] md:leading-[55px] mb-9 lg:text-6xl sm:text-3xl md:text-4xl">
                Biz bilan Qulay va sifatli o'rganing!
              </h2>
              <div>
                <h3 className="max-w-[340px] text-base text-gray-CCC mb-4">
                  O'z ishida usta, ko'p yillik tajribaga ega ustozlardan dars olishingiz uchun xizmatdamiz.
                </h3>
                <Link to="/courses">
                  <Secondary w={"!w-[313px]"} icon={arrowWhite}>
                    Birinchi dars siz uchun bepul
                  </Secondary>
                </Link>
              </div>
            </div>
            <img className="object-contain md:hidden w-full" src={mobileImg} alt="Introduce Photo" />
            <img className="object-contain hidden md:block lg:max-w-[571px] md:max-w-[450px]" src={intro} alt="Introduce Photo" />
          </div>

          <Divider className="mt-[132px] mb-5" />
          <div className="flex-template">
            {teachers.map(i => (
              <TutorCard key={i} name={i.name} experience={i.experience} rating={i.rating} img={i.img} />
            ))}
          </div>

          <div className="mt-[180px] flex sm:flex-row flex-col justify-evenly items-start gap-4">
            <p className="main-title max-w-[500px] leading-[50px]">
              Eng yaxshi ustozlarda tahsil oling
            </p>
            <div>
              <h3 className="max-w-[340px] text-base text-[#5C5C5C] mb-4">
                Doim siz kutgan natijani berishga tayyor ustozlardan kurslarni sinab ko'ring!
              </h3>
              <Link to="/teachers">
                <Secondary w={"!w-[313px]"} icon={arrowWhite}>
                  Bepul sinov muddatini boshlash
                </Secondary>
              </Link>
            </div>
          </div>

          <Divider className="mt-[132px] mb-5" />
          <div className="grid-template">
            {a.map(i => (
              <CourseCard course={course} key={i} />
            ))}
          </div>

          <div className="mt-[80px] mb-[132px] flex sm:flex-row flex-col justify-evenly items-start gap-4">
            <p className="main-title max-w-[474px] leading-[50px]">
              Siz xohlagan darajadagi kurslar 
            </p>
            <div>
              <h3 className="max-w-[365px] text-base text-[#5C5C5C] mb-4">
              Akademik testlarga tayyorgarlik, biznes, ingliz tili, intervyu amaliyoti va boshqalar
              </h3>
              <Link to="/courses">
                <Secondary w={"!w-[313px]"} icon={arrowWhite}>
                  Hamma kurslar
                </Secondary>
              </Link>
            </div>
          </div>

          <Divider className="mt-[132px] mb-5" />
          <Slider {...settings}>
            {c.map(i => (
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
                  {reviews?.review}
                </p>
              </div>
            ))}
          </Slider>

          <div className="mt-[150px] mb-[132px] flex sm:flex-row flex-col justify-evenly items-start gap-4">
            <p className="main-title max-w-[400px] leading-[50px]">
              Bugundanmi yoki bugun dammi?
            </p>
            <div>
              <h3 className="max-w-[315px] text-base text-[#5C5C5C] mb-4">
                Bugunoq o'z kelajagingiz uchun birinchi qadamni bosing. Qani kettik!
              </h3>
              <Link to="/tutor">
                <Secondary w={"!w-[385px]"} icon={arrowWhite}>
                  Bepul sinov muddatini boshlash
                </Secondary>
              </Link>
            </div>
          </div>

          <div className="bg-[#E6E6E6] py-9 px-[52px] rounded-2xl flex md:flex-row flex-col justify-evenly items-start gap-[85px]">
            <img src={forChild} alt="" />
            <div>
              <h3 className="font-semibold text-2xl sm:text-3xl text-[#5C5C5C]">
                Farzandingizning porloq kelajagini bizga ishonib topshiring!
              </h3>
              <Link to="/courses" className="flex gap-2 mt-5">
                <Primary className="white-btn text-[#1A1A1A] font-medium border-none !py-1 !px-10">
                  Bolalar uchun kurslar
                </Primary>
                <Primary className="white-btn border-none !p-3">
                  <img src={arrowCourseCard} alt="Icon" />
                </Primary>
              </Link>
            </div>
          </div>

          <div className="mt-[140px] flex md:flex-row flex-col justify-evenly gap-5">
            <img src={tutor} alt="Tutor" />
            <div>
              <h3 className="main-title">Safimizga qo'shiling!</h3>
              <p className="max-w-[365px] text-base text-[#5C5C5C] mt-2 mb-[44px]">
                Dunyo bo'ylab 1000dan ortiq o'zbeklarga masofadan turib o'z bilim va tajribalaringizni ulashing.
              </p>
              <Link to="/sign-up/teacher">
                <Secondary w={"!w-[288px]"} icon={arrowWhite}>
                  Boshlash
                </Secondary>
              </Link>
            </div>
          </div>
        </>
      }
    </>
  );
}
