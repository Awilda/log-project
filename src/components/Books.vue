<template>
  <ul class="books">
    <li
      v-for="book in books"
      v-bind:key="book.sys.id"
      class="book"
    >
    <div class="book-info">
      <p class="rating">Rating: {{ book.rating }}</p>
      <p class="sound">Has Sound: {{ book.sound }}</p>
      <div class="book-title">
        <p>{{ book.title }}</p>
      </div>
      <div cladss="images">
        <p>image here</p>
      </div>
      <div class="book-creators">
        <p>{{ book.author }}</p>
        <p>{{ book.illustrator }}</p>
      </div>
      <div class="book-buy">
        <p>{{ book.link }}</p>
        <p>$ {{ book.price }}</p>
      </div>
    </div>
  </li>
</ul>
</template>