import { React, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Typist from 'react-typist';
import '../css/StateDiagram.css'

const StateDiagram = () => {
  const [aspectRatio, setAspectRatio] = useState(800 / 450); // Initial aspect ratio based on viewBox
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    const updateAspectRatio = () => {
      const newAspectRatio = window.innerWidth / window.innerHeight;
      setAspectRatio(newAspectRatio);
    };

    window.addEventListener('resize', updateAspectRatio);
    return () => {
      window.removeEventListener('resize', updateAspectRatio);
    };
  }, []);

  // Calculate viewBox dimensions based on aspectRatio
  const viewBoxWidth = 800;
  const viewBoxHeight = Math.round(viewBoxWidth / aspectRatio);

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowInput(true);
    }, 16000); // Show input after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const dfa = (input) => {
      let state = 'home';
      for (let i = 0; i < input.length; i++) {
          if (state === 'home') {
              if (input[i] === '0') state = 'about';
              else if (input[i] === '1') state = 'lifestyle';
          } else if (state === 'about') {
              if (input[i] === '0') state = 'math';
              else if (input[i] === '1') state = 'about';
          } else if (state === 'lifestyle') {
              if (input[i] === '0') state = 'lifestyle';
              else if (input[i] === '1') state = 'random';
          } else if (state === 'random') {
              if (input[i] === '0') state = 'random';
              else if (input[i] === '1') state = 'random';
          } else if (state === 'math') {
            if (input[i] === '0') state = 'math';
            else if (input[i] === '1') state = 'math';
      }
      return state;
  }};

  const handleSubmit = () => {
      if (!/^[01]+$/.test(inputValue)) {
          setErrorMessage('Invalid input. Please enter a series of 0\'s and 1\'s.');
          return;
      }
      const finalState = dfa(inputValue);
      let path = '';

      // Define redirection paths based on final state
      if (finalState === 'about') path = '/about';
      else if (finalState === 'lifestyle') path = '/lifestyle';
      else if (finalState === 'math') path = '/math';
      else if (finalState === 'random') path = '/random';
      else if (finalState === 'home') path = '/home';

      history.push(path);
  };

  return (
    <>
      <div style={{ position: 'absolute', top: '2%', left: '2%', width: "40%", zIndex: 3 }}>
        <text x="0" y="40" textAnchor="middle" dominantBaseline="middle" className="typewriter-text">
          <Typist cursor={{ show: false }}>
            Hello, 
            <Typist.Delay ms={500} />
            <Typist.Backspace count={7} delay={200} />
            Welcome to my website!
            <Typist.Backspace count={26} delay={200} />
            Type in an input to the DFA
            <Typist.Backspace count={29} delay={200} />
            Or click on a state
            <Typist.Backspace count={19} delay={200} />
            to explore.
            <Typist.Backspace count={11} delay={1500} />
            SB
          </Typist>
        </text>
        {showInput && (
          <div id="input-container">
            <label htmlFor="binary-input">Enter a series of 0's and 1's:</label>
            <input 
              type="text" 
              id="binary-input" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        )}
        {errorMessage && <div id="result">{errorMessage}</div>}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', zIndex: 2, position: 'relative' }}>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          preserveAspectRatio="xMidYMin meet"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        >
          <style>
            {`
              svg {
                font-family: "Courier New", Courier, monospace;
                font-weight: bold;
              }
              text {
                pointer-events: none;
                font-color: #0d326e;
              }
              a {
                text-decoration: none;
              }
              .typewriter-text {
                font-size: 6vw; /* Larger font size */;
                font-weight: bold;
                color: #0d326e;
                animation: typing 4s steps(40, end) forwards; /* Animation details */
              }
              @keyframes typing {
                from { width: 0 }
                to { width: 100% }
              }
            `}
          </style>
          
          {/* States */}
          <Link to="/">
            <circle cx="100" cy="220" r="60" stroke="#0d326e" strokeWidth="2" fill="white" />
            <text fill="#0d326e" x="70" y="225" fontSize="16">Home</text>
          </Link>
          <Link to="/about">
            <circle cx="400" cy="120" r="60" stroke="#0d326e" strokeWidth="2" fill="white" />
            <text fill="#0d326e" x="362" y="125" fontSize="16">About Me</text>
          </Link>
          <Link to="/experience">
            <circle cx="400" cy="320" r="60" stroke="#0d326e" strokeWidth="2" fill="white" />
            <text fill="#0d326e" x="353" y="325" fontSize="16">Experience</text>
          </Link>
          <Link to="/math_cs">
            <circle cx="700" cy="120" r="60" stroke="#0d326e" strokeWidth="2" fill="white" />
            <circle cx="700" cy="120" r="50" stroke="#0d326e" strokeWidth="2" fill="white" />
            <text fill="#0d326e" x="667" y="125" fontSize="16">Math&CS</text>
          </Link>
          <Link to="/lifestyle">
            <circle cx="700" cy="320" r="60" stroke="#0d326e" strokeWidth="2" fill="white" />
            <circle cx="700" cy="320" r="50" stroke="#0d326e" strokeWidth="2" fill="white" />
            <text fill="#0d326e" x="657" y="325" fontSize="16">Lifestyle</text>
          </Link>

          {/* Arrows */}
          <defs>
            <marker id="arrowhead" markerWidth="5" markerHeight="4" refX="4.6" refY="2" orient="auto" fill="#0d326e">
              <polygon points="0 0, 5 2, 0 4" />
            </marker>
            <marker id="small_arrowhead" markerWidth="8" markerHeight="8" refX="4.5" refY="2.1" orient="78deg" fill="#0d326e">
              <path d="M0,0 L0,4 L6,2 Z" />
            </marker>
          </defs>

          <line x1="160" y1="230" x2="340" y2="130" stroke="#0d326e" strokeWidth="4" markerEnd="url(#arrowhead)" />
          <text fill="#0d326e" x="250" y="160" fontSize="16">0</text>

          <line x1="160" y1="210" x2="340" y2="310" stroke="#0d326e" strokeWidth="4" markerEnd="url(#arrowhead)" />
          <text fill="#0d326e" x="250" y="290" fontSize="16">1</text>
          
          <line x1="460" y1="120" x2="640" y2="120" stroke="#0d326e" strokeWidth="4" markerEnd="url(#arrowhead)" />
          <text fill="#0d326e" x="550" y="110" fontSize="16">0</text>
          
          <line x1="460" y1="320" x2="640" y2="320" stroke="#0d326e" strokeWidth="4" markerEnd="url(#arrowhead)" />
          <text fill="#0d326e" x="550" y="310" fontSize="16">1</text>

          <path d="M 370 65 A 30 30 0 0 1 430 65" stroke="#0d326e" strokeWidth="2" fill="none" markerEnd="url(#small_arrowhead)" />
          <text fill="#0d326e" x="395" y="30" fontSize="16">1</text>

          <path d="M 370 265 A 30 30 0 0 1 430 265" stroke="#0d326e" strokeWidth="2" fill="none" markerEnd="url(#small_arrowhead)" />
          <text fill="#0d326e" x="395" y="230" fontSize="16">0</text>
          
          <path d="M 670 65 A 30 30 0 0 1 730 65" stroke="#0d326e" strokeWidth="2" fill="none" markerEnd="url(#small_arrowhead)" />
          <text fill="#0d326e" x="685" y="30" fontSize="16">0,1</text>
          
          <path d="M 670 265 A 30 30 0 0 1 730 265" stroke="#0d326e" strokeWidth="2" fill="none" markerEnd="url(#small_arrowhead)" />
          <text fill="#0d326e" x="685" y="230" fontSize="16">0,1</text>

          {/* Start Arrow */}
          <line x1="0" y1="220" x2="40" y2="220" stroke="#0d326e" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </svg>
      </div>

      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: 1 }}>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          preserveAspectRatio="xMidYMin meet"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        >
          <line x1="400" y1="15" x2="800" y2="15" stroke="#0d326e" strokeWidth="12" />
          <line x1="500" y1="35" x2="800" y2="35" stroke="#0d326e" strokeWidth="12" />
          <line x1="200" y1="0" x2="800" y2="800" stroke="#0d326e67" strokeWidth="30" />
          <line x1="150" y1="0" x2="750" y2="800" stroke="#0d326e67" strokeWidth="30" />
        </svg>
      </div>
    </>
  );
};

export default StateDiagram;
