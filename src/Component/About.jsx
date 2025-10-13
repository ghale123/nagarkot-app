import React from 'react'
import photo1 from '../assets/images/photo1.jpg';  

const About = () => {
  return (
    <section className="min-h-screen mx-10 md:mx-52 py-20">
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        
        <div className="flex-1">
          <img
            src={photo1}
            alt="Nagarkot Homestay"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-6 bg-white rounded-2xl p-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            A Quick and Tranquil Escape from Kathmandu
          </h1>

          <p className="text-gray-600 text-md">
            Nagarkot Community Homestay is a serene retreat in the hills,
            approximately 27 kilometres east of Kathmandu, at 2,175 meters
            (7,136 feet). Renowned for its panoramic views of the Himalayan
            range, including Mount Everest, on clear days, this rural community
            offers travellers a chance to experience Nepal's natural beauty and
            cultural richness. With its proximity to the capital and peaceful
            environment, Nagarkot is an ideal destination for relaxation and
            adventure.
            <br />
            <br />
            The homestay offers cosy and comfortable accommodations, allowing
            visitors to experience the simplicity of rural life while ensuring
            basic amenities are met. Guests will stay in traditional village
            homes with friendly local hosts, offering a genuine glimpse into the
            daily life of the Brahmin community. Hygiene and cleanliness are
            maintained to provide a pleasant stay for all.
            <br />
            <br />
            Nagarkot offers a variety of experiences for visitors seeking
            adventure, wellness, and cultural immersion.
          </p>

          <button className="w-[200px] bg-green-400 hover:bg-green-500 text-white h-[50px] rounded-xl transition-colors">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;