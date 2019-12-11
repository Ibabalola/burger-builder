import React from 'react';

import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import styles from './Burger.module.css';

export default props => {
    // Object.keys gives us an array of stings of the keys of a given object
    let transformedIngregients = Object.keys(props.ingredients)
        .map(igKey => {
            // Used to extract the quantity
            return [...Array(props.ingredients[igKey])].map((_, index) => {
                // Used to create the children components
                return <BurgerIngredient key={igKey + index} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            console.log('arr', arr, 'element', el);
            // The concat() method is used to merge two or more arrays. 
            // This method does not change the existing arrays, but instead returns a new array.
            return arr.concat(el);
        }, []); 
        // Reduce is a built in Array function which allows us to transform an array into something else
        // It takes a function as an input and this function takes two arguments passed in by JS
        // The previous values and the current value, it receives a defined callback which is called on each element in the array to reduce the array it had been called on
        // It also receives an initial value

    if (transformedIngregients.length === 0) {
        transformedIngregients = <p>Please Start Adding Ingredients</p>
    }

    // We could have an array of empty arrays
    console.log('transformed', transformedIngregients);
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngregients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};