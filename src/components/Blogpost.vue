<template lang="">
 <div>
    <div v-for="post in Posts" :key="index" class="max-w-md mx-auto bg-white shadow-md overflow-hidden mb-4 rounded-lg">
      <div class="p-6">
        <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
       <img :src="post.img" alt="">
        <p class="text-gray-600 mb-4">{{ post.content }}</p>
        <p class="text-sm text-gray-500"><strong>Author:</strong> {{ post.author }}</p>
        <p class="text-sm text-gray-500"><strong>Date:</strong> {{ post.date }}</p>
      </div>
      <hr class="border-t">
    </div>
  </div>
</template>
<script>
export default {
    name:"Blogpost",
    data(){
        return{
            Posts: [
        {
          index: 1,
          img:require('../assets/blogPhotos/beautiful-stories.jpg'),
          title: 'Introduction to JavaScript',
          content: 'JavaScript is a versatile programming language...',
          author: 'John Doe',
          date: '2022-01-01',
        },
        {
          index: 2,
          img:require("../assets/blogPhotos/coding.jpg"),
          title: 'Getting Started with React',
          content: 'React is a popular JavaScript library for building user interfaces...',
          author: 'Jane Smith',
          date: '2022-02-15',
        },
        {
          index: 3,
          img:require("../assets/blogPhotos/designed-for-everyone.jpg"),
          title: 'Node.js and Server-Side JavaScript',
          content: 'Node.js allows you to run JavaScript on the server side...',
          author: 'Bob Johnson',
          date: '2022-03-10',
        },
        // Add more blog post objects as needed
      ]
        }
    }
}
</script>
<style lang="">
    
</style>