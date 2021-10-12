<template>
  <div class="hero-container">

    <h1>Pia's Library</h1>
      <div class="display-author">
        <p>See My Favs</p>
        <toggle-button :labels="{checked: 'Ok!', unchecked: 'No'}" class="toggle" style="margin-left: 20px" /> 
      </div>

  </div>
</template>
  
<script>
export default {
  data(){
    return {
      file: ''
    }
  },
}

</script>

<style scoped>
  h1 {
    color: pink;
    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
    font-size: 45px;
    padding-top: 60px;
    margin-top: 0;
  }
  .hero-container {
    background-image: url('../assets/clouds-background.jpg');
    background-size: 550px;
  }
  .display-author {
    padding-bottom: 60px;
  }
</style>