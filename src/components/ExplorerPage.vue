<template>
  <div>
    <NavBar></NavBar>
    <div class="container justify-content-md-center">
      <div class="row justify-content-md-center">
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 left-container">
          <img src="../assets/rose-girl.jpg" class="post-img" width="100%" height="600px">
        </div>
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 right-container">
          <div class="header">
            <img class="profile-icon" src="../assets/lorni.jpg" width="60px" height="60px">
            <router-link to="/Posts"><span class="profile-name">Lorna Michelle R.</span></router-link>
            <div class="name-caption">
              <span class="caption">Perfect View.💜</span>
            </div>
            <!-- comment scroll section -->
            <div class="comment-section">
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
              <div class="name-comment">
                <span class="profile-name">Francheska Perez</span>
                <span class="comment">Beautiful.😁</span>
              </div>
            </div>
            <div class="btn">
              <router-link class="rating-btn" to=""><img src="../assets/sishamar.png" width="25px" height="25px" class="rating-icon" data-toggle="modal" data-target="#exampleModalCenter1"></router-link>
              <router-link class="share-btn" to=""><img src="../assets/shareicon.png" width="25px" height="25px" class="share-icon" data-toggle="modal" data-target="#exampleModalCenter2"></router-link>
              <router-link class="report-btn" to=""><img src="../assets/report chamar.png" width="25px" height="25px" class="report-icon" data-toggle="modal" data-target="#exampleModalCenter2"></router-link>
            </div>
            <div class="add-comment">
              <textarea class="form-control" id="Textarea1" placeholder="Add comment..." rows="3"></textarea>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Parse from 'parse'
  import NavBar from '@/components/NavBar'
  export default {
    name: 'ExplorerPage',
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
  
  .left-container {
    height: 600px;
    padding-right: 0;
  }
  
  .right-container {
    height: 600px;
    background: rgba(235, 235, 235, 0.541);
  }
  
  .profile-icon {
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #ff9300;
    margin-top: 20px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 30px;
  }
  
  .profile-name {
    font-size: 14px;
    font-weight: 700;
    color: #393e49;
  }
  
  .name-caption {
    margin-left: 15px;
  }
  
  .left-container img {
    object-fit: cover;
  }
  
  .col-md-12 {
    padding-left: 0;
  }
  
  .comment-section {
    border-top: 1px solid #ff9300;
    margin: auto;
    padding-top: 10px;
    margin-left: 15px;
    margin-right: 5px;
    height: 350px;
    overflow: scroll;
  }
  
  .name-caption {
    height: auto;
    padding-bottom: 10px;
    text-align: justify;
  }
  
  .caption {
    font-size: 14px;
    color: #393e49;
  }
  
  .btn {
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
  }
  
  .rating-icon {
    float: left;
    margin-left: 10px;
  }
  
  .share-icon {
    float: left;
    margin-left: 10px;
  }
  
  .report-icon {
    float: right;
  }
  
  .comment {
    font-size: 14px;
    color: #393e49;
    text-align: justify;
  }
  
  .add-comment {
    margin-left: 15px;
    border-top: 1px solid #ff9300;
  }
  
  #Textarea1 {
    border: none;
    background: rgba(235, 235, 235, 0);
    resize: none;
    height: 30px;
    margin-top: 10px;
  }
  
   ::placeholder {
    font-size: 12px;
    font-weight: 700;
  }
</style>