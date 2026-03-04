<template>
  <form @submit.prevent="submitForm" class="space-y-6" novalidate>
    <!-- Name -->
    <div>
      <label for="name" class="block text-sm font-semibold text-dark mb-2">
        Nome *
      </label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        required
        placeholder="Seu nome completo"
        class="w-full px-4 py-3 border-2 border-light bg-white rounded-lg focus:border-primary focus:outline-none transition-colors"
        :disabled="isSubmitting"
      />
      <p v-if="errors.name" class="text-error text-sm mt-1">{{ errors.name }}</p>
    </div>

    <!-- Email -->
    <div>
      <label for="email" class="block text-sm font-semibold text-dark mb-2">
        Email *
      </label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        required
        placeholder="seu@email.com"
        class="w-full px-4 py-3 border-2 border-light bg-white rounded-lg focus:border-primary focus:outline-none transition-colors"
        :disabled="isSubmitting"
      />
      <p v-if="errors.email" class="text-error text-sm mt-1">{{ errors.email }}</p>
    </div>

    <!-- Phone -->
    <div>
      <label for="phone" class="block text-sm font-semibold text-dark mb-2">
        Telefone
      </label>
      <input
        id="phone"
        v-model="formData.phone"
        type="tel"
        placeholder="(11) 99999-9999"
        class="w-full px-4 py-3 border-2 border-light bg-white rounded-lg focus:border-primary focus:outline-none transition-colors"
        :disabled="isSubmitting"
      />
    </div>

    <!-- Subject -->
    <div>
      <label for="subject" class="block text-sm font-semibold text-dark mb-2">
        Assunto *
      </label>
      <input
        id="subject"
        v-model="formData.subject"
        type="text"
        required
        placeholder="Sobre o que é sua mensagem?"
        class="w-full px-4 py-3 border-2 border-light bg-white rounded-lg focus:border-primary focus:outline-none transition-colors"
        :disabled="isSubmitting"
      />
      <p v-if="errors.subject" class="text-error text-sm mt-1">{{ errors.subject }}</p>
    </div>

    <!-- Message -->
    <div>
      <label for="message" class="block text-sm font-semibold text-dark mb-2">
        Mensagem *
      </label>
      <textarea
        id="message"
        v-model="formData.message"
        required
        rows="6"
        placeholder="Descreva sua solicitação..."
        class="w-full px-4 py-3 border-2 border-light bg-white rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
        :disabled="isSubmitting"
      ></textarea>
      <p v-if="errors.message" class="text-error text-sm mt-1">{{ errors.message }}</p>
    </div>

    <!-- Success Message -->
    <transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300"
      enter-from-class="opacity-0 translate-y-2"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div v-if="successMessage" class="p-4 bg-success/10 border-2 border-success text-success rounded-lg">
        {{ successMessage }}
      </div>
    </transition>

    <!-- Error Message -->
    <transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300"
      enter-from-class="opacity-0 translate-y-2"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div v-if="errorMessage" class="p-4 bg-error/10 border-2 border-error text-error rounded-lg">
        {{ errorMessage }}
      </div>
    </transition>

    <!-- Submit Button -->
    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      <span v-if="!isSubmitting">Enviar Mensagem</span>
      <span v-else class="flex items-center space-x-2">
        <svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <span>Enviando...</span>
      </span>
    </button>

    <!-- Required Fields Note -->
    <p class="text-xs text-dark/60 text-center">* Campos obrigatórios</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const formData = ref<FormData>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});

const errors = ref<FormErrors>({});
const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const validateForm = (): boolean => {
  errors.value = {};

  if (!formData.value.name.trim()) {
    errors.value.name = 'Nome é obrigatório';
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'Email é obrigatório';
  } else if (!isValidEmail(formData.value.email)) {
    errors.value.email = 'Email inválido';
  }

  if (!formData.value.subject.trim()) {
    errors.value.subject = 'Assunto é obrigatório';
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Mensagem é obrigatória';
  }

  return Object.keys(errors.value).length === 0;
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const SUPABASE_URL = (import.meta.env.PUBLIC_SUPABASE_URL?.trim() || 'https://uavvklkmzudsqviefzyd.supabase.co').replace(/\/$/, '');
const EDGE_FN_URL = `${SUPABASE_URL}/functions/v1/contact-form`;

const submitForm = async () => {
  successMessage.value = '';
  errorMessage.value = '';

  if (!validateForm()) {
    errorMessage.value = 'Por favor, preencha todos os campos obrigatórios corretamente.';
    return;
  }

  isSubmitting.value = true;

  try {
    const response = await fetch(EDGE_FN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        phone: formData.value.phone || undefined,
        subject: formData.value.subject,
        message: formData.value.message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 429) {
        errorMessage.value = 'Muitas tentativas. Por favor, aguarde alguns minutos e tente novamente.';
      } else {
        errorMessage.value = data.error || 'Erro ao enviar mensagem. Por favor, tente novamente.';
      }
      return;
    }

    successMessage.value = data.message || 'Mensagem enviada com sucesso! Entraremos em contato em breve.';

    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };

    // Clear success message after 5 seconds
    setTimeout(() => {
      successMessage.value = '';
    }, 5000);
  } catch (error) {
    console.error('Form submission error:', error);
    errorMessage.value = 'Erro ao enviar mensagem. Por favor, tente novamente.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>
