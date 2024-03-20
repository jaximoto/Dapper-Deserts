import Image from 'next/image'
import { FC } from 'react';
import LikeButton from './like-button';
import Navbar from './navbar';
import Title from './title';
import Hamburger from './hamburger';
interface TitleProp {
  title: string;
}

export default function Home() {
  return (
    
    <div className="flex flex-col h-screen">
      <Title/>
      <Navbar/>
      <Hamburger/>
    </div>
    
  )
}
/*
function Header(title: TitleProp) {
  return <h1>{title.title ? title.title : "Default title"}</h1>;
}


export default function Home() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  
  return (
    <div>
        <Header title="React"/>
        <Header title="With Typescript"/>
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <LikeButton />
    </div>


    
  )
}
*/
