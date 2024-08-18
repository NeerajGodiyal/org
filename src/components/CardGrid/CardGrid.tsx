import React from 'react';
import SquishyCard from './SquishyCards';


const CardGrid = () => {
const cardsData = [
{
    title: 'Nullam Rhoncus Libero et Lorem Pretium Mattis Consectetur ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat, rem Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.',
    icon: '/images/next.svg',
    imageSrc: '/images/1.jpg'
},
{
    title: 'Nullam Rhoncus Libero et Lorem Pretium Mattis',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem',
    icon: '/images/next.svg',
    imageSrc: '/images/2.jpg'
},
{
    title: 'Nullam Rhoncus Libero et Lorem Pretium Mattis Aipisicing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem',
    icon: '/images/next.svg',
    imageSrc: '/images/3.jpg'
},
{
    title: 'Nullam Rhoncus Libero et Lorem Pretium Mattis Pretium',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem',
    icon: '/images/next.svg',
    imageSrc: '/images/4.jpg'
},
{
    title: 'Nullam Rhoncus Libero et Lorem Pretium Mattis',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem',
    icon: '/images/next.svg',
    imageSrc: '/images/5.jpg'
},
{
    title: 'Nullam Rhoncus Libero et Lorem Pretium Mattis Libero',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem',
    icon: '/images/next.svg',
    imageSrc: '/images/6.jpg'
}
// Add more cards as needed
];

return (
<section className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center p-8">
    {cardsData.map((card, index) => (
    <SquishyCard
        key={index}
        title={card.title}
        description={card.description}
        icon={card.icon}
        imageSrc={card.imageSrc}
    />
    ))}
</section>
);
};

export default CardGrid;