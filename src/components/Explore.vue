<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
      <!-- navbar start here -->
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <button class="nav-link" to="" style="background-color: transparent; border: none;" @click="getHomeFeed(voted = true)">MOST VOTED
          </button>
        </li>

        <span class="symbol">&#124;</span>

        <li class="nav-item">
          <button class="nav-link" style="background-color: transparent; border: none;" @click="getHomeFeed(voted = false)">MOST RECENT
          </button>
        </li>
        <span class="symbol">&#124;</span>
          <select class="mx-2" style="font-size: 14px;" @change="getHomeFeed(voted)" v-model="category">
            <option default>All</option>
            <option >Trap</option>
            <option >Pop/Ballad</option>
            <option >Rock</option>
            <option >Tropical</option>
            <option >Freestyle</option>
            <option >Gospel</option>
            <option >Model</option>
            <option >Dance</option>
            <option >Comedy</option>
            <option >Senior Prom 1</option>
            <option >Senior Prom 2</option>
            <option >Shamar Awards</option>
          </select>
      </ul>
      <!-- navbar ends here -->
      <div class="row justify-content-md-center">
        <div class="col-xl-3 col-lg-3 col-md-6 explore" v-for="post in postList" :key="post.id">
          <router-link :to="{name: 'PostPage', params: {id: post.objectId}}"><img class="profile-icon" :src="post.imagen.url" width="300px" height="300px"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
  import Parse from 'parse'
  import NavBar from '@/components/NavBar'
  export default {
    name: 'Explore',
    data() {
      return {
        category: 'All',
        postList: [],
        voted: true
      }
    },
    components: {
      NavBar
    },
    beforeCreate(){
      if(this.$session.exists() == false){
        this.$router.push("/")
      }
    },
    mounted(){
      this.getHomeFeed(this.voted = true)
    },
    methods: {
      getHomeFeed(){
        var params = {
          category: this.category,
          mostVoted: this.voted,
          size: 500,
          isPagination: false
        }
        var self = this;
        Parse.Cloud.run('getExploreNew', params).then(res => {
          for (let i = 0; i < res.length; i++) {
            res[i] = res[i].toJSON();
          }
          self.postList = res
          console.log(self.postList)
        }).catch(err => {
          console.log(err)
        })
      }
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
