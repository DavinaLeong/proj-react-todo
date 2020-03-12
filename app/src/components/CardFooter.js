import React from 'react';

function CardFooter(props) {
  return (
    <div className='card-footer'>
      {props.text}
    </div>
  );
}

export default CardFooter;