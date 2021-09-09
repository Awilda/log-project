<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>

  export default {
    data() {
      return {
        books: []
      };
    },
    async created() {
     this.books = await this.getBooks();
   },
   methods: {
    getBooks: async () => {
      const query = `{
        bookCollection {
          items {
            sys {
              id
            }
            title
            author
            illustrator
            publisher {
              publisher
              city
            }
          }
        }
      }`;

      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}`;
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
