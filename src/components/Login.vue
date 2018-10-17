<template>
  <div class="login">

    <div class="login_wrap">
      <div class="login_logo">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAB9CAYAAAD6IRLDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTI3NTY1MzhDOTE0MTFFODk3MzdCNEQ1MzZGNjQ3NkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTI3NTY1MzlDOTE0MTFFODk3MzdCNEQ1MzZGNjQ3NkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDBCQzY3RkM4NzcxMUU4OTczN0I0RDUzNkY2NDc2QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDBCQzY4MEM4NzcxMUU4OTczN0I0RDUzNkY2NDc2QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Phr03VUAAAtdSURBVHja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" alt="ТЗ">
      </div>

      <form class="login_form form" onsubmit="return false">
        <div class="form-group">
          <label>Имя пользователя</label>
          <input class="login_form__user" type="text" v-model="user" required v-focus placeholder="Имя пользователя" />
        </div>
        <div class="form-group">
          <label>Пароль</label>
          <input class="login_form__password" type="password" name="password" v-model="pass" placeholder="Пароль" required=""/>  
        </div>

        <div class="form-group">
          <button class="login_btn btn" @click="login" @keyup:enter="login" :disabled="user.length == 0 || pass.length == 0"><font-awesome-icon icon="sign-in-alt" class="mgr10"></font-awesome-icon> Войти</button>
        </div>
      </form>
    </div>

    <div class="login_copy">
      &copy; shure348 for cryptouniverse.group
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: '',
      pass: ''
    }
  },

  computed: {
    token(){
      return localStorage.getItem('token')
    }
  },

  methods: {
    login(){
      this.$http.post(`http://localhost:3000/login`, {
        name: this.user,
        password: this.pass
      }, {
        headers: {
          'Content-Type' : 'application/json; charset=UTF-8',
          'Accept' : 'application/json'
        }
      }).then(response => {
        var data = JSON.parse(response.bodyText)
        localStorage.setItem('token', data.token)
        return this.$router.push('/'+data.message)
      }, response => {
        let data = JSON.parse(response.bodyText)
        this.user = '';
        this.pass = '';

        return this.$toastr('error', data.message)
      })
    }
  },

  created(){
    document.title = 'ТЗ cryptouniverse.group | Вход'
    if(this.token != null) return this.$router.push('/main')
  },

  directives: {
    focus: { //автофокус по v-focus
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login { 
  width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; padding: .5em; background-color: #ECEFF1; box-sizing: border-box; flex-wrap: wrap; flex-direction: column;

  &_wrap { display: flex; flex-direction: column; margin-top: auto; margin-bottom: auto; }
  &_logo { text-align: center; margin-bottom: 2.2em; }
  &_form { width: 280px; }
  &_btn { width: 100%; }
  &_copy { font-size: .8em; text-align: center; }
}
</style>