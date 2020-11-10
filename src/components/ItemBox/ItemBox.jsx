import React, { Component } from 'react'

// -----------------------------------------------------------------------------------
// Import Custom Styles
// -----------------------------------------------------------------------------------
import './ItemBox.css';

// -----------------------------------------------------------------------------------
// Import Image
// -----------------------------------------------------------------------------------
import Logo from '../../Images/ItemBox/logo192.png' // This is not working because image came from props in MainComponent.jsx

export default class ItemBox extends Component {
    render() {
        return (
            <div className="box">
                {/* Inline CSS */}
                <h2 style={{ color: '#fff' }}>{this.props.title}</h2>
                <img className="image" src={this.props.image} alt="" />
                <h4>{`${this.props.version}v`}</h4>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
