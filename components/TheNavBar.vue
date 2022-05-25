<script setup lang="ts">
const menuItems = [
  {
    label: "Home",
    url: "#hero",
  },
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Features",
    url: "#features",
  },
  {
    label: "Testimonials",
    url: "#testimonials",
  },
];
</script>
<template>
  <div
    class="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent"
  >
    <div class="container">
      <div class="relative -mx-4 flex items-center justify-between">
        <div class="w-60 max-w-full px-4">
          <a href="index.html" class="navbar-logo block w-full py-5">
            <img
              src="https://cdn.buttercms.com/UF5Qw25gSoKXBDdxXEfQ"
              alt="logo"
              class="header-logo w-full"
            />
          </a>
        </div>
        <div class="flex w-full items-center justify-between px-4">
          <div>
            <button
              id="navbarToggler"
              class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-white"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-white"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-white"
              ></span>
            </button>
            <nav
              id="navbarCollapse"
              class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
            >
              <ul class="blcok lg:flex">
                <li
                  v-for="item in menuItems"
                  :key="item.url"
                  class="group relative"
                >
                  <a
                    :href="item.url"
                    class="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                  >
                    {{ item.label }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
            <a
              href="#"
              class="loginBtn hover:opacity-70 signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
            >
              Register/Login
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
