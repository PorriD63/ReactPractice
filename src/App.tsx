import { Header } from './components/Header'
import { About } from './components/About'
import { Skills } from './components/Skills'
import type { Skill } from './components/Skills'
import { Experience } from './components/Experience'
import type { ExperienceItem } from './components/Experience'

function App() {
  const mySkills: Skill[] = [
    { id: 1, name: 'React', level: 'advanced' },
    { id: 2, name: 'TypeScript', level: 'intermediate' },
    { id: 3, name: 'CSS / SCSS', level: 'advanced' },
    { id: 4, name: 'Node.js', level: 'intermediate' },
    { id: 5, name: 'Git', level: 'advanced' },
    { id: 6, name: 'Docker', level: 'beginner' },
    { id: 7, name: 'Python', level: 'beginner' },
  ]

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: '資深前端工程師',
      period: '2023/01 - 至今',
      description: '負責公司核心產品的前端架構設計與開發，帶領小型團隊進行技術選型與代碼審查。',
      highlights: [
        '使用 React + TypeScript 重構舊有系統，提升頁面載入速度 40%',
        '導入自動化測試流程 (Vitest)，將測試覆蓋率提升至 80%',
        '建立公司內部的 UI Component Library，統一跨產品的視覺風格'
      ]
    },
    {
      id: 2,
      company: 'Creative Web Studio',
      position: '前端工程師',
      period: '2020/06 - 2022/12',
      description: '與設計師密切合作，開發高互動性的形象網站與活動頁面。',
      highlights: [
        '開發超過 20 個響應式網站 (RWD)，確保在各種裝置上的完美體驗',
        '優化 SEO 表現，協助客戶網站關鍵字排名提升',
        '使用 GSAP 實作複雜的網頁動畫效果'
      ]
    }
  ]

  return (
    <div className="app">
      <Header
        name="PorriDG3"
        title="技術指導 (Technical Director)"
        github="https://github.com/PorriD63"
        linkedin="https://www.linkedin.com/in/PorriDG3"
      />
      <About title="關於我">
        <p>我是一名熱愛程式開發的前端工程師，專注於 React 生態系與 Web 技術的研究。</p>
        <p>我喜歡挑戰複雜的邏輯問題，並致力於打造兼具效能與使用者體驗的高品質網頁應用程式。</p>
      </About>
      <Skills skills={mySkills} />
      
      <section className="experience-section" style={{ padding: '4rem 1rem', background: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>工作經歷</h2>
          {experiences.map(exp => (
            <Experience key={exp.id} experience={exp} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App;