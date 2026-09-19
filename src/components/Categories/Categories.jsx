import { useState } from 'react';
import { Category } from '../Category/Category';
import { SCategories } from './Categories.styled';
import { themes } from '../../../data';

export const Categories = ({ categories, selectedCategory, onChange }) => {
    const [activeCategory, setActiveCategory] = useState(selectedCategory);

    const handleSetActiveCategory = ({ categoryName, dataIndex }) => {
        setActiveCategory(dataIndex);
        onChange(categoryName);
    };

    return (
        <SCategories>
            <p className="categories__p subttl">Категория</p>
            <div className="categories__themes">
                {categories.map((category, index) => {
                    return (
                        <Category
                            key={index}
                            dataIndex={index}
                            isActive={index === activeCategory}
                            theme={themes[category].style}
                            categoryName={themes[category].name}
                            setActiveCategory={handleSetActiveCategory}
                        />
                    );
                })}
            </div>
        </SCategories>
    );
};
