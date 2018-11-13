import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';

const mapStyles = {
    width: '100%',
    height: '100%'
};



export class Dashboard extends Component {
    static propTypes = {
        google: PropTypes.string.isRequired,
    }
    render() {

        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: -1.2884,
                    lng: 36.8233
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBIXZvDmynO3bT7i_Yck7knF5wgOVyj5Fk'
})(Dashboard);
