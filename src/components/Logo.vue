<template>
  <div class="flex items-center gap-3 select-none cursor-pointer group">
    <!-- Neopharmi Emblem / Brand Icon -->
    <div class="relative w-10 h-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-green-600 to-emerald-700 shadow-sm border border-emerald-400/30 group-hover:shadow-md group-hover:scale-105 transition-all shrink-0 overflow-hidden">
      <img
        src="/neopharmi-icon.png"
        alt="ნეოფარმი ლოგო"
        class="w-full h-full object-contain p-1"
        @error="showSvg = true"
        v-if="!showSvg"
      />
      <!-- Fallback stylized botanical-medical SVG icon -->
      <svg
        v-else
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-white"
      >
        <path
          d="M14 3C7.925 3 3 7.925 3 14s4.925 11 11 11 11-4.925 11-11S20.075 3 14 3z"
          fill="#16A34A"
        />
        <path
          d="M14 7v14M7 14h14"
          stroke="#FFFFFF"
          stroke-width="2.6"
          stroke-linecap="round"
        />
        <circle cx="14" cy="14" r="2" fill="#D6F8D0" />
      </svg>
    </div>

    <!-- Neopharmi Title & Pharmaceutical Company Tagline -->
    <div class="flex flex-col justify-center leading-tight">
      <div class="flex items-center gap-1.5">
        <span class="text-lg sm:text-xl font-black text-slate-900 tracking-tight group-hover:text-brand-700 transition-colors">
          ნეოფარმი
        </span>
        <span class="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-emerald-100/80 text-emerald-800 tracking-wider">
          NEOPHARM
        </span>
      </div>
      <span class="text-[9px] font-bold text-slate-500 tracking-wide uppercase mt-0.5">
        ფარმაცევტული კომპანია • 1997-დან
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showSvg = ref(false)
</script>
