const app = Vue.createApp({
    data() {
        return {
            handleCarrusel: 0,
            handleSizeCarrusel: ''
        }
    },
    methods: {
        incrementCarousel() {
            if (screen.width < 768) {
                this.handleSizeCarrusel = 'vw'
                if (this.handleCarrusel == -360) {
                    this.handleCarrusel = 0
                } else {
                    this.handleCarrusel -= 90
                }
            } else {
                this.handleSizeCarrusel = 'rem'
                if (this.handleCarrusel == -156) {
                    this.handleCarrusel = 0
                } else {
                    this.handleCarrusel -= 39
                }
            }
            
        },
        decrementCarousel() {
            if (this.handleCarrusel == 0) {
                this.handleCarrusel = -156
            } else {
                this.handleCarrusel += 39
            }
        },
    },
    })
app.mount('body')