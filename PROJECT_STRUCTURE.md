# Project Structure

This document outlines the complete file structure for the CometChat internship assignment.

```
cometchat-internship-assignment/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
│
├── screenshots/
│   ├── login.png               # Login screen capture
│   ├── dashboard.png           # Dashboard view
│   ├── chat-interface.png      # Active chat
│   └── messages.png            # Message thread
│
├── docs/
│   └── assignment-report.pdf   # Detailed findings report
│
├── .env                        # Environment variables (DO NOT COMMIT)
├── .env.example                # Environment template
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── README.md                   # Main documentation
├── SETUP.md                    # Setup instructions
├── SUBMISSION_CHECKLIST.md     # Submission guide
└── PROJECT_STRUCTURE.md        # This file
```

## File Descriptions

### Root Level Files

**package.json**
- Lists all npm dependencies
- Defines run scripts (dev, build, preview)
- Project metadata

**vite.config.js**
- Vite bundler configuration
- Plugin setup for React
- Development server settings

**index.html**
- Main HTML file
- Entry point for Vite
- Minimal structure with root div

**.env.example**
- Template for environment variables
- Shows required configuration
- Safe to commit

**.gitignore**
- Specifies files to ignore
- Excludes node_modules, .env, build files
- Keeps repository clean

**README.md**
- Project overview
- Installation instructions
- Screenshots and demo links
- Issues summary

**SETUP.md**
- Detailed setup guide
- Troubleshooting section
- Step-by-step instructions

**SUBMISSION_CHECKLIST.md**
- Submission verification
- Quality checklist
- Common mistakes to avoid

### src/ Directory

**main.jsx**
```javascript
// React app entry point
// Renders App component into DOM
// Includes React.StrictMode
```

**App.jsx**
```javascript
// Main application logic
// CometChat initialization
// Login/logout functionality
// Chat interface rendering
```

**index.css**
```css
// Global styles
// CSS resets
// Common utilities
```

### public/ Directory

Contains static assets served directly:
- Favicon
- Images
- Fonts (if any)

### screenshots/ Directory

Required screenshots:
1. **login.png** - Login screen before entering credentials
2. **dashboard.png** - Main dashboard after login
3. **chat-interface.png** - Chat interface with conversations
4. **messages.png** - Active message thread

Screenshot specifications:
- Format: PNG or JPG
- Resolution: 1920x1080 or higher
- File size: Under 2MB each
- Clear and readable text

### docs/ Directory

**assignment-report.pdf**
- Comprehensive findings report
- All four evaluation areas
- Professional formatting
- Screenshots embedded

## Setup Order

Follow this order when setting up:

1. Clone/create repository
2. Run `npm install`
3. Copy `.env.example` to `.env`
4. Update `.env` with your credentials
5. Update `App.jsx` with credentials
6. Create screenshots folder
7. Run `npm run dev`
8. Test application
9. Take screenshots
10. Record video
11. Create PDF report
12. Update README
13. Commit and push to GitHub

## Git Workflow

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [your-repo-url]
git push -u origin main
```

### Regular Commits
```bash
git add .
git commit -m "Descriptive message"
git push
```

### Good Commit Messages
- "Add login functionality"
- "Fix CSS styling issues"
- "Update README with screenshots"
- "Document dashboard issues"
- "Add error handling"

### Bad Commit Messages
- "Update"
- "Changes"
- "Fix"
- "asdf"

## File Size Guidelines

| File Type | Max Size | Notes |
|-----------|----------|-------|
| Screenshots | 2MB each | Use PNG compression |
| Video | 50MB | Use MP4 H.264 codec |
| PDF | 10MB | Compress images |
| Source code | N/A | Should be minimal |

## Required vs Optional Files

### Required Files
✅ package.json
✅ App.jsx
✅ main.jsx
✅ index.html
✅ README.md
✅ .env.example
✅ .gitignore
✅ Screenshots (4+)
✅ PDF report

### Optional but Recommended
⭐ SETUP.md
⭐ index.css
⭐ vite.config.js
⭐ Video demo
⭐ Additional documentation

### Never Include
❌ .env (has secrets)
❌ node_modules/
❌ dist/ or build/
❌ Personal information
❌ Unrelated files
❌ Temporary files

## Code Organization Tips

### Keep Components Small
- Single responsibility
- Under 200 lines
- Reusable when possible

### Use Descriptive Names
- Variables: `isLoggedIn`, not `flag`
- Functions: `handleLogin`, not `do`
- Files: `UserProfile.jsx`, not `comp.jsx`

### Add Comments Sparingly
- Explain why, not what
- Document complex logic
- Keep comments updated

### Consistent Formatting
- Use Prettier or ESLint
- 2-space indentation
- Semicolons (choose one style)

## Testing Before Submission

### Functionality Tests
- [ ] App starts without errors
- [ ] Login works with valid user
- [ ] Login fails gracefully with invalid user
- [ ] Messages send successfully
- [ ] Messages receive in real-time
- [ ] Logout works correctly
- [ ] No memory leaks

### Visual Tests
- [ ] UI looks correct on desktop
- [ ] UI looks correct on mobile
- [ ] No layout breaks
- [ ] Images load properly
- [ ] Icons display correctly

### Code Quality
- [ ] No console errors
- [ ] No ESLint warnings
- [ ] Code is formatted consistently
- [ ] No unused imports
- [ ] No commented-out code

## Deployment (Optional)

If you want to deploy your app:

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist/ folder to netlify.com
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## Backup Strategy

Before submission:
1. Push to GitHub
2. Download repository as ZIP
3. Save PDF locally
4. Keep screenshots separately
5. Export video to cloud storage

## Common File Issues

### Issue: node_modules/ committed
Solution: Add to .gitignore, remove with:
```bash
git rm -r --cached node_modules
```

### Issue: .env committed
Solution: Remove immediately:
```bash
git rm --cached .env
git commit -m "Remove .env from tracking"
```

### Issue: Large files rejected
Solution: Use Git LFS or compress files

## Final Directory Check

Before submission, verify:
```bash
ls -la              # Check root files
ls src/             # Check source files
ls screenshots/     # Check screenshots
ls docs/            # Check documentation
git status          # Check uncommitted changes
npm run build       # Verify build works
```

---

**Tip:** Keep this structure simple and organized. Recruiters appreciate clean, well-structured projects that are easy to navigate.