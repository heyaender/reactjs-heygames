import Separator from '../../atoms/Separator'
import ReachItem from '../../molecules/ReachItem'

export default function Reached() {
    return (
        <>
            <section className="reached pt-50 pb-50">
                <div className="container-fluid">
                    <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                        <ReachItem title="290M+" subtitle="Players Top Up" />
                        <Separator />
                        <ReachItem title="20" subtitle="Games Available" />
                        <Separator />
                        <ReachItem title="99%" subtitle="Happy Customers" />
                        <Separator />
                        <ReachItem title="4.7" subtitle="Rating Worldwide" />
                    </div>
                </div>
            </section>
        </>
    )
}
