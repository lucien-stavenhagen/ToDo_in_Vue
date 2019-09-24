<template>
  <div class="jumbotron mb-1 p-4 text-center border border-dark overflow-auto">
      <img style="height: 70px; width: 70px;" class="shadow-lg p-1 rounded" src="../../assets/logo.png" />
      <hr class="my-4">
      <div v-bind:key="header.id" v-for="header in this.headers">
        <p>{{header.text}}</p>
      </div>
      <p>There is a solution. Right here, right now.</p>
      <p>The mighty, the unstoppable ...</p>
      <p class="lead">
        The Warrior of the Wasteland... The Ayatolla Of Rock-and-Rolla... <span>
          <cite><small class="text-muted font-weight-light">-The Road Warrior</small></cite>
        </span></p>
      <hr class="my-4">
      <h1 class="font-weight-light">The ToDo Application</h1>
    </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      headers: [
        {
          id: 1,
          text: "Can't ever find your keys?"
        },
        {
          id: 2,
          text: "Do you keep missing those HOA meetings?"
        },
        {
          id: 3,
          text:
            "Are you just tired and fed up with trying to keep track of it all?"
        }
      ]
    };
  }
};
</script>
<style scoped>

</style>