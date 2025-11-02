"use client";

const CoderrunLogo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-8 h-8"
      >
        <rect width="64" height="64" rx="12" fill="#0a0a0a" />
        <path
          d="M18 32L10 24M18 32L10 40M46 24L54 32L46 40M30 46L42 18"
          stroke="#00FFA3"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 46L42 18"
          stroke="url(#bolt)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="bolt" x1="30" y1="18" x2="42" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00FFA3" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text */}
      <span className="text-2xl font-semibold tracking-wide text-white">
        Code<span className="text-accent">rrun</span>
      </span>
    </div>
  );
};

export default CoderrunLogo;
