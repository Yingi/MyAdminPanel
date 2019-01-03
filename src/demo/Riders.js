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
    Filter,
    ShowButton,
    SearchInput
} from 'react-admin';


const RiderFilter = props => (
    <Filter {...props}>
        <SearchInput label="Name" source="details.Name" alwaysOn />
    </Filter>
);

export const RidersList = props => (
    <List
        title="All Riders" {...props}
        filters={<RiderFilter />}
    >
        <Datagrid>
            <TextField source="id" />
            <TextField source="details.Name" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);


export const RidersCreate = props => (
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

export const RidersEdit = props => (
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
