import React from 'react';
import './App.css';
import MovieList from './components/MovieList.js';
import BookList from './components/BookList.js';
import logo from './logo.svg'; // Import the logo.svg file

function App() {
  return (
    <div className="App">
      {/* SVG logo embedded directly within JSX */}
      <div className="logo-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
        >
          {/* Rotation animation */}
          <style>
            {`
              @keyframes logo-rotate {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}
          </style>

          {/* Circle background */}
          <circle cx="100" cy="100" r="90" fill="red" />

          {/* Text with rotation animation */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="24"
            fontWeight="bold"
            style={{ animation: 'logo-rotate 5s linear infinite' }}
          >
            HANNAHS WORLD
          </text>
        </svg>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My App</h1>
        <div className="similarComponents">
          <MovieList />
          <BookList />
        </div>
      </header>
    </div>
  );
}

export default App;
