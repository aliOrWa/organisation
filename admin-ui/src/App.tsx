import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { User2List } from "./user2/User2List";
import { User2Create } from "./user2/User2Create";
import { User2Edit } from "./user2/User2Edit";
import { User2Show } from "./user2/User2Show";
import { User3List } from "./user3/User3List";
import { User3Create } from "./user3/User3Create";
import { User3Edit } from "./user3/User3Edit";
import { User3Show } from "./user3/User3Show";
import { CacaList } from "./caca/CacaList";
import { CacaCreate } from "./caca/CacaCreate";
import { CacaEdit } from "./caca/CacaEdit";
import { CacaShow } from "./caca/CacaShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="User2"
          list={User2List}
          edit={User2Edit}
          create={User2Create}
          show={User2Show}
        />
        <Resource
          name="User3"
          list={User3List}
          edit={User3Edit}
          create={User3Create}
          show={User3Show}
        />
        <Resource
          name="Caca"
          list={CacaList}
          edit={CacaEdit}
          create={CacaCreate}
          show={CacaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
