import React, {Component} from "react";

class Formulaire extends Component {
    render() {
        return (
            <div className="Formulaire">
                <form onSubmit={this.props.onSubmit}>
                    <h1>{this.props.globalTitle}</h1>
                    <input type="text" value={this.props.title} onChange={this.props.onChange}/>
                    <button>Validation</button>
                </form>
            </div>
        )
    }
}

export default Formulaire;