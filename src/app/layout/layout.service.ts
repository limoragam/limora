export class LayoutService {
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