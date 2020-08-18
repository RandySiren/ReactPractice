import React from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};
class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchaseable: false,
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map((key) => {
                return ingredients[key];
            })
            .reduce((sum, el) => {
                return el + sum;
            }, 0);
        this.setState({ purchaseable: sum > 0 });
    };

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = this.state.ingredients[type] + 1;
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0) return;
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = this.state.ingredients[type] - 1;
        const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients,
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
