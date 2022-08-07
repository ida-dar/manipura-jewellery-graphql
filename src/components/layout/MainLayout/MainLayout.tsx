import React from 'react'
import PropTypes from 'prop-types';

export interface Props {
  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
}

const MainLayout = (props: Props) => {
  return (
    <div>MainLayout</div>
  )
}

MainLayout.propTypes = {}

export default MainLayout
