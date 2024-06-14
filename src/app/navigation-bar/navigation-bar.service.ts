export class NavigationBarService{

    private searchIcon: string = 'search.svg';
    private logo: {img: string, text: string} = {img: 'group.jpg', text: 'медичні закупівлі України'};
    private languageController: {text: string, img: string} = {text: 'UA', img: 'chevron-down.svg'};
    private compliance: {text: string, logo: string} = {text: 'Compliance контроль', logo: '+'};
    private blindController: {img: string, text: string} = {img: 'ic24-accessibility.svg', text: 'Людям з порушенням зору'};

    private headerMenu: { text: string, link: string, img?: string }[] = [
        {text: 'Про нас', link: '/about', img: 'chevron-down.svg'},
        {text: 'Постачальникам', link: '/suppliers', img: 'chevron-down.svg'},
        {text: 'Пацієнтам', link: '/patients'},
        {text: 'Prozorro Market', link: '/prozorro-market'},
        {text: 'Антикорупційна прорама', link: '/anticorruption'},
        {text: 'Медіа-центр', link: '/media-center'}
    ];

    getHeaderMenu(){
        return this.headerMenu.slice();
    }

    getLogo(){
        return this.logo;
    }

    getSearchIcon(){
        return this.searchIcon;
    }

    getlanguageController(){
        return this.languageController;
    }

    getCompliance(){
        return this.compliance;
    }

    getBlindController(){
        return this.blindController;
    }
}