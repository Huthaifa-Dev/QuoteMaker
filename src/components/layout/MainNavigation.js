import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'
function MainNavigation() {

    // className={(navData) => navData.isActive ? "active" : "" }

    const activeClass = navData => navData.isActive ? classes.active : '';
    return (
        <header className={classes.header}>
            <div className={classes.logo}>MainNavigation</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to="/quotes" className={activeClass}>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/new-quote" className={activeClass}>
                            Add Quote
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation