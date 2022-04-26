<template>
  <h3 class="display-4 text-center" id="about">{{msg}}</h3>
</template>
<script>
export default {
   props: {
    msg: String,
  },
  name: "CustomBbHeader",
};
</script>
