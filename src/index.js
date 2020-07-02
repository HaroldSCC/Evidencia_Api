import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';



class Personarandom extends Component{

    state = {
        loading: true,
        person: null
    };

    async componentDidMount() {
        const url = "https://api.randomuser.me/"; //declaracion de api
        const response = await fetch(url);        //declaracion de fetch
        const data = await response.json();       //declaracion de archivo json
        this.setState({ person: data.results[0], loading: false }); //pasa los datos de variable data a peron
    }

    render() {
        if (this.state.loading) {
            return <div>Cargando...</div>;
        }

        if (!this.state.person) {
            return <div>Persona no encontrada</div>;
        }

        return (
            <div className="padre">
                <div className="hijo">
                    <h1 className="titulo">Persona Random</h1>
                    <img className="imagen" src={this.state.person.picture.large}  /> <br/>
                    <div className="nieto">Titulo: {this.state.person.name.title}</div>
                    <div className="nieto">Nombre: {this.state.person.name.first} {this.state.person.name.last}</div>
                    <div className="nieto">Edad: {this.state.person.dob.age}</div>
                    <div className="nieto">Telefono: {this.state.person.phone}</div>
                    <div className="nieto">Pais: {this.state.person.location.country}</div>
                    <div className="nieto">Estado: {this.state.person.location.state}</div>
                    <div className="nieto">Ciudad: {this.state.person.location.city}</div>

                    <a className="boton" href="javascript:location.reload()">Mostrar Otro</a>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <Personarandom />,
    document.getElementById('root')
);


