import { useMedia } from 'src/libs/hooks';
import { Primary } from '@/UI';
import { Divider } from 'antd';
import { CourseCard } from '@/components'
import { CourseMobile } from './Mobile';

export default function Courses() {
  window.scrollTo(0, 0);

  const { isSmallMobile } = useMedia()

  const course = {
    name: 'John Doe',
    img: 'https://picsum.photos/305/320',
    country: 'USA',
    rating: 4.5,
    title: 'Ingliz tilida suhbatlashuv',
    degree: "Boshlang'ich",
    lessonsCount: '12'
  };

  const a = Array.from({ length: 8 }, () => Math.random());

  const CourseDesktop = (
    <>
      <h2 className='bg-[#39B980] px-4 py-3 mb-14 rounded-xl max-w-[306px] text-center font-extrabold text-4xl leading-10 text-[#F5F8FC]'>Kurslar</h2>
      <p className='courses-title'>Ingliz tili kurslar</p>
      <p className='courses-description mt-2 mb-5'>Ingliz tili orqali dunyoning turli burchaklaridagi insonlar bilan muloqot qilishingiz, yangi do'stlar topishingiz va boshqa madaniyatlarni o'rganishingiz mumkin.</p>
      <Divider className='mb-5' />
      <div className='grid-template'>
        {a.map(i => (
          <CourseCard key={i} course={course} />
        ))}
      </div>
      <h2 className='courses-title mt-20 mb-2'>Dasturlash kurslari</h2>
      <p className='courses-description'>Dasturlash ko'nikmalarini bilish sizga texnologiya sohasida, IT kompaniyalarda, startaplarda va hatto o'z mustaqil loyihalaringizni yaratishda ishlash imkoniyatini beradi.</p>
      <Divider className='my-5' />
      <div className='grid-template'>
        {a.map(i => (
          <CourseCard key={i} course={course} />
        ))}
      </div>
      <div className='flex justify-center mt-20'>
        <Primary className='white-btn shadow-none'>Other results</Primary>
      </div>
    </>
  );

  return (
    <>{isSmallMobile ? <CourseMobile course={course} /> : CourseDesktop}</>
  );
}
