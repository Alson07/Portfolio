<script setup>
import { ref } from 'vue'

// Skills array with categories and paths for SVG icons
const skills = ref([
  { 
    category: "Languages and Technologies", 
    path: "src/svg/lang",
    items: ["C", "CS", "SQL", "PowerShell", "HTML", "CSS", "JS", "TS"] 
  },
  { 
    category: "Database and Analytics", 
    path: "src/svg/db",
    items: ["db", "sql", "pgsql", "powerbi", "Excel"] 
  },
  { 
    category: "Utilities", 
    path: "src/svg/utilities",
    items: ["Windows", "Linux", "Terminal", "Git", "vs", "vscode", "Office"] 
  },
  { 
    category: "Libraries and Frameworks", 
    path: "src/svg/lib",
    items: ["aspnet", "vue", "jQuery", "Playwright"] 
  },
  { 
    category: "Design", 
    path: "src/svg/design",
    items: ["Figma", "Photoshop"] 
  },
]);
</script>
<template>
  <section id="skills" class="skills">
    <h2>Skills</h2>
    <div class="skills-container">
      <div v-for="(skillCategory, index) in skills" :key="index" class="skill-category">
        <h3>{{ skillCategory.category }}</h3>
        <div class="skill-icons">
          <div 
            v-for="(skill, i) in skillCategory.items" 
            :key="i" 
            class="skill-icon"
          >
            <!-- Dynamically load SVG from the respective category path -->
            <img 
              :src="`${skillCategory.path}/${skill}.svg`" 
              :alt="skill" 
              class="icon"
            />
            <span class="skill-name">{{ skill }}</span>
          </div>
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

.skills-container {
  display: grid;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.skill-category {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.skill-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.skill-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
}

.icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.skill-name {
  margin-top: 0.5rem;
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .skills-container {
    padding: 0 1rem;
  }

  .skill-icons {
    justify-content: center;
  }
}
</style>
