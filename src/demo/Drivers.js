import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField
} from 'react-admin';

export const DriverList = props => (
  <List title="All Drivers" {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="Name" />
      <TextField source="Car.Brand" label="Car" />
      <EditButton />
    </Datagrid>
  </List>
);

export const DriverCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="Name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <ImageInput source="image" label="Related Image" accept="image/*" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export const DriverEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="Name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <ImageInput source="image" label="Related Image" accept="image/*" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
