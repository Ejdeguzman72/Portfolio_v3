import React from 'react';
import {  Container, Form } from 'react-bootstrap';
import PokeList from './pokelist-component';
import DetailView from './detailview';
import Pokemon from './pokemon';
import { FunReactProjectNavBarComponent } from '../fun-react-project-navbar/FunReactProjectNavBar';
import { FooterComponent } from '../../footer-component/footer-component';


export class PokedexComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemon: {}
        };

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            const pokemon = new Pokemon(data);

            this.setState({ pokemon });
            alert(`You clicked on ${pokemon.name}!`);
        })
        .catch(err => console.log(err));
        console.log(id);
    }

    render() {
        return (
            <div>
                <FunReactProjectNavBarComponent />
                <div id="hero-pokedex-background">
                    <Form>
                        <br></br>
                        {/* <Container className="pokedex-container"> */}
                            <h1 className="center-title">Pokedex</h1>
                            <div className="pokedex">
                                <PokeList handleOnClick={this.handleOnClick} />
                                <DetailView pokemon={this.state.pokemon} />
                            </div>
                        {/* </Container> */}
                    </Form>
                </div>
                <FooterComponent />
            </div>
        )
    }
}