class Navigatie{
    constructor(json, width){
        this.items = json;
        this.width = width;
    }
    create(){
        const el_ul = document.createElement('ul');

        for (let i = 0; i < this.items.length; i++) {

            const li = document.createElement('li');
            const a = `<a href="${this.items[i].url}">${this.items[i].title}</a>`;
            li.innerHTML = a;
            el_ul.appendChild(li);

        }
        return el_ul;
    }
    resize(){
        const width = document.body.clientWidth;
        if(width < this.width){
            document.body.setAttribute("style", "display:none;");
        }
        if(width > this.width){
            document.body.removeAttribute("style");
        }

    }

}

(function() {

    const j = '[{"title": "Home","url" : "/"},{"title": "producten","url" : "/producten/"},{"title": "Over ons","url" : "/overons/"},{"title": "contact","url" : "/contact/"}]';
    const json = JSON.parse(j);

    const nav = new Navigatie(json, 1200);
    document.body.appendChild(nav.create());
    document.body.onresize = function(){
        nav.resize();
    }

})()