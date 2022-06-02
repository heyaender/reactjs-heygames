import MemberSideBar from '../../../components/organisms/MemberSideBar'
import TransactionsContent from '../../../components/organisms/TransactionsContent'

export default function Transactions() {
    return (
        <>
            <section className="transactions overflow-auto">
                <MemberSideBar activeMenu="transactions" />
                <TransactionsContent />
            </section>
        </>
    )
}
