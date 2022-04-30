export default function GameItem() {
    return (
        <>
            <div className="featured-game-card position-relative">
                <a href="./src/detail.html">
                    <div className="blur-sharp">
                        <img
                            src="/img/Thumbnail-1.png"
                            width="205"
                            height="270"
                            alt=""
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
                                    Super Mechs
                                </p>
                                <p className="fw-light text-white m-0">
                                    Mobile
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}
