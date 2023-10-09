import MemberSideBar from '../../../components/organisms/MemberSideBar'
import TransactionsContent from '../../../components/organisms/TransactionContent'

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
