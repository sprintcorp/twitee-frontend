<template id="inspire">
  <v-container>
    <Navigation />
    <v-row>
      <v-col cols="12" sm="3">
        <v-sheet rounded="lg" min-height="268">
          <div class="text-center">
            <v-avatar color="grey" size="75" class="mt-4 mb-2">
              <v-icon class="white--text headline"> mdi-account </v-icon>
            </v-avatar>
            <p class="overline mb-0">{{ name }}</p>
            <small class="mt-0"></small>
            <p class="caption">Twitee</p>

            <v-btn
              color="primary"
              @click="logout()"
              rounded
              outlined
              class="mb-2"
            >
              <v-icon> mdi-logout </v-icon>
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
      <!-- <pre>{{ posts }}</pre> -->
      <v-col cols="12" sm="6">
        <v-sheet min-height="70vh" rounded="lg">
          <div class="px-8 py-12 mb-4" style="background: white">
            <div class="d-flex flex-wrap">
              <v-avatar class="mr-4 mb-4" color="grey">
                <v-icon class="white--text headline mx-2"> mdi-account </v-icon>
              </v-avatar>

              <v-textarea
                solo
                name="input-7-4"
                v-model="post"
                label="What's on your mind?"
                :counter="150"
              >
              </v-textarea>
            </div>

            <v-btn
              rounded
              color="primary"
              class="white--text float-right"
              normal
              @click.prevent="createPost()"
            >
              <v-icon left small> mdi-star </v-icon>
              Twit
            </v-btn>
          </div>

          <div
            class="px-8 py-12"
            style="background: white"
            v-for="(post, index) in posts"
            :key="index"
          >
            <div class="d-flex mb-4">
              <v-avatar class="mr-4" color="grey">
                <v-icon class="white--text headline mx-2"> mdi-account </v-icon>
              </v-avatar>

              <p class="overline">
                {{ post.user.firstname + " " + post.user.lastname }}
                <small>{{ post.createdAt  }}</small>
              </p>
            </div>
            <div>
              <!-- <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="300"
                class="mx-md-16"
                justify="center"
                align="center"
                src="https://picsum.photos/id/11/500/300"
              ></v-img> -->
              <h4>{{ post.post }}</h4>
            </div>

            <div class="d-flex justify-space-around mt-1">
              <v-btn icon color="pink" @click="createLike(post.id)">
                {{ post.likes.length }}
                <v-icon>
                  {{
                    post_like_id == post.id
                      ? "mdi-heart"
                      : "mdi-heart-outline"
                  }}
                </v-icon>
              </v-btn>

              <v-btn icon color="blue" @click="showBoxes(post.id)">
                <v-icon> mdi-reply </v-icon>
              </v-btn>

              <v-btn icon color="red" @click="deletePost(post.id)">
                <v-icon> mdi-delete </v-icon>
              </v-btn>
            </div>
            <div id="comment-box" class="mt-4" v-if="post.id == post_id">
              <v-textarea
                solo
                name="input-7-4"
                label="Comment"
                :counter="150"
                class="px-md-6"
                v-model="post_comment"
              >
              </v-textarea>
               <v-btn
              rounded
              color="primary"
              class="white--text float-right"
              normal
              @click.prevent="createComment(post.id)"
            >
              
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>

              <div
                id="comments"
                v-for="(comment, index) in post.comments"
                :key="index"
              >
                <div>
                  <div class="d-flex flex-wrap align-center">
                    <v-avatar class="mr-4" color="grey">
                      <v-icon class="white--text headline mx-2">
                        mdi-account
                      </v-icon>
                    </v-avatar>

                    <h4>{{ comment.user }}</h4>
                  </div>

                  <p class="px-md-16 text-justify">
                    {{ comment.comment }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="3">
        <v-sheet rounded="lg" min-height="268">
          <!--  -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./homepage.js">
</script>
