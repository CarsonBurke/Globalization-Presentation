addStyles()

const cursorDimensions = 300

function addStyles() {
    let styles = `

    * {
        cursor: none !important;
    }
    body:hover .cursor {
        opacity: 1;
        width: 300px;
        height: 300px;
    }
    .cursor {
        opacity: 0;
        overflow: hidden;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        box-shadow: inset rgb(255, 255, 255, 0.4) 0 0 1000px 0, rgb(255, 255, 255, 0.4) 0 0 20px 0, inset rgb(0, 0, 0, 0.8) 0 0 100px 5px, rgb(0, 0, 0, 0.8) 0 0 80px 2px;
        border-radius: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
        transition: opacity 0.3s, width 0.3s, height 0.3s;
    }
    `

    var styleSheet = document.createElement("style")
    styleSheet.innerHTML = styles
    document.head.appendChild(styleSheet)
}

const cursors = document.getElementsByClassName("cursor"),
    imageDisplay = document.getElementsByClassName('imageBoxImage2')[0]

//

window.addEventListener("mousemove", followCursor)
window.addEventListener("wheel", followCursor)

function followCursor(e) {

    for (const cursor of cursors) {

        cursor.style.transform = "translate(" + (e.pageX - cursorDimensions / 2) + "px , " + (e.pageY - cursorDimensions / 2) + "px)"

        imageDisplay.style.backgroundImage = ''
    }
}

window.addEventListener("wheel", imageShowcase1)
window.addEventListener("mousemove", imageShowcase1)

function imageShowcase1(e) {

    const target = document.getElementById('1')

    const top = target.offsetTop

    if (top > e.pageY) return
    if (top + target.scrollHeight < e.pageY) return

    imageDisplay.style.backgroundImage = 'url(../materials/images/' + 2 + '.png)'

    imageDisplay.style.transform = "translate(" + (e.pageX * -1 + cursorDimensions / 2) + "px , " + (top + e.pageY * -1 + cursorDimensions / 2) + "px)"
}

window.addEventListener("wheel", imageShowcase2)
window.addEventListener("mousemove", imageShowcase2)

function imageShowcase2(e) {

    const target = document.getElementById('2')

    const top = target.offsetTop

    if (top > e.pageY) return
    if (top + target.scrollHeight < e.pageY) return

    imageDisplay.style.backgroundImage = 'url(../materials/images/' + 4 + '.png)'

    imageDisplay.style.transform = "translate(" + (e.pageX * -1 + cursorDimensions / 2) + "px , " + (top + e.pageY * -1 + cursorDimensions / 2) + "px)"
}

window.addEventListener("wheel", imageShowcase3)
window.addEventListener("mousemove", imageShowcase3)

function imageShowcase3(e) {

    const target = document.getElementById('3')

    const top = target.offsetTop

    if (top > e.pageY) return
    if (top + target.scrollHeight < e.pageY) return

    imageDisplay.style.backgroundImage = 'url(../materials/images/' + 6 + '.png)'

    imageDisplay.style.transform = "translate(" + (e.pageX * -1 + cursorDimensions / 2) + "px , " + (top + e.pageY * -1 + cursorDimensions / 2) + "px)"
}