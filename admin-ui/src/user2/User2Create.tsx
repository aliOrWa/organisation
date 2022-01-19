import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const User2Create = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ouisssema" source="ouisssema" />
        <TextInput label="sousou" source="sousou" />
        <TextInput label="dfazdaz" source="dfazdaz" />
      </SimpleForm>
    </Create>
  );
};
