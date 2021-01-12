import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';

const Contact: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      ติดต่อสอบถามได้ที่ www.12345@gmail.com
      </IonContent>
    </IonPage>
  );
};

export default Contact;
