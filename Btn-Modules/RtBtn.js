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
        this.rightClick = function () {
            for(let c = 0; c < RtCycle.length; c+=1);
                const RtCycle = ["green", "blue", "red"];
                bg = this.RtCycle.shift();
                RtCycle.push(bg);
                this.render();
        };

    },

    render() {
        this.style.backgroundColor = this.rightClick;
    },
};

//cycle of bckground colors for the box when the right button is clicked


//function rgb () {
    

   /* box.onclick = function () {
        color = colors.shift();
        colors.push(color);
    
        box.style.backgroundColor = color;
};
*/

App.init();
window.App = App;