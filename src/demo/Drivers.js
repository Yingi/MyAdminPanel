import React from 'react';
import {
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    SimpleForm,
    TextInput,
    SearchInput,
    ImageInput,
    ImageField,
    Show,
    ShowButton,
    EditButton,
    SimpleShowLayout,
    RichTextField,
    Filter
} from 'react-admin';


const DriverFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="Name" alwaysOn />
    </Filter>
);

export const DriverList = (props) => (
    <List title="All Drivers" {...props} filters={<DriverFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Name" />
            <TextField source="Car.Brand" label="Car" />

            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const DriverShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="Name" />
            <RichTextField source="Car.Brand" label="Car" />
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
            <TextInput source="Car.Brand" label="Car" />
        </SimpleForm>
    </Edit>
);
