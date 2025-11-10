# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing software development skills and projects.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Components**: Engaging user interface with hover effects and transitions
- **Fast Performance**: Built with Vite for optimal loading speed
- **Easy to Customize**: Well-organized component structure for easy modifications

## Sections

- **Hero**: Eye-catching landing section with call-to-action buttons
- **About**: Personal introduction and statistics
- **Skills**: Visual representation of technical skills with progress bars
- **Projects**: Showcase of portfolio projects with descriptions and links
- **Contact**: Contact form and social media links
- **Footer**: Additional information and quick links

## Tech Stack

- **React**: Frontend framework
- **Vite**: Build tool and dev server
- **CSS3**: Styling with modern CSS features
- **JavaScript (ES6+)**: Modern JavaScript features

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## Build for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Customization

### Personalizing Content

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update your name in the title
   - Modify the subtitle and description

2. **About Section** (`src/components/About.jsx`):
   - Update the about text with your information
   - Change the statistics (projects, experience, etc.)

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add or remove skills
   - Adjust skill levels
   - Update technology badges

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace sample projects with your actual projects
   - Update project descriptions, technologies, and links

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information (email, phone, location)
   - Add your social media links
   - Configure form submission (backend integration needed)

### Styling

All component-specific styles are in their respective CSS files:
- Global styles: `src/index.css`
- Component styles: `src/components/*.css`

### Colors

The main colors are defined as CSS variables in `src/index.css`:
```css
--primary-color: #667eea;
--secondary-color: #764ba2;
```

## Project Structure

```
portfolio/
├── public/           # Static files
├── src/
│   ├── components/   # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── App.jsx       # Main App component
│   ├── App.css       # App styles
│   ├── index.css     # Global styles
│   └── main.jsx      # Entry point
├── package.json
└── vite.config.js
```

## Deployment

You can deploy this portfolio to various platforms:

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy using Vercel CLI or GitHub integration
```

### GitHub Pages
```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

## Contributing

Feel free to fork this project and customize it for your own use!

## License

MIT License - feel free to use this portfolio template for your own website!
