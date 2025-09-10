

# Traveler's Chronicles – Travel Blog Project

## Overview
**Traveler's Chronicles** is a personal travel blog website documenting a journey through five major cities: **London, Paris, New York, Los Angeles, and Madrid**.  
The site is built using **HTML, CSS, and JavaScript**, and features interactive galleries, blog articles, a Q&A section, and sources for all images and inspirations.

---

## Structure
```

public\_html/        # Main website folder containing all HTML, CSS, JS, images, and galleries
│
├── index.html      # Homepage with slider, author info, and blog post previews
├── londyn.html     # Blog article – London
├── paryz.html      # Blog article – Paris
├── nowyjork.html   # Blog article – New York
├── losangeles.html # Blog article – Los Angeles
├── madryt.html     # Blog article – Madrid
├── galeria.html    # Interactive photo gallery by city
├── pytania.html    # Q\&A section
├── zrodla.html     # Sources for images and inspirations
├── questions.txt   # JSON-like file with additional questions
│
├── CSS/            # Stylesheets (layout, gallery, blog, slider, etc.)
├── JS/             # JavaScript (navigation, lightbox, local storage, weather info, slider)
├── img/            # Icons, GIFs, author photo
├── galeria/        # Gallery images for each city
└── miejscaimg/     # Blog article images for each city

```

## Features

### 🌍 Responsive Design
- Built with **media queries** for mobile and desktop compatibility.

### 🖼️ Photo Galleries
- City-based galleries with **lightbox functionality** (`JS/lightbox.js`).

### ⛅ Weather Info
- Displays current weather for each city (`JS/pogoda.js`).

### 🔗 Navigation
- Button-based navigation across all pages (`JS/script.js`).

### ❓ Q&A Section
- Frequently asked questions and answers.

### 📚 Sources
- All images and inspirations are credited in **zrodla.html**.

---

## Getting Started

1. **Clone or download** the repository.  
2. Open `index.html` in your browser.  
3. Use the navigation buttons or links to explore blog posts, galleries, and other sections.  

---

## Development

### HTML
- Semantic structure for articles, galleries, and navigation.

### CSS
- Custom styles for blog layout, galleries, slider, and responsiveness.

### JavaScript
- Handles navigation, gallery lightbox, weather info, and local storage.

---

## Credits
- **Author:** Michał Zarzecki  
- All image and inspiration sources are listed in `zrodla.html`.

---

## Note
No backend or build steps required.  
All files are **static** and can be served from any web server or opened locally.
```

