import React from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

function Card(props) {
  return (
    <div className="card">
      <CardHeader text={props.post.title} />
      <CardBody text={props.post.body} />
      <CardFooter text={props.post.userId} />
    </div>
  );
}

export default Card;