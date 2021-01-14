import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { generatePassword } from './helpers';

import './App.css';

export const App = () => {
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState(null);
  const [filters, setFilters] = useState({
    capitals: true,
    numbers: true,
    symbols: true,
  });

  const createPassword = () => {
    const generated_password = generatePassword(length, filters);
    setPassword(generated_password);
  };

  return (
    <div className='center'>
      <div className='App'>
        <p>Password length:</p>
        <input
          type='number'
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <div>
          <input
            type='checkbox'
            id='capital'
            name='capital'
            checked={filters.capitals}
            onChange={() =>
              setFilters({ ...filters, capitals: !filters.capitals })
            }
          />
          <label htmlFor='capital'>Capital letters</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='numbers'
            name='numbers'
            checked={filters.numbers}
            onChange={() =>
              setFilters({ ...filters, numbers: !filters.numbers })
            }
          />
          <label htmlFor='numbers'>Numbers</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='symbols'
            name='symbols'
            checked={filters.symbols}
            onChange={() =>
              setFilters({ ...filters, symbols: !filters.symbols })
            }
          />
          <label htmlFor='symbols'>Symbols</label>
        </div>

        <button onClick={createPassword}>Create password</button>
        <p>{password}</p>
        {password && (
          <CopyToClipboard text={password}>
            <button>Copy to clipboard with button</button>
          </CopyToClipboard>
        )}
      </div>
    </div>
  );
};

export default App;
