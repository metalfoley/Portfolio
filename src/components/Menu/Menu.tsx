import * as React from 'react';
import './Menu.scss';
import { MenuItem } from '../MenuItem';

const menuItems = ['about', 'resume', 'contact'];

export const Menu = () => {
  return <div className={'sd'}>{getMenuItems()}</div>;
}

const getMenuItems = () => {
  return menuItems.map(item => <MenuItem key={item} title={item} />);
}
