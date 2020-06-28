import * as React from 'react';
import { Hero } from '../Hero';
import { About } from '../About';
import './Layout.scss';

export const Layout = () => {
  const pageHeight: React.CSSProperties = {
    height: window.innerHeight
  }

  return (
    <div className={'content'}>
      <div style={pageHeight}>
        <Hero />
      </div>
      <div style={pageHeight}>
        <About />
      </div>
    </div>
  )
}
