# 農比里咖啡 Nonbiri Coffee

一頁式精品咖啡館網站，以暖橘色系為主視覺，參考 Chevron Coffee Roasters 網站架構設計而成。

---

## 專案簡介

**農比里咖啡（Nonbiri Coffee）** 是一間位於台北大安區的小批次精品咖啡烘焙所。
本網站為單頁式（One Page）靜態網站，無需伺服器，直接用瀏覽器開啟即可瀏覽。

---

## 網站結構

| 區塊 | 說明 |
|------|------|
| Hero | 全螢幕主視覺，品牌標語與探索按鈕 |
| About | 品牌理念介紹，中英文對照 |
| Menu | 主打三款飲品卡片 ＋ 完整菜單價目表（台幣） |
| Beans | 三款精選產區豆（衣索比亞、哥倫比亞、瓜地馬拉） |
| Location | 店址、營業時間、聯絡方式 |
| Footer | 網站地圖、版權聲明 |

---

## 檔案結構

```
靖宸/
├── index.html   # 網頁主結構（HTML）
├── style.css    # 所有樣式（CSS）
├── main.js      # 互動功能（JavaScript）
└── README.md    # 專案說明文件
```

---

## 使用技術

- **HTML5** — 語意化標籤結構
- **CSS3** — 自訂變數（CSS Variables）、Flexbox、Grid、動畫（@keyframes）、RWD 響應式設計
- **Vanilla JavaScript** — 無框架，原生 JS 實作以下功能：
  - 漢堡選單（手機版導覽）
  - Header 捲動變色
  - 平滑捲動（Smooth Scroll）
  - 捲動淡入動畫（IntersectionObserver）
- **Google Fonts** — Cormorant Garamond（英文襯線）、Noto Sans TC（中文）

---

## 設計特色

- **主色調**：暖橘色 `#e07840`，呼應咖啡的焦糖、烘焙色系
- **背景色**：奶油米白 `#fdf8f2`，溫暖不刺眼
- **字型**：大標題使用義大利體（Italic）的古典襯線字，增加手工感與精緻度
- **動畫**：捲動時觸發淡入（Fade In）、卡片 Hover 上浮效果
- **響應式**：支援桌機、平板、手機三種版面
- **豆款卡片**：頂部色條區分烘焙深淺（淺焙黃橘、中焙橘、深焙深棕）

---

## 如何開啟

1. 下載或複製整個資料夾
2. 直接用瀏覽器（Chrome / Edge / Firefox）開啟 `index.html`
3. 不需要安裝任何套件或啟動伺服器

---

## 參考來源

本網站架構參考 **Chevron Coffee Roasters**（chevroncoffee.jp）的頁面設計，
內容、配色與程式碼均為原創重寫。

---

## 作者

**靖宸**  
課程作業 — 一頁式網站設計  
2026
