const interval = setInterval(getHeader, 1000)

function getHeader() {
    const header = document.querySelector("#side > header");
    if (header) {
        clearInterval(interval);

        createButton(header, 1.5, "timesButtonOne", "cadetblue");
        createButton(header, 2, "timesButtonTwo", "green");

        //Aproveita pra aplicar o tema dark
        document.body.className = 'web dark';
    }
}

function createButton(header, speed, cname, color) {
    const btn = document.createElement('button');
    btn.innerHTML = speed + "x";
    btn.classList.add(cname);
    header.appendChild(btn);
    createListener(btn, speed, color);
}

function createListener(btn, x, color) {
    btn.addEventListener("click", () => {
        const audios = document.querySelectorAll("audio");
        audios.forEach((audio) => {
            audio.playbackRate = x;
            let view = audio.closest("div");
            view.classList.add('accelered');
            view.style.borderColor = color;
        })
    })
}