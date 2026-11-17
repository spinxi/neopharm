<template>
  <div class="min-h-screen bg-surface-bg flex flex-col selection:bg-brand-100 selection:text-brand-900 font-sans">
    <!-- Top & Main Navigation (Hidden on Terminal POS) -->
    <Header v-if="$route.path !== '/branch-terminal'" />

    <!-- Multi-Page Engine: Dedicated Router Views with smooth page transition -->
    <main class="flex-1 w-full pb-20 md:pb-0">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Clean Modern Footer (Hidden on Terminal POS) -->
    <footer v-if="$route.path !== '/branch-terminal'" class="bg-white text-slate-500 py-12 px-4 sm:px-6 border-t border-slate-200/80 text-xs mt-16 pb-24 md:pb-12">
      <div class="max-w-7xl mx-auto space-y-8">
        <!-- Top Footer Row: Company info & Contact details -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-100">
          <!-- Col 1: Brand & About -->
          <div class="space-y-3 md:col-span-1">
            <Logo />
            <p class="text-slate-500 text-xs leading-relaxed pt-1">
              ფარმაცევტული კომპანია „ნეოფარმი“ 25 წელია საქართველოს ჯანდაცვის სისტემის სანდო ნაწილია. ბუნებრივი, მცენარეული და მაღალტექნოლოგიური სამკურნალო საშუალებების უმსხვილესი მწარმოებელი.
            </p>
          </div>

          <!-- Col 2: Navigation -->
          <div class="space-y-3">
            <h4 class="font-bold text-slate-800 text-xs uppercase tracking-wider">კატეგორიები</h4>
            <ul class="space-y-2 text-slate-600">
              <li><router-link to="/category/medicines" class="hover:text-brand-600 transition-colors">მედიკამენტები</router-link></li>
              <li><router-link to="/category/cosmetics" class="hover:text-brand-600 transition-colors">ნეოდერმი / კოსმეტიკა</router-link></li>
              <li><router-link to="/category/baby" class="hover:text-brand-600 transition-colors">ნეობეიბი / დედა & ბავშვი</router-link></li>
              <li><router-link to="/category/vitamins" class="hover:text-brand-600 transition-colors">ვიტამინები & მცენარეები</router-link></li>
            </ul>
          </div>

          <!-- Col 3: Branches & Info -->
          <div class="space-y-3">
            <h4 class="font-bold text-slate-800 text-xs uppercase tracking-wider">ფილიალები & სერვისი</h4>
            <ul class="space-y-2 text-slate-600">
              <li><span class="font-medium text-slate-800">სათავო & საწარმო:</span> აღმაშენებლის ხ-ნი მე-12 კმ (24/7)</li>
              <li><span class="font-medium text-slate-800">დიდი დიღომი:</span> პეტრიწის ქ. N16</li>
              <li><span class="font-medium text-slate-800">საბურთალო:</span> ვაჟა-ფშაველას გამზ. N6</li>
              <li>
                <router-link to="/branch-terminal" class="text-brand-700 font-bold hover:underline inline-flex items-center gap-1 pt-1">
                  <span>ფარმაცევტის ტერმინალი</span>
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Col 4: Contacts & Official Links -->
          <div class="space-y-3">
            <h4 class="font-bold text-slate-800 text-xs uppercase tracking-wider">კონტაქტი</h4>
            <div class="space-y-1.5 text-slate-600">
              <div>ცხელი ხაზი: <a href="tel:0322595790" class="font-bold text-slate-900 hover:text-brand-600">032 2 59 57 90</a></div>
              <div>ტელეფონი: <span class="font-mono text-slate-700">032 2 53 49 50</span></div>
              <div>ელ-ფოსტა: <a href="mailto:info@neopharmi.ge" class="font-medium text-brand-700 hover:underline">info@neopharmi.ge</a></div>
              <div>ოფიციალური საიტი: <a href="https://www.neopharmi.ge/" target="_blank" rel="noopener noreferrer" class="font-medium text-slate-700 hover:text-brand-600 underline">www.neopharmi.ge</a></div>
            </div>
            <!-- Social Badges -->
            <div class="flex items-center gap-2 pt-2">
              <a href="https://www.facebook.com/neopharmi/" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-700 font-bold text-[11px] transition-colors">
                Facebook
              </a>
              <a href="https://www.instagram.com/neopharmi/" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-700 font-bold text-[11px] transition-colors">
                Instagram
              </a>
              <a href="https://www.youtube.com/@Neo-Pharm" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-700 font-bold text-[11px] transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Footer Row: Copyright & Legal -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-[11px] text-slate-400">
          <p>© 2026 ფარმაცევტული კომპანია ნეოფარმი (Neopharmi). ყველა უფლება დაცულია.</p>
          <div class="flex items-center gap-4">
            <span class="hover:text-slate-600 cursor-pointer">კონფიდენციალურობა</span>
            <span class="hover:text-slate-600 cursor-pointer">წესები და პირობები</span>
            <span class="text-emerald-700 font-semibold">ნატურალური & ეფექტური</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- Global Cart Drawer, AI Assistant, Mobile Bottom Nav & Toast System -->
    <CartDrawer />
    <AiAssistant v-if="$route.path !== '/branch-terminal'" />
    <MobileBottomNav v-if="$route.path !== '/branch-terminal'" />
    <ToastNotification />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import CartDrawer from './components/CartDrawer.vue'
import AiAssistant from './components/AiAssistant.vue'
import MobileBottomNav from './components/MobileBottomNav.vue'
import ToastNotification from './components/ToastNotification.vue'
import Logo from './components/Logo.vue'
</script>

<style>
/* Page fade transition */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
