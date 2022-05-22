import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import'./NavBar.css'

export default function NavBar (){
    return(
        <>
        <div className='navbar'>
            <ul className='navBarUl'>
                <li className='navBarIl'><Link to={'/'}>HOME</Link></li>
                <li className='navBarIl'><Link to={'/category/merlot'}>MERLOT</Link></li>
                <li className='navBarIl'><Link to={'/category/malbec'}>MALBEC</Link></li>
                <li className='navBarIl'><Link to={`/category/chardonnay`}>CHARDONAY</Link></li>
                <li className='navBarCart'><CartWidget/></li>                  
            </ul>
        </div>
        </>
    )
}
