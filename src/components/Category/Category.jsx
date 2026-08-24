import { SCategory } from './Category.styled';

export const Category = ({ isActive, theme, dataIndex, categoryName, setActiveCategory }) => {
    console.log(theme);
    return (
        <SCategory
            className={[
                'categories__theme',
                theme || console.log(theme),
                isActive ? '_active-category' : '',
            ].join(' ')}
            onClick={() => setActiveCategory({ dataIndex: dataIndex, categoryName: categoryName })}
        >
            <p className={theme}>{categoryName}</p>
        </SCategory>
    );
};
