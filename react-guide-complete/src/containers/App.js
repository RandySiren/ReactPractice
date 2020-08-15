import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');

        this.state = {
            persons: [
                { id: 'fjeowax', name: 'Max', age: 28 },
                { id: 'fjeowa6', name: 'Manu', age: 29 },
                { id: 'fjeowa1', name: 'Stephanie', age: 26 },
            ],
            otherState: 'some other value',
            showPersons: false,
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] mounted');
    }

    nameChangedHandler = (event, id) => {
        // Mutating state properly without changing state directly

        // Find index
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        });

        // Change value of our person
        const person = { ...this.state.persons[personIndex] };
        person.name = event.target.value;

        // Add to our persons for state
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons,
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow,
        });
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />
            );
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.title}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    toggled={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
