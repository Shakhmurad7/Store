

function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-left">
            <h2>Подпишитесь на нашу рассылку и узнавайте о акция быстрее</h2>
            <div className="footer-block-left">
                <input type="text"/>
                <button>Отправить</button>
            </div>
        </div>
        <div className="footer-center">
            <div className="footer-center-block">
                <div className="footer-block-text">
                    <ul>
                        <li>Информация</li>
                        <li>О компании</li>
                        <li>Контакты</li>
                        <li>Акции</li>
                        <li>Магазины</li>
                    </ul>
                </div>
                <div className="footer-block-text">
                <ul>
                        <li>Интернет-магазин</li>
                        <li>Доставка и самовывоз</li>
                        <li>Оплата</li>
                        <li>Возврат-обмен</li>
                        <li>Новости</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer