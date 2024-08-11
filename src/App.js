import React, { Fragment, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import { createBrowserHistory } from "history";

import AuthGuard from "./Components/AuthGuard";
import routes from "./routes";
const history = createBrowserHistory();
function App() {
  return (
    <div>
      <Router history={history}>
        <RenderRoutes data={routes} />
      </Router>
    </div>
  );
}

function RenderRoutes(props) {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {props.data.map((route, i) => {
          const Component = route.component;
          const Guard = route.guard ? AuthGuard : Fragment;
          const Layout = route.layout || Fragment;
          return (
            <Route
              exact={route.exact}
              key={i}
              path={route.path}
              element={
                <Guard>
                  <Layout>
                    {route.routes ? (
                      <RenderRoutes data={route.routes} />
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
}

export default App;