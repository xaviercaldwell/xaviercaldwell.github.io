<template>
  <CustomNav />
  <div class="mx-5 bg-light py-5">
    <CustomHeading />
    <CustomCarousel />
    <CustomBbHeader msg="Check Us Out" />
    <CustomCards />
    <CustomQuote />
    <div class="d-flex justify-content-center text-center my-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Miyagis Sentiment</h5>
              <p class="card-text">Click here to show a quote from Miyagi.</p>
              <button class="btn btn-primary" @click="isVisible = !isVisible">
                Show Below
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="isVisible">
      <div class="d-flex justify-content-center text-center">
        <div class="w-50">
          <div class="card">
            <div class="card-header">Quote</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>
                  "I like the old video games. They must be cherished, and
                  washed thoroughly and well-maintained, like car windows"
                </p>
                <footer class="blockquote-footer">
                  Mr. Miyagi in <cite title="Source Title">The Karate Kid</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CustomBbHeader msg="Games List" />
    <CustomGames v-bind:games="games" />
  <CustomBbHeader msg="Consoles" />
  
  <CustomConsoles />
<CustomBbHeader msg="Reviews" />
<CustomReviews v-bind:reviews="reviews" />

  </div>
  <CustomFooter />
 
</template>

<script>
import CustomNav from "./components/CustomNav.vue";
import CustomGames from "./components/CustomGames.vue";
import CustomHeading from "./components/CustomHeading.vue";
import CustomCarousel from "./components/CustomCarousel.vue";
import CustomCards from "./components/CustomCards.vue";
import CustomBbHeader from "./components/CustomBbHeader.vue";
import CustomConsoles from "./components/CustomConsoles.vue";
import CustomFooter from "./components/CustomFooter.vue";
import CustomReviews from "./components/CustomReviews.vue";

export default {
  name: "App",
  components: {
    CustomNav,
    CustomGames,
    CustomHeading,
    CustomCarousel,
    CustomCards,
    CustomBbHeader,
    CustomConsoles,
    CustomFooter,
    CustomReviews
  },
  data() {
    return {
      isVisible: false,

      reviews: [
        {
          name: "Petah Guy",
          statement: "I told Lois I was gonna teach Meg to drive. I went here instead. hehehehe.",
          img: "peta.png"
        },
        {
          name: "Tom Cruise",
          statement: "I crashed my f-15 here and I gotta say, wasn't disappointed. 4.5/5",
           img: "crooz.jpg"
        },
        {
          name: "VideoGame Dunkey",
          statement: "I'm family guy",
           img: "dunkey.jpg"
        },
      ],


      games: [
        {
          name: "Paper Mario: The Thousand Year Door",
          img: "ttyd.jpg",
          bio: "GameCube - 2004 - $102.99",
        },
        {
          name: "NiGHTS into Dreams",
          img: "nightsCover.jpg",
          bio: "Sega Saturn - 1996 - $24.99",
        },
        {
          name: "WarCraft III: Reign of Chaos",
          img: "WarcraftIII.jpg",
          bio: "MAC/PC - 2002 - $52.99",
        },
        {
          name: "Majora's Mask",
          img: "mask.jpg",
          bio: "N64 - 2000 - $99.99",
        },
        {
          name: "Skyward Sword",
          img: "poopgame.jpg",
          bio: "Wii - 2011 - $5.99",
        },
        {
          name: "Metroid Prime",
          img: "primeCover.jpg",
          bio: "GameCube - 2002 - $54.99",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
</style>


