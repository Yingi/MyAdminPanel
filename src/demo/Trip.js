import React from 'react';
import {
  List,
  Datagrid,
  TextField
} from 'react-admin';

export const TripList = props => (
  <List title="Rides" {...props}>
    <Datagrid>
      <TextField source="id" />
    </Datagrid>
  </List>
);