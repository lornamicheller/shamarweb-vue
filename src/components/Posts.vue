<template>
  <div>
    <NavBar></NavBar>
    <div class="container-fluid profile-component">
      <div class="card profile-component">
        <img class="profile-image" :src="($session.get('user').foto != null) ? ($session.get('user').foto.url) : '../assets/logo-shamar.png'">
        <div class="profile-info">
          <p class="profile-name">{{$session.get("user").username}}</p>
          <p class="country-name">{{$session.get("user").country}}</p>
          <div class="ratings">
            <img src="../assets/sishamar.png" width="25px" height="25px">
            <span class="shamar-quantity">{{$session.get("user").likes}}</span>
          </div>
        </div>
        <div class="card-body">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <router-link class="nav-link active" to="">POSTS
                <span class="post-quantity">{{postList.length}}</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="" data-toggle="modal" data-target="#exampleModalLong">FOLLOWERS
                <span class="followers-quantity">{{followerList.length}}</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="" data-toggle="modal" data-target="#exampleModalLong2">FOLLOWING
                <span class="following-quantity">{{followingList.length}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Modal Followers-->
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Followers</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center" v-for="follower in followerList"
                :key="follower.id">
                <img class="followers-img" :src="(follower.follower.foto != null) ? (follower.follower.foto.url) : '../assets/logo-shamar.png'"
                  width="60px" height="60px">
                <span class="follower-name">{{follower.follower.username}}</span>
                <button class="btn btn-secondary" @click="goToProfile(follower.follower.objectId)">View Profile</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Followers Ends Here -->
    <!-- Modal Following -->
    <div class="modal fade" id="exampleModalLong2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title2" id="exampleModalLongTitle">Following</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center" v-for="following in followingList"
                :key="following.id">
                <img class="followers-img" :src="(following.following.foto != null) ? (following.following.foto.url) : '../assets/logo-shamar.png'"
                  width="60px" height="60px">
                <span class="follower-name">{{following.following.username}}</span>
                <button class="btn btn-secondary" @click="goToProfile2(following.following.objectId)">View Profile</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Following Ends Here -->
    <!-- posts -->
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-xl-3 col-lg-3 col-md-6 post" v-for="post in postList" :key="post.id">
          <router-link :to="{name: 'PostPage', params: {id: post.objectId}}">
            <img class="post-img" style="overflow: hidden" :src="post.imagen.url" width="300px" height="300px">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import Parse from 'parse'
  import NavBar from '@/components/NavBar'
  export default {
    name: 'Posts',
    data() {
      return {
        postList: [],
        followerList: [],
        followingList: []
      }
    },
    components: {
      NavBar
    },
    beforeCreate() {
      if(this.$session.exists() == false){
        this.$router.push("/")
      }
    },
    mounted() {
      this.getFollowing()
      this.getPostlist()
      this.getFollowers()
    },
    methods: {
      getPostlist() {

        var userPointer = {
          __type: 'Pointer',
          className: '_User',
          objectId: this.$session.get('userId')
        }

        const Post = Parse.Object.extend('Post');
        const query = new Parse.Query(Post);
        var self = this
        query.equalTo("user", userPointer);
        query.descending("createdAt")
        query.find().then((results) => {
          for (let i = 0; i < results.length; i++) {
            results[i] = results[i].toJSON();
          }
          self.postList = results;
        }, (error) => {
          console.log(error)
        });
      },

      getFollowers() {
        var params = {
          userId: this.$session.get('userId'),
          accountType: "user",
        }
        var self = this;
        Parse.Cloud.run('getFollowersNew', params).then(res => {
          for (let i = 0; i < res.length; i++) {
            res[i] = res[i].toJSON();
          }
          self.followerList = res
        }).catch(err => {
          console.log(err)
        })
      },
      getFollowing() {
        var params = {
          userId: this.$session.get('userId'),
          accountType: "user",
        }
        var self = this;
        Parse.Cloud.run('getFollowingsNew', params).then(res => {
          for (let i = 0; i < res.length; i++) {
            res[i] = res[i].toJSON();
          }
          self.followingList = res
          console.log(self.followingList)
        }).catch(err => {
          console.log(err)
        })
      },
      goToProfile(userId) {
        $('#exampleModalLong').modal('hide');
        this.$router.push({
          name: 'UserProfile',
          params: {
            id: userId
          }
        })
      },
      goToProfile2(userId) {
        $('#exampleModalLong2').modal('hide');
        this.$router.push({
          name: 'UserProfile',
          params: {
            id: userId
          }
        })
      }
    }
  }

</script>

<style scoped>
  .profile-component {
    padding-top: 120px;
    width: 100%;
    margin: auto;
    padding-left: 0;
    padding-right: 0;
    -webkit-box-shadow: 0 8px 6px -6px rgb(192, 192, 192);
    -moz-box-shadow: 0 8px 6px -6px rgb(192, 192, 192);
    box-shadow: 0 8px 6px -6px rgb(192, 192, 192);
    border-left: none;
    border-right: none;
    border-radius: 0;
  }

  .profile-image {
    position: absolute;
    object-fit: cover;
    top: -40px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .profile-info {
    text-align: center;
    width: 300px;
    margin: auto;
    padding-top: 10px;
  }

  .profile-info p {
    font-weight: 700;
    font-size: 15px;
    padding: 0;
  }

  .shamar-quantity {
    margin-left: 5px;
  }

  .modal-header h5 {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    padding-left: 110px;
    margin: auto;
  }

  .followers-img {
    border-radius: 50%;
    object-fit: cover;
  }

  .follower-name {
    font-weight: 700;
  }

  .btn-secondary {
    background-color: #ff9300;
    color: black;
    border: none;
  }

  .follow-btn {
    background-color: #ff9300;
    height: 35px;
    font-size: 12px;
    font-weight: 700;
    border-radius: 10px;
  }

  .following-btn {
    background-color: #393e49;
    border: none;
    height: 30px;
    font-size: 12px;
    font-weight: 700;
  }

  .nav-item a {
    font-size: 13px;
    color: black;
    font-weight: 700;
  }


  /* post */

  .container {
    margin-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .post img {
    margin: 15px;
    object-fit: cover;
  }

  .post {
    padding: 20px;
    margin: 20px;
  }

  @media (max-width: 576px) {
    .post {
      padding: 20px;
    }
  }

</style>
