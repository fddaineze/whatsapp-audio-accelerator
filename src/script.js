const interval = setInterval(getHeader, 1000)

function getHeader() {
    const header = document.querySelector("._1QUKR");
    if (header) {
        clearInterval(interval);

        createButton(header, "buttonOne", 1.5, "timesButtonOne");
        createButton(header, "buttonTwo", 2, "timesButtonTwo");

        //Aproveita pra aplicar o tema dark
        document.body.className = 'web dark';
    }
}

function createButton(header, name, speed, cname) {
    const btn = document.createElement(name);
    btn.innerHTML = speed + "x";
    btn.classList.add(cname);
    header.appendChild(btn);
    createListener(btn, speed);
}

function createListener(btn, x) {
    btn.addEventListener("click", () => {
        const audios = document.querySelectorAll("audio");
        audios.forEach((audio) => {
            audio.playbackRate = x;
        })
    })
}