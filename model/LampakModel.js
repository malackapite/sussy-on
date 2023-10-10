class LampakModel {
    #lista = []
    #kor = 0

    constructor() {

    }

    get lista() {
        return [...this.#lista]
    }

    listaGeneral(meret) {
        for (let ix = 0; ix < meret * meret; ix++)
            this.#lista[ix] = Math.floor(Math.random() * 2)
    }

    szomszedokValtoztatasa(nth) {
        let sor = Math.sqrt(this.#lista.length)
        if (nth - sor >= 0)
            this.#lista[nth - sor] = this.#lista[nth - sor] == 0 ? 1 : 0
        if (nth + sor < this.#lista.length)
            this.#lista[nth + sor] = this.#lista[nth + sor] == 0 ? 1 : 0
        if (Math.floor((nth + 1) / sor) == Math.floor((nth) / sor))
            this.#lista[nth + 1] = this.#lista[nth + 1] == 0 ? 1 : 0
        if (Math.floor((nth - 1) / sor) == Math.floor((nth) / sor))
            this.#lista[nth - 1] = this.#lista[nth - 1] == 0 ? 1 : 0
        this.#lista[nth] = this.#lista[nth] == 0 ? 1 : 0
    }

    get eredmeny() {
        let ix = 0
        while (ix < this.#lista.length && this.#lista[ix] != 0)
            ix++
        return ix >= this.#lista.length
    }

    get kor() {
        return ++this.#kor
    }
}

export default LampakModel 