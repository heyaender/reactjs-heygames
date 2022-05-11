import Image from 'next/image'

interface MenuItemProps {
    title: string
}

export default function MenuItem(props: MenuItemProps) {
    const { title } = props
    return (
        <>
            <div className="item active mb-30">
                <img
                    className="item mb-30"
                    src="/icon/SideOverview.svg"
                    width={25}
                    height={25}
                />
                <p className="item-title m-0">
                    <a href="" className="text-lg text-decoration-none">
                        {title}
                    </a>
                </p>
            </div>
        </>
    )
}
