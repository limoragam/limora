export class LayoutService {
    originalMainVisualHeight = 710;
    originalMainVisualWidth = 840;
    visualsPercentage = 1;
    mainVisualHeight = "95vh";
    mainVisualWidth = "95vw";

    svgs = this.getOrientation()==='landscape' ? 
    [
        "/assets/images/Feet01.svg",
        "/assets/images/Feet02.svg",
        "/assets/images/Feet03.svg",
    ] :
    [
        "/assets/images/Feet01P.svg",
        "/assets/images/Feet02P.svg",
        "/assets/images/Feet03P.svg",
    ]

    constructor() {
        this.setMainVisualDimensions();
        this.setVisualsPercentage();
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

    setVisualsPercentage() {
        let currentMainVisualWidth = $(".mainImage").width();
        if(currentMainVisualWidth>0) {
            this.visualsPercentage = currentMainVisualWidth/this.originalMainVisualWidth;
        } else {
            this.visualsPercentage = this.getOrientation()==="landscape" ? 
                this.visualsPercentage = (window.innerHeight * 0.95) / this.originalMainVisualHeight : 
                this.visualsPercentage = (window.innerWidth * 0.95) / this.originalMainVisualWidth;
        }
    }

    onResize(event:Event) {
        this.setMainVisualDimensions();
        this.setVisualsPercentage();
    }
}