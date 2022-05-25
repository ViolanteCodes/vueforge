<script setup lang="ts">
interface Feature{
  headline: string;
  description: string;
  icon: string;
}
defineProps<{
  headline: string;
  subheadline: string;
  features: Feature[],
  section_name: string;
}>()
</script>
<template>
 <section class="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px]" id="features">
      <div class="container">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mb-12 max-w-[620px] lg:mb-20">
              <span class="mb-2 block text-lg font-semibold text-primary">
                {{headline}}
              </span>
              <h2
                class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]"
              >
                {{section_name}}
              </h2>
              <p
                class="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed"
              >
                {{subheadline}}
              </p>
            </div>
          </div>
        </div>
        <div class="-mx-4 flex flex-wrap">
          <div v-for="feature in features" :key="feature.headline" class="feature w-full px-4 md:w-1/2 lg:w-1/4">
            <div class="wow fadeInUp group mb-12 bg-white" data-wow-delay=".1s">
              <div
                class="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >
                <span
                  class="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
                ></span>
                <img :src="feature.icon" alt="" style="filter: invert(100%);">
              </div>
              <h4 class="mb-3 text-xl font-bold text-dark">
                {{feature.headline}}
              </h4>
              <p class="mb-8 text-body-color lg:mb-11">
                {{feature.description}}
              </p>
              <a
                href="javascript:void(0)"
                class="text-base font-medium text-body-color hover:text-primary"
              >
                Learn More
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
</template>