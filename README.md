# Visionara Marketing Site

A stunning, cinematic marketing landing page for Visionara - the AI-powered film production platform.

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

This project is proprietary to Visionara. All rights reserved.

## 🤝 Contributing

This is a private marketing site. For internal development only.

## 📞 Support

For questions or support, contact the development team:
- **Technical Lead**: Nick Harty
- **Business Development**: Spencer Kaufman  
- **Finance**: Charles Hirschhorn

---

**Visionara** - Revolutionizing film production with AI-powered tools.
