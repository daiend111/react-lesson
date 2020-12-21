import * as React from "react";
import { Sandbox } from './components/Sandbox';
import { State } from './components/State';
import { Todo } from './components/Todo';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Sandbox} />
        <Route exact path={'/sandbox'} component={Sandbox} />
        <Route exact path={'/state'} component={State} />
        <Route exact path={'/todo'} component={Todo} />
      </Switch>
    </BrowserRouter>
  )
};