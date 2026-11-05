import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSlogan?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  size = 'md',
  showSlogan = false 
}) => {
  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Original Geometric Tech & Creative Symbol */}
      <div className="relative flex items-center justify-center shrink-0" style={{ width: iconSize, height: iconSize }}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(40,120,255,0.4)]"
        >
          <defs>
            <linearGradient id="alGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2878FF" />
              <stop offset="60%" stopColor="#59A5FF" />
              <stop offset="100%" stopColor="#FF7628" />
            </linearGradient>
            <linearGradient id="alGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF7628" />
              <stop offset="100%" stopColor="#2878FF" />
            </linearGradient>
            <radialGradient id="alCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#59A5FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#091426" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background subtle hexagon tech frame */}
          <polygon
            points="24,3 43,14 43,34 24,45 5,34 5,14"
            stroke="rgba(89, 165, 255, 0.25)"
            strokeWidth="1.5"
            fill="rgba(16, 31, 56, 0.7)"
          />

          {/* Letter 'A' and 'L' stylized tech pathways */}
          <path
            d="M14 34L24 10L34 34"
            stroke="url(#alGrad1)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 26H30"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* L bar extending with dynamic energy node */}
          <path
            d="M27 34H37"
            stroke="#FF7628"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Creative tech connection vertex node */}
          <circle cx="24" cy="10" r="3" fill="#FFFFFF" />
          <circle cx="37" cy="34" r="2.5" fill="#FF7628" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold tracking-tight text-white font-['Space_Grotesk',sans-serif] ${textSize}`}>
            AL STUDIO
          </span>
          <span className={`font-bold tracking-wider text-[#FF7628] font-['Space_Grotesk',sans-serif] ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
            TECH
          </span>
        </div>
        {showSlogan && (
          <span className="text-[10px] tracking-wider text-[#AAB4C4] font-medium mt-0.5 uppercase">
            Marketing & Tecnologia
          </span>
        )}
      </div>
    </div>
  );
};
