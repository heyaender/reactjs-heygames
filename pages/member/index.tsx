import MemberOverviewContent from '../../components/organisms/MemberOverviewContent'
import MemberSideBar from '../../components/organisms/MemberSideBar'

export default function Member() {
    return (
        <>
            <section className="overview overflow-auto">
                <section className="sidebar">
                    <MemberSideBar />
                </section>
                <MemberOverviewContent />
            </section>
        </>
    )
}
