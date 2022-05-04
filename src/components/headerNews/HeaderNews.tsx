import './headerNews.css'
import send from '../../media/image/send.svg'
import hide from '../../media/image/hide.svg'
import param from '../../media/image/param.svg'
import star from '../../media/image/star.svg'


const HeaderNews = () => {
    return (
        <div className="headerNews">
            <div className="photo"></div>
            <div className="author">
                <div className="nameLocation">
                <p className="name">Nina Malofeeva</p>
                <p className="location">Оренбург, Оренбургская область</p> 
                </div>
                <p className="coment">Текст поста в соц. сетях если это комментарий</p>
            </div>
            <div className="buttonGroup">
                <button>Левый</button>
                <button>Центр</button>
                <button>Правый</button>
            </div>
            <div className="icons">
                <img src={send} alt="Иконка " />
                <img src={hide} alt="Иконка " />
                <img src={param} alt="Иконка " />
                <img src={star} alt="Иконка " />
            </div>
        </div>
    );
}

export default HeaderNews;