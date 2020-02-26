import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { makeStyles } from '../../node_modules/@material-ui/core/styles';

import SubNav from './SubNav.jsx';

const useStyles = makeStyles({
  nav: {
    fontSize: '2rem',
    color: 'black',
    textDecoration: 'none',
  },
  subNav: {
    color: 'black',
    textDecoration: 'none',
  },
});

const NavItem = props => {
  const { name, id } = props;
  const classes = useStyles();
  let subNavItems = [];
  let className = classes.subNav;
  if (props.subNavItems) {
    subNavItems = props.subNavItems;
    className = classes.nav;
  }


  return (
    <div>
      <Route to='/:id'>
        <NavLink to={`/${id}`} className={className}>{name}</NavLink>
        <Route exact path={`/${id}`} >
            <SubNav subNavItems={subNavItems} />
        </Route>
      </Route>
    </div>
  );
};

export default NavItem;
