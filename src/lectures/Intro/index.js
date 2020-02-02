import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function renderApp(){
   ReactDOM.render(<Header />, document.getElementById('root'));
}

let logoText = 'Logo Placeholder';

const handleNavLinkClick = (e) => {
  e.preventDefault();
  const content = e.target.innerHTML;

  logoText = content;
  renderApp();
}

const Logo = () => {
  return (
    <div>
      <h1>{logoText}</h1>
    </div>
  );
};

const Navigation = () => {
  const className = 'site-nav';
  const linkClassName = `${className}-link`;
  return (
    <nav className={className}>
      <ul>
        <li><a className={linkClassName} href="/" onClick={handleNavLinkClick}>Home</a></li>
        <li><a className={linkClassName} href="/" onClick={handleNavLinkClick}>Contact</a></li>
        <li><a className={linkClassName} href="/" onClick={handleNavLinkClick}>About</a></li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
};

renderApp();
