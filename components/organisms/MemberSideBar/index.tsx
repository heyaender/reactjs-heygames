import Profile from './Profile'
import Footer from './Footer'
import MenuItem from './MenuItem'

export default function MemberSideBar() {
    return (
        <>
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem title="Overview" icon="SideOverview" active />
                    <MenuItem title="Transactions" icon="SideTransaction" />
                    <MenuItem title="Messages" icon="SideMessages" />
                    <MenuItem title="Card" icon="SideCard" />
                    <MenuItem title="Rewards" icon="SideRewards" />
                    <MenuItem title="Settings" icon="SideSettings" />
                </div>
                <Footer />
            </div>
        </>
    )
}
