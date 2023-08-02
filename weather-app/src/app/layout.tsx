'use client'

import '../../styles/globals.css';
import '../../styles/globals-dark.css';
import { Inter } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body') ?? document.body;
    if (isDarkMode) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='header'>
          {/* <h1 className='custom-title'>Previsão do Tempo</h1> */}
          <button className='toggle-btn' onClick={handleToggleDarkMode}>
            <FontAwesomeIcon
              icon={isDarkMode ? faMoon : faSun}
              className={isDarkMode ? 'moon-icon' : 'sun-icon'}
            />
          </button>
        </div>
        {children}
      </body>
    </html>
  );
}
