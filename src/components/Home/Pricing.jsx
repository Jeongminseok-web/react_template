import React from 'react';
import { pricingOptions } from '../../constants/data';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="mt-20 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-tight font-customFontEn font-semibold">
        Pricing
      </h2>

      <div className="flex flex-wrap">
        {pricingOptions.map((option, idx) => (
          <div key={idx} className="p-2 w-full sm:w-1/2 lg:w-1/3">
            <div className="p-10 border border-neutral-700 rounded-lg">
              <p className="text-4xl font-customFontEn mb-8">
                {option.title}
                {option.title === 'Pro' && (
                  <span className="bg-gradient-to-r from-amber-400 to-indigo-800 text-transparent bg-clip-text text-lg mb-4 ml-2 tracking-tighter font-semibold">
                    (Most Popular)
                  </span>
                )}
              </p>

              <p className="mb-8 ">
                <span className="text-5xl mt-6 mr-2 font-customFontEn">
                  {option.price}
                </span>
                <span className="text-neutral-400 tracking-tight font-customFontEn">
                  /Mouth
                </span>
              </p>

              <ul>
                {option.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 mt-8 items-center text-lg"
                  >
                    <CheckCircle2 />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={option.link}
                className="flex justify-center items-center border border-red-500
                py-2 rounded-lg mt-20 text-xl font-customFontEn hover:bg-red-700 hover:text-white transition duration-500"
              >
                Subscribe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
