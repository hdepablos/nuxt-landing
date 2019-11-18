<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="100%"
      img-height="300"
    >
      <b-carousel-slide caption="First slide" class="altura" img-src="~/assets/img/landing/header_one.jpg/?image=10">
      </b-carousel-slide>
      <b-carousel-slide caption="Second Slide" class="altura" img-src="~/assets/img/landing/header_one.jpg/?image=12"></b-carousel-slide>
      <b-carousel-slide caption="Third Slide" class="altura" img-src="~/assets/img/landing/header_one.jpg/?image=22"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style lang="css" scoped>
  .altura{
    height: 300px;
  }
</style>