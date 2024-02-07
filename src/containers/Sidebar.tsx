import HomeLinkLogo from '../components/HomeLinkLogo';
import '../css/NavLink.css';
import React from 'react';

export default function Sidebar() {
    return (
        <aside id="sidebar" className="w-1/5 dark:bg-slate-950 py-8 px-6">
            <HomeLinkLogo></HomeLinkLogo>
            <ul className="nav">
                <NavLink href="#" className="active">Dashboard</NavLink>
                <NavLink href="#">Performance</NavLink>
                <NavLink href="#">Stock Screener</NavLink>
                <NavLink href="#">Watchlist</NavLink>
                <NavLink href="#">Link</NavLink>
            </ul>
        </aside>
    )
}

interface NavLinkProps extends React.HTMLProps<HTMLLIElement> {
    href: string;
    children: React.ReactNode;
}

function NavLink({href, children, ...props} : NavLinkProps) {
    return (
        <li {...props}>
            <a href={href} className="flex p-3 text-almost-white items-center">{children}</a>
        </li>
    )
}