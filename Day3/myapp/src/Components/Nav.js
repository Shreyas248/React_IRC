// // -------------------------Arrow Function-----------------------------------
// const Nav =()=> {
//     return(
//         <>
//         <div className="navbar">
//             Hello Word
//         </div>
//         </>
//     )
// }

// export default Nav;

// //--------------using function Nav() Method-------------------------------

// function Nav(){
//         return(
//             <>
//             <div>
//                 Arrow function
//             </div>
//             </>
//         )
//     }
    
// export default Nav;

const Nav = () => {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Nav;