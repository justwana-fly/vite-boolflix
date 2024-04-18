<template>
    <div class="container">
      <h1>{{ movie.title }}</h1>
      <div>
        <img :src="getImageUrl(movie.poster_path)" :alt="movie.title">
        <p>Original Title: {{ movie.original_title }}</p>
        <p>Lingua: {{ movie.original_language }}</p>
        <p>Budget: {{ movie.budget }}</p>
        <p>Vote Average: {{ movie.vote_average }}</p>
        <!-- Add more details if needed -->
      </div>
    </div>
  </template>
  
  // MovieDetails.vue
<script>
import { ref, onMounted } from 'vue';
import { getMovieDetailsById } from '@/lib/api'; // Import the function to fetch movie details by ID

export default {
  name: 'MovieDetails',
  data() {
    return {
      movie: {}
    };
  },
  methods: {
    getImageUrl(posterPath) {
      if (posterPath) {
        return `https://image.tmdb.org/t/p/w342/${posterPath}`;
      } else {
        return 'https://via.placeholder.com/342x513.png?text=No+Image';
      }
    }
  },
  created() {
    const movieId = this.$route.params.id; // Get movie ID from route params
    getMovieDetailsById(movieId).then(data => {
      this.movie = data; // Set movie data
    });
  }
}
</script>

