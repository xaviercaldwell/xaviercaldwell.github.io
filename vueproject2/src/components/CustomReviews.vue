<template>
  <div class="container text-center" id="reviews">
    <div class="card d-inline-block mx-3 " v-for="review in reviews" :key="review">
      <div class="d-flex justify-content-center row my-3">
        <div class="mx-3" style="width: 18rem">
          <img :src="review.img" class="card-img-top" :alt="review.name" />
          <blockquote class="blockquote">
            <p>{{ review.statement }}</p>
            <h5 class="blockquote-footer">{{ review.name }}</h5>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    name: "CustomReviews",
  props: ["reviews"],
}
</script>
<style scoped>
img{
    height: 300px;
    width: 250px;
}
</style>