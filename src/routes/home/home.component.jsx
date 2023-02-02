import HomepageSummary from '../../components/homepage/summary/homepageSummary';

import './home.styles.scss'

const Home = () => {
    return (
        <div className='homepage'>
            <section className='summary-container'>
                <HomepageSummary /> 
            </section>
        </div>
    )
};

export default Home;