import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  chevronForwardOutline,
  homeOutline,
  homeSharp,
  logInOutline,
  logInSharp,
  beerOutline,
  beerSharp,
  cartOutline,
  cartSharp,
  personAddOutline,
  personAddSharp,
  walletOutline,
  walletSharp,
  informationOutline,
  informationSharp
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Login',
    url: '/Login',
    iosIcon: logInOutline,
    mdIcon: logInSharp
  },
  {
    title: 'Register',
    url: '/Register',
    iosIcon: personAddOutline,
    mdIcon: personAddSharp
  },
  {
    title: 'product',
    url: '/Product',
    iosIcon: beerOutline,
    mdIcon: beerSharp
  },
  {
    title: 'Cart',
    url: '/Cart',
    iosIcon: cartOutline,
    mdIcon: cartSharp
  },
  {
    title: 'Payment',
    url: '/Payment',
    iosIcon: walletOutline,
    mdIcon: walletSharp
  },
  {
    title: 'Contact',
    url: '/Contact',
    iosIcon: informationOutline,
    mdIcon: informationSharp
  }
];

const labels = ['Sumsung', 'vivo', 'nova', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Shopping Online</IonListHeader>
          <IonNote>sumsunggg12345@gmail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="end" icon={chevronForwardOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
