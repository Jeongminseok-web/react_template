import React from 'react';
import { Link } from 'react-router-dom';

const FooterContents = ({ title, linkData }) => {
  console.log(title, linkData);
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {linkData.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.to}
              className="text-neutral-400 hover:text-white hover:text-lg"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContents;
