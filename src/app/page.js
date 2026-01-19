import './page.css'
import {
  RiShoppingBag4Line,
  RiThumbUpLine,
  RiTruckLine,
  RiWallet3Line,
  RiShieldUserLine,
  RiTimeZoneLine,
} from 'react-icons/ri'

export default function Home() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <h1 className="title">Дуалити</h1>
          <ul className="nav-links">
            <li><a href="#about">О компании</a></li>
            <li><a href="#why">Почему выбирают нас</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* О компании */}
        <section id="about" className="description">
          <div className="content">
            <h2>О компании</h2>
            <p>
              Мы — динамично развивающаяся оптовая компания, предлагающая широкий
              ассортимент товаров для бизнеса. Наша ключевая особенность —
              универсальность: мы работаем с многообразной товарной
              номенклатурой, закрывая самые разные потребности предпринимателей
              и организаций.
            </p>
            <p>
              Мы ценим долгосрочные партнёрские отношения и предлагаем
              индивидуальный подход к каждому клиенту. Обеспечиваем быструю
              доставку, удобные условия оплаты и всестороннюю поддержку, чтобы
              сделать оптовые закупки максимально комфортными.
            </p>
            <p>
              Благодаря гибкому подходу и вниманию к пожеланиям клиентов, мы
              оперативно адаптируемся к рынку и предлагаем актуальные решения
              для вашего бизнеса.
            </p>
            <p>
              Откройте новые горизонты для вашего бизнеса с надёжным и опытным
              партнёром в сфере оптовой торговли!
            </p>
          </div>
        </section>

        {/* Почему выбирают нас */}
        <section id="why" className="why">
          <div className="content">
            <h2>Почему выбирают нас</h2>

            <div className="features">
              <div className="feature">
                <RiShoppingBag4Line className="icon" />
                <h3>Широкий ассортимент</h3>
                <p>
                  Постоянно расширяем базу поставщиков и обновляем каталог,
                  предлагая максимально разнообразный выбор товаров.
                </p>
              </div>

              <div className="feature">
                <RiThumbUpLine className="icon" />
                <h3>Гибкие условия сотрудничества</h3>
                <p>
                  Подстраиваемся под каждого партнёра: индивидуальные схемы
                  работы, объёмы поставок и графики платежей.
                </p>
              </div>

              <div className="feature">
                <RiTruckLine className="icon" />
                <h3>Стабильные поставки</h3>
                <p>
                  Налаженная логистика и прочные связи с поставщиками гарантируют
                  своевременную отгрузку без срывов сроков.
                </p>
              </div>

              <div className="feature">
                <RiWallet3Line className="icon" />
                <h3>Конкурентные цены</h3>
                <p>
                  Прямые контракты с производителями и крупные объёмы закупок
                  позволяют удерживать выгодные цены.
                </p>
              </div>

              <div className="feature">
                <RiShieldUserLine className="icon" />
                <h3>Комплексное обслуживание</h3>
                <p>
                  Консультируем по ассортименту, помогаем формировать заказы и
                  обеспечиваем полную документальную поддержку.
                </p>
              </div>

              <div className="feature">
                <RiTimeZoneLine className="icon" />
                <h3>Индивидуальный подход</h3>
                <p>
                  Назначаем персонального менеджера для каждого клиента и
                  оперативно решаем все возникающие вопросы.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Контакты */}
        <section id="contacts" className="contacts">
          <div className="content">
            <h2>Контакты</h2>

            <div className="contact-item">
              <strong>Адрес:</strong> 123098, город Москва, ул Рогова, д. 17, помещ. 1/п
            </div>

            <div className="contact-item">
              <strong>Телефон:</strong>{' '}
              <a href="tel:+79143386139">8 (926) 545 74 54</a>
            </div>

            <div className="contact-item">
              <strong>Email:</strong>{' '}
              <a href="mailto:mamont-imp@bk.ru">dualiti@internet.ru</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#about">О компании</a></li>
            <li><a href="#why">Почему выбирают нас</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
          <p>© 2025 Дуалити. Все права защищены.</p>
        </nav>
      </footer>
    </div>
  )
}

