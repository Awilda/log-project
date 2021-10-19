<template>
  <div class="books">
    <ul class="book-container">
      <li
        v-for="book in books"
        v-bind:key="book.sys.id"
        class="book"
      >
      <div class="book-info">
        <div v-if="book.rating" class="book-rating">
          <img
            v-bind:src="require(`../assets/${book.rating}-icon.svg`)"
            v-bind:alt="`Pia's book rating is ${book.rating}`"
            />
        </div>

        <p class="sound">Has Sound: {{ book.sound ? "Yes" : "No" }}</p>
        <div class="book-title">
          <h3>{{ book.title }}</h3>
        </div>
        <div class="book-image">
          <img
            v-bind:src="'https://via.placeholder.com/200x280.png?text=Book+Image+Here'"
            v-bind:alt="`Image of the book: ${book.title}`"
            />
        </div>
        <div class="book-creators">
          <p>{{ book.author }}</p>
          <p>{{ book.illustrator }}</p>
        </div>
        <div class="book-buy">
          <a v-bind:href="book.link">Purchase Book</a>
          <p>$ {{ book.price }}</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    books: Array
  }
};
</script>

<style scoped>
  .book-container {
    padding-top: 5px;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
  }
  .book-info > .book-rating > img {
    height: 50px;
  }
  .book {
    flex-basis: 33.333333%;
    padding-top: 10px;
  }
</style>