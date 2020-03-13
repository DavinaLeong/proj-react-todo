import React from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

function Card(props) {
  return (
    <div className="card">
      <CardHeader text={props.post.title} />
      <CardBody text={props.post.body} />
      <button type="button" className="btn btn-primary" onClick={() => props.setPostId(props.post.id)}>Edit</button>
      <CardFooter text={props.post.userId} />
    </div>
  );
}

export default Card;