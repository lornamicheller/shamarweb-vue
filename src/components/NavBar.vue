<template>
  <div>
    <div class="container-fluid nav-bar">
      <div class="container">
        <nav class="navbar navbar-light bg-light">
          <router-link to="/HomeFeed"><img src="../assets/shamar-logo.svg" height="40px"></router-link>
          <div class="icons">
            <router-link to="/Explore"><img src="../assets/ic_search_white_24.png" class="search-icon" width="20px" height="20px"></router-link>
            <router-link to="/Profile"><img src="../assets/profileiconshamar.png" class="profile-icon" width="25px" height="25px"></router-link>
            <img src="../assets/logout.png" class="profile-icon" width="25px" height="25px" style="cursor: pointer" @click="logoutUser">
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import Parse from 'parse'
  export default {
    name: 'NavBar',
    data() {
      return {
  
      }
    },
    methods: {
      logoutUser: function() {
        Parse.User.logOut().then((user) => {
          console.log(user);
          this.$session.destroy();
          this.$router.push('/')
        }).catch(error => {
          console.error(error);
        })
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #f7f8f9;
    border-bottom: 1px solid rgb(216, 216, 216);
    position: fixed;
    z-index: 1;
    top: 0;
  }
  
  .form-inline input {
    margin-left: 300px;
  }
  
  .fas {
    color: #393e49;
  }
  
  .icons img {
    margin-right: 15px;
  }
</style>