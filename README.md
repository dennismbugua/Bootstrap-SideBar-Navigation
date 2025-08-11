
# Bootstrap Sidebar Navigation - React Version

<<<<<<< HEAD
![Dashboard](https://github.com/dennismbugua/Bootstrap-SideBar-Navigation/blob/main/imgs/dashboard.gif)

## Read the full article <a href="https://dennismbugua.co.ke/articles/mastering-a-dynamic-bootstrap-sidebar-a-step-by-step-guide">here</a>
=======
A modern, responsive sidebar navigation component built with React and Bootstrap 5.

## Features

- ✅ Built with React 18+ and Bootstrap 5
- ✅ Fully responsive design
- ✅ Mobile-friendly sidebar with toggle functionality
- ✅ Font Awesome icons integration
- ✅ Active state management
- ✅ Clean, modern UI design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the project files
2. Install dependencies:

```bash
npm install
```

### Running the Application

```bash
npm start
```

This will start the development server and open the application in your browser at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Sidebar.js       # Sidebar navigation component
│   ├── Navbar.js        # Top navigation bar
│   └── Content.js       # Main content area
├── App.js               # Main application component
├── App.css              # Application styles
└── index.js             # Application entry point
```

## Components

### Sidebar Component
- Handles navigation menu items
- Manages active state
- Responsive mobile toggle

### Navbar Component
- Top navigation bar
- Mobile menu toggle button
- Profile section

### Content Component
- Dynamic content based on active section
- Displays different content for each menu item

## Customization

You can easily customize the sidebar by:

1. **Adding new menu items**: Edit the `menuItems` array in `Sidebar.js`
2. **Changing colors**: Modify the CSS variables in `App.css`
3. **Adding new content**: Update the `contentData` object in `Content.js`

## Technologies Used

- React 18+
- Bootstrap 5.3.7
- Font Awesome (Free)
- CSS3

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC License
>>>>>>> 8d45234 (feat: Implement Navbar and Sidebar components with enhanced UX features)
