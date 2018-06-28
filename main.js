//Right button
const App = {

    box: ["green", "blue", "red"],

    init() {
        this.cacheDom();
        this.bindEventListeners();
        this.render();
    },

    cacheDom() {
        this.root = document.querySelector('#App');
        this.rightB = this.root.querySelector('.rightB');
        this.legtB = this.root.querySelector('leftB');
        this.box = this.root.querySelector('.box');
    },

    bindEventListeners() {
        this.rightB.addEventListener('click', this.rightClick.bind(this));
        this.leftB.addEventListener('click', this.leftClick.bind(this));
    },

    rightClick() {
        this.rightClick = function () {
            for(let c = 0; c < box.length; c+=1);
                bg = this.box.splice(0);
                bg.push();
                this.render();

            //
        };

    },

leftClick() {

},

    render() {
        this.box.;
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