import { ReactNode } from 'react';

export default function NavigationLinks() {
    return (
        <div className="flex justify-between text-white w-[595px]">
            <NavLink href="#id-ancor-01">HOME</NavLink>
            <NavLink href="#id-ancor-02">ABOUT</NavLink>
            <NavLink href="#id-ancor-03">PROJECTS</NavLink>
            <NavLink href="#id-ancor-04">CONTACT</NavLink>
        </div>
    );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <a href={href}>
            <span className="px-[32px] py-[24px] hover:text-skylight">{children}</span>
        </a>
    );
}
