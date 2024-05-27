import React from 'react';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Добро пожаловать в наш магазин!</h1>
            </header>
            <main>
                <section>
                    <h2>Популярные товары</h2>
                    {/* Здесь можно отобразить список популярных товаров */}
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
