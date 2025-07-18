import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-6 mt-12 border-t">
      <p className="text-sm">&copy; {new Date().getFullYear()} RealEstate Inc. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-6 text-sm">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
