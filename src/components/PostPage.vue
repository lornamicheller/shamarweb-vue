<template>
  <div>
    <NavBar></NavBar>
    <div class="row justify-content-center">
      <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 left-container ">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 right-container">
          <div class="header">
            <img class="profile-icon" :src="foto"
              width="60px" height="60px">
            <router-link :to="{name: 'UserProfile', params: {id: objectId}}"><span class="profile-name" >{{username}}</span></router-link>
            <div class="btn float-right">
              <img src="../assets/sishamar.png" width="25px" height="25px" class="rating-icon"><span class="px-2">{{post.likes}}</span>
            </div>
          </div>
        </div>
        <video :src="video" class="post-img" style="overflow: hidden;" width="100%" height="600px" controls controlsList="nodownload" oncontextmenu="return false;"></video>
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
/* eslint-disable */
  import Parse from 'parse'
  import NavBar from '@/components/NavBar'
  export default {
    name: 'PostPage',
    data() {
      return {
        post: {},
        foto: "",
        objectId: "",
        username: "",
        video: ""
      }
    },
    components: {
      NavBar
    },
    mounted() {
      this.getPost()
    },
    methods: {
      getPost() {
        const Post = Parse.Object.extend('Post');
        const query = new Parse.Query(Post);
        var self = this
        query.equalTo('objectId', self.$route.params.id);
        query.first().then((results) => {
          self.post = results.toJSON();
          self.objectId = results.toJSON().user.objectId
          self.video = results.toJSON().media.url
          self.getUser(self.objectId)
        }, (error) => {
          console.log(error)
        });
      },
      getUser(ID) {
        const User = Parse.Object.extend('_User');
        const query = new Parse.Query(User);
        var self = this
        query.equalTo('objectId', ID);
        query.first().then((results) => {
          self.foto = results.toJSON().foto.url
          self.username = results.toJSON().username
          console.log(results.toJSON())
        }, (error) => {
          console.log(error)
        });
      }
    }
  }

</script>

<style scoped>
  .container {
    margin-top: 55px;
    margin-bottom: 100px;
  }

  .left-container {
    height: auto;
    padding-right: 0;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .right-container {
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

  .btn {
    margin-top: 35px;
  }

  .rating-icon {
    float: left;
    margin-left: 10px;
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

  @media (max-width: 576px) {}

</style>
