import { Injectable } from '@angular/core';

@Injectable()
export class GalleryService {
  items = [
    {
      title:"Black & White",
      groupId:"bw",
      images:[
        {
          thumbnail:"/assets/images/gallery/_bw Find A Way.png",
          fullsize:"/assets/images/gallery/bw Find a Way to Hug Landscape.svg",
          alt:"Find a way to hug"
        },
        {
          thumbnail:"/assets/images/gallery/_bw Shana Tova Dragon.png",
          fullsize:"/assets/images/gallery/bw Shana Tova Dragon Landscape.png",
          alt:"Shana Tova Dragon"
        },
        {
          thumbnail:"/assets/images/gallery/_bw Share Your Toothpaste.jpg",
          fullsize:"/assets/images/gallery/bw Share Your Toothpaste Landscape.svg",
          alt:"Share Your Toothpaste"
        },
        {
          thumbnail:"/assets/images/gallery/_bw i am.png",
          fullsize:"/assets/images/gallery/bw i am Landscape.svg",
          alt:"i am"
        },
        {
          thumbnail:"/assets/images/gallery/_bw Croc.jpg",
          fullsize:"/assets/images/gallery/bw Croc Landscape.svg",
          alt:"Croc"
        },
        {
          thumbnail:"/assets/images/gallery/_bw Ors Personal Dragon.jpg",
          fullsize:"/assets/images/gallery/bw Ors Personal Dragon Landscape.svg",
          alt:"Or's Personal Dragon"
        },
      ]
    },
    {
      title:"Color",
      groupId:"color",
      images:[
        {
          thumbnail:"/assets/images/gallery/_color Bears.jpg",
          fullsize:"/assets/images/gallery/color Bears Landscape.png",
          alt:"Bears"
        },
        {
          thumbnail:"/assets/images/gallery/_color Rabbit.png",
          fullsize:"/assets/images/gallery/color Rabbit Landscape.png",
          alt:"Rabbit"
        },
      ]
    },
    {
      title:"Web",
      groupId:"web",
      images:[
        {
          thumbnail:"/assets/images/gallery/_web Yaela Dror.png",
          fullsize:"/assets/images/gallery/web Yaela Dror Landscape.png",
          alt:"Yaela Dror"
        },
      ]
    },
    {
      title:"Walls",
      groupId:"walls",
      images:[
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsArcher.jpg",
          fullsize:"/assets/images/gallery/walls SevenAngelsArcher Landscape.png",
          alt:"Archer"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsBishop.jpg",
          fullsize:"/assets/images/gallery/walls SevenAngelsBishop Landscape.png",
          alt:"Bishop"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsKnight.jpg",
          fullsize:"/assets/images/gallery/walls SevenAngelsKnight Landscape.png",
          alt:"Knight"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsScribeAndHorseman.jpg",
          fullsize:"/assets/images/gallery/walls SevenAngelsScribeAndHorseman Landscape.png",
          alt:"Scribe and Horseman"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsWaterCarrier.jpg",
          fullsize:"/assets/images/gallery/walls SevenAngelsWaterCarrier Landscape.png",
          alt:"Water Carrier"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsVassal.jpg",
          fullsize:"/assets/images/gallery/walls SevenAngelsVassal Landscape.png",
          alt:"Vassal"
        },
      ]
    },
    {
      title:"Books",
      groupId:"books",
      images:[
        {
          thumbnail:"/assets/images/gallery/_books Dog.jpg",
          fullsize:"/assets/images/gallery/books Dog Landscape.png",
          alt:"The Dog's Intelligence"
        },
        {
          thumbnail:"/assets/images/gallery/_books Robin.jpg",
          fullsize:"/assets/images/gallery/books Robin Landscape.jpg",
          alt:"Who Hurt Cock Robin?"
        },
      ]
    },
  ]

  getNumberOfImagesInGroup(groupId:string):number {
    let group = this.items.find(function(item){
      return item.groupId === groupId;
    });
    return group.images.length;
  }

  getImages(groupId:string):{}[] {
    let group = this.items.find(function(item) {
      return item.groupId === groupId;
    });
    return group.images;
  }

}
