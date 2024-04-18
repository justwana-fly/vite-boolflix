<template>
<div class="container my-5">
    <div class="p-5 text-center bg-body-tertiary rounded-3">
      <svg class="bi mt-4 mb-3" style="color: var(--bs-indigo);" width="100" height="100"><use xlink:href="#bootstrap"></use></svg>
      <h1 class="text-body-emphasis">Search Movies</h1>
  
      <div class="d-inline-flex gap-2 mb-5">
        <form class="row g-3">
  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Search">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Cerca</button>
  </div>
</form>
      </div>
    </div>
  </div>
</template>

  
<script>
export default {
  name: 'SearchForm',
}
</script>