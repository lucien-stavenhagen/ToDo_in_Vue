<template>
  <div class="header-container">
    <div class="header">
      <h1>ToDo App</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.header-container {
  text-align: center;
  max-width: 90%;
  margin: auto;
  padding: 6px;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, 0.1);
}
.header {
  max-width: 97%;
  margin: auto;
  border-radius: 4px;
  background-color: rgb(116, 215, 245);
  border: 2px solid rgba(0, 0, 0, 0.1);
}
</style>