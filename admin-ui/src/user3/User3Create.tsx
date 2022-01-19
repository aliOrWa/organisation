import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const User3Create = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ahmed" source="ahmed" />
        <TextInput label="cadzdcazcdza" source="cadzdcazcdza" />
        <TextInput label="dazdzadaz" source="dazdzadaz" />
      </SimpleForm>
    </Create>
  );
};
