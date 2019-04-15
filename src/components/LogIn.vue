<template>
  <div class="hello">
    <div class="container">
      <div class="card profile col-lg-5">
        <div class="card-body">
          <div class="logo-title"></div>
          <div class="form-item">
            <input type="email" name="email" id="email" class="form-style" placeholder="email" autocomplete="off" v-model="email"/>
          </div>
          <div class="form-item">
            <input type="password" name="password" id="password" class="form-style" placeholder="password" v-model="password"/>
          </div>
          <p><a href="#"><small>Forgot Password ?</small></a></p>
          <button class="btn btn-primary log-in" @click="loginUser">Log in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Parse from 'parse'
  export default {
    name: 'LogIn',
    data() {
      return {
        email: null,
        password: null
      }
    },
    methods: {
      loginUser() {
        Parse.User.logIn(this.email, this.password).then((user) => {
          this.$session.start();
          this.$session.set('sessionToken', user.getSessionToken());
          this.$session.set('user', user.attributes );
          this.$session.set('userId', user.id );
          console.log(this.$session.get('user'))
          this.$router.push("/Profile");
  
        }).catch(error => {
          console.error(error);
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #393e49;
  }
  
  .hello {
    height: 100vh;
    background: url('../assets/guy-headphones.png');
    background-size: cover;
    background-position: right;
    padding-top: 60px;
  }
  
  .profile {
    border-radius: 20px;
    margin: auto;
    -webkit-box-shadow: 7px 8px 6px -6px rgb(105, 105, 105);
    -moz-box-shadow: 7px 8px 6px -6px rgb(105, 105, 105);
    box-shadow: 7px 8px 6px -6px rgb(105, 105, 105);
    margin-top: 200px;
  }
  
  .profile .card-body {
    padding-top: 30px;
  }
  
  .logo-title {
    background: url('../assets/shamar-logo.svg');
    width: 200px;
    height: 70px;
    background-size: contain;
    margin: auto;
    margin-bottom: 10px;
  }
  
  .profile .card-title {
    text-align: center;
  }
  
  .log-in {
    background-color: #FF9300;
    color: white;
    border: none;
    /* width: 400px; */
    height: auto;
    padding: 10px;
    padding-left: 90px;
    padding-right: 90px;
    border-radius: 30px;
  }
  
  .form-item {
    text-align: center;
  }
  
  #email,
  #password {
    height: 50px;
    padding: 5px;
    padding-right: 100px;
    margin-bottom: 10px;
    border-radius: 30px;
    box-shadow: none;
    border: 1px solid #393e49;
  }
  
  .card-body {
    text-align: center;
  }
  
   ::placeholder {
    padding-left: 15px;
  }
  
  @media (max-width: 576px) {
    #email,
    #password {
      height: 50px;
      padding: 5px;
      padding-right: 60px;
      margin-bottom: 10px;
      border-radius: 30px;
      box-shadow: none;
      border: 1px solid #393e49;
    }
    .log-in {
      background-color: #FF9300;
      color: white;
      border: none;
      height: auto;
      padding: 10px;
      padding-left: 70px;
      padding-right: 70px;
      border-radius: 30px;
    }
  }
</style>
