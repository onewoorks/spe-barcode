<template>
  <div>{{ access }}</div>
</template>
<script>
export default {
  name: "Access",
  data() {
    return {
      access: this.$route.params.token
    };
  },
  mounted(){
      this.fetchData()
  },
  methods:{
      fetchData() {
      const baseURI = process.env.SPE_API + 'access/' + this.$route.params.token
      this.$http
        .get(baseURI)
        .then(result => {
          let response = result.data.response;
          this.$router.push('/'+response.path)
          localStorage.setItem('token', response.token);
        });
    }
  }
};
</script>

