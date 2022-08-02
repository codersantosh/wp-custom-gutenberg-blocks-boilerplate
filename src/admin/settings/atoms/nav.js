/*Router*/
import { NavLink } from "react-router-dom";

const Nav = ({to, title}) => {

    let activeClassName = "wp-custom-gutenberg-blocks-boilerplate-nav-active";

    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
            >
                {title}
            </NavLink>
        </li>
    );
}

export default Nav;