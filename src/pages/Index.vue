<template>
    <div class="container">
        <SearchForm />
      <MovieList />
    </div>
  </template>
  
  <script>
  import MovieList from '@/components/sections/MovieList.vue'; 
  import SearchForm from '@/components/SearchForm.vue'; 
  export default {
    name: 'Index',
    components: {
      MovieList,
      SearchForm
    }
  };
  </script>
  
  <style>

  </style>
  