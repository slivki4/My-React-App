import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import lowerCaseAndSort from './utils/string-utils';

const data = ['Germany', 'Albania', 'Unated Stated', 'United Kingdom', 'Bulgaria'];
const modifiedData = lowerCaseAndSort(data);

function Nav(props){
  const {className, children, replaceAll} = props; 
  const navItems = replaceAll ? children : (
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  );
  return (
    <nav className={className}>
      {navItems}
    </nav>
  );
}

function Header(props){
  const headerClass = 'header';
  const headerNavClass= `${headerClass}-navigation`;
  return (
    <header>
      <Nav className={headerNavClass} replaceAll={true}>
        <ul>
          <li>Rumi</li>
          <li>Slavi</li>
          <li>Mama</li>
          <li>Tati</li>
        </ul>
      </Nav>
    </header>
  );
}

function Footer(props){
  const footerClass = 'footer';
  const footerNavClass = `${footerClass}-navigation`;
  return (
    <footer>
      <Nav className={footerNavClass} />
    </footer>
  );
}

function HeaderAndFooter(){
  return (
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
  );
}


function NavWithStrings(props) {
  const {items} = props;

  if(!items) {
    return null;
  }
  
  const itemsLinks = [];
  return (
    <nav>
      <ul>
        {
          items.map(item => (
            <li><a href="">{item}</a></li>
          ))
        }
      </ul>
    </nav>
  );
}

ReactDOM.render(
  <NavWithStrings items={['Home', 'About', 'Contact']} />,
  document.getElementById('root')
);
