import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
//import createRoot from "react-dom/client";

/*const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);*/

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//     ,
//     document.getElementById('root')
// );

/*const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // React Redux에는 Provider컴포넌트를 통해 앱의 다른 컴포넌트에서 Redux store를 사용할 수 있음
    </React.StrictMode>,
    document.getElementById("root")
);*/

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);