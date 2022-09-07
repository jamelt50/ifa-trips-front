<template>
  <div v-if="from && to" id="map-wrap" class="overflow-hidden isolate rounded-2xl">
    <client-only>
      <l-map
        :zoom="13"
        :bounds="[
          [to[1], to[0]],
          [from[1], from[0]],
        ]"
      >
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="[to[1], to[0]]">
          <l-icon :iconSize="['42']" icon-url="/place.svg"
        /></l-marker>
        <l-marker :lat-lng="[from[1], from[0]]"
          ><l-icon :iconSize="['42']" icon-url="/place.svg"
        /></l-marker>
        <l-polyline
          :lat-lngs="[
            [to[1], to[0]],
            [from[1], from[0]],
          ]"
          color="#EC6834"
        ></l-polyline>
      </l-map>
    </client-only>
  </div>
  <c-loader
    v-else
    color="var(--orange)"
    size="100px"
    class="z-50"
    :loading="true"
  />
</template>

<script>
export default {
  props: { to_city_id: String, from_city_id: String },
  data() {
    return {
      from: null,
      to: null,
    }
  },
  mounted() {
    this.fetch()
  },

  watch: {
    to_city_id: () => {
      this.fetch()
    },
    from_city_id: () => {
      this.fetch()
    },
  },
  methods: {
    async fetch() {
      try {
        const from = await this.$axios.$get(
          `${process.env.GEO_API_URL}communes/${this.from_city_id}?fields=centre`
        )
        const to = await this.$axios.$get(
          `${process.env.GEO_API_URL}communes/${this.to_city_id}?fields=centre`
        )
        this.from = from.centre.coordinates
        this.to = to.centre.coordinates
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style>
</style>