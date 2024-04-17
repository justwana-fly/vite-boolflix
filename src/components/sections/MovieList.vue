<template>
  <section>
    <h2>Random Movies</h2>
    <div class="row">
      <div class="col-md-2 col-sm-6" v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie" />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getRandomMovies } from '@/lib/api';
import MovieCard from '../snipepts/MovieCard.vue';

export default {
  name: 'MovieList',
  components: {
    MovieCard
  },
  data() {
    return {
      movies: []
    };
  },
  methods: {
  async fetchRandomMovies() {
    try {
      const response = await getRandomMovies();
      console.log('Response:', response); // Log the response object
      this.movies = response;
    } catch (error) {
      console.error('Error fetching random movies:', error);
    }
  }
},
  created() {
    this.fetchRandomMovies();
  }
};
</script>
