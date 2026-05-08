import { Card } from '../Card/Card';
import { Column } from '../Column/Column';

const cardsArray = [
    {
        theme: 'web design',
        text: 'Новая задача',
        date: new Date('2023.10.30'),
        style: '_orange',
    },
    {
        theme: 'Research',
        text: 'Новая задача',
        date: new Date('2023.10.30'),
        style: '_orange',
    },
    {
        theme: 'Web design',
        text: 'Новая задача',
        date: new Date('2023.10.30'),
        style: '_green',
    },
    {
        theme: 'Copywriting',
        text: 'Новая задача',
        date: new Date('2023.10.30'),
        style: '_purple',
    },
    {
        theme: 'Web design',
        text: 'Новая задача',
        date: new Date('2023.10.30'),
        style: '_orange',
    },
];

export const Main = () => {
    return (
        <main class="main">
            <div class="container">
                <div class="main__block">
                    <div class="main__content">
                        <Column cards={cardsArray} status={'Без статуса'} />
                        <Column
                            cards={[
                                {
                                    theme: 'Research',
                                    text: 'Новая задача',
                                    date: new Date('2023.10.30'),
                                    style: '_orange',
                                },
                            ]}
                            status={'Нужно сделать'}
                        />
                        <Column
                            cards={[
                                {
                                    theme: 'Research',
                                    text: 'Новая задача',
                                    date: new Date('2023.10.30'),
                                    style: '_orange',
                                },
                                {
                                    theme: 'Copywriting',
                                    text: 'Новая задача',
                                    date: new Date('2023.10.30'),
                                    style: '_purple',
                                },
                                {
                                    theme: 'Web design',
                                    text: 'Новая задача',
                                    date: new Date('2023.10.30'),
                                    style: '_orange',
                                },
                            ]}
                            status={'В работе'}
                        />
                        <Column
                            cards={[
                                {
                                    theme: 'Research',
                                    text: 'Новая задача',
                                    date: new Date('2023.10.30'),
                                    style: '_orange',
                                },
                            ]}
                            status={'Тестирование'}
                        />
                        <Column
                            cards={[
                                {
                                    theme: 'Research',
                                    text: 'Новая задача',
                                    date: new Date('2023.10.30'),
                                    style: '_orange',
                                },
                            ]}
                            status={'Готово'}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};
