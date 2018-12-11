import React from 'react';

export const PortfolioItem = ({ url, header, text, index, xTransform, yTransform }) => (
  <div
  className={`columns portfolio-item ${xTransform || yTransform ? 'in-motion' : ''}`}
  style={{
    transform: `translate(${xTransform}px, ${yTransform}px)`,
  }}
  >
    <div className="item-wrap">
      <a href={`#modal-0${index}`} title>
        <img alt="" src={url} />
        <div className="overlay">
          <div className="portfolio-item-meta">
            <h5>{header}</h5>
            <p>{text}</p>
          </div>
        </div>
        <div className="link-icon"><i className="icon-plus" /></div>
      </a>
    </div>
  </div>
);

export default PortfolioItem;
