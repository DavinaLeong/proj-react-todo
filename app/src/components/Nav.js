import React from 'react';

function Nav(props) {
  const items = [];
  console.log(props);
  props.links.forEach((link, index) => {
    items.push(
      <li key={'l'+index}><button onClick={() => props.setPage(link.page)} type="button">{link.name}</button></li>
    );
  });

  return (
    <nav>
      <ul>{items}</ul>
    </nav>
  );
}

export default Nav;