class LampaElem{
    #nth
    #gyerekElem
    constructor(szuloElem, val, nth){
        $(szuloElem).append(`<div>${val==1? "ඞ" : "ය"}</div>`)
        this.#nth=nth
        this.#gyerekElem=$(szuloElem).children("div:last-child")
        this.#gyerekElem.on("click", ()=>{
            this.#esemenyLetrehoz()
        })
    }

    #esemenyLetrehoz(){
        window.dispatchEvent(new CustomEvent("kapcs", {detail:this.#nth}))
    }

    set szin(szin){
        this.#gyerekElem.css("background-color",szin)
    }
}

export default LampaElem