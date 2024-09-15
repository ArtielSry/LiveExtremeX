import React from 'react';
import Popup from 'reactjs-popup';
import './register.css';
import 'reactjs-popup/dist/index.css';

const PopUp = () => (
    <Popup
    trigger={<button className="buttonRegister"> Sign Up </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Sing up </div>
        <div className="content">
          {' '}
          <input placeholder='NAME'/>
          <input placeholder='EMAIL'/>
          <button>CREATE ACCOUNT</button>
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> More info</button>}
            position="top center"
            nested
          >
            <strong>
            Before accepting it is recommended to read the privacy policy.
            </strong>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Exit
          </button>
        </div>
      </div>
    )}
  </Popup>
  );

  export default PopUp;