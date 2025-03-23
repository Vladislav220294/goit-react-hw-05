import { NavLink } from "react-router";
import css from './Navigation.module.css'

export default function Navigation() {
    return (<header>
        <nav>
            <ul className={css.list}>
                <li><NavLink to='/'>
Home
            </NavLink></li>
                <li><NavLink to='/movies'>
Movies
            </NavLink></li>
            </ul>
            
            
        </nav>
    </header>)
    
}