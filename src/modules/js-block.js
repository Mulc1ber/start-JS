import JS_IMAGE from '../../assets/js.png'

export class JSBlock {
    #container

    constructor() {
        this.#container = document.createElement('div')
        this.#container.className = 'js-block'
    }

    render() {
        const mainTitle = document.createElement('h1')
        mainTitle.className = 'main-title'
        mainTitle.textContent = 'JavaSrcript'

        const jsImage = document.createElement('img')
        jsImage.className = 'js-image'
        jsImage.src = JS_IMAGE

        const foundedText = document.createElement('p')
        foundedText.className = 'founded-text'
        foundedText.textContent = 'С момента создания JavaScript прошло'

        this.#container.append(mainTitle, jsImage, foundedText)

        return this.#container
    }
}
