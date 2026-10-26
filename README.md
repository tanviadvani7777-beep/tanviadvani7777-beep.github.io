# Professional Developer Portfolio - MCA Fresher Placement

A modern, responsive, high-performance developer portfolio website designed for an **MCA Student & Aspiring Software Developer** seeking fresher job placements.

---

## 🎨 Theme & Design Highlights
- **Palette:** Premium Dark Navy Blue (`#070d1e`, `#0b152d`) & Deep Black (`#050811`) with Crisp White typography and Electric Light Blue / Cyan (`#38bdf8`, `#0ea5e9`) accents.
- **Visuals:** Subtle ambient glowing orbs, glassmorphic cards, glowing borders, smooth hover animations, and responsive interactive elements.
- **Responsive:** Crafted to look pixel-perfect across widescreen monitors, laptops, tablets, and smartphones.
- **Recruiter-Ready:** Includes quick project deep-dive modals, a printable/downloadable Resume modal, direct email/phone copy triggers, and skill proficiency indicators tailored for fresher hiring standards.

---

## 📁 Project Structure

```
portfolio/
├── index.html       # Semantic HTML5 structure with all sections & modals
├── style.css        # Custom CSS with responsive grid/flexbox & dark navy theme
├── script.js       # Typing effects, modals, mobile drawer, scroll-spy, form toast
└── README.md        # Documentation and deployment guide
```

---

## 🛠️ Included Sections

1. **Home (Hero):**
   - Headline with “Hi, I'm Your Name”
   - Dynamic typing role animation: *"MCA Student"*, *"Aspiring Software Developer"*, *"Java & Python Programmer"*, *"Problem Solver"*
   - Quick action buttons: **View My Projects** & **Contact Me**
   - Profile card placeholder with easy replacement instructions
   - Status badge: *Actively Seeking Fresher Software Developer Roles*

2. **About Me:**
   - Dedicated narrative on pursuing MCA, learning modern software development, and passion for engineering.
   - Core strengths: Object-Oriented Programming, Logic Building, Relational Database Modeling, and UI engineering.
   - Fresher career placement objective.

3. **Skills (Without Overclaiming):**
   - **HTML5 & CSS3:** Semantic markup, responsive layouts with Flexbox and Grid.
   - **JavaScript:** DOM events, asynchronous operations, interactive UI logic.
   - **Python:** OOP design, Tkinter desktop GUIs, data analysis scripts.
   - **Java:** Object-oriented systems, collections, matrix validation logic.
   - **SQL & MySQL:** Relational schema design, queries, aggregations, CRUD.
   - Complementary tools banner: Android Studio, XML Layouts, Pandas, Matplotlib, Jupyter Labs, Git.

4. **Projects:**
   - **The Fashion Fusion:** Full-Stack E-Commerce Website engineered with MERN Stack (MongoDB, Express 5, React 19, Node.js), Redux Toolkit, Razorpay payment gateway, Cloudinary image pipeline, and JWT authentication.
   - **AI Virtual Assistant (JARVIS Clone):** MERN Stack (MongoDB, Express, React, Node.js), Google Gemini AI API, Web Speech API, Tailwind CSS, JWT authentication.
   - **Interactive Sudoku Application:** Java, Android Studio, XML UI, matrix validation logic.
   - **Python Tic-Tac-Toe Desktop Application:** Python, Tkinter, OOP architecture, victory state checking.
   - **Data Analysis and Visualization Project:** Python, Pandas, Matplotlib, exploratory statistical data pipelines.
   - Each project includes a **View Details** button that opens an architecture deep-dive modal!

5. **GitHub Showcase & Code Repositories:**
   - Dedicated GitHub profile card displaying `@tanviadvani7777-beep`, Pull Shark achievement, and 111+ contributions.
   - Interactive repository cards featuring 8 public codebases (`mernstack`, `dsleetcode81`, `android`, `python`, `machinelearning`, `cryptography`, `computer-network`, `log-in`).
   - "Visit My GitHub" direct action triggers and copy profile URL functionality.

6. **Education, Certifications & Workshops:**
   - MCA (Master of Computer Applications) - Pursuing (Marwadi University, Rajkot)
   - BCA (Bachelor of Computer Applications) - Graduated (OMVVIM College, Morbi — Saurashtra University)
   - HSC & SSC (DJP Kanya Chhatralay Morbi)

7. **Contact Section:**
   - Direct cards for Email (`tanviadvani7777@gmail.com`), Location (*Morbi, Gujarat, India*), LinkedIn (`linkedin.com/in/tanvi-advani-973728384`), and GitHub (`github.com/tanviadvani7777-beep`).
   - One-click copy email button with instant toast notification.
   - Interactive message form with validation.

8. **Resume Preview Modal:**
   - Full cleanly formatted developer resume viewable inside a modal.
   - Built-in **Print / Save as PDF** action for recruiter convenience.

---

## ⚡ How to Personalize the Placeholders

Open `index.html` in your editor and update the following placeholders:

| Placeholder | Where to Replace | What to Enter |
|---|---|---|
| `Your Name` / `YourName` | Title, Hero, About, Resume Modal, Footer | Your real name (e.g., Tulsi Advani) |
| `your.email@example.com` | Hero meta, Contact section, Resume modal | Your real email address |
| `linkedin.com/in/your-profile` | Hero and Contact links | `linkedin.com/in/tanvi-advani-973728384` |
| `github.com/your-username` | Project repo buttons, Profile card, Contact | Your GitHub profile URL |
| `profile photo` | Inside `.photo-placeholder` | Replace SVG with an `<img>` tag pointing to your picture |

---

## 🚀 How to Run Locally

### Option 1: Direct Browser
Double-click `index.html` or right-click and choose **Open with Google Chrome / Microsoft Edge / Firefox**.

### Option 2: Using Node.js or Python (Recommended for best experience)
In PowerShell or terminal inside the `portfolio` folder:

```powershell
# Using Python
python -m http.server 3000

# Or using npx
npx serve .
```
Then visit `http://localhost:3000` in your web browser.

---

## 🌐 How to Deploy Live for Free

### Method 1: GitHub Pages (Free & Fast)
1. Initialize a Git repository inside this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Developer Portfolio"
   ```
2. Create a new repository on GitHub (e.g. `portfolio` or `username.github.io`).
3. Push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to **Settings** > **Pages** > Under **Branch**, select `main` and `/ (root)` > Click **Save**.
5. Your portfolio will be live at `https://<your-username>.github.io/portfolio`!

### Method 2: Vercel / Netlify (Drag & Drop)
1. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
2. Simply drag and drop the `portfolio` folder into the dashboard.
3. Your site gets deployed instantly with a free SSL domain!
