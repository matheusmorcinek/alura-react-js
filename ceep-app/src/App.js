import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  //props, state
  constructor() {

    super();

    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {

    const novaNota = {
      titulo,
      texto
    };

    const novoArrayNotas = [...this.state.notas, novaNota];

    const novoEstado = {
      notas: novoArrayNotas
    };

    this.setState(novoEstado);

    console.log(`Uma nova nota foi criada ${titulo} ${texto}`);
  }

  render() {

    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
