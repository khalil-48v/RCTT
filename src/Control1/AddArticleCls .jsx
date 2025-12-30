import React, { Component } from "react";

export default class AddArticleCls extends Component {

    constructor(props) {
        super(props)
        this.state = {
            code: "",
            nom: "",
            categorie: "",
            prixU: 0
        }


    }
    handleInp = (e) => {
        const { name, value } = e.target
        
      this.setState({
      [name]: name === "prixU" ? Number(value) : value
    })                                                               
    }
    handleBtn = () => {
        this.props.Add(this.state)
    }
    render() {
     
        return (
            <div>                                                                                                                                                                           
                <input type="text" name="code" value={this.state.code} onChange={this.handleInp} />
                <input type="text" name="nom" value={this.state.nom} onChange={this.handleInp} />
                <input type="text" name="categorie" value={this.state.categorie} onChange={this.handleInp} />
                <input type='number' name="prixU" value={this.state.prixU} onChange={this.handleInp} />
                <button onClick={this.handleBtn}>Add</button>
            </div>

        )
    }
}


