
import Image from 'next/image';

const NavItem = props =>(
  <li>
    <a className="text-md font-bold text-gray-700 px-2 py-1 hover:bg-gray-300 rounded transition-colors duration-300" href={props.href}>{props.text}</a>
  </li>
);

const OfferCard = props =>(
  <div className="m-10">
    <Image
      src={props.image}
      width={350}
      height={300}
      />
      <h2 className="text-2xl font-bold my-2">{props.header}</h2>
      <p className="text-md ">
      {props.text} 
      </p>
  </div>
)


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
        <input type="text" placeholder="Enter you email......." className="bg-white rounded border border-gray-300 p-3 focus:border focus:border-blue-600" />
        <button type="submit" className="bg-blue-600 text-white p-3 rounded mx-3 font-bold text-xl">Contact me back</button>
        </form>
        </div>
      </div>
    </div>

    <div className="container mx-auto max-w-8xl mt-48">
      <div className="text-center">
        <h1 className="text-7xl leading tight mx-auto">
          What do we offer <span className="text-blue-600">?</span>
        </h1>

        <div className="text-center md:flex mt-24">

        <OfferCard image="/media/create_content.png" header = "Advertisement Creation" text="Animation,Image & Video ad creation ."/>
        <OfferCard image="/media/upload.png" header="Multi-Platform Upload" text="Uploading ads to multiple advertisement platforms ."/>
        <OfferCard image="/media/processing.png" header="Advertisement Analytics" text="Marketing & Advertisement Analysis ."/>
        <OfferCard image="/media/emailing.png" header="Email and Text Promotions" text="Leave us to send promotional mails & messages for you ."/>
        <OfferCard image="/media/advertisement.png" header="Online Presence & Consultation" text="Your online presence is important ,we grow with you ."/>

        </div>
      </div>
    
    </div>

    <div className="container mx-auto max-w-8xl mt-48">
      <div className="text-center">
        <h1 className="text-7xl leading tight mx-auto">
          What do we offer <span className="text-blue-600">?</span>
        </h1>

        <div className="text-center md:flex mt-24">

        <OfferCard image="/media/create_content.png" header = "Advertisement Creation" text="Animation,Image & Video ad creation ."/>
        <OfferCard image="/media/upload.png" header="Multi-Platform Upload" text="Uploading ads to multiple advertisement platforms ."/>
        <OfferCard image="/media/processing.png" header="Advertisement Analytics" text="Marketing & Advertisement Analysis ."/>
        <OfferCard image="/media/emailing.png" header="Email and Text Promotions" text="Leave us to send promotional mails & messages for you ."/>
        <OfferCard image="/media/advertisement.png" header="Online Presence & Consultation" text="Your online presence is important ,we grow with you ."/>

        </div>
      </div>
    
    </div>
    </div>
    )
}
