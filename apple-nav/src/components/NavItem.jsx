import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const NavItem = props => {
  const { name, id } = props;

  return (
    <Route to='/:id'>
      <NavLink to={`/${id}`}>{name}</NavLink>
    </Route>
  );
};

export default NavItem;
