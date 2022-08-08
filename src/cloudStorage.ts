import { storage } from "./services/firebase";

const bucket = storage.ref('instagramImages')
const mural = document.querySelector<HTMLDivElement>('#mural')!


// Necessário manter todo o código assíncrono dentro da função, por causa de compatibilidade
async function addCards() {
    const images = await bucket.list({ maxResults: 5 }).then(i => i.items)
const muralContent = images.map(async image => {
    return {
        title: image.name.replace(/\..*/, ""),
        uri: image.getDownloadURL()
    }
})

muralContent.map(async value => {
    // Cartão do mural
    const cardDiv = document.createElement('div')
    cardDiv.setAttribute("class", "card-image")

    // Imagem do cartão
    const img = document.createElement('img')
    img.setAttribute("src", await (await value).uri)
    img.setAttribute("alt", "")
    cardDiv.appendChild(img)
    
    // Div para as informações
    const infoDiv = document.createElement("div")
    infoDiv.setAttribute("class", "info")

    // Título?
    const title = document.createElement("p")
    const titleText = document.createTextNode((await value).title)
    title.setAttribute("class", "title")
    title.appendChild(titleText)
    infoDiv.appendChild(title)

    // Descrição
    const description = document.createElement("p")
    const descriptionText = document.createTextNode("Adicionar a descrição através dos metadados?")
    description.setAttribute("class", "description")
    description.appendChild(descriptionText)
    infoDiv.appendChild(description)

    // Div para o botão de compartilhar?
    const shareDiv = document.createElement("div")
    shareDiv.setAttribute("class", "action")

    const shareButton = document.createElement("button")

    // Criando o SVG PS: CHATO PRA CARAMBRA VELHO
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttributeNS(null, "width", "24")
    svg.setAttributeNS(null, "height", "24")
    svg.setAttributeNS(null, "data-name", "Layer 1")
    svg.setAttributeNS(null, "viewBox", "0 0 24 24")

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttributeNS(null, "d", "m21.707 11.293-8-8A1 1 0 0 0 12 4v3.545A11.015 11.015 0 0 0 2 18.5V20a1 1 0 0 0 1.784.62 11.456 11.456 0 0 1 7.887-4.049c.05-.006.175-.016.329-.026V20a1 1 0 0 0 1.707.707l8-8a1 1 0 0 0 0-1.414ZM14 17.586V15.5a1 1 0 0 0-1-1c-.255 0-1.296.05-1.562.085a14.005 14.005 0 0 0-7.386 2.948A9.013 9.013 0 0 1 13 9.5a1 1 0 0 0 1-1V6.414L19.586 12Z")
    svg.appendChild(path)

    // Adiciona um ícone
    shareButton.appendChild(svg)

    // Anexa o botão ao shareDiv
    shareDiv.appendChild(shareButton)

    // Anexa o botão ao cartão
    infoDiv.appendChild(shareDiv)

    // Anexa as informações ao cartão
    cardDiv.appendChild(infoDiv)

    // Anexa o cartão pro mural
    mural.appendChild(cardDiv)
})

}

addCards()