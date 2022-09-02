<template>
  <div
    v-if="from && to"
    id="map-wrap"
    class="h-96 overflow-hidden rounded-2xl"
  >
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
</template>

<script>
export default {
  props: { to_city_id: Number, from_city_id: Number },
  data() {
    return {
      from: null,
      to: null,
    }
  },
  async fetch() {
    const from = await this.$axios.$get(
      `${process.env.GEO_API_URL}communes/${this.from_city_id}?fields=centre`
    )
    const to = await this.$axios.$get(
      `${process.env.GEO_API_URL}communes/${this.to_city_id}?fields=centre`
    )
    this.from = from.centre.coordinates
    this.to = to.centre.coordinates
  },
}
</script>

<style>
</style>