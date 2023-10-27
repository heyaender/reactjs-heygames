import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface GameItemProps {
    title: string
    category: string
    thumbnail: string
}

export default function GameItem(props: GameItemProps) {
    const { title, category } = props
    return (
        <>
            <div className="featured-game-card position-relative">
                <Link href={'/detail'}>
                    <a>
                        <div className="blur-sharp">
                            <img
                                className="thumbnail"
                                src={`/img/${props.thumbnail}.png`}
                                width="205"
                                height="270"
                                alt="thumbnail-games"
                            />
                        </div>
                        <div className="cover position-absolute bottom-0 m-32">
                            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                                <div className="game-icon mx-auto">
                                    <img
                                        src="/icon/joystick.svg"
                                        width={54}
                                        height={36}
                                        alt="game-icon"
                                    />
                                </div>
                                <div>
                                    <p className="fw-semibold text-white text-xl m-0">
                                        {title}
                                    </p>
                                    <p className="fw-light text-white m-0">
                                        {category}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}
