//Right button
const App = {

    colors: ["green", "blue", "red"],

    init() {
        this.cacheDom();
        this.bindEventListeners();
        this.render();
    },

    cacheDom() {
        this.root = document.querySelector('#App');
        this.rightB = this.root.querySelector('.rightB');
        this.leftB = this.root.querySelector('.leftB');
        this.box = this.root.querySelector('.box');
    },

    bindEventListeners() {
        this.rightB.addEventListener('click', this.rightClick.bind(this));
        this.leftB.addEventListener('click', this.leftClick.bind(this));
    },

    rightClick() {
        const last = this.colors[this.colors.length-1];
        const begin = this.colors.slice(0, this.colors.length-1);
        this.colors = [last, ...begin];
    },

leftClick() {
        const [first, ...rest] = this.colors;
        this.colors = [...rest, first];
},

    render() {
       
    },
};

App.init();
window.App = App;