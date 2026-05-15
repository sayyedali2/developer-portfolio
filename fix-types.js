const fs = require('fs');
const path = require('path');

const dirs = [
  'components/sections',
  'components/ui',
  'components/layout'
];

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.endsWith('.tsx')) continue;
    
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Add Variants to import if not present and framer-motion is imported
    if (content.includes('from "framer-motion"') && !content.includes('Variants')) {
      content = content.replace(/import\s+\{([^}]+)\}\s+from\s+"framer-motion";/, (match, p1) => {
        return `import { ${p1.trim()}, Variants } from "framer-motion";`;
      });
      changed = true;
    }

    // Type containerVariants
    if (content.includes('const containerVariants = {')) {
      content = content.replace(/const containerVariants = \{/g, 'const containerVariants: Variants = {');
      changed = true;
    }

    // Type itemVariants
    if (content.includes('const itemVariants = {')) {
      content = content.replace(/const itemVariants = \{/g, 'const itemVariants: Variants = {');
      changed = true;
    }
    
    // Type barVariants in skills.tsx
    if (content.includes('const barVariants = {')) {
      content = content.replace(/const barVariants = \{/g, 'const barVariants: Variants = {');
      content = content.replace(/ease: "easeOut"/g, 'ease: "easeOut" as const');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    }
  }
}
