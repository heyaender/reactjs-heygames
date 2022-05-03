import Link from 'next/link'

interface FooterLinkItemProps {
    title: string
    urlink: string
}

export default function FooterLinkItem(props: FooterLinkItemProps) {
    const { title, urlink } = props
    return (
        <>
            <li className="mb-6">
                <Link href={`/${urlink}`}>
                    <a className="text-lg color-palette-1 text-decoration-none">
                        {title}
                    </a>
                </Link>
            </li>
        </>
    )
}
