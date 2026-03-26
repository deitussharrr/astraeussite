import React from 'react';

const DebugHero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-blue-500">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">DEBUG HERO</h1>
        <p className="text-white">If you see this, the component is rendering</p>
      </div>
    </div>
  );
};

export default DebugHero;