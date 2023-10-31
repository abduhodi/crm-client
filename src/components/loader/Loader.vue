<template>
  <div class="w-full h-screen sm:flex justify-center items-center hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="
        margin: auto;
        background: transparent;
        display: block;
        shape-rendering: auto;
      "
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#43a0ff"
        stroke="none"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.7407407407407407s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51;360 50 51"
        ></animateTransform>
      </path>
    </svg>
  </div>
  <div class="w-full h-screen flex justify-center items-center sm:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="
        margin: auto;
        background: transparent;
        display: block;
        shape-rendering: auto;
      "
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#43a0ff"
        stroke="none"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.7407407407407407s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51;360 50 51"
        ></animateTransform>
      </path>
    </svg>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
