import React from 'react';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

function Card(props) {
  return (
    <div className="card">
      <CardHeader text={props.item.title} />
      <CardContent text={props.item.body} />
      <CardFooter text={props.item.completed} />
    </div>
  );
}

export default Card;