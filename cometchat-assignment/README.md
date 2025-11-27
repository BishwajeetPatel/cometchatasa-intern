# CometChat Internship Assignment

Complete implementation and evaluation of CometChat platform including dashboard, UI Kit Builder, documentation, and implementation.

## Account Details
- Email: youremail+test@gmail.com
- App ID: [Your App ID]
- Region: US

## Tech Stack
- React 18.2.0
- Vite 5.0.8
- CometChat Chat SDK JavaScript 4.0.11
- CometChat Chat UIKit React 4.3.18

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory:

```env
VITE_COMETCHAT_APP_ID=your_app_id_here
VITE_COMETCHAT_REGION=us
VITE_COMETCHAT_AUTH_KEY=your_auth_key_here
```

Replace the values in `src/App.jsx`:
- APP_ID
- REGION
- AUTH_KEY

## Running the Application

```bash
npm run dev
```

Open browser at http://localhost:3000

## Login

Use any of the default test users:
- superhero1
- superhero2
- superhero3

Or create your own users in the CometChat dashboard.

## Screenshots

### Login Screen
![Login Screen](screenshots/login.png)

### Chat Interface
![Chat Interface](screenshots/chat-interface.png)

### Conversations List
![Conversations](screenshots/conversations.png)

### Message Thread
![Message Thread](screenshots/messages.png)

## Video Demo

[Link to video demonstration](demo-video.mp4)

The video shows:
- Application startup
- User login process
- Navigation through conversations
- Sending and receiving messages
- User presence indicators
- Logout functionality

## Project Structure

```
cometchat-assignment/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── screenshots/
├── .env.example
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features Implemented

1. User Authentication
   - Login with UID
   - Logout functionality
   - Session management

2. Real-time Messaging
   - One-on-one conversations
   - Message history
   - Typing indicators
   - Read receipts

3. User Interface
   - Conversations list
   - Message composer
   - User profiles
   - Presence status

## Issues Encountered

Detailed issues are documented in the PDF report. Key issues include:

### Dashboard
- Navigation menu overlap on mobile
- Missing loading states
- Form validation issues

### UI Kit Builder
- Theme preview not updating
- Download button disabled state
- Unclear component descriptions

### Documentation
- Outdated package names
- Broken links
- Missing environment setup

### Implementation
- TypeScript definition errors
- CSS conflicts with global styles
- Large bundle size

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Known Limitations

1. No error boundary implementation
2. Limited offline support
3. No message encryption
4. Basic error handling

## Future Improvements

1. Add message search functionality
2. Implement file sharing
3. Add group chat support
4. Improve mobile responsiveness
5. Add dark mode support

## Resources

- [CometChat Documentation](https://www.cometchat.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

## License

This project is created for internship assignment purposes.

## Contact

For questions or issues, contact: youremail+test@gmail.com

---

**Assignment Completion Date:** [Current Date]  
**Submission Email:** careers.intern@cometchat.com