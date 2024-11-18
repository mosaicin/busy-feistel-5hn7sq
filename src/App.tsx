import React, { useState } from 'react';

interface RussiaFlagProps {
}

const RussiaFlag: React.FC<RussiaFlagProps> = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`flex flex-col w-64 h-32 bg-white border-2 border-gray-200 rounded-lg ${hover ? 'shadow-lg' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="bg-red-600 h-1/3" />
      <div className="bg-blue-600 h-1/3" />
      <div className="bg-white h-1/3" />
    </div>
  );
};

export default RussiaFlag;