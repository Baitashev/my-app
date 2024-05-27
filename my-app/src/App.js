import React from 'react';
import './App.css'; // Подключаем файл стилей
import 'bootstrap/dist/css/bootstrap.min.css'; // Импорт стилей Bootstrap
import { Card, Button } from 'react-bootstrap'; // Импорт компонентов Card и Button из Bootstrap
import { CSSTransition } from 'react-transition-group'; // Импорт компонента CSSTransition для анимации
import './App.animations.css'; // Подключаем файл стилей для анимации

function App() {
    return (
        <div className="App">
            <header>
                <h1>Добро пожаловать в наш магазин!</h1>
            </header>
            <main>
                <section>
                    <h2>Популярные товары</h2>
                    <div className="card-deck">
                        {/* Карточка товара 1 */}
                        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
                            <Card>
                                <Card.Img variant="top" src="..." alt="Товар 1" />
                                <Card.Body>
                                    <Card.Title>Название товара 1</Card.Title>
                                    <Card.Text>
                                        Описание товара 1
                                    </Card.Text>
                                    <Button variant="primary">Купить</Button>
                                </Card.Body>
                            </Card>
                        </CSSTransition>
                        {/* Карточка товара 2 */}
                        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
                            <Card>
                                <Card.Img variant="top" src="..." alt="Товар 2" />
                                <Card.Body>
                                    <Card.Title>Название товара 2</Card.Title>
                                    <Card.Text>
                                        Описание товара 2
                                    </Card.Text>
                                    <Button variant="primary">Купить</Button>
                                </Card.Body>
                            </Card>
                        </CSSTransition>
                        {/* Добавьте другие карточки товаров здесь */}
                    </div>
                </section>
                <section>
                    <h2>Новинки</h2>
                    {/* Здесь можно отобразить список новых товаров */}
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Наш магазин</p>
            </footer>
        </div>
    );
}

export default App;
