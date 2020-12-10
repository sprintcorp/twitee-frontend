<template>
  <div>
     <v-form >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
          offset-md="4"
          style="margin:15% auto"
        >
         <h3 class="text-center pa-2">Login to Twittie</h3>

          <v-text-field
            v-model="email"
            label="Username"
            solo
            prepend-inner-icon="mdi-account"
            required
          ></v-text-field>
    

       
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
             prepend-inner-icon="mdi-lock"
            solo
            required
          ></v-text-field>

            <v-btn
            depressed
            color="primary"    
            block
            @click.prevent="login()"
            >
                <v-icon left>
                    mdi-login
                </v-icon>
                Login
            </v-btn>

            <p class="mt-2 text-center caption text-uppercase">I Don't have an Account? 
             <router-link :to="{name:'Register'}">Register Now</router-link>    
             </p>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </div>
</template>

<script src="./login.js">

</script>

<style>

</style>