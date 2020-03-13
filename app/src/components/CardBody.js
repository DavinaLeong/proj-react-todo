import React from 'react';

function CardContent(props) {
  return (
    <div className="card-body">
      {props.text}
    </div>
  );
}

export default CardContent;