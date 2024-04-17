import {reactive} from "vue";

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3',
    endPoint: {
        movie: 'search/movie'
        serieTv: 'search/tv'
    },
    options: (
        params = {
            apiKey: "c7cb25375a737494a1c2693a1b31e9cb",
            query: 'a',
        }
    )

});

    