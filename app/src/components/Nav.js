import React from 'react';

function Nav(props) {
  const items = [];
  props.links.forEach((link, index) => {
    items.push(
      <li className="nav-item" key={'l'+index}>
        <button className="btn btn-link item-link" onClick={() => props.setPage(link.page)} type="button">{link.name}</button>
      </li>
    );
  });

  return (
    <nav>
      <ul className="nav">{items}</ul>
    </nav>
  );
}

export default Nav;