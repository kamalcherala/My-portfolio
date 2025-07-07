import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        {/* Hire ME Title */}
        <div className="text-2xl font-bold mb-4">
          Thank you! We'll get back to you shortly.
Please ensure your contact details are correct.
        </div>

        {/* Copyright */}
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Cherala Sai Kamal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
