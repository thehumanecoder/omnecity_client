
import Image from 'next/image';

const NavItem = props =>(
  <li>
    <a className="text-md font-bold text-gray-700 px-2 py-1 hover:bg-gray-300 rounded transition-colors duration-300" href={props.href}>{props.text}</a>
  </li>
);



export default function Home() {
  return (
    <div>
      <nav className="flex justify-between p-4" >
      <div className="p-5">
      <Image
      src="/media/logonew.png"
      alt="omnecity logo"
      width={350}
      height={70}
      />
      </div>
      <div>
      <ul className="flex space-x-3 py-2 px-3">
          <NavItem  href="/products" text="Products"/>
          <NavItem href="/eligibility" text="Eligibility"/>
          <NavItem href="/login" text="Login"/>
          <NavItem href="/register" text="Register"/>
          <NavItem href="/faq" text="FAQ"/>
        </ul>
      </div>
        
      </nav>
    <div className="container mx-auto mt-24">

    <div className="text-center md:flex md:text-left space-x-3">
        <h1 className="text-7xl leading-tight">
          One Stop <br/>  <span className="text-blue-600 font-bold">Advertisement & Marketing</span>
        </h1>
        <div>
          <h2 className="text-4xl font-bold text-blue-600">How can we help you today !!!</h2>
        <p className="text-2xl font-light my-10">
         <b>No Mus No Fus</b> Marketing and Advertising automation solution. Customize according to your need . 
        </p>
        <form className="space-x-3">
        <input type="text" placeholder="Enter you email......." className="bg-white rounded border border-gray-300 p-3" />
        <button type="submit" className="bg-blue-600 text-white p-3 rounded mx-3 font-bold text-xl">Contact me back</button>
        </form>
        </div>
      </div>
    </div>
    </div>
    )
}
