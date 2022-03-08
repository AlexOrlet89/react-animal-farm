import React from 'react';
import './Main.css';
import Animal from '../Animal/Animal';
import background from './background.png';

import { animals } from '../../data';

export default function Main() {
  return <main className='main' style={{ backgroundImage: `url(${background})` }}>   
    {animals.map((animal) => (
      <Animal key={animal.name} name={animal.name} type={animal.type} says={animal.says} top={animal.top} left={animal.left} />
    ))}
  </main>;
}
