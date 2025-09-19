import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Experaince = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true, 
    pauseOnHover: false,
  };

  const experiences = [
    { img: '/images/tourist.jpg', title: 'Craft your own souvenir' },
    { img: '/images/painting.jpg', title: 'Mask Painting at Bhaktapur' },
    { img: '/images/cycling.jpg', title: 'Panauti Bike Tour' },
    { img: '/images/mudclay.jpg', title: 'Pottery in Thimi' },
    { img: '/images/cooking.jpg', title: 'Cook Dal Bhat with Local Women' },
  ];

  return (
    <div className="mx-14">
      <div className="text-center px-4 mt-10 mb-12">
        <h1 className="text-3xl font-bold">
          Experience & Celebration Near Our Homestay
        </h1>
        <p className="text-gray-600 mt-2">
          Designed to build adaptive capacity, enhance decision-making, and
          create sustainable urban systems.
        </p>
      </div>

      <Slider {...settings}>
        {experiences.map((exp, index) => (
          <div key={index} style={{ width: '310px' }}> 
            <div className="flex flex-col items-center">
              <img
                src={exp.img}
                alt={exp.title}
                className="rounded-lg object-cover shadow-md"
                style={{ width: '300px', height: '400px', marginRight: '10px' }}
              />
              <h2 className="text-lg font-semibold mt-3">{exp.title}</h2>
              <p className="text-green-500 cursor-pointer">Read More</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Experaince;
