import React from 'react';
import Footer from './Footer';
import Header from './Header';

const GlobalLayout = ({
  children,
  header = <Header />,
  footer = <Footer />,
}) => {
  return (
    <div>
      {header}
      {children}
      {footer}
    </div>
  );
};

export default GlobalLayout;
