import HomepageTitle from '../../components/homepage/title/homepageTitle';
import HomepageNewLinks from '../../components/homepage/new-links/homepageNewLinks';
import HomepageSummary from '../../components/homepage/summary/homepageSummary';

import './home.styles.scss'

const Home = () => {
    return (
        <div className='homepage'>
            <section className='summary-container'>
                <HomepageSummary /> 
            </section>    
            <div className='link-container'>
                <HomepageNewLinks />
            </div>
        </div>
    )
};

export default Home;