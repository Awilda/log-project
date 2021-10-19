<template>
  <main id="app">
    <Hero v-bind:books="books" />
    <Books v-bind:books="books" />
  </main>
</template>

<script>
import Hero from "./components/Hero.vue";
import Books from "./components/Books.vue";

  export default {
    data() {
      return {
        books: []
      };
    },
    components: {
      Hero,
      Books
    },
    async created() {
     this.books = await this.getBooks();
   },
   methods: {
    getBooks: async () => {
      const query = `{
        bookCollection(order: title_ASC) {
          items {
            sys {
              id
            }
            title
            year
            author
            illustrator
            link
            rating
            sound
            price
          }
        }
      }`;

      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}/environments/main`;
      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
      };

      try {
        const response = await fetch(fetchUrl, fetchOptions).then(response =>
          response.json()
          );
        return response.data.bookCollection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    }
  }
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;1,200&display=swap');

#app {
  font-family: 'Barlow', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 0;
}
</style>
