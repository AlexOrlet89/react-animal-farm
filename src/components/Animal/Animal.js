import React from 'react';
import './Animal.css';

export default function Animal(props) {
  return <div className='animal' style={{ top: props.top, left: props.left }}>
    <img alt={`${props.name}`} src={`./animals/${props.type}.svg`}></img>
    <p className='name'>{`${props.name}`}</p>
    <p>{`${props.says}`}</p>
  </div>;
}
