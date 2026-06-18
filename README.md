<div align="center">

# ☕ 農比里咖啡 · Nonbiri Coffee

**一頁式精品咖啡烘焙所網站**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)](https://nonbiri1004.github.io/Website_homework/)

[🌐 線上預覽 Live Demo](https://nonbiri1004.github.io/Website_homework/)

</div>

---

## 專案介紹

**農比里咖啡（Nonbiri Coffee）** 是一間虛構的台北大安區小批次精品咖啡烘焙所。  
本作業以日本咖啡品牌 *Chevron Coffee Roasters* 為設計靈感，從零打造一頁式靜態網站。

> 「農比里」取自日語 **のんびり**（nonbiri），意為「從容、悠閒地」，  
> 呼應品牌理念 — *慢慢烘，好好喝。*

---

## 網站截圖

| Hero 輪播 | Beans 產區 |
|:---------:|:----------:|
| ![Hero](assets/img/hero-1.jpg) | ![Beans](assets/img/beans-colombia.jpg) |

---

## 頁面結構

```
┌─────────────────────────────────┐
│  Header   固定導覽列 + 手機選單   │
├─────────────────────────────────┤
│  Hero     全螢幕圖片輪播 × 4 張  │
├─────────────────────────────────┤
│  About    品牌理念（中英對照）    │
├─────────────────────────────────┤
│  Menu     主打飲品卡片 + 完整菜單 │
├─────────────────────────────────┤
│  Beans    三款精選產區豆介紹      │
├─────────────────────────────────┤
│  Location 地圖 + 營業時間         │
├─────────────────────────────────┤
│  Contact  聯絡表單               │
├─────────────────────────────────┤
│  Footer   社群連結 + 版權         │
└─────────────────────────────────┘
```

---

## 檔案結構

```
Website_homework/
│
├── index.html          # 網頁主結構
├── style.css           # 完整樣式
├── style.min.css       # 壓縮版樣式（HTML 實際引用）
├── main.js             # 互動功能
├── README.md           # 專案說明
│
└── assets/
    ├── favicon.svg     # 網站圖示
    └── img/
        ├── hero-1.jpg ~ hero-4.jpg      # Hero 輪播圖（AI 生成）
        ├── about.jpg                    # About 區塊主圖
        ├── menu-espresso.jpg            # 菜單卡片圖 × 3
        ├── menu-latte.jpg
        ├── menu-pourover.jpg
        ├── beans-ethiopia.jpg           # 豆款卡片圖 × 3
        ├── beans-colombia.jpg
        └── beans-guatemala.jpg
```

---

## 使用技術

### 前端
| 技術 | 用途 |
|------|------|
| **HTML5** 語意化標籤 | 結構清晰，利於 SEO 與無障礙 |
| **CSS3 Custom Properties** | 全站色彩、字型統一管理 |
| **CSS Grid / Flexbox** | 多欄響應式排版 |
| **CSS Transitions / @keyframes** | 滑入動畫、Hover 效果 |
| **Vanilla JavaScript** | 無框架，輕量 |
| **IntersectionObserver API** | 捲動觸發淡入動畫 |

### 字型（Google Fonts）
- **Cormorant Garamond** — 英文大標，Italic 古典襯線，呈現精品質感
- **Noto Sans TC** — 中文內文，清晰易讀

### JavaScript 功能清單
- [x] Hero 圖片自動輪播（5 秒切換）＋ 手動左右按鈕 ＋ 分頁點
- [x] 漢堡選單（手機版側滑導覽）
- [x] Header 捲動變色（透明 → 半透明背景）
- [x] 平滑捲動（Smooth Scroll）
- [x] 捲動淡入動畫（IntersectionObserver）

---

## 設計規格

### 色彩系統

| 變數 | 色碼 | 用途 |
|------|------|------|
| `--orange` | `#e07840` | 主品牌色（按鈕、強調） |
| `--orange-d` | `#b85c28` | 深橘（Hover 狀態） |
| `--orange-l` | `#f0a060` | 淺橘（輔助文字） |
| `--bg` | `#fdf8f2` | 主背景（奶油米白） |
| `--bg-dark` | `#2a1608` | 深色區塊背景 |
| `--text` | `#1f1208` | 主要文字色 |

### 響應式斷點

| 裝置 | 寬度 | 佈局變化 |
|------|------|---------|
| 桌機 | > 900px | 三欄 Grid |
| 平板 | 640–900px | 兩欄 Grid |
| 手機 | < 640px | 單欄 ＋ 漢堡選單 |

---

## 如何在本地執行

```bash
# 1. Clone 專案
git clone https://github.com/nonbiri1004/Website_homework.git

# 2. 進入資料夾
cd Website_homework

# 3. 直接用瀏覽器開啟（不需伺服器）
open index.html   # macOS
start index.html  # Windows
```

---

## 圖片來源

所有圖片由 **Google Gemini** AI 生成，使用後以 PowerShell + System.Drawing 進行裁切處理。

| 圖片 | 提示詞方向 |
|------|-----------|
| Hero × 4 | 咖啡店內外氛圍、latte art、手沖過程 |
| About | 咖啡館室內環境 |
| Menu × 3 | Espresso / Latte / Pour Over 特寫 |
| Beans × 3 | Ethiopia / Colombia / Guatemala 產區生豆或熟豆 |

---

## 參考資源

- 設計靈感：[Chevron Coffee Roasters](https://chevroncoffee.jp)
- 地圖嵌入：[OpenStreetMap](https://www.openstreetmap.org)
- 字型：[Google Fonts](https://fonts.google.com)

---

<div align="center">

**農比里咖啡 © 2026 · 課程作業 — 一頁式網站設計**

*Made with ☕ by 靖宸*

</div>
