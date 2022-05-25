<script setup lang="ts">

defineProps<{
  headline:string;
  subheadline:string;
  image:string;
  image_position:string;
  button_label:string;
  button_url:string;
  scroll_anchor_id:string;
}>()

</script>
<template>
<section
      id="about"
      class="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
    >
      <div class="container">
        <div class="wow fadeInUp bg-white" data-wow-delay=".2s">
          <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4">
              <div
                class="items-center justify-between overflow-hidden border lg:flex"
              >
                <div
                  class="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"
                >
                  <span
                    class="mb-5 inline-block bg-primary py-2 px-5 text-sm font-medium text-white"
                  >
                    About
                  </span>
                  <h2
                    class="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]"
                  >
                  {{headline}}
                  </h2>
                  <div class=" prose mb-9 text-base leading-relaxed text-body-color" v-html="subheadline"></div>
                  <a
                    href="javascript:void(0)"
                    class="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                  >
                    Learn More
                  </a>
                </div>
                <div class="text-center">
                  <div class="relative z-10 inline-block">
                    <img
                      :src="image"
                      alt="image"
                      class="mx-auto lg:ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>