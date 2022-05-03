import FooterLinkItem from '../../molecules/FooterLinkItem'

export default function index() {
    return (
        <>
            <section className="footer pt-50">
                <footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 text-lg-start text-center">
                                <a href="" className="mb-30">
                                    <img
                                        src="/img/herofooter.svg"
                                        width={60}
                                        height={60}
                                        alt="herofooter"
                                    />
                                </a>
                                <p className="mt-30 text-lg color-palette-1 mb-30">
                                    StoreGG membantu gamers
                                    <br /> untuk menjadi pemenang sejati
                                </p>
                                <p className="mt-30 text-lg color-palette-1 mb-30">
                                    Copyright 2021. All Rights Reserved.
                                </p>
                            </div>
                            <div className="col-lg-8 mt-lg-0 mt-20">
                                <div className="row gap-sm-0">
                                    <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                        <p className="text-lg fw-semibold color-palette-1 mb-12">
                                            Company
                                        </p>
                                        <ul className="list-unstyled">
                                            <FooterLinkItem
                                                title="About Us"
                                                urlink="/about"
                                            />
                                            <FooterLinkItem
                                                title="Press Release"
                                                urlink="/press"
                                            />
                                            <FooterLinkItem
                                                title="Term of Use"
                                                urlink="/term"
                                            />
                                            <FooterLinkItem
                                                title="Privacy Policy"
                                                urlink="/privacy"
                                            />
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                        <p className="text-lg fw-semibold color-palette-1 mb-12">
                                            Support
                                        </p>
                                        <ul className="list-unstyled">
                                            <FooterLinkItem
                                                title="Refund Policy"
                                                urlink="/refund"
                                            />
                                            <FooterLinkItem
                                                title="Unlock Reward"
                                                urlink="/unlock"
                                            />
                                            <FooterLinkItem
                                                title="Live Chatting"
                                                urlink="/chat"
                                            />
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                                        <p className="text-lg fw-semibold color-palette-1 mb-12">
                                            Connect
                                        </p>
                                        <ul className="list-unstyled">
                                            <FooterLinkItem
                                                title="hi@haanstore.com"
                                                urlink="/mail"
                                            />
                                            <FooterLinkItem
                                                title="0816-663-942"
                                                urlink="/hubungi"
                                            />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}
