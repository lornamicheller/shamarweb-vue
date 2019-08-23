<template>
  <div class="hello">
    <div class="container">
      <div class="card profile col-lg-5">
        <div class="card-body">
            <router-link to="/"><a class="float-left" style="font-weight: 700;" href="#">Back</a></router-link>
          <div class="logo-title"></div>
          <div class="form-item">
            <p style="font-weight: 700;">Reset Password</p>
            <input type="email" name="email" id="email" class="form-style" placeholder="email" autocomplete="off"
              v-model="email" />
          </div>
          <button class="btn btn-primary log-in" @click="loginUser">Send Email</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import Parse from 'parse'
  export default {
    name: 'LogIn',
    data() {
      return {
        email: null
      }
    },
    methods: {
      loginUser() {
        // Pass the username and password to logIn function
        Parse.User.requestPasswordReset(this.email).then(() => {
          alert("Email to reset password has been sent to" + this.email);
          this.$router.push("/")
        }).catch((error) => {
          alert(error)
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
    width: 100%;
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
