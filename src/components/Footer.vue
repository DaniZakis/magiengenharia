<template>
  <footer class="bg-dark text-light">
    <div class="container-max px-4 md:px-6 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- About -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-white">Maggi Engenharia</h3>
          <p class="text-sm text-light/80">
            Soluções completas em engenharia, gestão de projetos e laudos técnicos para maior segurança e eficiência operacional.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-white">Links Rápidos</h3>
          <nav class="space-y-2 text-sm">
            <a href="/" class="hover:text-accent transition-colors">Home</a>
            <a href="/servicos" class="hover:text-accent transition-colors">Serviços</a>
            <a href="/contato" class="hover:text-accent transition-colors">Contato</a>
          </nav>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-white">Contato</h3>
          <div class="space-y-2 text-sm">
             <p>
               <strong>Telefone:</strong>
               <a href="tel:+5511999948676" class="hover:text-accent transition-colors">
                 +55 (11) 99994-8676
               </a>
             </p>
             <p>
               <strong>WhatsApp:</strong>
               <a href="https://wa.me/5511999948676" target="_blank" rel="noopener noreferrer" class="hover:text-accent transition-colors">
                 Chat
               </a>
             </p>
             <p>
               <strong>Email:</strong>
              <a href="mailto:contato@maggieng.com.br" class="hover:text-accent transition-colors">
                  contato@maggieng.com.br
                </a>
             </p>
            <p>
              <strong>Endereço:</strong>
              <span>Rua Dante Carraro, 110, 1º andar – Pinheiros – São Paulo/SP</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Social Media -->
      <div class="border-t border-light/20 pt-8 flex flex-col md:flex-row items-center justify-between">
        <p class="text-sm text-light/60 text-center md:text-left mb-4 md:mb-0">
          © 2024 Maggi Engenharia. Todos os direitos reservados.
        </p>
        <div class="flex space-x-4">
           <a
             href="https://wa.me/5511999948676"
             target="_blank"
             rel="noopener noreferrer"
             class="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center transition-colors"
             aria-label="WhatsApp"
           >
            <svg class="w-5 h-5 text-white" fill="white" viewBox="0 0 32 32">
              <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-1.396-.154-2.783-.154-2.386 0-4.232 1.455-4.232 4.32v1.834z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component - no state needed
</script>
