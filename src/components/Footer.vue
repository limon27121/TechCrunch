<template>
 <body class="flex flex-col min-h-screen">
  <!-- Your page content goes here -->

  <footer class="mt-auto bg-gray-900 px-4 pt-5 md:pt-10 max-h-15 md:max-h-25 min-h-16 md:min-h-32 min-w-full">
    <nav
      aria-label="Footer Navigation"
      class="mx-auto mb-5 md:mb-10 flex max-w-xs md:max-w-md max-h-16 md:max-h-xs flex-col gap-5 md:gap-10 text-center sm:flex-row sm:text-left justify-center items-center"
    >
    <a href="#" class="pt-6 md:pt-0 md:font-medium text-white">
        <i class="fa-brands fa-linkedin text-xl"></i>
       </a>

      <a href="#" class="font-medium text-white">
        <i class="fa-brands fa-github text-xl"></i>
      </a>
      <a href="#" class="font-medium text-white">
        <i class="fa-brands fa-facebook text-xl"></i>
      </a>
    </nav>
    <div class="text-center text-gray-300 pt-10 md: pt-0">
      <p class="  p-2">
        © 2023 TechCrunch | All Rights Reserved
      </p>
    </div>
  </footer>
</body>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang=""></style>
