import React from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Mylist from '../../mylist/mylist';

const MylistPage = () => {
  return (
    <div className="user-page">
      <Header className={`user-page__head`} />
      <Mylist/>
      <Footer />
    </div>
  );
};

export default MylistPage;
