'use client';

import { useState, useEffect } from 'react';

export default function MotionToggle() {
  const [motionOn, setMotionOn] = useState(true);

  useEffect(() => {
    if (!motionOn) {
      document.documentElement.style.setProperty('--motion-reduce', '1');
    } else {
      document.documentElement.style.removeProperty('--motion-reduce');
    }
  }, [motionOn]);

  return (
    <button
      onClick={() => setMotionOn(!motionOn)}
      aria-label={motionOn ? 'Disable animations' : 'Enable animations'}
      className="motion-button"
    >
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill={motionOn ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
      <span>MOTION {motionOn ? 'ON' : 'OFF'}</span>
    </button>
  );
}
