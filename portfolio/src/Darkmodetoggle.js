import React, { useState } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="flex py-4 px-2">
            {/* Dark mode toggle button */}
            <input
                type="checkbox"
                id="darkModeToggle"
                className="hidden"
                checked={darkMode}
                onChange={toggleDarkMode}
            />
            <label
                htmlFor="darkModeToggle"
                className={`dark-mode-toggle relative flex items-center justify-center w-12 h-8 rounded-full bg-gray-500 transition-colors duration-300 ${darkMode ? 'bg-teal-400' : ''}`}
            >
                {/* Sun icon */}
                <svg
                    className={`w-6 h-6 absolute left-0 top-1/2 -translate-y-1/2 transition-transform ${darkMode ? 'translate-x-full opacity-0' : 'opacity-100'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="6" fill="currentColor" />
                    <line
                        id="ray"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        x1="12"
                        y1="1"
                        x2="12"
                        y2="4"
                    ></line>
                    <use href="#ray" transform="rotate(45 12 12)" />
                    <use href="#ray" transform="rotate(90 12 12)" />
                    <use href="#ray" transform="rotate(135 12 12)" />
                    <use href="#ray" transform="rotate(180 12 12)" />
                    <use href="#ray" transform="rotate(225 12 12)" />
                    <use href="#ray" transform="rotate(270 12 12)" />
                    <use href="#ray" transform="rotate(315 12 12)" />
                </svg>

                {/* White circle */}
                <svg
                    className={`w-8 h-8 absolute right-0 top-1/2 -translate-y-1/2 transition-transform ${darkMode ? 'opacity-100' : 'translate-x-full opacity-0'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <circle cx="12" cy="12" r="6" />
                </svg>
            </label>
        </div>
    );
};

export default DarkModeToggle;
