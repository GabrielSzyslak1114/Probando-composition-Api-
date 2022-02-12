<template>
      <router-link :to="urlBtn" @click="(menu = true)">{{textoBtn}}</router-link>
</template>

<script>
export default {
props:{
    urlBtn: String,
    textoBtn: String
}
}
</script>

<style scoped lang="scss">
a{
  color: #fff;
  background: $color-secundary;
  font-size: 1em;
  margin: 20 0px;
  font-weight: 500;
  padding: 10px 20px;
  display: inline-block;
  text-decoration: none;

  height: 45px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: .3s;
    &:hover{
        background: $color-primary;
    }
}


</style>