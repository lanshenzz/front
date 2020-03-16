<template>
    <div class="KnowledgeGraph">
        <div id="Graph">

        </div>
    </div>
</template>

<script>

    export default {
      name: "KnowledgeGraph",
      mounted() {
        this.$chart.line1('Graph');
      }
    }
</script>

<style scoped>
.KnowledgeGraph{
  height: 100%;
}
  #Graph{
    height: 800px;
    padding-top: 90px;
    width: 960px;
    margin: 0 auto
  }

</style>
