# 專案指南：React 實戰練習 (履歷網站)

## 📌 專案概覽
這是一個 **React + TypeScript + Vite** 的學習專案。具體目標是依照 `LEARNINGS.md` 中定義的 5 階段學習路線圖，建立一個個人履歷/作品集網站。

## 📍 目前進度與路線圖
**目前階段：** 第一階段（基礎）
- **已完成：** 階段 1.1（Header 元件）- `src/components/Header.tsx` 已建立並於 `App.tsx` 中使用。
- **下一步：** 階段 1.2（About 元件）- 尚未建立。

### 路線圖摘要（源自 `LEARNINGS.md`）：
1.  **第一階段：基礎元件與靜態內容**
    *   1.1 Header（Props 與型別）✅
    *   1.2 About（可重用性與 `children`）⏳
    *   1.3 Skills（列表渲染與 `.map()`）
2.  **第二階段：互動與狀態管理**
    *   2.1 Experience（使用 `useState` 展開/收合）
    *   2.2 Projects（滑鼠懸停效果）
    *   2.3 Skills Filter（陣列過濾）
3.  **第三階段：表單與全域狀態**
    *   3.1 Contact Form（表單驗證）
    *   3.2 Theme Switcher（`useContext` 與深色模式）
4.  **第四階段：進階功能**
    *   4.1 GitHub Projects（API 串接 `useEffect`）
    *   4.2 Scroll Animations（Intersection Observer）
    *   4.3 響應式設計
5.  **第五階段：測試與部署**
    *   5.1 單元測試（Vitest + React Testing Library）
    *   5.2 部署（GitHub Pages）

## 🛠 技術堆疊
- **框架：** React 19
- **語言：** TypeScript 5.9
- **建置工具：** Vite
- **樣式：** CSS Modules / Standard CSS（學習重點在於原生 CSS）
- **測試：** Vitest + React Testing Library（將於第五階段設定）

## 📂 關鍵檔案
- `LEARNINGS.md`: **關鍵文件**。這是主要的教學/指引檔案。請務必查看此檔案以了解當前任務的具體需求。
- `src/App.tsx`: 主要入口元件。
- `src/components/`: 所有 React 元件的目錄。
- `src/main.tsx`: 應用程式入口點。

## 🚀 開發指令
- **啟動開發伺服器：** `npm run dev`
- **建置：** `npm run build`
- **Lint 檢查：** `npm run lint`
- **測試：** *尚未在 package.json 設定*（見路線圖第五階段）。

## 📝 開發規範
1.  **嚴格型別：** 始終為 Props 定義介面（例如：`HeaderProps`）。
2.  **函式元件：** 使用 `export function ComponentName` 語法。
3.  **CSS：** 目前保持樣式簡單並使用原生 CSS（符合學習目標）。
4.  **語言：** 使用者主要使用 **繁體中文**（參考 `LEARNINGS.md` 與 `README.md`）。所有回應與文件應以繁體中文為主。