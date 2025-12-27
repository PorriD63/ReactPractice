import { useState } from 'react'
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
}

export function Experience({ experience }: ExperienceProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`experience-item ${isExpanded ? 'expanded' : ''}`}>
      <div
        className="experience-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="header-main">
          <h3>{experience.position}</h3>
          <p className="company">{experience.company}</p>
        </div>
        
        <div className="header-meta">
          <p className="period">{experience.period}</p>
          <span className="toggle-icon">
            {isExpanded ? '▲' : '▼'}
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
