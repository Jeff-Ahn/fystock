import React from 'react';
import Footer from './Footer';
import Header from './Header';

// 글로벌로 사용하는 Layout 컴포넌트
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
