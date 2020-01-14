import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import lowerCaseAndSort from './utils/string-utils';

const data = ['Germany', 'Albania', 'Unated Stated', 'United Kingdom', 'Bulgaria'];

const modifiedData = lowerCaseAndSort(data);
console.log(modifiedData);

function Header(){
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

ReactDOM.render(
  <Header />, 
  document.getElementById('root')
);
