import React, { useState } from 'react';
import data from './HomeCard'; 
import remove from '../assets/images/icon-remove.svg'

const MapFile = () => {
  const [filtered, setfiltered] = useState([]);
  console.log(filtered);
  
  return (
    <section className='w-full'>

      <div className="h-36 bg-[#5ba4a4] bg-[url('/images/bg-header-mobile.svg')] md:bg-[url('/images/bg-header-desktop.svg')] bg-cover bg-center bg-no-repeat"></div> 
      <div className='flex flex-col gap-6 -mt-16 px-[5%] py-20 '>
      
      {filtered.length > 0 && (
  <div className="flex justify-between items-center p-4 rounded shadow-md bg-white">
    <div className="flex gap-3 flex-wrap">
      {filtered.map((item, index) => (
        <div key={index} className="flex">
          <div className="flex rounded">
            <span className="bg-[#effafaff] rounded-l-md text-[#5ba4a4ff] px-2">
              {item}
            </span>
            <button
              className="bg-[#5ba4a4ff] px-1 rounded-r-md hover:bg-black"
              onClick={() =>
                setfiltered((prev) => prev.filter((_, i) => i !== index))
              }
            >
              <img src={remove} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>

    
    <span
      onClick={() => setfiltered([])}
      className="bg-[#effafaff] rounded-md text-[#5ba4a4ff] px-2 cursor-pointer hover:text-black"
    >
      Close
    </span>
  </div>
)}

    
    <div className='p-5 bg-[#effafaff]'>
      {(filtered.length === 0 ? data : data.filter(jobItem => {
        const tags = [jobItem.level, jobItem.role, ...jobItem.languages, ...jobItem.tools];
        return filtered.every(tag => tags.includes(tag))

      })
      ).map((item) => (
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
            <button onClick={() =>  setfiltered(prev => prev.includes(item.role) ? prev : [...prev, item.role])} className='bg-[#effafaff] font-normal text-[15px] text-[#5ba4a4ff] px-1.5 py-0.5'>{item.role}</button>
            <button onClick={()=> setfiltered(prev => prev.includes(item.level)  ? prev : [...prev, item.level])} className='bg-[#effafaff] font-normal text-[15px] text-[#5ba4a4ff] px-1.5 py-0.5'>{item.level}</button>
            {item.languages.map((lang) => (
              <button onClick={() => setfiltered(prev => prev.includes(lang) ? prev : [...prev, lang])} className='bg-[#effafaff] font-normal text-[15px] text-[#5ba4a4ff] px-1.5 py-0.5' key={lang}>{lang}</button>
            ))}
            {item.tools.map((tool) => (
              <button onClick={() => setfiltered(prev => prev.includes(tool) ? prev  : [...prev, tool] )} className='bg-[#effafaff] font-normal text-[15px] text-[#5ba4a4ff] px-1.5 py-0.5' key={tool}>{tool}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
    </section>
  );
};

export default MapFile
