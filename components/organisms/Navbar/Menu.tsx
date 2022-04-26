/* It's importing the classNames and Link from the next/link library. */
import classNames from 'classnames'
import Link from 'next/link'

/* Defining the props that the component will take. */
interface MenuProps {
    title: string
    active?: boolean
    href: string
}

/**
 * It's a React component that renders a menu item
 * @param props - Partial<MenuProps>
 * @returns A menu item with a link to the href.
 */
export default function Menu(props: Partial<MenuProps>) {
    const { title, active, href = '/' } = props
    const classTitle = classNames({
        'nav-link': true,
        active,
    })

    /* It's returning a menu item with a link to the href. */
    return (
        <li className="nav-item mxy-auto">
            <Link href={href}>
                <a className={classTitle} aria-current="page" href="#">
                    {title}
                </a>
            </Link>
        </li>
    )
}
