import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import Hero from './Hero';
import Nav from './Nav';
import Social from './Social';
import Footer from './Footer';
import Store from './Store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    {/* <Landing /> */}
    <Store></Store>
  </React.StrictMode>
);

function Landing() {
  return (
    <>
      <Hero />
      <Social />
      <Footer />
    </>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
