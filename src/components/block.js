import React from 'react';
import PropTypes from 'prop-types';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import "../styling/block.css"

const Block = ({ boxInfo }) => {
  const { text, image, onClick, info,buttontext } = boxInfo;

  return (
    <div className="block-container">
      <p className="block-text">{text}</p>
      <img src={image} alt={`${text} Illustration`} className="block-image" />
      <div className="spacer">
        <div className="tooltip-container">
          <IoIosInformationCircleOutline size="50px" aria-label="Information Icon" />
          <span className="tooltip-text">{info}</span>
        </div>
        <button className="block-button" onClick={onClick} aria-label={`Action for ${text}`}>
          {buttontext}
        </button>
      </div>
    </div>
  );
};


Block.propTypes = {
  boxInfo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};

export default Block;
