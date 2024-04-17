<template>
    <div class="card mb-4">
      <img class="card-img-top" :src="getImageUrl(movie.poster_path)" :alt="movie.title">
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">Lingua: {{ movie.original_language }}</p>
        <p class="card-text">Vote Average: {{ movie.vote_average }}</p>
        <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }" class="btn btn-primary">View Details</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieCard',
    props: ['movie'],
    methods: {
      getImageUrl(posterPath) {
        if (posterPath) {
          return `https://image.tmdb.org/t/p/w342/${posterPath}`;
        } else {
          return 'https://via.placeholder.com/342x513.png?text=No+Image';
        }
      }
    }
  }
  </script>
  