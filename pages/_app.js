// import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";


import '@ionic/react/css/core.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { Menu } from "../components/Menu";
import {
  IonApp,
} from "@ionic/react";
import NoSSR from "react-no-ssr";
import { Provider } from 'react-redux'
import { store, persistor} from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';


const MyApp = ({ Component, pageProps }) => {
  console.log("hi");

  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <NoSSR>
        <IonApp>
          <Menu />
          <Component {...pageProps} />
        </IonApp>
      </NoSSR>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
