import React from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "app/provider/route";
import "shared/assets/styles/_global.scss"
import {Header} from "widgets/ui";
import {store} from "app/provider/rtk/store";
import {Provider} from "react-redux";


function App() {
  return (
    <div className="App">
        <Header/>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </div>
  );
}

export default App;
