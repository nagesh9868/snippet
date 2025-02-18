import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [toggle, Setoggle] = React.useState(false)

  const navlink = [
    {
      name: 'Buttons',
      link: '/'
    },
    {
      name: 'Shadow',
      link: '/shadow'
    },
    {
      name: 'Input Box',
      link: '/inputs'
    },
    {
      name: 'Glassmorphism',
      link: '/glassmorphism'
    },{
      name:'Color palettes ',
      link:'/color-palettes'
    }
  ]

  return (
    <React.Fragment>
      <nav  className="p-4 bg-[#030b20ce]   text-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-8">
            <i className="text-2xl fas fa-campground" />
            <h1 className="font-serif tracking-wide font-bold text-xl pl-4">hello_universe</h1>
          </div>
          <div className="md:hidden block absolute top-4 right-8 fixed">
            <button aria-label="navigation" type="button" onClick={() => Setoggle(!toggle)} className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white text-lg font-semibold ">{toggle ? (<span>&times;</span>):(<span>&#9776;</span>) } </button>
          </div>
          <div className="hidden md:flex">
            <ul className="hidden md:flex">
              {navlink ?
                navlink?.map((item, index, arr) => (

                  <li className="text-lg pr-8 " key={index}>
                    <span className="transition duration-300 focus:outline-none focus:text-white focus:underline hover:underline hover:text-white" style={{ textUnderlineOffset: 8 }}>
                      <NavLink to={item.link} className={({ isActive }) => isActive ? 'text-white underline ' : ''}>{item.name}</NavLink>
                    </span>
                  </li>
                ))
                : ''
              }
            </ul>
          </div>
          <div className="hidden md:flex">
            <span></span>
          </div>
        </div>
        {
          toggle && (
            <div className=" flex w-full mx-auto py-8 text-center h-[95vh]">
              <div className="flex flex-col justify-center items-center w-full">
                {
                  navlink?.map((item, index, arr) => (
                    <span onClick={() => Setoggle(!toggle)} key={index} className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-white focus:underline hover:underline hover:text-white" style={{ textUnderlineOffset: 8 }}>
                      <NavLink to={item.link} className={({ isActive }) => isActive ? 'text-white underline ' : ''}>{item.name}</NavLink>
                    </span>
                  ))
                }
              </div>
            </div>
          )
        }

      </nav >


      {/* <div className="bg-[#030b20ce] py-2 px-1">
        <div className="grid grid-cols-12">
          <div className="col-span-2">🟡</div>
          <div className="lg:col-span-6 md:col-span-6 col-span-9">
            <div className="grid grid-cols-4">
              { navlink?
                navlink.map((item, index, arr) => (
                  <div className=" md:text-sm lg:text-sm text-xs mx-1 text-center" key={index}><NavLink to={item.link} className={({isActive})=> isActive?'text-white font-semibold underline' :''}>{item.name}</NavLink></div>
                ))
                :''
              }
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-4 col-span-2"></div>
        </div>
      </div> */}


    </React.Fragment >
  );
}
export default Navbar