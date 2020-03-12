import React from 'react';

function CardFooter(props) {
  const completed = props.text ? 'incomplete' : 'completed';

  return (
    <div className={'card-footer ' + completed}>
      {props.text}
    </div>
  );
}

export default CardFooter;