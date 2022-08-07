import React from 'react'
import PropTypes from 'prop-types';
import Header from '../Header/Header';

export interface Props {
  children?: React.ReactNode | JSX.Element | JSX.Element[]; // best, accepts everything React can render
  childrenElement: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
}

const MainLayout = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

MainLayout.propTypes = {}

export default MainLayout
