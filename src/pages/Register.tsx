import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton
} from '@ionic/react';
import React, { useState } from 'react';
import './Page.css';

const Register: React.FC = () => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
       <IonList>
       <IonItem>
            <IonLabel position="floating">ชื่อ นามสกุล</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Username or Email</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Comfirm Password</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>
          <IonButton expand="block">ลงทะเบียนเข้าใช้งาน</IonButton>
       </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Register;
