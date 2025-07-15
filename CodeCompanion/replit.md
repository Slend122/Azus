# Azus - Ontological Philosophy

## Overview

This is a full-stack web application built with React (frontend) and Express (backend) that presents the philosophical concept of "Azus" - an ontological philosophy. The application serves as a philosophical content website with a clean, modern dark theme interface featuring a sidebar navigation and main content area.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and building
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for dark theme
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Component Structure**: Modular component architecture with reusable UI components

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **API Design**: RESTful API structure with `/api` prefix

### Key Technical Decisions
1. **TypeScript**: Chosen for type safety across the entire stack
2. **Monorepo Structure**: Shared schema and types between client and server
3. **Drizzle ORM**: Modern TypeScript ORM for PostgreSQL with type-safe queries
4. **Vite**: Fast build tool with HMR for excellent developer experience
5. **Radix UI**: Accessible, unstyled components as foundation for custom design system

## Key Components

### Frontend Components
- **Sidebar**: Navigation component with responsive mobile support
- **MainContent**: Content display with structured sections
- **UI Components**: Comprehensive set of reusable components (buttons, cards, dialogs, etc.)
- **Layout**: Responsive design with mobile-first approach

### Backend Components
- **Storage Interface**: Abstracted CRUD operations for scalability
- **Route Handler**: Express route registration system
- **Database Schema**: User management with Drizzle schema definitions
- **Development Server**: Hot-reload capable development setup

## Data Flow

1. **Client-Server Communication**: RESTful API calls using fetch with TanStack Query
2. **Database Operations**: Drizzle ORM handles all database interactions
3. **State Management**: React Query manages server state caching and synchronization
4. **Authentication**: Session-based authentication setup (implementation pending)

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI/UX**: Radix UI primitives, Tailwind CSS, Lucide React icons
- **State Management**: TanStack Query
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Development**: TSX for TypeScript execution
- **Build**: ESBuild for production builds

### Development Tools
- **Build System**: Vite with TypeScript plugin
- **Linting/Formatting**: TypeScript compiler
- **Package Manager**: npm

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds static assets to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `drizzle-kit`

### Environment Configuration
- **Development**: Uses TSX for server execution with Vite dev server
- **Production**: Compiled JavaScript with static file serving
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Deployment Considerations
- **Static Assets**: Frontend builds to static files for CDN deployment
- **Server**: Node.js environment with ES modules support
- **Database**: Serverless PostgreSQL (Neon) for scalability
- **Environment Variables**: Database connection and other config via env vars

The application is designed for easy deployment on platforms like Replit, Vercel, or similar cloud platforms with minimal configuration required.