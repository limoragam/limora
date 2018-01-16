export class LayoutService {
    svgs = [
        "/assets/images/Feet01.svg",
        "/assets/images/Feet02.svg",
        "/assets/images/Feet03.svg",
        "/assets/images/Feet04.svg",
        "/assets/images/Feet05.svg",
        "/assets/images/Feet06.svg",
    ]

    getMedia():string {
        return (window.matchMedia("(max-width: 680px)").matches) ? 'narrow' : 'wide';
    }

    getMaxWidth():number {
        if(this.getMedia()==='wide') {
            return 630;
        }
        return window.innerWidth - 20;
    }
}