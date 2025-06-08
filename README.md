# Storiara Landing Page

A modern, responsive landing page for Storiara built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎬 Film production focused design
- 🌙 Dark mysterious theme with blue gradients
- 📱 Fully responsive design
- ⚡ Optimized for performance
- 🚀 Deployed on GitHub Pages

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

The site will automatically work locally without any base path configuration.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `out` directory with the correct base path for GitHub Pages.

### Deployment to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build the project for production
2. Deploy to GitHub Pages
3. Preserve the `.nojekyll` file for proper routing

The site will be available at: https://orabluclub.github.io/storiara-landing-page/

## Project Structure

```
src/
├── app/                 # Next.js app router
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Navigation.tsx  # Header navigation
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features showcase
│   ├── Platform.tsx    # Platform capabilities
│   ├── Team.tsx        # Team members
│   ├── Pricing.tsx     # Pricing plans
│   ├── FAQ.tsx         # Frequently asked questions
│   └── Footer.tsx      # Footer
└── lib/                # Utility functions
    └── utils.ts        # Helper functions including asset path handling
```

## Configuration

The project automatically handles different environments:

- **Development**: No base path, assets served from root
- **Production**: Base path `/storiara-landing-page` for GitHub Pages

This is handled automatically through the `getAssetPath` utility function and Next.js configuration.

## Technologies

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🎬 Features

- **Dark, Cinematic Theme**: Deep blue, darkroom aesthetic with film grain effects
- **Framer Motion Animations**: Smooth, perspective-based animations throughout
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Performance Optimized**: Fast loading with optimized assets

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd visionara-marketing
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design System

### Colors
- **Primary**: `#455FE5` (Deep Blue)
- **Accent**: Lighter blue variations
- **Background**: `#00020D` (Deep Dark)
- **Foreground**: `#F2F4FF` (Light Blue-White)

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable sans-serif
- **Emphasis**: Gradient text for key elements

### Effects
- **Film Grain**: Subtle texture overlay
- **Perspective**: 3D transform effects
- **Glow**: Primary color glow effects
- **Backdrop Blur**: Glass morphism elements

## 📱 Sections

1. **Hero**: Cinematic introduction with floating icons
2. **Features**: Three-column layout showcasing platform capabilities
3. **Team**: Meet the founders with LinkedIn integration
4. **Pricing**: Usage-based pricing with comparison table
5. **FAQ**: Expandable questions and answers
6. **Footer**: Comprehensive links and newsletter signup

## 🔗 Navigation

- **Pre-Production**: Script analysis, scene breakdown, scheduling
- **Marketing**: Campaign generation, graphics, social media
- **Production**: Content generation, on-set tools, post-production
- **Team**: Founder profiles and company information
- **Pricing**: Transparent usage-based pricing model

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm run deploy
```

## 🎯 Key Features

### Cinematic Animations
- Perspective transforms on hover
- Smooth scroll-triggered animations
- Floating icon effects
- 3D card rotations

### Performance
- Optimized images and assets
- Lazy loading for sections
- Minimal bundle size
- Fast page transitions

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## 🔧 Customization

### Colors
Update the CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: 231 76% 58.2%;
  --background: 230 100% 2.5%;
  /* ... */
}
```

### Content
- Update team information in `src/components/Team.tsx`
- Modify pricing plans in `src/components/Pricing.tsx`
- Edit FAQ content in `src/components/FAQ.tsx`

### Animations
Customize Framer Motion animations in individual components or update the global animation settings in `tailwind.config.ts`.

## 📄 License

This project is proprietary to Storiara. All rights reserved.

## 🤝 Contributing

This is a private marketing site. For internal development only.

## 📞 Support

For questions or support, contact the development team:
- **Technical Lead**: Nick Harty
- **Business Development**: Spencer Kaufman  
- **Finance**: Charles Hirschhorn

---

**Storiara** - Revolutionizing film production with AI-powered tools.
