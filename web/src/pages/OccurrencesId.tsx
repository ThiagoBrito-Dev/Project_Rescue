import { FoundRecords } from '../components/FoundRecords';
import { LostRecords } from '../components/LostRecords';
import { SecondaryTopBar } from '../components/SecondaryTopBar';
import { SideBar } from '../components/SideBar';
import Styles from '../styles/pages/OccurrencesId.module.css';

function OccurrencesId() {
    return (
        <div className={Styles.occurrencesIdContainer}>
            <body>
                <header>
                    <SecondaryTopBar />
                </header>
                <main>
                    <section>
                        <div>
                            <SideBar />
                        </div>
                        <div>
                            <FoundRecords />
                        </div>
                        <div>
                            <LostRecords />
                        </div>
                    </section>
                </main>
            </body>
        </div>
    )
}

export default OccurrencesId;