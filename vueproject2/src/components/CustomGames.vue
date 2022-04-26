 <template>
  <div class="container text-center" id="games">
    <div class="card d-inline-block mx-3 " v-for="game in games" :key="game">
      <div class="d-flex justify-content-center row my-3">
        <div class="mx-3" style="width: 18rem">
          <img :src="game.img" class="card-img-top" :alt="game.name" />
          <div class="card-body">
            <h5 class="card-text">{{ game.name }}</h5>
            <p class="card-text">{{ game.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomGames",
  props: ["games"],
};
</script>

<style scoped>
img{
    height: 349px;
    width: 250px;
}
</style>
