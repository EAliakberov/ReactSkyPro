import { SCategory } from './Category.styled';

export const Category = ({ isActive, theme }) => {
    return (
        <SCategory
            className={['categories__theme', theme.style, isActive ? '_active-category' : ''].join(
                ' '
            )}
        >
            <p className={theme.style}> {theme.name}</p>
        </SCategory>
    );
};
