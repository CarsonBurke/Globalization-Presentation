addStyles()

function addStyles() {
    let styles = `

    * {
        cursor: none !important;
    }
    body:hover .cursor {
        opacity: 1;
        width: 250px;
        height: 250px;
    }
    .cursor {
        opacity: 0;
        overflow: hidden;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        box-shadow: inset rgb(255, 255, 255, 0.4) 0 0 1000px 0, rgb(255, 255, 255, 0.4) 0 0 20px 0, inset rgb(0, 0, 0, 0.8) 0 0 50px 5px, rgb(0, 0, 0, 0.8) 0 0 20px 2px;
        border-radius: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1000;
        transition: opacity 0.3s, width 0.3s, height 0.3s;
    }
    `

    var styleSheet = document.createElement("style")
    styleSheet.innerHTML = styles
    document.head.appendChild(styleSheet)
}

const cursor = document.getElementsByClassName("cursor")[0]

//

window.addEventListener("mousemove", followCursor)
window.addEventListener("wheel", followCursor)
window.addEventListener("mousedown", followCursor)
window.addEventListener("mouseup", followCursor)

function followCursor(e) {

    const top = cursor.scrollHeight * -0 + e.pageY + "px",
        left = cursor.scrollWidth * -0 + e.pageX + "px"

    cursor.style.transform = "translate(" + left + ", " + top + ")"

    const imageChild = cursor.childNodes[1]
    console.log(imageChild)
    imageChild.style.transform = "translate(" + e.pageX * -1 + "px , " + e.pageY * -1 + "px)"
}