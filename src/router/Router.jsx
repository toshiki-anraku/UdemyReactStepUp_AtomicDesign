import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../component/pages/Top";
import { Users } from "../component/pages/Users";
import { DefaultLayout } from "../component/templates/DefaultLayout";
import { HeaderOnly } from "../component/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route exact path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
