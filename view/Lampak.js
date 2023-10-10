import LampaElem from "./LampaElem.js"


class Lampak {
    #jatekElem
    static{
        $("#gombIde").html(`<input type="button" value="újra">`)
        $("#gombIde").on("click", ()=>{
            this.#esemenyLetrehoz()
        })
    }

    constructor(szuloElem, lista) {
        $(szuloElem).html(`<div id="tabla"></div>`)
        this.#jatekElem = $("#tabla")
        this.init(lista)
        this.szamlaloKi(0)
    }

    init(lista) {
        $("#eredmeny").empty()
        this.#jatekElem.empty()
        for (let ix = 0; ix < lista.length; ix++) {
            const ELEM = new LampaElem("#tabla", lista[ix], ix)
            ELEM.szin = lista[ix] == 1 ? "yellow" : "green"
        }
    }

    nyert() {
        $("#eredmeny").html(`<h2>nyertél!!!!!!44!!!!4!4!4 🐈💨</h2>
        <img src="getreal.gif" title="getreal" alt="getreal">`)
    }

    szamlaloKi(val){
        $("#szamlalo").html("Kapcsolás: " + val) 
    }

    static #esemenyLetrehoz(){
        window.dispatchEvent(new CustomEvent("ujra"))
    }
}

export default Lampak