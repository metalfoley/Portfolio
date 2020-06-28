import * as React from 'react';
import './MenuItem.scss';

interface MenuItemProps {
  title: string;
}

export const MenuItem = (props: MenuItemProps) => {
  return <div className={'menu-item'}>{props.title.toUpperCase()}</div>
}
