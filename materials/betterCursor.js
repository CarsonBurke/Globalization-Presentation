addStyles()

function addStyles() {
    let styles = `

    * {
        cursor: none !important;
    }
    .cursor {
        display: none;
    }
    .cursor {
        display: block;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 200px;
        box-shadow: inset rgb(255, 255, 255, 0.4) 0 0 1000px 0, rgb(255, 255, 255, 0.4) 0 0 20px 0, inset rgb(0, 0, 0, 0.3) 0 0 50px 0, rgb(0, 0, 0, 0.3) 0 0 20px 0;
        border-radius: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.1s;
        z-index: 1000;
        /* filter: blur(2px); */
        backdrop-filter: opacity(0.5);
    }
    .cursorDown {
        width: 20px;
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

    const top = cursor.scrollHeight * -0.1 + e.pageY + "px",
        left = cursor.scrollWidth * -0.1 + e.pageX + "px"

    cursor.style.transform = "translate(" + left + ", " + top + ")"

    cursor.childNodes[1].style.transform = "translate(" + left + ", " + top + ")"
}