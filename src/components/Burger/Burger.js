import React from 'react';
import Burgeringredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const Burger = (props) => {
    console.log(props);
    let transformedingredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <Burgeringredient key={igKey + i} type={igKey} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (transformedingredients.length === 0) {
        transformedingredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <Burgeringredient type="bread-top" />
                { transformedingredients }
            <Burgeringredient type="bread-bottom" />
        </div>
    );
};
 
export default Burger;