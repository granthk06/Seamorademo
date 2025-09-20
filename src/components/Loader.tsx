import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [percentage, setPercentage] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate logo in
    tl.fromTo(logoRef.current, 
      { scale: 0.5, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Animate percentage counter
    let count = 0;
    const counter = setInterval(() => {
      count += Math.random() * 15;
      if (count >= 100) {
        count = 100;
        clearInterval(counter);
        
        // Complete loading animation
        setTimeout(() => {
          const exitTl = gsap.timeline({
            onComplete: () => onComplete()
          });
          
          exitTl.to([logoRef.current, percentRef.current], {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: "power2.in"
          });
          
          exitTl.to(loaderRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.in"
          }, "-=0.3");
        }, 500);
      }
      setPercentage(Math.floor(count));
    }, 80);

    return () => clearInterval(counter);
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center flex-col"
    >
      <div className="text-center">
        <img 
          ref={logoRef}
          src="/image.png" 
          alt="Seamora Entertainment" 
          className="w-64 h-auto mb-8 mx-auto"
        />
        <div 
          ref={percentRef}
          className="text-white text-4xl font-bold font-montserrat tracking-wider"
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default Loader;