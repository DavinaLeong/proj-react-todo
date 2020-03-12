import React from 'react';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

function Card(props) {
  return (
    <div className="card">
      <CardHeader text={props.post.title} />
      <CardContent text={props.post.body} />
      <CardFooter text={props.post.userId} />
    </div>
  );
}

export default Card;