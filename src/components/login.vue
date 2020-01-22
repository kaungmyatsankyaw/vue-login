<template>
  <v-app>
    <v-container>
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="userdata.username" label="Username" type="text" required></v-text-field>

        <v-text-field v-model="userdata.password" label="Password" type="password" required></v-text-field>

        <v-btn color="success" class="mr-4" @click="login()">Login</v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data(){
      return{
          userdata:{
              username:'',
              password:''
          }
      }
  },
  mounted() {},
  methods: {
      login:function(){
          this.$store.dispatch('login',this.userdata).then(()=>{
              let loginStatus=this.$store.getters.loginStatus;
              console.log(loginStatus)
              if(loginStatus){
              
                this.$router.push({path:'/myaccount'})
              }
          });
      }
  },
  beforeMount() {
    this.$store.commit("SET_TOOL_BAR", this.$route.name);
  }
};
</script>

<style scoped>
</style>