import React from 'react';
import {
    IonSlides,
    IonSlide,
    IonContent,
    IonImg
} from '@ionic/react';

type Item = {
    src: string;
    text: string;
};

const items: Item[] = [
    {
        src: './image/pic4.jpg',
        text: 'a picture of a cat'
    },
    {
        src: './image/pic5.jpg',
        text: 'a picture of a cat'
    },
    {
        src: './image/pic6.jpg',
        text: 'a picture of a cat'
    }
];

const slideOpts = {
    initialSlide: 1,
    speed: 400
};

export const Slides: React.FC = () => (
    <IonContent>
        <IonSlides pager={true} options={slideOpts}>
            {items.map((image, i) => (
                <IonSlide key ={i}>
                     <IonImg src={image.src} />
                     <h1>{image.text}</h1>
                </IonSlide>
            ))
            }
        </IonSlides>
    </IonContent>
);