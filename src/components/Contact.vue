<script setup>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'

const sending = ref(false)
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = async () => {
  sending.value = true
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_name: 'Your Name',
      },
      'YOUR_PUBLIC_KEY'
    )
    alert('Message sent successfully!')
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    alert('Failed to send message. Please try again.')
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section id="contact" class="contact">
    <h2>Contact Me</h2>
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit" :disabled="sending">
        {{ sending ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
  </section>
</template>

<style scoped>
.contact {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--text-secondary);
  border-radius: 4px;
  font-size: 1rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.1);
}

textarea {
  height: 150px;
  resize: vertical;
}

button {
  width: 100%;
  padding: 1rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

button:hover:not(:disabled) {
  background: var(--accent-hover);
  transform: translateY(-1px);
}

button:disabled {
  background: var(--text-secondary);
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-form {
    margin: 0 1rem;
  }
}
</style>