import { reactive } from "vue";

export const store = reactive({
    apiURL: 'https://developers.themoviedb.org/3',
    endPoint: {
        movie: 'search/movie',
        serieTv: 'search/tv'
    },
    options: { // Ora options è un oggetto
        apiKey: "c7cb25375a737494a1c2693a1b31e9cb",
        query: 'a',
    }
});


    