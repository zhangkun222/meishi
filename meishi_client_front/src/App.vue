<template>
  <div id="app" v-cloak>
    <div id="nav">
      <div>
        <router-link to="/Recipe">食谱页面</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
[v-cloak]{
  display: none;
}
* {
  padding: 0;
  margin: 0;
}

</style>
