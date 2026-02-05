# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features an animated particle background, smooth scrolling navigation, and comprehensive sections showcasing skills, projects, and experience.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Animated Background**: Interactive particle system with smooth animations
- **Accessibility**: Built with Radix UI components for screen reader support
- **Dark/Light Theme**: Theme switching capability with next-themes
- **Form Validation**: Contact form with React Hook Form and Zod validation
- **Charts & Visualizations**: Skills and experience data visualization with Recharts
- **Smooth Scrolling**: Seamless navigation between sections
- **Performance Optimized**: Fast loading with Vite's build system

## 🛠️ Tech Stack

### Frontend Framework
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful icon library
- **Tailwind Animate** - CSS animation utilities

### Forms & Validation
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Charts & Data
- **Recharts** - Composable charting library
- **Date-fns** - Modern JavaScript date utility library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/
│   └── ui/          # Reusable UI components (Radix UI based)
├── sections/        # Main portfolio sections
│   ├── Hero.tsx     # Landing section with intro
│   ├── About.tsx    # Personal information
│   ├── Skills.tsx   # Technical skills with charts
│   ├── Experience.tsx # Work experience timeline
│   ├── Projects.tsx # Portfolio projects showcase
│   ├── Contact.tsx  # Contact form and information
│   ├── Footer.tsx   # Site footer
│   └── Navigation.tsx # Main navigation menu
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── App.tsx          # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+ recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Personal Information
Edit the following files to customize with your information:

- `src/sections/Hero.tsx` - Update name, title, and hero content
- `src/sections/About.tsx` - Add your personal story and background
- `src/sections/Skills.tsx` - Modify skills data and proficiency levels
- `src/sections/Experience.tsx` - Update work experience and timeline
- `src/sections/Projects.tsx` - Add your projects with descriptions and links
- `src/sections/Contact.tsx` - Update contact information and social links

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Component styles are in individual component files
- Global styles are in `src/index.css`

### Animation Settings
The particle background animation can be customized in `src/App.tsx`:
- Particle count and speed
- Animation colors and effects
- Canvas rendering settings

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deploy to Vercel

**Important**: The `vercel.json` file must be at the **repository root** (not in the `app/` folder).

1. **Ensure vercel.json is at root**:
   ```
   portfolio-latest/
   ├── vercel.json     ← Must be here!
   └── app/
       ├── package.json
       ├── dist/
       └── ...
   ```

2. **Deploy**:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the configuration
   - No need to manually set build/output directories

3. **Set Environment Variables** in Vercel dashboard:
   - Go to your project → Settings → Environment Variables
   - Add these variables:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Redeploy**: After adding environment variables, trigger a new deployment

The `vercel.json` configuration handles:
- Building the project: `cd app && npm install && npm run build`
- Output directory: `app/dist`
- SPA routing: All routes redirect to `index.html`

### Environment Variables

Create a `.env` file in the root directory and add your EmailJS configuration:

```bash
cp .env.example .env
```

Then update the `.env` file with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### EmailJS Setup

The contact form uses EmailJS to send emails without a backend server. To set it up:

1. **Create an EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Create an email service**:
   - Go to Email Services in your dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email account

3. **Create an email template**:
   - Go to Email Templates
   - Create a new template with these variables:
     ```
     Subject: New Contact Form Message from {{from_name}}

     From: {{from_name}} ({{from_email}})

     Message:
     {{message}}
     ```

4. **Get your credentials**:
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account → General

5. **Update your `.env` file** with these values

The contact form will now send real emails to your inbox!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [Vite](https://vitejs.dev/) for the build tooling
- [React](https://reactjs.org/) for the framework

---

Built with ❤️ using React and TypeScript
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
