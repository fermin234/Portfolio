import { useState } from 'react';
import { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { HiOutlineArrowNarrowUp } from 'react-icons/hi';
import { Link } from 'react-scroll';


export default function Arrow() {

  const [scroll, setScroll] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <div className={`fixed left-3 bottom-3 ${scroll ? "show" : "hide"}`}>
      <Link to="inicio" smooth={true} duration={1000} className='hover:cursor-pointer'>
        <HiOutlineArrowNarrowUp className="w-10 h-10 hover:text-[#ecd85d] hover:cursor-pointer" />
      </Link>
    </div>
  )
}