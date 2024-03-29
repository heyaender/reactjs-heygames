import React from 'react'
import GameItem from '../../molecules/GameItem/index'

export default function FeaturedGame() {
    return (
        <>
            <section className="featured-game pt-50 pb-50">
                <div className="container-fluid">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                        Our Featured
                        <br />
                        {''}
                        Games This Year
                    </h2>
                    <div
                        className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                        data-aos="fade-up"
                    >
                        <GameItem
                            title="Mobile Legends"
                            category="Mobile"
                            thumbnail="Thumbnail-5"
                        />
                        <GameItem
                            title="Seven Knight II"
                            category="Mobile"
                            thumbnail="Thumbnail-5"
                        />
                        <GameItem
                            title="PUBG"
                            category="Mobile"
                            thumbnail="Thumbnail-5"
                        />
                        <GameItem
                            title="Free Fire"
                            category="Mobile"
                            thumbnail="Thumbnail-5"
                        />
                        <GameItem
                            title="Valorant"
                            category="Desktop"
                            thumbnail="Thumbnail-5"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
