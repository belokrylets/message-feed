import './content.css'
import image from '../../media/image/5.png'
const Content = () => {
    return (
        <div className='content'>
            <div className="d-flex">
                <div className="time">
                    15:57
                </div>
                <div>
                    <div>
                    <div className="text">
                        "Россия 1" не боится снимать сериалы о сложных и неоднозначных периодах в истории нашей страны. Это и "В круге первом", и "Жизнь и судьба", и "Зулейха". Идёт работа над "Одним днём Ивана Денисовича". Вопрос Антону Златопольскому -почему вы считаете
                    </div>
                    <button>Далее</button>
                    </div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Content;