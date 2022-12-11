import React, {useState} from 'react';
// import { Link } from 'react-router-dom';

// import './header.css';

// const Header = ({ onServiceChange }) => {
//   return (
//     <div className="header d-flex">
//       <h3>
//         <Link to="/">
//           StarDB
//         </Link>
//       </h3>
//       <ul className="d-flex">
//         <li>
//           <Link to="people/">People</Link>
//         </li>
//         <li>
//           <Link to="planets/">Planets</Link>
//         </li>
//         <li>
//           <Link to="starships/">Starships</Link>
//         </li>
//         <li>
//           <Link to="login">Login</Link>
//         </li>
//         <li>
//           <Link to="secret">Secret</Link>
//         </li>
//       </ul>

//       <button
//           onClick={onServiceChange}
//           className="btn btn-primary btn-sm">
//         Change Service
//       </button>
//     </div>
//   );
// };


import { Menu } from 'antd';


const Header = (onServiceChange) => {
  const [current, setCurrent] = useState('star');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: (
        <a href="/">
          StarDB
        </a>
      ),
      key: 'star',
    },
    {
      label: (
        <a href="people/">
          People
        </a>
      ),
      key: 'people',
    },
    {
       label: (
        <a href="planets/">
          Planets
        </a>
      ),
      key: 'planets',
    },
    {
      label: (
       <a href="starships/">
         Starships
       </a>
     ),
     key: 'starships',
   },
   {
    label: (
     <a href="login">
       Login
     </a>
   ),
   key: 'login',
  },
  {
    label: (
     <a href="secret">
       Secret
     </a>
   ),
   key: 'secret',
  },
  {
    label: (
     <a onClick={onServiceChange}
   className="btn btn-primary btn-sm">
       Change Service
     </a>
   ),
   key: 'service',
  },
  ]; 

  return (
        <Menu 
          onClick={onClick} 
          selectedKeys={[current]} 
          mode="horizontal" 
          items={items} 
          theme="dark"
        />

  )
};

export default Header;