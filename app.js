var app = new Vue({
    el: '#app',
    data: {
        query: "",
        movie: null
    },
    methods: {
        async search() {
            const response = await fetch(`https://www.omdbapi.com/?t=${this.query}&apikey=25871e1f`)
            const responseJson = await response.json();
            this.movie = responseJson
        }
    }
})