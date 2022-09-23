import React from 'react';
import Hero from '../../components/Hero/Hero';
import Content from '../../components/Content/Content';
import './Home.scss';

function Home() {
  return (
    <div className='content'>
      <Hero />
      <Content />
    </div>
    
  )
}

export default Home