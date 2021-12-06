
const state = {
    images: []
}

function renderImages() {
    const imageContainer = document.querySelector(`.image-container`)
    imageContainer.innerHTML = ``

    for(const image of state.images) {
        const card = document.createElement(`article`)
        card.setAttribute(`class`, `image-card`)

        const titleEl = document.createElement(`h2`)
        titleEl.setAttribute(`class`, image.title)

        const imgEl = document.createElement(`img`)
        imgEl.setAttribute(`src`, image.image)
        imgEl.setAttribute(`class`, `image`)

        const likesSection = document.createElement(`div`)
        likesSection.setAttribute(`class`, `likes-section`)

        const likesEl = document.createElement(`span`)
        likesEl.setAttribute(`class`, `likes`)
        likesEl.textContent = `0 likes`

        const likeBtn = document.createElement(`button`)
        likeBtn.setAttribute(`class`, `like-button`)
        likeBtn.textContent = `♥`

        const ulEl = document.createElement(`ul`)
        ulEl.setAttribute(`class`, `comments`)

        for(const comment of image.comments){
            const liEl = document.createElement(`li`)
            liEl.textContent = comment.content 
            ulEl.append(liEl)  
        }

        likesSection.append(likesEl, likeBtn)
        card.append(titleEl, imgEl, likesSection, ulEl)
        imageContainer.append(card)
    }

}

function getImages() {
    return fetch(`http://localhost:3000/images`)
    .then(function (response) {
        return response.json()
    })
}

getImages().then(function(postFromServer) {
    state.images = postFromServer
    render()
})


function render() {
    renderImages()
}

render()