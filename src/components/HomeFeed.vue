<template>
  <div>
    <NavBar></NavBar>
    <div class="container feed-content">
      <div class="row">
        <div class="col-sm-12 content">
          <div class="card-header">
            <img class="profile-icon" src="../assets/lorni.jpg" width="60px" height="60px">
            <router-link to="/Posts"><span class="profile-name">Lorna Michelle R.</span></router-link>
          </div>
          <div class="card mb-3">
            <img src="../assets/beach.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Footer Start Here -->
    <footer class="terms-privacy">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link" to="/TermsOfUse">Terms of Use</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/PrivacyPolicy">Privacy Policy</router-link>
        </li>
      </ul>
    </footer>
    <!-- Footer Ends Here -->
  </div>
</template>

<script>
import Parse from 'parse'
import NavBar from '@/components/NavBar'
  export default {
    name: 'HomeFeed',
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
  .profile-container {
    background: white;
  }
  
  .feed-content {
    width: 600px;
    margin: auto;
    padding-top: 80px;
    margin-bottom: 70px;
  }
  
  .card-header {
    border-left: 1px solid rgb(209, 209, 209);
    border-right: 1px solid rgb(209, 209, 209);
    border-top: 1px solid rgb(209, 209, 209);
    border-bottom: none;
    border-radius: none;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  
  .card img {
    border-radius: 0;
  }
  
  .profile-icon {
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #ff9300;
    margin-right: 25px;
  }
  
  .profile-name {
    font-size: 14px;
    font-weight: 700;
    color: #393e49;
  }
  
  .card {
    border-radius: none;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  
  .rating-icon {
    margin-bottom: 15px;
  }
  
  .comment-icon,
  .share-icon {
    margin-left: 10px;
    margin-bottom: 15px;
  }
  
  .report-icon {
    margin-left: 370px;
    margin-bottom: 15px;
  }
  
  #textarea1 {
    width: 465px;
    border: none;
    resize: none;
  }
  
  .card-title {
    font-weight: 700;
    font-size: 15px;
  }
  
  .card-text {
    font-size: 14px;
  }
  
  .modal-header h5 {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    padding-left: 110px;
    margin: auto;
  }
  
  .terms-privacy {
    margin-top: 50px;
    background: #f7f8f9;
    border-top: 1px solid #d6d6d6;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  
  .nav-item {
    padding: 5px;
  }
  
  .nav-link {
    color: #606163;
    font-weight: 700;
    font-size: 12px;
  }
  
  @media (max-width: 576px) {
    .feed-content {
      width: 400px;
    }
    #textarea1 {
      width: 350px;
    }
  }
</style>