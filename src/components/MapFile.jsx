import React from 'react';
import data from './HomeCard'; 

const MapFile = () => {
  return (
    <div className='p-5 bg-[#effafaff]'>
      {data.map((item) => (
        <div key={item.id} className={`relative flex flex-col md:flex-row justify-between md:items-center bg-white p-6 my-10 mx-4 md:y-4 md:m-6 shadow-md border-[#5ba4a4ff]  ${
    item.isFeatured ? 'border-l-4' : ''
  } rounded-md`}>
          <div className='flex flex-col md:flex-row gap-2 md:gap-4 items-start '>
            <img className='absolute buttom-0 top-[-20px] md:top-[0] md:relative md: h-[60px] w-[60px] md:h-[50px] md:w-[50px]' src={item.logo} alt={`${item.company} logo`} />
            <div className='flex flex-col'>
            <div className='flex gap-4 items-center'>
              <p className='text-[#5ba4a4ff] font-bold mt-6 md:mt-0'>{item.company}</p>
              {item.new && <button className='bg-[#5ba4a4ff] font-bold text-[10px] text-white px-1.5 py-0.5 rounded-full  mt-6 md:mt-0'>NEW!</button>}
              {item.featured && <button className='bg-black font-bold text-[10px] text-white px-1.5 py-0.5 rounded-full  mt-6 md:mt-0'>FEATURED</button>}
            </div>
            <h1 className='text-black font-bold'>{item.position}</h1>
            <div className='flex gap-4 text-gray-500 items-center'>
              <p>{item.postedAt}</p>
              <p>{item.contract}</p>
              <p>{item.location}</p>
            </div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <button className='bg-[#effafaff] font-normal text-[15px] text-[#5ba4a4ff] px-1.5 py-0.5'>{item.role}</button>
            <button className='bg-[#effafaff] font-normal text-[15px] text-[#5ba4a4ff] px-1.5 py-0.5'>{item.level}</button>
            {item.languages.map((lang) => (
              <button className='bg-[#effafaff] font-normal text-[15px] text-[#5ba4a4ff] px-1.5 py-0.5' key={lang}>{lang}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MapFile
