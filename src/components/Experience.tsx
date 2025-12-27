import './Experience.css'

export interface ExperienceItem {
  id: number
  company: string
  position: string
  period: string
  description: string
  highlights: string[]
}

interface ExperienceProps {
  experience: ExperienceItem
  isActive: boolean
  onToggle: () => void
}

export function Experience({ experience, isActive, onToggle }: ExperienceProps) {
  return (
    <div className={`experience-item ${isActive ? 'expanded' : ''}`}>
      <div
        className="experience-header"
        onClick={onToggle}
      >
        <div className="header-main">
          <h3>{experience.position}</h3>
          <p className="company">{experience.company}</p>
        </div>
        
        <div className="header-meta">
          <p className="period">{experience.period}</p>
          <span className="toggle-icon">
            {isActive ? '▲' : '▼'}
          </span>
        </div>
      </div>

      <div className="experience-details">
        <p className="description">{experience.description}</p>
        <ul>
          {experience.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
