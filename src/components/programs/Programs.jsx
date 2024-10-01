import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/img5.jpeg';
import img6 from '../../assets/img6.jpeg';
import './Programs.css'; // Import the CSS file

const Programs = () => {
  const courses = [
    {
      img: img1,
      title: "C/C++",
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: img2,
      title: "Java",
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: img3,
      title: "Multi Media",
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: img4,
      title: "Oracle",
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: img5,
      title: "Ms Office",
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: img6,
      title: "Web Development",
      description: 'Lorem ipsum dolor sit amet.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <div className='programs'>
    <Slider {...settings} className="program-slider"  >
      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <img src={course.img} alt={course.title} className="course-image" />
          <div className="overlay">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <button className="course-button">View Course</button>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default Programs;
