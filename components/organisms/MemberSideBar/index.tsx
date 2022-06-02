import Profile from './Profile'
import Footer from './Footer'
import MenuItem from './MenuItem'

interface MemberSideBarProps {
    activeMenu: 'overview' | 'transactions' | 'settings'
}

export default function MemberSideBar(props: MemberSideBarProps) {
    const { activeMenu } = props
    return (
        <>
            <section className="sidebar">
                <div className="content pt-50 pb-30 ps-30">
                    <Profile />
                    <div className="menus">
                        <MenuItem
                            title="Overview"
                            icon="SideOverview"
                            active={activeMenu == 'overview'}
                            url="member"
                        />
                        <MenuItem
                            title="Transactions"
                            icon="SideTransaction"
                            url="member/transactions"
                            active={activeMenu == 'transactions'}
                        />
                        <MenuItem
                            title="Messages"
                            icon="SideMessages"
                            url="member/messages"
                        />
                        <MenuItem
                            title="Card"
                            icon="SideCard"
                            url="member/card"
                        />
                        <MenuItem
                            title="Rewards"
                            icon="SideRewards"
                            url="member/rewards"
                        />
                        <MenuItem
                            title="Settings"
                            icon="SideSettings"
                            url="member/edit-profile"
                            active={activeMenu == 'settings'}
                        />
                        <MenuItem
                            title="Logout"
                            icon="SideLogout"
                            url="sign-in"
                        />
                    </div>
                    <Footer />
                </div>
            </section>
        </>
    )
}
