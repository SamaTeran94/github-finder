import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({ title }) => {
    return (
        // <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        //     <div className='container mx-auto'>
        //         <div className='flex-none px-2 mx-2'>
        //             <FaGithub className='inline pr-2 text-3xl' />
        //             <Link to='/' className='text-lg - font-bold align-middle'>{title}</Link >
        //         </div>
        //         <div className='flex-1 px-2 mx-2'>
        //             <div className='flex justify-end'>
        //                 <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
        //                     Home
        //                 </Link>
        //                 <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
        //                     About
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </nav>

        <div className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown container">
                    <label tabIndex={0} className="btn btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
                        <li> <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                            Hello
                        </Link></li>
                        <li> <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                            About
                        </Link></li>
                    </ul>
                </div>
                <div className='flex-none px-2 mx-2'>
                    <FaGithub className='inline pr-2 text-3xl' />
                    <Link to='/' className='text-lg - font-bold align-middle'>{title}</Link >
                </div>
            </div>
            <div className="navbar-center hidden sm:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                        Home
                    </Link></li>
                    <li> <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                        About
                    </Link></li>
                </ul>
            </div>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'Gitbuh Finder'
}

Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar
