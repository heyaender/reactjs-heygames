import MemberOverviewContent from '../../components/organisms/MemberOverviewContent'
import MemberSideBar from '../../components/organisms/MemberSideBar'

export default function Member() {
    return (
        <>
            <section className="overview overflow-auto">
                <MemberSideBar activeMenu='overview' />
                <MemberOverviewContent />
            </section>
        </>
    )
}
