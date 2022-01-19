import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const User3Edit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ahmed" source="ahmed" />
        <TextInput label="cadzdcazcdza" source="cadzdcazcdza" />
        <TextInput label="dazdzadaz" source="dazdzadaz" />
      </SimpleForm>
    </Edit>
  );
};
