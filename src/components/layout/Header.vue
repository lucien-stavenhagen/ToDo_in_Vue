<template>
  <div class="header-container">
    <div class="header">
      <img src="../../assets/logo.png" />
      <div v-bind:key="header.id" v-for="header in this.headers">
        <p>{{header.text}}</p>
      </div>
      <h4>There is a solution. Right here, right now.</h4>
      <h3>The mighty, the unstoppable ...</h3>
      <h2>
        The Warrior of the Wasteland ...
        <span class="warrior">
          <cite>-The Road Warrior</cite>
        </span>
      </h2>

      <h2>Yes, the trite but true and overly feature-rich ...</h2>
      <h1>ToDo Application</h1>
    </div>
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
* {
  box-sizing: border-box;
}
h1 {
  margin: 1rem;
  font-size: 3rem;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
h2 {
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
img {
  max-width: 50px;
  width: auto;
  margin: auto;
  display: block;
}
.warrior {
  font-size: 0.8rem;
  text-shadow: none;
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