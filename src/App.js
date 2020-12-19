import { StoreProvider } from "easy-peasy";

import "./styles/index.scss";

import Home from "./pages/Home";

import store from "./store";

const AfterStoreProvider = () => {
  return <Home />;
};

function App(props) {
  return (
    <StoreProvider store={store}>
      <AfterStoreProvider {...props} />
    </StoreProvider>
  );
}

export default App;
