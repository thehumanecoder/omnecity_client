
import Image from 'next/image';

const NavItem = props =>(
    <li>
      <a className="text-md font-bold text-gray-700 px-2 py-1 hover:bg-gray-300 rounded transition-colors duration-300" href={props.href}>{props.text}</a>
    </li>
  );

export default function Post() {
  return (
      <div>
           <nav className="flex justify-between p-4" >
      <div className="">
      <Image
      src="/media/logonew.png"
      alt="omnecity logo"
      width={180}
      height={40}
      />
      </div>
      <div>
      <ul className="flex space-x-3 py-2 px-3">
      <NavItem  href="/" text="Home"/>
          <NavItem  href="/products" text="Products"/>
          <NavItem href="/eligibility" text="Eligibility"/>
          <NavItem href="/register" text="Register"/>
          <NavItem href="/faq" text="FAQ"/>
        </ul>
      </div>
        
      </nav>

      <div className="conatiner mx-auto max-w-xl mt-24">
        <div className="text-center md:flex md:text-left space-x-5 shadow-sm">
            <div className="border text-center p-5 rounded-xl">
                <h2 className="text-6xl text-blue-600 m-10 font-semibold">Login</h2>
                <form onSubmit={()=>{}}>
                    <input type="text" placeholder="Enter your email id" className="bg-white rounded border border-gray-300 p-3 focus:border focus:border-blue-600 w-full"/>
                    <input type="password" placeholder="Enter your password" className="bg-white rounded border border-gray-300 p-3 focus:border focus:border-blue-600  my-10 w-full"/>
                    <button type="submit" className="bg-blue-600 text-white p-3 rounded mx-3 font-bold text-xl w-96">Login</button>
                </form>
                <p className="my-10 text-blue-800 font-semibold"><a href="/forgetpassword">Forgot Password ?</a></p>
                <p className="text-blue-800 font-semibold"><a href="/register">New User, Register?</a></p>
            </div>
        </div>
      </div>
      </div>
  )
}
