<template>
  <div>
    <button type="button" clas="btn btn-primary">{{ msg }}</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SharkComp",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    getResponse() {
      const path = "http://localhost:5000/shark";

      axios
        .get(path)
        .then((res) => {
          console.log(res.data);
          this.msg = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getResponse();
  },
};
</script>
