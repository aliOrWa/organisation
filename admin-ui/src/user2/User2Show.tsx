import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const User2Show = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ouisssema" source="ouisssema" />
        <TextField label="sousou" source="sousou" />
        <TextField label="dfazdaz" source="dfazdaz" />
      </SimpleShowLayout>
    </Show>
  );
};
