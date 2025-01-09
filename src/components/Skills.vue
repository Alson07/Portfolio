<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'HTML', level: 90, color: '#E34F26' },
  { name: 'CSS', level: 85, color: '#1572B6' },
  { name: 'JavaScript', level: 88, color: '#F7DF1E' },
  { name: 'Vue.js', level: 82, color: '#4FC08D' },
  { name: 'Node.js', level: 75, color: '#339933' },
  { name: 'SQL', level: 70, color: '#003B57' },
])

// Add animation on intersection
const skillRefs = ref([])

if (typeof window !== 'undefined') {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    },
    { threshold: 0.5 }
  )

  setTimeout(() => {
    skillRefs.value.forEach(el => {
      if (el) observer.observe(el)
    })
  }, 100)
}
</script>

<template>
  <section id="skills" class="skills">
    <h2>Skills</h2>
    <div class="skills-grid">
      <div 
        v-for="(skill, index) in skills" 
        :key="skill.name" 
        class="skill-item"
        ref="skillRefs"
      >
        <div class="skill-header">
          <div class="skill-name">{{ skill.name }}</div>
          <div class="skill-percentage">{{ skill.level }}%</div>
        </div>
        <div class="skill-bar">
          <div 
            class="skill-level" 
            :style="{ 
              width: '0%', 
              backgroundColor: skill.color 
            }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.skill-item {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
}

.skill-item.animate {
  transform: translateY(0);
  opacity: 1;
}

.skill-item.animate .skill-level {
  width: var(--skill-level);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 500;
  color: var(--text-primary);
}

.skill-percentage {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.skill-bar {
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 4px;
  overflow: hidden;
}

.skill-level {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
}
</style>