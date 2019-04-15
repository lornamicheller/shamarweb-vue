<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
      <input class="form-control mr-sm-2" id="search-form" type="search" placeholder="Search..." aria-label="Search">
      <!-- navbar start here -->
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link" to="" data-toggle="modal" data-target="#exampleModalLong">MOST VOTED
          </router-link>
        </li>
  
        <span class="symbol">&#124;</span>
  
        <li class="nav-item">
          <router-link class="nav-link" to="" data-toggle="modal" data-target="#exampleModalLong2">MOST RECENT
          </router-link>
        </li>
  
        <span class="symbol">&#124;</span>
  
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              CATEGORIES
            </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">TRAP</a>
            <a class="dropdown-item" href="#">POP/BALLAD</a>
            <a class="dropdown-item" href="#">ROCK</a>
            <a class="dropdown-item" href="#">EDM</a>
            <a class="dropdown-item" href="#">TROPICAL</a>
            <a class="dropdown-item" href="#">R&B</a>
            <a class="dropdown-item" href="#">GOSPEL</a>
            <a class="dropdown-item" href="#">MODEL</a>
            <a class="dropdown-item" href="#">DANCE</a>
            <a class="dropdown-item" href="#">COMEDY</a>
            <a class="dropdown-item" href="#">SENIOR PROM 1</a>
            <a class="dropdown-item" href="#">SENIOR PROM 2</a>
            <a class="dropdown-item" href="#">SHAMAR AWARDS</a>
          </div>
        </li>
      </ul>
      <!-- navbar ends here -->
      <div class="row justify-content-md-center">
        <div class="col-xl-3 col-lg-3 col-md-6 explore">
          <router-link to="/ExplorerPage"><img class="profile-icon" src="../assets/rose-girl.jpg" width="300px" height="300px"></router-link>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 explore">
          <router-link to="/ExplorerPage"><img class="profile-icon" src="../assets/rose-girl.jpg" width="300px" height="300px"></router-link>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 explore">
          <router-link to="/ExplorerPage"><img class="profile-icon" src="../assets/rose-girl.jpg" width="300px" height="300px"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Parse from 'parse'
  import NavBar from '@/components/NavBar'
  export default {
    name: 'Explore',
    data() {
      return {
  
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 100px;
  }
  
  .container h5 {
    font-weight: 700;
    font-size: 14px;
  }
  
  #search-form {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid rgb(202, 202, 202);
    margin-bottom: 30px;
  }
  
   ::placeholder {
    font-weight: 700;
    font-size: 14px;
  }
  
  .profile-icon {
    object-fit: cover;
  }
  
  .explore {
    padding: 20px;
    margin: 20px;
  }
  
  .nav-link {
    color: #393e49;
    font-weight: 700;
    font-size: 13px;
  }
  
  .dropdown-item {
    color: #393e49;
    font-weight: 700;
    font-size: 13px;
  }
  
  .symbol {
    font-size: 20px;
  }
  
  @media (max-width: 576px) {
    .explore {
      padding: 30px;
    }
  }
</style>