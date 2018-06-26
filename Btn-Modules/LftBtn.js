const App = {
    color: "blue",
    init() {
        this.cacheDom();
        this.bindEventListerners();
        this.render();
    },
    cacheDom() {
        this.root = document.querySelector('#App');
        this.box = this.root.querySelector('.box');
        this.leftBtn = this.root.querySelector('.leftBtn');
    },
    bindEventListeners() {
        this.leftBtn.addEventListener('click', this.leftClick.bind(this));
        
    },
    leftClick() {
        this.color = "blue";
        this.render;
    },
    render() {}
};

App.init();
window.App = App;