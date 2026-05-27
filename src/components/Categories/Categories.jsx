import { Category } from '../Category/Category';
import { SCategories } from './Categories.styled';

export const Categories = ({ categories, activeCategory }) => {
    return (
        <SCategories>
            <p className="categories__p subttl">Категория</p>
            <div className="categories__themes">
                {categories.map((category) => {
                    return (
                        <Category
                            isActive={category.style === activeCategory.style}
                            theme={category}
                        />
                    );
                })}
            </div>
        </SCategories>
    );
};
