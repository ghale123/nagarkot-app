import React, { useState } from 'react';

const Destination = () => {
  const [activeTab, setActiveTab] = useState('tab1'); 

  const tabs = [
    {
      id: 'tab1',
      title: `Ideal Gateway`,
      description: `Nagarkot offers peace, forests, and panoramic views near Kathmandu.`,
      image: `/images/waterFall.jpg`,
      detail: `Just a short drive from Kathmandu, Nagarkot is the perfect escape for those seeking tranquillity and breathtaking panoramic views amidst lush forests.`,
    },
    {
      id: 'tab2',
      title: `Scenic Hiking Trails`,
      description: `Nagarkot offers scenic hikes through villages, culture, and diverse nature.`,
      image: `/images/trail.jpg`,
      detail: `Nagarkot offers scenic hikes through villages, culture, and diverse nature.`,
    },
    {
      id: 'tab3',
      title: `Fresh Air and Natural Beauty`,
      description: `Breathe mountain air, relax, and rejuvenate in Nagarkot's serenity.`,
      image: `/images/valley.jpg`,
      detail: `Breathe mountain air, relax, and rejuvenate in Nagarkot's serenity.`,
    },
    {
      id: 'tab4',
      title: `Adventure for All Levels`,
      description: `Nagarkot trails suit all hikers, showcasing Nature's beauty and culture.`,
      image: `/images/bridge.jpg`,
      detail: `Whether you're a novice or an experienced hiker, Nagarkot's trails cater to all skill levels, providing accessible routes that highlight the area's natural beauty and cultural heritage.`,
    },
    {
      id: 'tab5',
      title: `Spend Quality Time with Local Families`,
      description: `Experience authentic culture through food, crafts, farming, and shared traditions.`,
      image: `/images/culture.jpg`,
      detail: `Share stories, traditions, and meals while learning about their daily lives. Engage in activities like cooking traditional dishes, crafting tapari (leaf plates), or joining farming tasks. This authentic cultural exchange creates unforgettable memories and a pure sense of connection.`,
    },
  ];

  return (
  <div className='px-10'>
    <div className="flex flex-col md:flex-row p-6 bg-white rounded-xl border border-white m-6 gap-12 ">
    
      
      <div className="flex-1 space-y-3">
        {tabs.map((tab) => (
          <label
            key={tab.id}
            htmlFor={tab.id}
            className={`block p-4 rounded-lg border border-white shadow-sm cursor-pointer m-6 w-full  hover:text-blue-800 ${
              activeTab === tab.id ? 'bg-blue-400 border-white' : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <h1 className="font-bold">{tab.title}</h1>
            <p className="text-sm">{tab.description}</p>
          </label>
        ))}
      </div>

    
      <div className="mt-6 flex-1 ml-6">
        <div className="content">
          {tabs.map((tab) => (
            <div key={tab.id} className={`tab ${activeTab === tab.id ? 'block' : 'hidden'}`}>
              <div className='w-full flex items-center justify-center'>
              <img
                src={tab.image}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }}
                className="rounded-xl w-full object-cover"
                alt={tab.title.toLowerCase()}
              />
              </div>
              <h2 className="font-bold px-8">{tab.title}</h2>
              <p className="text-sm px-8">{tab.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Destination;


