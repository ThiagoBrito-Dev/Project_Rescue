import { Banner } from '../components/Banner';
import { Body } from '../components/Body';
import { TopBar } from '../components/TopBar';
import Styles from '../styles/pages/Home.module.css';

function Home() {
  return (
    <div className={Styles.homeContainer}>
      <body>
        <header>
          <TopBar />
        </header>
        <main>
          <section>
            <Banner />
          </section>
          <section>
            <Body />
          </section>
        </main>
      </body>
    </div>
  )
}

export default Home;
