import { ReactNode } from 'react'
import './About.css'

interface AboutProps {
  title: string
  children: ReactNode
}

export function About({ title, children }: AboutProps) {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="about-content">
          {children}
        </div>
      </div>
    </section>
  )
}
