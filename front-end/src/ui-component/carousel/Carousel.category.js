import React from 'react';
import CarouselCard from './Carousel.category.card';
import './Carousel.category.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { getAllcategories } from 'store/actions/Game Actions/game.action';
import Carousel from 'react-elastic-carousel';

function CarouselCategory() {
    // const [width, setWidth] = useState(0);
    // const carousel = useRef();
    const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    //     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    // }, []);

    //get all categories =======================================================
    useEffect(() => {
        getAllcategories().then((data) => {
            // console.log('categorties.. 👍 ', data);
            setCategories(data);
        });
    }, []);

    const breakPoints = [
        { width: 300, itemsToShow: 2.2 },
        { width: 360, itemsToShow: 2.5 },
        { width: 450, itemsToShow: 3 },
        { width: 500, itemsToShow: 3.3 },
        { width: 550, itemsToShow: 3.5 },
        { width: 600, itemsToShow: 4 },
        { width: 650, itemsToShow: 4.2 },
        { width: 700, itemsToShow: 4.7 },
        { width: 750, itemsToShow: 5 }
    ];

    return (
        <div className="carousel-category">
            <Carousel breakPoints={breakPoints} showArrows={false}>
                {categories.map((category, key) => {
                    return <CarouselCard key={key} categoryDetails={category} />;
                })}
            </Carousel>
        </div>
        // <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
        //     <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="carousel-container">
        //         {categories.map((category) => {
        //             return (
        //                 <motion.div key={category._id}>
        //                     <CarouselCard categoryDetails={category} />
        //                 </motion.div>
        //             );
        //         })}
        //     </motion.div>
        // </motion.div>
    );
}

export default CarouselCategory;
