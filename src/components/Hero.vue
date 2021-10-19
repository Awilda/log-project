<template>
  <div class="hero-container">

    <h1>Pia's Library</h1>
      <div class="rating-legend-container">
        <p>Rating Legend</p>
<!--         <toggle-button :labels="{checked: 'Yes', unchecked: 'No'}" class="toggle" style="margin-left: 20px" /> --> 
        <ul class="rating-legend">
          <li
            v-for="(ratingAmount, rating) in countArray(ratings)"
            :key="rating"
            class="rating-legend-icon"
          >
            <img 
              :alt="`${rating} icon`" 
              class="icon"
              :src="require(`@/assets/${rating}-icon.svg`)"/>
            <p class="rating-name">{{ rating }}
            </p>
          </li>
        </ul>
      </div>
  </div>
</template>
  
<script>
export default {
  props: {
    books: Array
  },
  computed: {
    readBooks(){
      return this.books;
    },
    ratings() {
      let reviewList = [];
      this.readBooks.forEach(function(each) {
        reviewList.push(each.rating);
      });
      return reviewList;
    }
  },
  methods: {
    countArray(arr) {
      var countedArray = {};
      arr.forEach(function(el) {
        countedArray[el] = countedArray[el] + 1 || 1;
      });
     const sortedCountedObj = Object.entries(countedArray).sort(
        (a, b) => b[1] - a[1]
      );
      countedArray = Object.fromEntries(sortedCountedObj);
      return countedArray;
    }
  }
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
  .rating-legend {
    display: flex;
    list-style: none;
    justify-content: center;
    padding-left: 0;
  }
  .rating-legend-icon {
    padding: 5px;
  }
  .icon {
    height: 30px;
  }
</style>