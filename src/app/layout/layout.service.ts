export class LayoutService {
    originalMainVisualHeight = 710;
    originalMainVisualWidth = 840;
    visualsPercentage = 1;
    mainVisualHeight = this.getMainVisualHeight() + "px";;
    mainVisualWidth = this.getMainVisualWidth() + "px";;

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
        this.setVisualsPercentage();
    }

    getOrientation() {
        return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
    }

    getMainVisualHeight() {
        return (this.getOrientation()==="landscape") ? window.innerHeight*0.93 : window.innerHeight*0.85;
    }

    getMainVisualWidth() {
        return null;
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

    getBackgroundDominantDimension() {
        let originalBackgroundWidth = 1920;
        let originalBackgroundHeight = 950;
        return originalBackgroundWidth/window.innerWidth < originalBackgroundHeight/window.innerHeight ? 'width':'height';
    }

    onResize(event:Event) {
        this.setVisualsPercentage();
    }
}