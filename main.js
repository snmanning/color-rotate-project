const App = {
    init() {
        this.cacheDom();
        this.bindEventListerners();
        this.render();
    },
    cacheDom() {
        this.root = document.querySelector('#App');
        this.box = this.root.querySelector('.box');
        this.leftBtn = this.root.querySelector('.leftBtn');
        this.rightBtn = this.root.querySelector('.rightBtn');
    },
    bindEventListeners() {
        this.leftBtn.addEventListener('click', this.----.bind(this));
        this.rightBtn.addEventListener('click', this.----.bind(this));
    },
    leftClick() {

    },
    rightClick() {
        
    },
    render() {}
};

App.init();
window.App = App;