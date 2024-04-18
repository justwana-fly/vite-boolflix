<template>
  <section>
    <h3 class="p-3 text-white">Titoli del momento</h3>
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

<style lang="scss" scoped>

section{
  background-color: black;
  padding-top: 50px;
  padding-bottom: 50px;
}
  


</style>
