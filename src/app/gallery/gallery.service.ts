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
          landscape:"/assets/images/gallery/bw Find a Way to Hug Landscape.svg",
          portrait:"/assets/images/gallery/bw Find a Way to Hug Portrait.svg",
          alt:"Find a way to hug"
        },
        {
          thumbnail:"/assets/images/gallery/_bw Shana Tova Dragon.png",
          landscape:"/assets/images/gallery/bw Shana Tova Dragon Landscape.png",
          portrait:"/assets/images/gallery/bw Shana Tova Dragon Portrait.png",
          alt:"Shana Tova Dragon"
        },
        {
          thumbnail:"/assets/images/gallery/_bw Share Your Toothpaste.jpg",
          landscape:"/assets/images/gallery/bw Share Your Toothpaste Landscape.svg",
          portrait:"/assets/images/gallery/bw Share Your Toothpaste Portrait.svg",
          alt:"Share Your Toothpaste"
        },
        {
          thumbnail:"/assets/images/gallery/_bw i am.png",
          landscape:"/assets/images/gallery/bw i am Landscape.svg",
          portrait:"/assets/images/gallery/bw i am Portrait.svg",
          alt:"i am"
        },
        {
          thumbnail:"/assets/images/gallery/_bw Croc.jpg",
          landscape:"/assets/images/gallery/bw Croc Landscape.svg",
          portrait:"/assets/images/gallery/bw Croc Portrait.svg",
          alt:"Croc"
        },
        {
          thumbnail:"/assets/images/gallery/_bw Ors Personal Dragon.jpg",
          landscape:"/assets/images/gallery/bw Ors Personal Dragon Landscape.svg",
          portrait:"/assets/images/gallery/bw Ors Personal Dragon Portrait.svg",
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
          landscape:"/assets/images/gallery/color Bears Landscape.png",
          portrait:"/assets/images/gallery/color Bears Portrait.jpg",
          alt:"Bears"
        },
        {
          thumbnail:"/assets/images/gallery/_color Rabbit.png",
          landscape:"/assets/images/gallery/color Rabbit Landscape.png",
          portrait:"/assets/images/gallery/color Rabbit Portrait.jpg",
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
          landscape:"/assets/images/gallery/web Yaela Dror Landscape.png",
          portrait:"/assets/images/gallery/web Yaela Dror Portrait.png",
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
          landscape:"/assets/images/gallery/walls SevenAngelsArcher Landscape.png",
          portrait:"/assets/images/gallery/walls SevenAngelsArcher Portrait.jpg",
          alt:"Archer"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsBishop.jpg",
          landscape:"/assets/images/gallery/walls SevenAngelsBishop Landscape.png",
          portrait:"/assets/images/gallery/walls SevenAngelsBishop Portrait.jpg",
          alt:"Bishop"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsKnight.jpg",
          landscape:"/assets/images/gallery/walls SevenAngelsKnight Landscape.png",
          portrait:"/assets/images/gallery/walls SevenAngelsKnight Portrait.jpg",
          alt:"Knight"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsScribeAndHorseman.jpg",
          landscape:"/assets/images/gallery/walls SevenAngelsScribeAndHorseman Landscape.png",
          portrait:"/assets/images/gallery/walls SevenAngelsScribe Portrait.jpg",
          alt:"Scribe and Horseman"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsWaterCarrier.jpg",
          landscape:"/assets/images/gallery/walls SevenAngelsWaterCarrier Landscape.png",
          portrait:"/assets/images/gallery/walls SevenAngelsWaterCarrier Portrait.jpg",
          alt:"Water Carrier"
        },
        {
          thumbnail:"/assets/images/gallery/_walls SevenAngelsVassal.jpg",
          landscape:"/assets/images/gallery/walls SevenAngelsVassal Landscape.png",
          portrait:"/assets/images/gallery/walls SevenAngelsVassal Portrait.jpg",
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
          landscape:"/assets/images/gallery/books Dog Landscape.png",
          portrait:"/assets/images/gallery/books Dog Portrait.jpg",
          alt:"The Dog's Intelligence"
        },
        {
          thumbnail:"/assets/images/gallery/_books Robin.jpg",
          landscape:"/assets/images/gallery/books Robin Landscape.jpg",
          portrait:"/assets/images/gallery/books Robin Portrait.jpg",
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

  getImage(groupId:string, imageIndex:number):{} {
    return this.getImages(groupId)[imageIndex];
  }
}
