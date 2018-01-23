export class LayoutService {
    mainVisualHeight = "95vh";
    mainVisualWidth = "95vw";

    svgs = [
        "/assets/images/Feet01.svg",
        "/assets/images/Feet02.svg",
        "/assets/images/Feet03.svg",
    ]

    constructor() {
        this.setMainVisualDimensions();
    }

    getMedia():string {
        return (window.matchMedia("(max-width: 680px)").matches) ? 'narrow' : 'wide';
    }

    getOrientation() {
        return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
    }

    getMaxWidth():number {
        if(this.getMedia()==='wide') {
            return 630;
        }
        return window.innerWidth - 20;
    }

    setMainVisualDimensions() {
        this.mainVisualHeight = this.getOrientation()==="landscape" ? "95vh" : null;
        this.mainVisualWidth = this.getOrientation()==="portrait" ? "95vw" : null;
    }

    onResize(event:Event) {
        this.setMainVisualDimensions();
    }
}