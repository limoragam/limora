import { Injectable } from '@angular/core';
import { LayoutService } from './../../layout/layout.service';

@Injectable()
export class NavigationService {
    menuItems = [
        {
            'routerLink': '/', 
            'text': 'the nest',
            'style': {
                'transition': 'all 400ms ease-in-out',
                'transition-delay': '0ms',
            }
        },
        {
            'routerLink': '/contact', 
            'text': 'contact',
            'style': {
                'transition': 'all 400ms ease-in-out',
                'transition-delay': '100ms',
            }
        },
        {
            'routerLink': '/portfolio', 
            'text': 'portfolio',
            'style': {
                'transition': 'all 400ms ease-in-out',
                'transition-delay': '200ms',
            }
        },
        {
            'routerLink': '/feet', 
            'text': 'see my feet?',
            'style': {
                'transition': 'all 400ms ease-in-out',
                'transition-delay': '300ms',
            }
        },
        {
            'routerLink': '/about', 
            'text': 'about',
            'style': {
                'transition': 'all 400ms ease-in-out',
                'transition-delay': '400ms',
            }
        },
        {
            'href': 'https://docs.google.com/document/d/1DdD9o8-wtia5Tg2jGmxhxWYXDEjXFfdjW-khLE0bNO4/edit?usp=sharing', 
            'text': 'cv',
            'style': {
                'transition': 'all 400ms ease-in-out',
                'transition-delay': '500ms',
            }
        },
    ];

    menuDisplayed = false;
    hoverOnce = false;
    initNav = false;

    constructor(private layoutService:LayoutService) {}

    initNavigation() {
        if(!this.initNav) {
            this.hideMenu();
            this.initNav = true;
        }
    }

    onHover() {
        if(!this.hoverOnce && this.layoutService.getMedia()==='wide') {
            this.showMenu();
            this.hoverOnce = true;
        }
    }

    toggleMenu() {
        this.menuDisplayed ? this.hideMenu() : this.showMenu();
    }

    showMenu() {
        if (!this.menuDisplayed) {
            switch(this.layoutService.getMedia()) {
                case 'narrow':
                this.menuItems.forEach((menuItem)=> {
                    menuItem.style['display'] = 'block';
                    menuItem.style['z-index'] = 3;
                });
                break;

                case 'wide':
                this.menuItems.forEach((menuItem,i) => {
                    menuItem.style['transform'] = 'translateX(0)';
                    menuItem.style['transition-delay'] = (this.menuItems.length - i - 1) + "00ms";
                });
                break;

                default:
                console.log("No media detected");
                break;
            }

            this.menuDisplayed = true;
        }
    }

    hideMenu() {
        if (this.menuDisplayed || !this.initNav) {
            switch(this.layoutService.getMedia()) {
                case 'narrow':
                this.menuItems.forEach((menuItem) => {
                    menuItem.style['display'] = 'none';
                    menuItem.style['z-index'] = -1;
                });
                break;

                case 'wide':
                // Use jQuery to calculate translateX
                let eggLeft = $(".egg").offset().left;
                let items = $("li");
                items.each((i, item) => {
                    let itemOffset = eggLeft - $(item).offset().left;
                    this.menuItems[i].style['transform'] = "translateX(" + itemOffset + "px)";
                    this.menuItems[i].style['transition-delay'] = i + "00ms";
                });
                break;

                default:
                console.log("No media detected");
                break;
            }

            this.menuDisplayed = false;
        }
    }
}