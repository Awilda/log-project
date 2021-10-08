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

        <p class="sound">Has Sound: {{ book.sound }}</p>
        <div class="book-title">
          <p>{{ book.title }}</p>
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
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  .book-info > .book-rating > img {
    height: 50px;
  }
</style>