import './Skills.css'

export interface Skill {
  id: number
  name: string
  level: 'beginner' | 'intermediate' | 'advanced'
}

interface SkillsProps {
  skills: Skill[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">技能</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              className={`skill-tag skill-${skill.level}`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
