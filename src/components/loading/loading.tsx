import React, { FC } from 'react';
import './style.css';

type Props = {

}

const Loading: FC<Props> = () => {
  return (
    <div className="loader">
      <div className="l_main">
        <div className="l_square">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="l_square">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="l_square">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="l_square">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loading; 
