const log = msg => console.log(msg);

class VideoPlayback {

    constructor() {
        this.interval = null;
        // HTML DOM - https://www.w3schools.com/whatis/whatis_htmldom.asp
        this.vidElm = document.getElementById("myVideo");
        this._initEventListners();
    }

    // Video/Audio Element DOM Methods - https://www.w3schools.com/tags/ref_av_dom.asp

    _initEventListners() {
        this.vidElm.onplay = function() {
            log("The video has started to play");
        };

        this.vidElm.onpause = function() {
            log("The video has been paused");
        };
    }

    playVid() {
        this.vidElm.play();
    }

    pauseVid() {
        this.vidElm.pause();
    }

    reloadVid() {
        this.vidElm.load();
    }

    // It will start the video after 3000 miliseconds
    startCountdown() {
        if (this.interval) {
            window.clearTimeout(this.interval);
        }
    
        // Window Web APIs - https://developer.mozilla.org/en-US/docs/Web/API/Window
        this.interval = window.setTimeout(() => {
            this.vidElm.play();
        }, 3000);
    }
}

const videoPlayback = new VideoPlayback();