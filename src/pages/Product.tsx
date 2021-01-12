import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonImg
} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import React from 'react';
import './Page.css';

interface product {
  title: string,
  price: number,
  stock: number
  image: string,
  description: string
}

const product: product[] = [
  {
    title: 'CPU (ซีพียู) INTEL 1151 CORE I9-9900K 3.6 GHz',
    price: 12000,
    stock: 50,
    image: "./images/pic1.jpg",
    description: "หน่วยประมวลผล (CPU) 3.6 GHz (5 GHz Turbo) Unlocked (kan overclockes) 8 kerner (Octa Core) 16 tråde 16 MB cache understøtter Dual Channel DDR4-2666 RAM 16 PCI Express Lanes LGA1151 Socket indbygget Intel Graphics UHD 630 - 1200 MHz 95 watt TDP Box (dog uden køler) - Coffee Lake S"
  },
  {
    title: '32GB (8GBx4) DDR4/3200 RAM PC (แรมพีซี) KINGSTON HyperX PREDATOR RGB (HX432C16PB3AK4/32)',
    price: 5000,
    stock: 200,
    image: "./images/pic2.jpg",
    description: " Property model Brand KINGSTON Model HyperX PREDATOR RGB Part No HX432C16PB3AK4/32 specification Type DDR4 Speed 3200 (OC) MHz Total Capacity 32 GB Capacity per DIMM 8 GB Number of DIMMs 4 DIMM(s) Latency 16-18-18 warranty การรับประกัน LT"
  },
  {
    title: 'MAINBOARD 1151 MSI MPG Z390 GAMING PLUS',
    price: 1000,
    stock: 50,
    image: "./images/pic3.jpg",
    description: "สร้างความพึงพอใจให้กับเกมเมอร์ในสิ่งที่ต้องการจริงๆ MPG Z390 GAMING PLUS มาพร้อมกับ Extended Heatsink Design, Core Boost, Twin Turbo M.2, Game Boost, Turbo USB และ Intel CNVi connector และ MSI Dragon Center APP ล่าสุด"
  }

]
const Product: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Product</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {product.map((product, index) => (
          <IonCard key={index}>
             <IonImg src={product.image} />
            <IonCardHeader>
              <IonCardTitle>{product.title}</IonCardTitle>
              <IonCardSubtitle>ราคา {product.price}</IonCardSubtitle>
              <IonCardSubtitle>จำนวนในคลัง {product.stock}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
             {product.description}
      </IonCardContent>
          </IonCard>
        ))}
        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>
          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Product;
