import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import Button from '../common/button';
import { logout } from '../../data/redux/auth/authActions';
import { routes } from '../views/routes';
import './Navbar.css';

const NavbarItem = ({ text, href, icon, exact }) => (
    <NavLink className="navbar-item" to={href} exact={exact}>
        {text}
    </NavLink>
);

const Navbar = ({ logout }) => {
    return (
        <div className="navbar-container" >
            <div className="navbar-link-group">
                <NavbarItem text={"News"} href={routes.NEWS} />
                <NavbarItem text={"Profile"} href={routes.PROFILE} />
            </div>
            <Button size="small" className="logout-button" onClick={() => logout()}>Log out</Button>
        </div>
    )
}

export default withRouter(connect(null, { logout })(Navbar));
