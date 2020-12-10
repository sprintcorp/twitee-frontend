<template>
  <div>
     <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
          offset-md="4"
          style="margin:8% auto"
        >
         <h3 class="text-center pa-2">Join Twittie</h3>

          <v-text-field
            v-model="firstname"
            label="First Name"
            solo
            prepend-inner-icon="mdi-account"
            required
          ></v-text-field>

           <v-text-field
            v-model="lastname"
            label="last Name"
            solo
            prepend-inner-icon="mdi-account"
            required
          ></v-text-field>

           <v-text-field
            v-model="email"
            label="Email Address"
            solo
            prepend-inner-icon="mdi-email"
            required
          ></v-text-field>
    

       
          <v-text-field
            v-model="password"
            label="Password"
             prepend-inner-icon="mdi-lock"
            solo
            required
            type="password"
          ></v-text-field>

            <v-btn
            depressed
            color="primary"    
            block
            @click.prevent="register()"
            >
                <v-icon left>
                    mdi-account-star
                </v-icon>
                Register Now
            </v-btn>
        <p class="mt-2 text-center caption text-uppercase"> Already Have an Account? 
             <router-link :to="{name:'Login'}">Login Now</router-link>    
             </p>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </div>
</template>

<script src="./register.js">

</script>

<style>

</style>