const interval = setInterval(getHeader, 1000)

function getHeader() {
    const header = document.querySelector("#side > header");
    if (header) {
        clearInterval(interval);

        createButton(header, 1.5, "timesButtonOne");
        createButton(header, 2, "timesButtonTwo");

        //Aproveita pra aplicar o tema dark
        document.body.className = 'web dark';
    }
}

function createButton(header, speed, cname) {
    const btn = document.createElement('button');
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
            let view = audio.closest("div");
            view.classList.add('accelered');
        })
    })
}