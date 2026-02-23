
<div align="center">

  <img src="https://cdn-icons-png.flaticon.com/512/2814/2814520.png" alt="logo" width="120" height="auto" />

  # xstore WebApp

  **A modern, responsive, and fully functional App Store interface built with Vue.js 3 and Tailwind CSS.**

  [![Vue.js](https://img.shields.io/badge/Vue.js-3.x-42b883?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

  [Live Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 About The Project

The **AppStore WebApp** is a sleek, single-page application (SPA) designed to replicate the experience of a native mobile app store. It is built to be **scalable**, **maintainable**, and **fully responsive** across all devices.

It features a mock database architecture (ready for Cloudflare D1 integration), user authentication simulation, and a robust theming engine (Light/Dark/System).

### 🎯 Key Design Philosophy
- **Mobile-First:** Optimized for touch interactions with bottom navigation.
- **Material Design:** Clean aesthetics using the Roboto font and shadow depths.
- **Single File Architecture:** Easy to deploy and share as a standalone `index.html`.

---

## ✨ Features

### 📱 Core Functionality
- **Home Feed:** Features a dynamic, auto-sliding hero carousel to showcase featured apps.
- **App Discovery:** Browse apps by "Top Charts", "Categories", or view "All Apps" in a responsive grid.
- **Search:** Real-time search with filtering. Includes placeholder suggestions and popular tags when the input is empty.
- **App Details:** Detailed view pages with ratings, descriptions, and download links (Dropbox integration ready).
- **Updates Tab:** Dedicated section for managing app updates.

### 🎨 User Experience & UI
- **Theming Engine:** Fully functional Theme Switcher (☀️ Light, 🌙 Dark, 💻 System). Persists user preference using `localStorage`.
- **User Profile:**
  - **Guest Mode:** View apps without logging in.
  - **Auth Simulation:** Login banner and user profile view.
- **Bottom Navigation:** Smooth tab switching without page reloads.

### ⚙️ Developer Ready
- **Mock Data:** Structured JSON objects ready to be swapped for a Cloudflare D1 database.
- **Zero Build Step:** Uses CDN links for Vue 3 and Tailwind CSS—no Node.js required to run locally.

---

## 🛠️ Tech Stack

| Technology | Description |
| :--- | :--- |
| **Frontend** | [Vue.js 3 (Composition API)](https://vuejs.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Icons** | [FontAwesome 6](https://fontawesome.com/) |
| **Fonts** | [Google Fonts (Roboto)](https://fonts.google.com/) |
| **Database** | Mock Data (Schema ready for **Cloudflare D1**) |
| **File Hosting** | Ready for **Dropbox Public Links** |

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You don't need anything installed! Just a modern web browser.
However, for the best development experience, you might want an extension to run a local server (like "Live Server" in VS Code).

### Installation

1.  **Clone the repo** (or create a file named `index.html`)
    ```sh
    git clone https://github.com/devusimple/xstore.git
    ```
2.  **Open the project**
    ```sh
    cd xstore
    ```
3.  **Open `index.html` in your browser.**

    *That's it! The app will load automatically fetching libraries from the CDN.*

---

## 🗺️ Roadmap

- [x] **Phase 1:** Basic UI Layout & Navigation
- [x] **Phase 2:** Mock Data & App Details
- [x] **Phase 3:** Theming (Dark/Light) & Profile Auth
- [ ] **Phase 4:** Backend Integration (Connect to Cloudflare D1)
- [ ] **Phase 5:** Real Authentication (OAuth)
- [ ] **Phase 6:** PWA Support (Installable on mobile)

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Mehedi Hasan**

- GitHub: [@devusimple](https://github.com/devusimple)
- Project Link: [https://github.com/devusimple/xstore](https://github.com/devusimple/xstore)

---

<div align="center">
  <b>Made with Tailwindcss ❤️ and Vue.js</b>
</div>