//Right button
const App = {

    box: ["red", "green", "blue"],

    init() {
        this.cacheDom();
        this.bindEventListeners();
        this.render();
    },

    cacheDom() {
        this.root = document.querySelector('#App');
        this.rightBtn = this.root.querySelector('.rightB');
        this.box = this.root.querySelector('.box');
    },

    bindEventListeners() {
        this.rightBtn.addEventListener('click', this.rightClick.bind(this));
    },

    rightClick() {
        this.rightClick = function (box) {
            for(let c = 0; c < box.length; c+=1);
                bg = this.box.shift();
                box.push(bg);
                this.render();
        };

    },

    render() {
        this.;
    },
};

App.init();
window.App = App;

//cycle of bckground colors for the box when the right button is clicked

//function rgb () {
    
   /* box.onclick = function () {
        color = colors.shift();
        colors.push(color);
    
        box.style.backgroundColor = color;
};
*/