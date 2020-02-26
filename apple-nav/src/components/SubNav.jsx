import React from 'react';

import NavItem from './NavItem.jsx';

const SubNav = props => {
  const { subNavItems } = props;

  return (
    subNavItems.map((item, index) => {
      return <NavItem name={item.name} id={item.id} key={index} />
    })
  );
}

export default SubNav;
