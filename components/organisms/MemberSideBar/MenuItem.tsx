import classNames from 'classnames'
import Image from 'next/image'

interface MenuItemProps {
    title: string
    icon: string
    active?: boolean
}

export default function MenuItem(props: Partial<MenuItemProps>) {
    const { title, icon, active } = props
    const classItem = classNames({
        item: true,
        'mb-30': true,
        active: active,
    })
    return (
        <>
            <div className={classItem}>
                <div className="me-3">
                    <Image src={`/icon/${icon}.svg`} width={25} height={25} />
                </div>
                <p className="item-title m-0">
                    <a href="" className="text-lg text-decoration-none">
                        {title}
                    </a>
                </p>
            </div>
        </>
    )
}
