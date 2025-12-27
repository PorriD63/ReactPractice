import { Header } from './components/Header'
import { About } from './components/About'

function App() {
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
    </div>
  )
}

export default App;