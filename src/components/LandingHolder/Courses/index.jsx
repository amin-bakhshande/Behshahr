import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import courses1 from "./../../../assets/svg/Landing/courses1.svg"
import dislike from "./../../../assets/svg/Landing/CoursesDisLike.svg"
import favorite from "./../../../assets/svg/Landing/CoursesFavo.svg"
import like from "./../../../assets/svg/Landing/CoursesLike.svg"
const Courses = () => {
  return (
    <>

    <div class="text-center leading-10 mt-24">
        <p class="text-[35px] font-bold">دوره های ما</p>
        <p class="leading-10">ساختن دنیایی بهتر، یک دوره در یک زمان</p>
    </div>



    {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={categorty2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={categorty3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={categorty4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={categorty5} alt="" />
      </SwiperSlide>
      
      
    </Swiper> */}


<div className="mt-16 mx-16 flex justify-evenly items-center rounded-3xl">










<div className='relative p-10 text-center rounded-md mt-11 bg-[#FBF6F6] text-TextGreen h-[450px] w-[370px]'>
    <div className='absolute top-[-80px] left-[110px]'><img src={courses1} alt="" /></div>
  

  <div className='flex justify-between items-center mt-16'>


    <div className='flex justify-center items-center'>

    <img  src={like} alt="" />
    <img className='mx-2' src={dislike} alt="" />
    <img src={favorite} alt="" />

    </div>
             <button class="text-TextGreen bg-[#BFF4E4] rounded-lg cursor-pointer p-2">ورود / ثبت نام</button>
   </div>


   <p className='rtl mt-6 text-[#1A1E21] text-xl'>آشنایی با برنامه نویسی با وردپرس</p>
</div>








</div>

</>
  )
}

export { Courses }