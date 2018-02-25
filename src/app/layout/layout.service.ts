export class LayoutService {
    originalMainVisualHeightLandscape = 640;
    originalMainVisualWidthLandscape = 560;
    originalMainVisualHeightPortrait = 640;
    originalMainVisualWidthPortrait = 390;
    percentHeightForMainVisualLandscape = 0.98;
    percentHeightForMainVisualPortrait = 0.98;

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
    }

    getOrientation() {
        return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
    }

    getMainVisualHeight() {
        return (this.getOrientation()==="landscape") ? 
            $(".wrapper").innerHeight()*this.percentHeightForMainVisualLandscape : 
            $(".wrapper").innerHeight()*this.percentHeightForMainVisualPortrait;
    }

    getMainVisualHeightPx() {
        let height = this.getMainVisualHeight();
        return (height===null) ? null : height + 'px';
    }

    getVisualsPercentage():number {
        let currentMainVisualHeight = $(".mainImage").height();
        if(!(currentMainVisualHeight>0)) {
            currentMainVisualHeight = this.getOrientation()==='landscape' ?
                window.innerHeight*this.percentHeightForMainVisualLandscape :
                window.innerHeight*this.percentHeightForMainVisualPortrait;
        }

        let originalHeight = this.getOrientation()==='landscape' ? 
            this.originalMainVisualHeightLandscape : this.originalMainVisualHeightPortrait;

        return currentMainVisualHeight/originalHeight;
    }

    getBackgroundDominantDimension() {
        let originalBackgroundWidth = 1920;
        let originalBackgroundHeight = 950;
        return originalBackgroundWidth/window.innerWidth < originalBackgroundHeight/window.innerHeight ? 'width':'height';
    }
}