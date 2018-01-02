export class LayoutService {
    getMedia() {
        return (window.matchMedia("(max-width: 700px)").matches) ? 'phone' : 'desktop';
    }
}