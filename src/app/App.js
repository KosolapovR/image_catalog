import React from 'react';
import Container from '@material-ui/core/Container';
import CatalogPage from "./view/CatalogPage";
import configureStore from "./state/store";
import {Provider} from "react-redux";

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Container maxWidth="md">
                    <CatalogPage/>
                </Container>
            </div>
        </Provider>
    );
}

export default App;
