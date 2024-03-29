import React from 'react'
import Category from './Category'
import TableRow from './TableRow'

export default function MemberOverviewContent() {
    return (
        <>
            <main className="main-wrapper">
                <div className="ps-lg-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                        Overview
                    </h2>
                    <div className="top-up-categories mb-30">
                        <p className="text-lg fw-medium color-palette-1 mb-14">
                            Top Up Categories
                        </p>
                        <div className="main-content">
                            <div className="row">
                                <Category icon="ic-desktop" nominal={18000000}>
                                    Game
                                    <br />
                                    Desktop
                                </Category>
                                <Category icon="ic-mobile" nominal={8000000}>
                                    Game
                                    <br />
                                    Mobile
                                </Category>
                                <Category icon="ic-desktop" nominal={5000000}>
                                    Others
                                    <br />
                                    Category
                                </Category>
                            </div>
                        </div>
                    </div>
                    <div className="latest-transaction">
                        <p className="text-lg fw-medium color-palette-1 mb-14">
                            Latest Transactions
                        </p>
                        <div className="main-content main-content-table overflow-auto">
                            <table className="table table-borderless">
                                <thead>
                                    <tr className="color-palette-1">
                                        <th className="text-start" scope="col">
                                            Game
                                        </th>
                                        <th scope="col">Item</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRow
                                        image="overview-4"
                                        title="Mobile Legends"
                                        category="Mobile"
                                        item={200}
                                        price={200000}
                                        status="Success"
                                    />
                                    <TableRow
                                        image="overview-3"
                                        title="Seven Knight II"
                                        category="Mobile"
                                        item={100}
                                        price={4000000}
                                        status="Pending"
                                    />
                                    <TableRow
                                        image="overview-2"
                                        title="PUBG"
                                        category="Mobile"
                                        item={400}
                                        price={350000}
                                        status="Failed"
                                    />
                                    <TableRow
                                        image="overview-1"
                                        title="FreeFire"
                                        category="Mobile"
                                        item={700}
                                        price={900000}
                                        status="Success"
                                    />
                                    <TableRow
                                        image="overview-1"
                                        title="Valorant"
                                        category="Desktop"
                                        item={540}
                                        price={440000}
                                        status="Success"
                                    />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
