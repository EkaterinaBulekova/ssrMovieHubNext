// @flow
import React from 'react';

export default function Button({
  className = '', type = 'button', name, onClick,
}: { className: string, type: string, name: string, onClick: any }) {
  const classNames = ['btn', className].join(' ');
  return (<button className={classNames} type={type} onClick={onClick}>{name}</button>);
}
