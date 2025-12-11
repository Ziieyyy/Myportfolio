## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Authentication System](#authentication-system)
- [Database Schema](#database-schema)
- [Key Components](#key-components)
- [Routing](#routing)
- [Internationalization](#internationalization)
- [Theming](#theming)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)

---

## 🎯 Overview

**Auto Finance Calculator** is a modern web application that helps users compare car loan rates from multiple Malaysian banks. The platform features an admin portal for managing vehicles and banks, with a public-facing interface for users to browse cars and calculate loan options.

### Key Highlights

- **Public Access**: Browse cars, calculate loans, view bank details - no login required
- **Admin Portal**: Secure admin-only authentication for platform management
- **Multi-language**: Full support for English and Bahasa Malaysia
- **Dark Mode**: Complete theme support across the application
- **Responsive**: Fully responsive design for mobile, tablet, and desktop

---

## ✨ Features

### Public Features (No Authentication Required)

- 🚗 **Browse Vehicles**: View all available cars, motorcycles, vans, and trucks
- 💰 **Loan Calculator**: Calculate monthly payments with different banks and tenures
- 🏦 **Bank Comparison**: Compare interest rates and loan terms
- 🔍 **Search & Filter**: Find vehicles by category, brand, or model
- 🌐 **Multi-language**: Switch between English and Malay
- 🌙 **Dark Mode**: Toggle between light and dark themes

### Admin Features (Admin Authentication Required)

- 👤 **Admin Login**: Secure authentication for administrators
- 🚙 **Manage Vehicles**: Add, edit, and delete vehicle listings
- 🏛️ **Manage Banks**: Configure bank partners and interest rates
- 📊 **Dashboard**: View platform statistics and recent activities
- 👥 **User Management**: Assign admin roles (via Supabase)

---

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### State Management & Data

- **React Query** - Server state management
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation

### Backend & Database

- **Supabase** - Backend as a Service (BaaS)
  - PostgreSQL database
  - Authentication
  - Row Level Security (RLS)
  - Real-time subscriptions

### Internationalization

- **i18next** - Translation framework
- **react-i18next** - React integration

### Additional Libraries

- **class-variance-authority** - Component variant management
- **clsx** - Conditional className utility
- **date-fns** - Date manipulation
- **recharts** - Charting library