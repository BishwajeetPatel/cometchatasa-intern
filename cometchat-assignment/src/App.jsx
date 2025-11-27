import React, { useEffect, useState } from 'react';
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { CometChatUIKit, UIKitSettingsBuilder } from '@cometchat/chat-uikit-react';
import { CometChatConversationsWithMessages, CometChatTheme } from '@cometchat/chat-uikit-react';

const APP_ID = '1672202d32f1fcaeb';
const REGION = 'in';
const AUTH_KEY = '06ef8a3754a653c0f4f3faa5395187b175a67f16';

function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    initializeCometChat();
  }, []);

  const initializeCometChat = async () => {
    const uikitSettings = new UIKitSettingsBuilder()
      .setAppId(APP_ID)
      .setRegion(REGION)
      .setAuthKey(AUTH_KEY)
      .subscribePresenceForAllUsers()
      .build();

    try {
      await CometChatUIKit.init(uikitSettings);
      console.log('CometChat UIKit initialized');
      setIsInitialized(true);
      await checkUserLogin();
    } catch (err) {
      console.error('Initialization error:', err);
      setError('Failed to initialize. Check your credentials.');
      setIsInitialized(true);
    }
  };

  const checkUserLogin = async () => {
    try {
      const user = await CometChatUIKit.getLoggedinUser();
      if (user) {
        setIsLoggedIn(true);
        setCurrentUser(user);
        setUserId(user.getUid());
      }
    } catch (err) {
      console.log('No active session');
    }
  };

  const loginUser = async () => {
    if (!userId.trim()) {
      setError('Please enter a user ID');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const user = await CometChatUIKit.login(userId);
      console.log('Login successful:', user);
      setIsLoggedIn(true);
      setCurrentUser(user);
      setError(null);
    } catch (err) {
      console.error('Login error:', err);
      if (err.code === 'ERR_UID_NOT_FOUND') {
        setError('User not found. Create this user in CometChat dashboard first.');
      } else if (err.code === 'ERR_INVALID_AUTH_TOKEN') {
        setError('Invalid auth key. Check your credentials.');
      } else {
        setError('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      await CometChatUIKit.logout();
      setIsLoggedIn(false);
      setCurrentUser(null);
      setUserId('');
      console.log('Logout successful');
    } catch (err) {
      console.error('Logout error:', err);
      setError('Logout failed');
    } finally {
      setLoading(false);
    }
  };

  if (!isInitialized) {
    return (
      <div style={styles.container}>
        <div style={styles.loader}>
          <div style={styles.spinner}></div>
          <h2 style={styles.loadingText}>Initializing CometChat...</h2>
          <p style={styles.loadingSubtext}>Please wait</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div style={styles.container}>
        <div style={styles.loginBox}>
          <div style={styles.logoSection}>
            <div style={styles.logo}>💬</div>
            <h1 style={styles.title}>CometChat</h1>
            <p style={styles.subtitle}>Internship Assignment Demo</p>
          </div>

          <div style={styles.formSection}>
            <label style={styles.label}>User ID</label>
            <input
              type="text"
              placeholder="Enter your user ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={styles.input}
              onKeyPress={(e) => e.key === 'Enter' && !loading && loginUser()}
              disabled={loading}
            />
            
            {error && (
              <div style={styles.errorBox}>
                <span style={styles.errorIcon}>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <button 
              onClick={loginUser} 
              style={{
                ...styles.button,
                ...(loading ? styles.buttonDisabled : {})
              }}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div style={styles.divider}>
              <span style={styles.dividerText}>Test Users</span>
            </div>

            <div style={styles.testUsers}>
              {['superhero1', 'superhero2', 'superhero3'].map((user) => (
                <button
                  key={user}
                  onClick={() => {
                    setUserId(user);
                    setError(null);
                  }}
                  style={styles.testUserButton}
                  disabled={loading}
                >
                  {user}
                </button>
              ))}
            </div>

            <p style={styles.hint}>
              Don't have a user? Create one in the CometChat dashboard
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.appContainer}>
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.headerLogo}>💬</div>
          <div>
            <h2 style={styles.headerTitle}>CometChat Demo</h2>
            <p style={styles.headerSubtitle}>
              Logged in as <strong>{currentUser?.getName() || userId}</strong>
            </p>
          </div>
        </div>
        <button 
          onClick={logoutUser} 
          style={{
            ...styles.logoutButton,
            ...(loading ? styles.buttonDisabled : {})
          }}
          disabled={loading}
        >
          {loading ? 'Logging out...' : 'Logout'}
        </button>
      </div>
      
      <div style={styles.chatContainer}>
        <CometChatConversationsWithMessages />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '20px'
  },
  loader: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  spinner: {
    width: '50px',
    height: '50px',
    margin: '0 auto 20px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  loadingText: {
    color: '#1f2937',
    marginBottom: '8px',
    fontSize: '20px'
  },
  loadingSubtext: {
    color: '#6b7280',
    fontSize: '14px'
  },
  loginBox: {
    backgroundColor: 'white',
    padding: '0',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '440px',
    overflow: 'hidden'
  },
  logoSection: {
    backgroundColor: '#3b82f6',
    padding: '40px 40px 30px',
    textAlign: 'center',
    color: 'white'
  },
  logo: {
    fontSize: '48px',
    marginBottom: '12px'
  },
  title: {
    margin: '0 0 8px 0',
    fontSize: '32px',
    fontWeight: '700'
  },
  subtitle: {
    margin: 0,
    fontSize: '14px',
    opacity: 0.9
  },
  formSection: {
    padding: '32px 40px 40px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#374151',
    fontSize: '14px',
    fontWeight: '500'
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    marginBottom: '16px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '16px',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit'
  },
  button: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    fontFamily: 'inherit'
  },
  buttonDisabled: {
    backgroundColor: '#93c5fd',
    cursor: 'not-allowed'
  },
  errorBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
    marginBottom: '16px',
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    borderRadius: '8px',
    color: '#dc2626',
    fontSize: '14px'
  },
  errorIcon: {
    fontSize: '18px'
  },
  divider: {
    position: 'relative',
    textAlign: 'center',
    margin: '24px 0 20px',
    height: '1px',
    backgroundColor: '#e5e7eb'
  },
  dividerText: {
    position: 'absolute',
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'white',
    padding: '0 12px',
    fontSize: '13px',
    color: '#6b7280',
    fontWeight: '500'
  },
  testUsers: {
    display: 'flex',
    gap: '8px',
    marginBottom: '20px',
    flexWrap: 'wrap'
  },
  testUserButton: {
    flex: '1',
    minWidth: '100px',
    padding: '10px 16px',
    backgroundColor: '#f3f4f6',
    color: '#374151',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'inherit',
    fontWeight: '500'
  },
  hint: {
    fontSize: '13px',
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: '1.5',
    margin: 0
  },
  appContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f0f2f5'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    zIndex: 10
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  headerLogo: {
    fontSize: '32px'
  },
  headerTitle: {
    margin: '0 0 4px 0',
    color: '#1f2937',
    fontSize: '20px',
    fontWeight: '600'
  },
  headerSubtitle: {
    margin: 0,
    color: '#6b7280',
    fontSize: '14px'
  },
  logoutButton: {
    padding: '10px 24px',
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'background-color 0.2s',
    fontFamily: 'inherit'
  },
  chatContainer: {
    flex: 1,
    overflow: 'hidden',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '1400px',
    width: '100%',
    margin: '0 auto'
  }
};

export default App;