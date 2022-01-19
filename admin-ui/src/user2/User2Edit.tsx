import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const User2Edit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ouisssema" source="ouisssema" />
        <TextInput label="sousou" source="sousou" />
        <TextInput label="dfazdaz" source="dfazdaz" />
      </SimpleForm>
    </Edit>
  );
};
