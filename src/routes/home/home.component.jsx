import HomepageTitle from '../../components/homepage/title/homepageTitle';
import HomepageNewLinks from '../../components/homepage/new-links/homepageNewLinks';
import HomepageSummary from '../../components/homepage/summary/homepageSummary';

import './home.styles.scss'

const Home = () => {
    return (
        <div className='homepage'>
            <header>
                <HomepageTitle />
            </header>
            <section>
                <HomepageSummary />
                <HomepageNewLinks />
            </section>
        </div>
    )
};

export default Home;