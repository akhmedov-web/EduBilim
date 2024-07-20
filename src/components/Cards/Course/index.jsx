import React from "react";
import { Link } from "react-router-dom";
import { arrowCourseCard } from "@/assets";
import { useMediaQuery } from "react-responsive";
import CourceCardMobile from "./Mobile";

export default function CourseCard({ course, type = 'courses' }) {

  const inMobile = useMediaQuery({ query: "(max-width: 428px)" });

  const inDesktop = (
    <Link to="/courses/1" className={`courses-card group ${type === 'courses' ? ' w-full' : 'w-full h-[496px]'} `}>
      <img
        width={305}
        height={289}
        src={course?.img}
        alt="Course's Author"
      />

      <div className="footer-primary">
        <h3 className="footer-title">
          {course?.title || 'default title'}
        </h3>
        {type === 'details' ?
          <p className="text-base leading-6 text-graycc mt-2">Ingliz tilidagi suhbatda ishonch va ravonlik bilan gapiring</p>
          : <div className="footer-bottom">
            <span className="card-degree">{course?.degree || "Boshlang'ich"}</span>
            <span>{course?.lessonsCount || "5"} ta darslar</span>
              <img
                className="course-card-btn"
                src={arrowCourseCard}
                alt="Arrow"
              />
          </div>
        }
      </div>
    </Link>
  )

  return (
    <>
      {inMobile ? <CourceCardMobile course={course} /> : inDesktop}
    </>
  );
}
