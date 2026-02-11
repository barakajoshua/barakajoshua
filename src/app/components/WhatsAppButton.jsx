"use client"
import { useState } from 'react';

const WhatsAppButton = ({ phoneNumber = '250736560886' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSend();
    }
  };

  const styles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
      fontFamily: "'Space Mono', monospace",
    },
    chatBox: {
      position: 'absolute',
      bottom: '80px',
      right: '0',
      width: '300px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 5px 40px rgba(0, 0, 0, 0.16)',
      padding: '16px',
      display: isOpen ? 'block' : 'none',
      animation: isOpen ? 'slideUp 0.3s ease-out' : 'slideDown 0.3s ease-out',
    },
    header: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: '12px',
      textAlign: 'center',
    },
    textarea: {
      width: '100%',
      minHeight: '80px',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: "'Space Mono', monospace",
      resize: 'vertical',
      marginBottom: '12px',
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    textareaFocus: {
      borderColor: '#25d366',
    },
    sendButton: {
      width: '100%',
      padding: '10px 16px',
      backgroundColor: '#25d366',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.2s',
      fontFamily: "'Space Mono', monospace",
    },
    sendButtonHover: {
      backgroundColor: '#1fa855',
    },
    floatingButton: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#25d366',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
      transition: 'all 0.3s ease',
      position: 'relative',
    },
    floatingButtonHover: {
      transform: 'scale(1.1)',
      boxShadow: '0 6px 20px rgba(37, 211, 102, 0.6)',
    },
    whatsappIcon: {
      width: '32px',
      height: '32px',
      fill: '#fff',
    },
    closeBtn: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      background: 'none',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      color: '#999',
      padding: '0',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  const [isHovered, setIsHovered] = useState(false);
  const [textareaFocused, setTextareaFocused] = useState(false);

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>

      <div style={styles.container}>
        {/* Chat Box */}
        <div style={styles.chatBox}>
          <button
            style={styles.closeBtn}
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            ✕
          </button>
          <div style={styles.header}>Hello! 👋</div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setTextareaFocused(true)}
            onBlur={() => setTextareaFocused(false)}
            placeholder="Type your message here... (Ctrl+Enter to send)"
            style={{
              ...styles.textarea,
              ...(textareaFocused ? styles.textareaFocus : {}),
            }}
          />
          <button
            style={styles.sendButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1fa855';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#25d366';
              e.target.style.transform = 'translateY(0)';
            }}
            onClick={handleSend}
          >
            Send Message
          </button>
        </div>

        {/* Floating Button */}
        <button
          style={{
            ...styles.floatingButton,
            ...(isHovered ? styles.floatingButtonHover : {}),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open WhatsApp chat"
        >
          <svg
            style={styles.whatsappIcon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.951 1.263 9.937 9.937 0 001.924-6.147c0-5.507 4.486-9.993 9.993-9.993 2.672 0 5.181 1.055 7.066 2.96a10 10 0 011.341 1.52L24 2.075C21.996.92 19.573 0 16.986 0 7.577 0 0 7.577 0 16.986c0 2.587.92 5.009 2.074 7.066l1.439-1.46a9.965 9.965 0 01-1.52-1.341zm5.421 7.403c-3.98-1.288-6.027-4.295-5.876-7.365.05-.99.34-1.958.885-2.769-.525 1.46-.34 3.5.635 5.325.976 1.825 2.734 3.125 4.87 3.809z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default WhatsAppButton;
