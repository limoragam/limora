import { Injectable } from '@angular/core';

@Injectable()
export class GalleryService {
  items = [
    {
      title:"Black & White",
      id:"bw",
      images:[
        {
          thumbnail:"/assets/images/gallery/_bw Find A Way.png",
          fullsize:"/assets/images/gallery/bw Find a way to hug.png",
          alt:"Find a way to hug"
        },
        {
          thumbnail:"/assets/images/gallery/_bw Shana Tova Dragon.png",
          fullsize:"/assets/images/gallery/bw Shana Tova Dragon.png",
          alt:"Shana Tova Dragon"
        },
        {
          thumbnail:"/assets/images/gallery/_bw Share Your Toothpaste.jpg",
          fullsize:"/assets/images/gallery/bw Share Your Toothpaste.jpg",
          alt:"Share Your Toothpaste"
        },
        {
          thumbnail:"/assets/images/gallery/_bw i am.png",
          fullsize:"/assets/images/gallery/bw i am.png",
          alt:"i am"
        },
        {
          thumbnail:"/assets/images/gallery/_bw Croc.jpg",
          fullsize:"/assets/images/gallery/bw Croc.png",
          alt:"Croc"
        },
        {
          thumbnail:"/assets/images/gallery/_bw Or's Personal Dragon.jpg",
          fullsize:"/assets/images/gallery/bw Or's Personal Dragon.jpg",
          alt:"Or's Personal Dragon"
        },
      ]
    },
    {
      title:"Color",
      id:"color",
      images:[
        {
          thumbnail:"/assets/images/gallery/_color Bears.jpg",
          fullsize:"/assets/images/gallery/color Bears.png",
          alt:"Bears"
        },
        {
          thumbnail:"/assets/images/gallery/_color Rabbit.png",
          fullsize:"/assets/images/gallery/color Rabbit.png",
          alt:"Rabbit"
        },
      ]
    },
    {
      title:"Web",
      id:"web",
      images:[
        {
          thumbnail:"/assets/images/gallery/_web Yaela Dror.png",
          fullsize:"/assets/images/gallery/web Yaela Dror.png",
          alt:"Yaela Dror"
        },
      ]
    },
    {
      title:"Walls",
      id:"walls",
      images:[
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsArcher.jpg",
          fullsize:"/assets/images/gallery/walls SevenAngelsArcher.jpg",
          alt:"Archer"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsBishop.jpg",
          fullsize:"/assets/images/gallery/walls SevenAngelsBishop.jpg",
          alt:"Bishop"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsKnight.jpg",
          fullsize:"/assets/images/gallery/walls SevenAngelsKnight.jpg",
          alt:"Knight"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsScribeAndHorseman.jpg",
          fullsize:"/assets/images/gallery/walls SevenAngelsScribeAndHorseman.jpg",
          alt:"Scribe and Horseman"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsWaterCarrier.jpg",
          fullsize:"/assets/images/gallery/walls SevenAngelsWaterCarrier.jpg",
          alt:"Water Carrier"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsVassal.jpg",
          fullsize:"/assets/images/gallery/walls SevenAngelsVassal.jpg",
          alt:"Vassal"
        },
      ]
    },
    {
      title:"Books",
      id:"books",
      images:[
        {
          thumbnail:"/assets/images/gallery/_books Dog.jpg",
          fullsize:"/assets/images/gallery/books Dog.jpg",
          alt:"The Dog's Intelligence"
        },
        {
          thumbnail:"/assets/images/gallery/_books Robin.jpg",
          fullsize:"/assets/images/gallery/books Robin.jpg",
          alt:"Who Hurt Cock Robin?"
        },
      ]
    },
  ]

}
