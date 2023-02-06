import React from 'react';
import ReactSandpack from '../../components/sandpacks/ReactSandpack';

const files = {
  'App.js': {
    code: `
    import React, { useState } from "react";
    import { generatesPrimes } from "./generate-prime";
    
    function PrimeInput() {
      const [maxPrime, setMaxPrime] = useState("1000000");
      const [primes, setPrimes] = useState(null);
    
      const onInputChange = (event) => {
        setMaxPrime(event.target.value);
      };
    
      const onGenerate = () => {
        const results = generatesPrimes(Number(maxPrime));
        setPrimes(results);
      };
    
      return (
        <div>
          <input type="number" value={maxPrime} onChange={onInputChange} />
          <button type="button" onClick={onGenerate}>
            Generate
          </button>
          {primes && <p>proses membuat {primes.length} bilangan prima selesai</p>}
          <br />
          <br />
          <textarea placeholder="tulis sesuatu di sini selagi proses mendapatkan bilangan prima" style={{ minHeight: '100px', minWidth: '300px' }}/>
        </div>
      );
    }
    
    export default function App() {
      return <PrimeInput />;
    }    
    `,
    hidden: true,
  },
  '/generate-prime.js': {
    code: `import { isPrime, random } from "./utils";

export function generatesPrimes(maximum) {
  const MAX_PRIME = 1000000;
    
  const primes = [];
    
  while (primes.length < maximum) {
    const candidate = random(MAX_PRIME);
    
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
    
  return primes;
}`,
    hidden: false,
    active: true,
  },
  '/utils.js': {
    code: `
    export function isPrime(n) {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    }
    
    export function random(max) {
      return Math.floor(Math.random() * max);
    }    
    `,
    hidden: true,
  },
  'sandbox.config.json': {
    code: `
    {
      "infiniteLoopProtection": false,
      "hardReloadOnChange": false,
      "view": "browser"
    }    
    `,
    hidden: true,
  },
};

function SynchronousProcess02() {
  return (
    <ReactSandpack
      files={files}
      options={{
        editorWidthPercentage: 0.001,
      }}
    />
  );
}

export default SynchronousProcess02;
