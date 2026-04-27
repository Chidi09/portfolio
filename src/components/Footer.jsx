import React from 'react';

const Footer = ({ personalData }) => {
  return (
    <footer className="bg-[#050505] text-gray-500 py-8 text-center border-t border-gray-800 text-sm">
      <p>&copy; {personalData.currentYear} {personalData.name}. All rights reserved.</p>
      <p className="mt-2">Engineered with React & Tailwind CSS.</p>
    </footer>
  );
};

export default Footer;
