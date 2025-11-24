# Project Documentation - Delveng Course Journey Map

## Project Overview

This is an interactive web application for MEP Engineering education built with **Next.js**, **React**, and **TypeScript**. The application displays course details with an interactive lesson map that allows users to navigate between lessons and view their details.

---

## 🏗️ Technical Architecture

### Technologies Used

1. **Next.js 16** - React framework for production
2. **React 19** - JavaScript library for building user interfaces
3. **TypeScript** - Programming language providing static typing
4. **Tailwind CSS** - CSS framework for styling
5. **Radix UI** - Accessible UI components
6. **Lucide React** - Icon library

---

## 📁 Project Structure

```
project/
├── app/                    # Next.js main directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
│
├── src/
│   ├── components/        # Reusable components
│   │   ├── LessonModal/   # Modal for lesson details
│   │   └── ui/            # Base UI components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ...
│   │
│   ├── screens/           # Main application screens
│   │   └── CourseDetails/ # Course details screen
│   │       ├── CourseDetails.tsx
│   │       └── sections/  # Screen sections
│   │           ├── CourseDetailsSection/  # Course details section
│   │           ├── LessonSection/         # Lessons section (Footer)
│   │           └── NavigationSection/    # Navigation section (Header)
│   │
│   └── lib/               # Helper libraries
│       └── utils.ts      # Utility functions
│
├── public/                # Static files (images, icons)
├── package.json          # Dependencies file
├── tailwind.config.js    # Tailwind CSS configuration
└── next.config.js        # Next.js configuration
```

---

## 🔍 Main Components Explanation

### 1. Home Page (`app/page.tsx`)

```typescript
export default function Home() {
  return <CourseDetails />;
}
```

- **Function**: Main entry point of the application
- **Component**: Renders the `CourseDetails` component

---

### 2. Root Layout (`app/layout.tsx`)

**Functions**:
- Sets application title and description
- Loads Google Fonts (Montserrat and Inter)
- Provides base layout for all pages

**Features**:
- Metadata for the application (SEO)
- Custom fonts for design

---

### 3. Navigation Section (`NavigationSection`)

**Location**: `src/screens/CourseDetails/sections/NavigationSection/NavigationSection.tsx`

**Functions**:
- Fixed navigation bar at the top
- Company logo
- Search field for courses
- Navigation menu (Home, Courses, About, Pricing, Careers)
- Register and Join buttons
- Responsive mobile menu

**Interactive Features**:
- Side menu for mobile devices
- Active state for current page
- Hover effects and transitions

---

### 4. Course Details Section (`CourseDetailsSection`)

**Location**: `src/screens/CourseDetails/sections/CourseDetailsSection/CourseDetailsSection.tsx`

**Main Functions**:

#### a. Course Information Card
- Course image
- Course name (MEP Engineering)
- Rating (5.0 stars)
- Number of lessons (7 lessons)
- Number of practices (10 Practice)
- "Level Assessment" button

#### b. Knowledge Areas
- List of different knowledge areas:
  - Air Distribution System
  - Equipment Sizing
  - Exhaust System
  - Piping System
  - System Type Selection
  - Thermal Analysis
  - Ventilation
  - Zoning and Control Strategy
- Horizontal scrolling capability
- Active area highlighting

#### c. Interactive Lesson Map
- **Main Function**: Displays lessons on an interactive map
- **Lesson States**:
  - `completed` - Completed (green)
  - `in_progress` - In progress (orange)
  - `locked` - Locked (gray)
  - `available` - Available

**Stored Data**:
```typescript
const lessonsData = [
  {
    id: 0,
    name: "Foundation Lesson",
    status: "completed",
    description: "...",
    quizCount: 10,
    duration: "1 Hour",
    questionCount: 10,
  },
  // ... more lessons
];
```

**Interactive Features**:
- Click on a lesson to open a modal
- Hover effects on lessons
- Visual paths connecting lessons
- Visual effects on scroll (opacity and drop-shadow)
- Animations for selected lesson

#### d. Selected Lesson Details Card
- Displays information about the selected lesson
- Number of quizzes
- Duration
- Number of questions
- "Start Lesson" button

---

### 5. Lesson Modal (`LessonModal`)

**Location**: `src/components/LessonModal/LessonModal.tsx`

**Functions**:
- Displays lesson details in a modal
- Lesson information:
  - Name
  - Status (Locked, In Progress, Completed, Available)
  - Description
  - Number of quizzes
  - Duration
  - Number of questions

**Buttons by Status**:
- `completed` → "Review Lesson"
- `in_progress` → "Continue Lesson"
- `locked` → "Unlock Lesson" (disabled)
- `available` → "Start Lesson"

**Features**:
- Transparent background when opened
- Can be closed by clicking outside
- Open/close animations
- Responsive design

---

### 6. Lesson Section (`LessonSection`)

**Location**: `src/screens/CourseDetails/sections/LessonSection/LessonSection.tsx`

**Function**: Acts as the Footer of the application

**Content**:
- Company logo
- Company description
- Navigation links
- Social media links (Facebook, Instagram, Twitter, LinkedIn)
- Copyright

---

### 7. Main Component (`CourseDetails`)

**Location**: `src/screens/CourseDetails/CourseDetails.tsx`

**Function**: Combines all sections together

**Structure**:
1. `NavigationSection` - Navigation bar
2. Breadcrumb - Navigation path (Home > Courses > MEP Engineering)
3. `CourseDetailsSection` - Main details section
4. `LessonSection` - Footer

---

## 🎨 Design System

### Colors Used

- **Primary Color**: `#ff7f24` (orange)
- **Secondary Color**: Secondary colors for design
- **Black Shades**: Different shades of black for text
- **Background**: White with light gray shades

### Fonts

- **Montserrat**: For headings and buttons
- **Inter**: For regular text

### Responsive Design

- **Mobile First**: Design starts from mobile devices
- **Breakpoints**: sm, md, lg, xl
- **Adaptive Layout**: Layout adapts to screen size

---

## 🔄 Data Flow and Interaction

### Component State Management

```typescript
// In CourseDetailsSection
const [selectedLesson, setSelectedLesson] = useState(null);
const [hoveredLessonId, setHoveredLessonId] = useState(null);
```

**Flow**:
1. User clicks on a lesson in the map
2. `selectedLesson` is updated
3. `LessonModal` opens with lesson data
4. User can close the modal or start the lesson

### Event Handling

- **onClick**: Click on lesson
- **onMouseEnter/onMouseLeave**: Hover effects
- **onClose**: Close modal

---

## 🚀 How to Run the Project

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Steps to Run

1. **Install dependencies**:
```bash
npm install
```

2. **Run the project in development mode**:
```bash
npm run dev
```

3. **Open browser**:
Open [http://localhost:3000](http://localhost:3000)

4. **Build the project for production**:
```bash
npm run build
```

5. **Run the built version**:
```bash
npm start
```

---

## 📦 Reusable UI Components

### Components from shadcn/ui

1. **Button** - Customizable buttons
2. **Card** - Cards for displaying content
3. **Badge** - Badges for categories
4. **ScrollArea** - Custom scroll area
5. **Separator** - Visual separator
6. **Input** - Input fields
7. **Select** - Dropdown lists

---

## 🎯 Key Features

### 1. Interactive Lesson Map
- Visual display of lessons and their relationships
- Visual paths connecting lessons
- Interactive effects on hover and click

### 2. Lesson State System
- Tracks user progress
- Prevents access to locked lessons
- Visual distinction for different states

### 3. Responsive Design
- Works on all devices
- Responsive navigation menu for phones
- Flexible layout that adapts to screen

### 4. Enhanced User Experience
- Smooth animations
- Hover effects
- Interactive modal
- Modern and attractive design

---

## 🔧 Settings and Configuration

### Next.js Config (`next.config.js`)

```javascript
{
  output: 'export',  // Static export for the site
  images: {
    unoptimized: true,  // Disable image optimization
  }
}
```

### Tailwind Config (`tailwind.config.js`)

- Custom colors from CSS Variables
- Custom fonts
- Custom animations (pulse-glow)
- Responsive settings

---

## 📝 Important Notes for Interview

### Project Strengths

1. **Organized Structure**: Clear separation between components
2. **TypeScript**: Static typing reduces errors
3. **Responsive Design**: Works on all devices
4. **Reusable Components**: Easy maintenance
5. **Excellent UX**: Smooth interactions and animations

### Technologies Used

- **Next.js**: For optimized React applications
- **TypeScript**: For programming safety
- **Tailwind CSS**: For fast styling
- **Radix UI**: For accessible UI components

### Potential Challenges and Solutions

1. **State Management**: Using local useState (can be upgraded to Context API or Zustand)
2. **Data**: Currently static data (can be connected to API)
3. **Performance**: Using Next.js for automatic optimization

---

## 🎓 Quick Code Explanation

### Example: How Lesson Click Works

```typescript
// 1. When clicking on a lesson
const handleLessonClick = (lessonId: number) => {
  const lesson = lessonsData.find((l) => l.id === lessonId);
  if (lesson && lesson.status !== "locked") {
    setSelectedLesson(lesson);  // Update state
  }
};

// 2. LessonModal component receives data
<LessonModal
  isOpen={!!selectedLesson}  // Opens if there's a selected lesson
  onClose={handleCloseModal}
  lesson={selectedLesson}     // Lesson data
/>

// 3. In LessonModal
if (!isOpen || !lesson) return null;  // Doesn't render if closed
```

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com)
- [TypeScript](https://www.typescriptlang.org/docs)

---

## ✅ Summary

This project is an interactive educational application that displays:
- Course training details
- Interactive lesson map
- Progress tracking system
- Modern and responsive user interface

The project is built with best practices in React/Next.js development and uses TypeScript for safety and quality.

---

**Created**: 2025  
**Version**: 1.0.0  
**Developer**: Delveng Team

