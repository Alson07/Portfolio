<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="profile-image">
        <img src="/src/Images/a.jpg" alt="Profile Picture">
      </div>
      <h1>Hi, I'm <span class="highlight">Alson Karki</span></h1>
      <p class="subtitle">Full Stack Developer</p>
      <p class="description">
        I build beautiful and functional web applications with modern technologies.
      </p>
      <a href="#contact" class="cta-button">Get in Touch</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.hero-content {
  max-width: 800px;
}

.profile-image {
  margin-bottom: 2rem;
}

.profile-image img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #646cff;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.highlight {
  color: #646cff;
}

.subtitle {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: #646cff;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #535bf2;
}
</style>