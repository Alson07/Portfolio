<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: 'Project 1',
    description: 'A  Pomodoro timer with task management',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://github.com/Alson07/Promodo-TImer',
    tags: ['Html', 'CSS', 'JavaScript']
  },
  {
    title: 'Project 2',
    description: 'An Platform for finding rooms',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://github.com/Alson07/Room-Finder',
    tags: ['.Net', 'SQL', 'Bootstrap']
  },
  {
    title: 'Project 3',
    description: 'A weather information app',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://github.com/Alson07/Weather_info',
    tags: ['HTML', 'CSS', 'JavaScript']
  }
])
</script>

<template>
  <section id="projects" class="projects">
    <h2>Projects</h2>
    <div class="projects-grid">
      <div 
        v-for="project in projects" 
        :key="project.title" 
        class="project-card"
      >
        <div class="project-image">
          <img :src="project.image" :alt="project.title">
          <div class="project-overlay">
            <a :href="project.link" class="project-link">View Project</a>
          </div>
        </div>
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tags">
            <span 
              v-for="tag in project.tags" 
              :key="tag" 
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 5rem 0;
  background: var(--bg-primary);
}

h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  position: relative;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.project-info p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
}

.project-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--accent-color);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s;
}

.project-link:hover {
  background: var(--accent-hover);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>