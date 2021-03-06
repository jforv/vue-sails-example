import { mapMutations } from 'vuex'
import he from 'he'

export default {
  async created () {
    await this.$store.dispatch('getUser')
    await this.$store.dispatch('getShopProducts', this.currentPage)
  },

  data: () => ({
    currentPage: 1
  }),

  watch: {
    async currentPage () {
      await this.$store.dispatch('getShopProducts', this.currentPage)
    }
  },

  computed: {
    products: {
      get () {
        return this.$store.state.Products.products.products
      }
    },

    amountOfProducts: {
      get () {
        return this.$store.state.Products.products.amountOfProducts
      }
    },

    user: {
      get () {
        return this.$store.state.User.user
      }
    }
  },

  methods: {
    encode: text => he.encode(text),

    ...mapMutations({
      pushToBasket: 'PUSH_TO_BASKET'
    })
  }
}
