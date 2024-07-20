import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import { useParams } from "react-router"
import { CourseCard } from "@/components";
import { arrowCources } from '@/assets';
import { Primary, Secondary } from '@/UI';
import { useMedia } from 'src/libs/hooks';

export default function Details({ courceLevel = "Boshlang'ich" }) {
  const { id } = useParams()

  const { isSmallMobile } = useMedia()

  const course = {
    name: 'John Doe',
    img: 'https://picsum.photos/305/320',
    country: 'USA',
    rating: 4.5,
    title: "Ingliz tilida suhbatlashuv",
    degree: "Boshlang'ich",
    lessonsCount: '12'
  };

  window.scrollTo(0, 0);

  return (
    <>
      {isSmallMobile
        ?
        <h1>Mobile</h1>
        : <div className='w-full'>
          <Link to='/courses'>
            <Secondary icon={arrowCources} type='gray'>Hamma kurslar</Secondary>
          </Link>
          <Divider className='my-5' />
          <div className='flex gap-x-[60px]'>
            <div className="!max-w-[413px] w-full">
              <CourseCard course={course} type='details' />
              <Link to='/payment'>
              <Primary className='w-full !h-[48px] mt-14'>Kursni boshlash</Primary>
              </Link>
            </div>
            <div className='mt-14'>
              <p className='mb-2 text-xl font-medium text-gray-800'>Kurs haqida</p>
              <p className='text-gray-CCC text-base'>Qanchalik grammatika va lug'atni o'zlashtirgan bo'lsangiz ham, chet ellik odam bilan gaplashish qo'rqitishi mumkin. Agar siz ingliz tilini boshlang'ich bilimga ega bo'lsangiz, lekin gapirishga ko'p vaqt sarflamagan bo'lsangiz, bu kurs sizga ingliz tilidagi birinchi suhbatlaringizni osonlashtiradi.</p>
              <p className='mb-2 mt-6 text-xl font-medium text-gray-800'>Bu kursdan keyin siz nima qila olasiz?</p>
              <p className='text-gray-CCC text-base'>Grammatikani va lug‘atni qanchalik yaxshi bilsangiz ham, chet ellik odam bilan gaplashish qo‘rqinchli bo‘lishi mumkin. Agar siz ingliz tilini boshlang‘ich darajada bilsangiz, lekin gapirishga ko‘p vaqt ajratmagan bo‘lsangiz, bu kurs sizga ingliz tilidagi ilk suhbatlaringizni osonlashtiradi.</p>
              <div className='flex-center mt-[87px]'>
                <p className='not-italic font-extrabold text-2xl leading-6 flex items-center text-gray-800 mr-[66px]'>Mundarija</p>
                <div className='flex-center'>
                  <p className='cource-info'>Qiyinlik darajasi</p>
                  <span className="mx-2">&#x2022;</span>
                  <p className='text-gray-CCC'>{courceLevel}</p>
                  <p className='cource-info ml-8'>Kurs davomiyligi</p>
                  <span className="mx-2">&#x2022;</span>
                  <p className='text-gray-CCC'>10ta dars</p>
                </div>
              </div>
              <Divider />
              <ul className='flex-center flex-wrap gap-4'>
                <li className='hashtag'>Foods You Love</li>
                <li className='hashtag'>Playing and Watching Sports</li>
              </ul>
            </div>
          </div>
          <p className='mt-[116px] font-[800] text-2xl text-gray-800'>Boshqa kurslar</p>
          <Divider className='mt-[12px] mb-5' />
          <div className='grid-template'>
            {[1, 2, 3, 4].map(i => (
              <CourseCard course={course} key={i} />
            ))}
          </div>
        </div>
      }
    </>
  )
}
