import React from 'react';
import { Admin, Resource } from 'react-admin';
import { RestProvider, base64Uploader } from '../lib';
import { DriverList, DriverCreate, DriverShow, DriverEdit } from './Drivers';
import { RidersList, RidersEdit, RidersCreate } from './Riders';
import { TripList } from './Trip';
import Dashboard from './Dashboard';

const firebaseConfig = {
    apiKey: 'AIzaSyCXZiERpF2DscCApxbRca9Y7UtglIdc-G8',
    authDomain: 'alpharides-f115c.firebaseapp.com',
    databaseURL: 'https://alpharides-f115c.firebaseio.com/',
    projectId: 'alpharides-f115c',
    storageBucket: 'alpharides-f115c.appspot.com',
    messagingSenderId: '38995523207'
};

const trackedResources = [{ name: 'user', isPublic: true }, { name: 'drivers', isPublic: true }, { name: 'DriversWorking', isPublic: true }];

// to run this demo locally, please feel free to disable authProvider to bypass login page

const dataProvider = base64Uploader(RestProvider(firebaseConfig, { trackedResources }));
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="user" list={RidersList} edit={RidersEdit} create={RidersCreate} />
        <Resource name="drivers" list={DriverList} edit={DriverEdit} show={DriverShow} create={DriverCreate} />
        <Resource name="DriversWorking" list={TripList} />
    </Admin>
);
export default App;
