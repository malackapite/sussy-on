import LampakModel from "../model/LampakModel.js"
import Lampak from "../view/Lampak.js"


class Controller {
    #TABLAVIEW
    #MODEL
    constructor() {
        this.init()
        $(window).on("kapcs", event => {
            if(!this.#MODEL.eredmeny){
                this.#MODEL.szomszedokValtoztatasa(event.detail)
                this.#TABLAVIEW.init(this.#MODEL.lista)
                this.#TABLAVIEW.szamlaloKi(this.#MODEL.kor)
                if(this.#MODEL.eredmeny){
                    this.#TABLAVIEW.nyert()
                    $("#tabla").css("cursor","auto")
                }
            }
        })
        $(window).on("ujra", ()=>{
            this.init()
        })
    }

    init(){
        this.#MODEL = new LampakModel()
        let meret
        do {
            meret = parseInt(prompt("Mekkora táblát szeretnél?"))
        } while (isNaN(meret) || meret<=1)
        $(":root").css({ "--sor": meret });
        this.#MODEL.listaGeneral(meret)
        this.#TABLAVIEW = new Lampak("#jatekter", this.#MODEL.lista)
    }
}

export default Controller