import React from 'react';

interface MegaMenuProps {
  title: string;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ title }) => {
  return (
    <div className="bg-(--purple) p-4 text-xs md:text-sm text-white ">
      <h2>{title}</h2>
      {/* Add mega menu content here */}
    </div>
  );
};

export default MegaMenu;
