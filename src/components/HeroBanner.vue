<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-2 font-sans">
    <!-- Modern Promotional Hero Banner (Neopharmi Botanical & Clinical Elegance) -->
    <div class="bg-gradient-to-r from-emerald-900 via-brand-800 to-green-800 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm border border-emerald-600/40">
      <!-- Background subtle atmospheric radial glows -->
      <div class="absolute -left-12 -top-12 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute right-0 bottom-0 w-80 h-80 bg-green-300/10 rounded-full blur-3xl pointer-events-none"></div>
      <!-- Subtle watermark logo leaf shape -->
      <div class="absolute right-10 -bottom-10 opacity-5 pointer-events-none">
        <svg class="w-96 h-96" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 20C55 20 20 55 20 100c0 45 35 80 80 80s80-35 80-80c0-45-35-80-80-80zm0 30c30 0 50 20 50 50s-20 50-50 50-50-20-50-50 20-50 50-50z"/>
        </svg>
      </div>

      <!-- Left Side: Content & CTA -->
      <div class="space-y-4 max-w-xl z-10 text-center md:text-left">
        <!-- Promo Badge -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-2xs">
          <Sparkles class="w-3.5 h-3.5 text-amber-300" />
          <span>25 წელი ქართულ ჯანდაცვაში • 100+ პატენტი</span>
        </div>

        <!-- Big Retail Headline -->
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white">
          ბუნებრივი და ინოვაციური სამკურნალო საშუალებები
        </h1>

        <!-- Subtitle -->
        <p class="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-lg">
          ნეოფარმი — 200-ზე მეტი დასახელების მცენარეული პრეპარატი, NEODERM-ის სამედიცინო კოსმეტიკა და ბუნებრივი ექსტრაქტები ნატიური აქტიური ნივთიერებებით.
        </p>

        <!-- Action CTA Button -->
        <div class="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
          <router-link
            to="/category/medicines"
            class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-900 font-black text-xs transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer group"
          >
            <span>პროდუქციის კატალოგი</span>
            <ArrowRight class="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
          </router-link>

          <router-link
            to="/category/cosmetics"
            class="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/20 active:scale-95 cursor-pointer"
          >
            <Sparkles class="w-4 h-4 text-amber-300" />
            <span>NEODERMI მოვლა</span>
          </router-link>
        </div>
      </div>

      <!-- Right Side: Visual Showcase Cards -->
      <div class="relative w-full max-w-sm md:max-w-md flex items-center justify-center z-10">
        <!-- Floating Badge 1 -->
        <div class="absolute -top-3 left-2 z-20 px-3 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs shadow-lg flex items-center gap-1.5 animate-bounce">
          <Tag class="w-3.5 h-3.5 text-slate-950" />
          <span>№1 მცენარეულ პრეპარატებში</span>
        </div>

        <!-- Main Product Visual Showcase Cards -->
        <div class="relative flex items-center justify-center gap-3">
          <!-- Card 1: NEODERMI -->
          <div class="w-36 sm:w-44 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-white/40 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <div class="aspect-square rounded-xl overflow-hidden bg-emerald-50/50 mb-2.5 flex items-center justify-center p-2">
              <img
                src="https://www.neopharmi.ge/wp-content/uploads/2023/06/NEODERM-DGIS.png"
                alt="NEODERMI დღის კრემი"
                @error="handleImageError"
                class="w-full h-full object-contain"
              />
            </div>
            <div class="text-[11px] font-bold text-slate-900 truncate">NEODERMI დღის კრემი</div>
            <div class="flex items-center justify-between mt-1">
              <span class="text-xs font-black text-emerald-700">26.90 ₾</span>
              <span class="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">50 მლ</span>
            </div>
          </div>

          <!-- Card 2: ვალოსედი -->
          <div class="w-36 sm:w-44 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-white/40 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 mt-6">
            <div class="aspect-square rounded-xl overflow-hidden bg-emerald-50/50 mb-2.5 flex items-center justify-center p-2">
              <img
                src="https://www.neopharmi.ge/wp-content/uploads/2023/06/VALOSED-TAB.png"
                alt="ვალოსედი ტაბლეტები"
                @error="handleImageError"
                class="w-full h-full object-contain"
              />
            </div>
            <div class="text-[11px] font-bold text-slate-900 truncate">ვალოსედი №40 ტაბ</div>
            <div class="flex items-center justify-between mt-1">
              <span class="text-xs font-black text-emerald-700">9.80 ₾</span>
              <span class="text-[10px] text-slate-400 line-through">11.50 ₾</span>
            </div>
          </div>
        </div>

        <!-- Floating Badge 2 -->
        <div class="absolute -bottom-2 right-2 z-20 px-3 py-1.5 rounded-xl bg-white text-emerald-800 font-bold text-xs shadow-lg border border-emerald-100 flex items-center gap-1.5">
          <Sparkles class="w-3.5 h-3.5 text-amber-500" />
          <span>ნატიური ექსტრაქტები</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sparkles, ArrowRight, Tag } from 'lucide-vue-next'
import { handleImageError } from '../utils/imageFallback'
</script>
