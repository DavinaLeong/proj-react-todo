import React from 'react';

function CardHeader(props) {
  return (
    <div className="card-header">
      {props.text}
    </div>
  );
}

export default CardHeader;