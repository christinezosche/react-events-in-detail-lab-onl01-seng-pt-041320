// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    createCoordinates = (event) => {
        let coordinates = [event.clientX, event.clientY]
        return this.props.onReceiveCoordinates(coordinates)
    }
    render() {
        return <button 
        onClick={this.createCoordinates}/>
    }

}