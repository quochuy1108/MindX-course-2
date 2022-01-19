class Clock {
    $container;
    $timer;
    $btnStart;
    $btnPause;
    $btnStop;


    seconds;
    timeInterval;



    constructor() {
        this.$container = document.createElement('div');

        this.$time = document.createElement('span');
        this.$time.innerHTML = '00:00';

        // START
        this.$btnStart = document.createElement('button');
        this.$btnStart.innerHTML = 'Start';
        this.$btnStart.addEventListener('click', this.start)



        // PAUSE
        this.$btnPause = document.createElement('button');
        this.$btnPause.innerHTML = 'Pause';
        this.$btnPause.addEventListener('click', this.pause)


        // STOP
        this.$btnStop = document.createElement('button');
        this.$btnStop.innerHTML = 'Stop';
        this.$btnStop.addEventListener('click', this.stop)


        this.seconds = 0;
        this.timeInterval = null


    }

    start = () => {
        if (this.timeInterval) {
            return
        }

        this.timeInterval = setInterval(() => {
            this.seconds++;
            this.updateTime()
        }, 1000)
    }


    pause = () => {
        if (this.timeInterval) {
            clearInterval(this.timeInterval)
        }
    }


    stop = () => {
        if (this.timeInterval) {
            clearInterval(this.timeInterval);
        }
        this.seconds = 0;
        this.updateTime()
    }


    updateTime = () => {
        const m = Math.floor(this.seconds / 60);
        const s = Math.floor(this.seconds % 60);
        this.$time.innerHTML = m + ":" + s
    }


    render() {
        this.$container.appendChild(this.$time);
        this.$container.appendChild(this.$btnStart);
        this.$container.appendChild(this.$btnPause);
        this.$container.appendChild(this.$btnStop);
        return this.$container
    }
}