import Content from './content/Content';
import FooterNews from './footerNews/FooterNews';
import HeaderNews from './headerNews/HeaderNews';
import './news.css'

const News = () => {
    return (
        <div className='news'>
            <HeaderNews />
            <Content />
            <FooterNews />
        </div>
    );
}

export default News;