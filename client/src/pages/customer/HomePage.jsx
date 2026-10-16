import React from 'react';

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-lavender">
      
      <div className="absolute inset-0 `bg-gradient-to-br` from-bg-white via-bg-lavender to-[#d8ceff]" />

      
      <div className="absolute -right-32 -top-32 `h-[500px]` `w-[500px]` rounded-full `bg-[#6444e4]/15 blur-[120px]" />

      <div className="absolute -bottom-40 -left-32 `h-[450px]` `w-[450px]` rounded-full `bg-[#231268]/10 blur-[120px]" />

      
      <div className="absolute left-1/2 top-1/2 `h-[400px]` `w-[700px]` -translate-x-1/2 -translate-y-1/2 rounded-full bg-bg-white/50 blur-[120px]" />
    </div>
  );
}

export default HomePage;