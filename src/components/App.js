import React from 'react';
import Header from '../containers/Header';
import MainSection from '../containers/MainSection';

const App = () => (
  <section className="container">
    <div className="row">
      <div className="col-md-4">
        <Header />
        <MainSection />
      </div>
    </div>
  </section>
);

export default App;
