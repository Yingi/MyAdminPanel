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
    ImageField,
    Show,
    SimpleShowLayout,
    RichTextField,
    Filter
} from 'react-admin';


const DriverFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="Name" alwaysOn />
    </Filter>
);

export const DriverList = props => (
    <List title="All Drivers" {...props} filters={<DriverFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="Name" />
            <TextField source="Car.Brand" label="Car" />
            <EditButton />
        </Datagrid>
    </List>
);

export const DriverShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="Name" />
            <RichTextField source="Car.Brand" />
        </SimpleShowLayout>
    </Show>
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
