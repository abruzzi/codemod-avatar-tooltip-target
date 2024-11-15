import React from 'react';

export const Tooltip = ({ content, children }) => (
  <div className="tooltip">
    {children}
    {content && <div className="tooltip-content">{content}</div>}
  </div>
);
