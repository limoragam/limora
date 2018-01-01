export class NavigationService {
    menuItems = [
        {
            'display': 'hidden', 'routerLink': '/', 'text': 'the nest',
            'style': {
                'opacity': 0.3,
                'pointer-events': 'auto',
                'transform': 'translateX(0)',
                'transition': 'all 400ms ease-in-out',
            }
        },
        {
            'display': 'hidden', 'routerLink': '/contact', 'text': 'contact',
            'style': {
                'opacity': 0.3,
                'pointer-events': 'auto',
                'transform': 'translateX(0)',
                'transition': 'all 400ms ease-in-out 100ms',
            }
        },
        {
            'display': 'hidden', 'routerLink': '/portfolio', 'text': 'portfolio',
            'style': {
                'opacity': 0.3,
                'pointer-events': 'auto',
                'transform': 'translateX(0)',
                'transition': 'all 400ms ease-in-out 200ms'
            }
        },
        {
            'display': 'hidden', 'routerLink': '/feet', 'text': 'see my feet?',
            'style': {
                'opacity': 0.3,
                'pointer-events': 'auto',
                'transform': 'translateX(0)',
                'transition': 'all 400ms ease-in-out 300ms'
            }
        },
        {
            'display': 'hidden', 'routerLink': '/about', 'text': 'about',
            'style': {
                'opacity': 0.3,
                'pointer-events': 'auto',
                'transform': 'translateX(0)',
                'transition': 'all 400ms ease-in-out 400ms'
            }
        },
        {
            'display': 'hidden', 'href': '/assets/CV.pdf', 'text': 'cv',
            'style': {
                'opacity': 0.3,
                'pointer-events': 'auto',
                'transform': 'translateX(0)',
                'transition': 'all 400ms ease-in-out 500ms'
            }
        },
    ];

    menuDisplayed = true;
    hoverOnce = false;
    initNav = false;

    initNavigation() {
        if(!this.initNav) {
            this.hideMenu();
            this.initNav = true;
        }
    }

    onHover() {
        if(!this.hoverOnce) {
            this.showMenu();
            this.hoverOnce = true;
        }
    }

    toggleMenu() {
        this.menuDisplayed ? this.hideMenu() : this.showMenu();
    }

    showMenu() {
        if (!this.menuDisplayed) {
            this.menuItems.forEach((menuItem) => {
                menuItem.style.opacity = 1;
                menuItem.style.transform = 'translateX(0)';
                menuItem.style['pointer-events'] = 'auto';
            })
            this.menuDisplayed = true;
        }
    }

    hideMenu() {
        if (this.menuDisplayed) {
            // Use jQuery to calculate translateX
            let eggLeft = $(".egg").position().left;
            let items = $(".menu-item");
            items.each((i, item) => {
                let itemOffset = eggLeft - $(item).position().left;
                this.menuItems[i].style.opacity = 0;
                this.menuItems[i].style.transform = "translateX(" + itemOffset + "px)";
                this.menuItems[i].style['pointer-events'] = 'none';
            });
            this.menuDisplayed = false;
        }
    }
}