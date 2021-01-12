import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';

const Payment: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Payment</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      กรุณาชำระเงิน
      </IonContent>
    </IonPage>
  );
};

export default Payment;
