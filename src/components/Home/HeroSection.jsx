import React from 'react';
import { heroLinks } from '../../constants/data';
import { Link } from 'react-router-dom';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl lg:text-7xl sm:text-6xl font-customFontEn tracking-tight text-neutral-700 dark:text-neutral-300 font-semibold text-center ">
        AceDot Build Tools{' '}
        <span className="bg-gradient-to-r from-amber-200 to-amber-800 text-transparent bg-clip-text">
          For Developers
        </span>
      </h1>
      <p className="text-sm my-10 text-center dark:text-neutral-300 max-w-4xl font-customFontKr mb:text-xs">
        여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서
        부당한 차별을 받지 아니한다. 헌법개정안은 국회가 의결한 후 30일 이내에
        국민투표에 붙여 국회의원선거권자 과반수의 투표와 투표자 과반수의 찬성을
        얻어야 한다. 대한민국은 민주공화국이다. 국가원로자문회의의 조직·직무범위
        기타 필요한 사항은 법률로 정한다.
      </p>

      <div className="flex gap-4">
        {heroLinks.map((item, idx) => (
          <Link
            to={item.to}
            key={idx}
            className={`font-customFontEn border border-neutral-500 py-1 px-4 rounded-md ${
              idx === 0 &&
              'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white border-0'
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>

      <div className="flex mt-10 gap-4 justify-center flex-col md:flex-row items-center">
        <video autoPlay muted loop className="vid md:w-1/3">
          <source src={video1} />
        </video>
        <video autoPlay muted loop className="vid md:w-1/3">
          <source src={video2} />
        </video>
      </div>
    </div>
  );
};

// className={`${
//   idx === 1 &&
//   'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white'
// }`}

export default HeroSection;
