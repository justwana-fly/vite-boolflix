import {reactive} from "vue";

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3',
    endPoint: {
        movie: 'search/movie'
        serieTv: 'search/tv'
    },
    options: (
        params = {
            apiKey: "f3b8a9d9e1f1f6e7b5e9e9e9e9e9e9e9",
            query: 'a',
        }
    )

});

    