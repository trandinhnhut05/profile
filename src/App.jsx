import React, { useState, useEffect } from 'react';
import avatarImg from './assets/avatar.jpg';

// Inline SVG Icon components for maximum portability and zero-config styling
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" x2="21" y1="14" y2="3"/>
  </svg>
);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [activeSection, setActiveSection] = useState('home');
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Handle theme toggling
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Trigger skills progress animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setSkillsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Simple active nav tracker on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  return (
    <>
      {/* Decorative Blobs for premium dark/light layout */}
      <div className="glow-blob glow-blob-1"></div>
      <div className="glow-blob glow-blob-2"></div>

      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <a href="#home" className="logo">Trần Đình Nhứt</a>
          <nav>
            <ul className="nav-links">
              <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Trang chủ</a></li>
              <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Kỹ năng</a></li>
              <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Dự án</a></li>
              <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Liên hệ</a></li>
            </ul>
          </nav>
          <div className="controls">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="theme-btn"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="badge">Chào mừng đến với góc nhỏ của tôi</span>
            <h1 className="hero-title">
              Xin chào, tôi là <br /><span>Trần Đình Nhứt</span>
            </h1>
            <p className="hero-bio">
              Một Lập trình viên Fullstack đam mê xây dựng các ứng dụng web hiệu năng cao, phản hồi nhanh và đẹp mắt. Tôi có kinh nghiệm làm việc với các thư viện frontend hiện đại, cloud edge runtimes (Cloudflare Workers/Pages) và các hệ cơ sở dữ liệu.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Liên hệ tôi</a>
              <a href="#projects" className="btn btn-secondary">Xem dự án</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="avatar-wrapper">
              <img
                src={avatarImg}
                alt="Trần Đình Nhứt Avatar"
                className="avatar-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section container">
        <div className="glass-card">
          <div className="section-header">
            <span className="section-subtitle">Năng lực chuyên môn</span>
            <h2 className="section-title">Công nghệ sử dụng</h2>
          </div>

          <div className="skills-grid">
            {/* Frontend */}
            <div className="skills-category">
              <h3>Phát triển Frontend</h3>
              <div className="skill-list">
                {[
                  { name: 'React / Next.js', val: '90%' },
                  { name: 'Vue / Vite', val: '80%' },
                  { name: 'CSS / SCSS / Tailwind', val: '95%' },
                  { name: 'TypeScript', val: '85%' },
                ].map((s) => (
                  <div key={s.name} className="skill-item">
                    <div className="skill-info">
                      <span>{s.name}</span>
                      <span>{s.val}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: skillsAnimated ? s.val : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend & Cloud */}
            <div className="skills-category">
              <h3>Backend & Cloud Edge</h3>
              <div className="skill-list">
                {[
                  { name: 'Node.js / Express', val: '85%' },
                  { name: 'Cloudflare Workers / Pages', val: '80%' },
                  { name: 'PostgreSQL / MongoDB / Redis', val: '75%' },
                  { name: 'REST APIs & GraphQL', val: '90%' },
                ].map((s) => (
                  <div key={s.name} className="skill-item">
                    <div className="skill-info">
                      <span>{s.name}</span>
                      <span>{s.val}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: skillsAnimated ? s.val : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section container">
        <div className="section-header">
          <span className="section-subtitle">Sản phẩm cá nhân</span>
          <h2 className="section-title">Dự án tiêu biểu</h2>
        </div>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="glass-card project-card">
            <div className="project-img-container">
              <span className="project-icon">🛒</span>
            </div>
            <div className="project-content">
              <h3 className="project-title">Nền tảng Thương mại Điện tử</h3>
              <p className="project-desc">
                Trang web bán hàng hiện đại với tối ưu hóa hình ảnh hiệu năng cao, thanh toán Stripe an toàn và bảng điều khiển quản trị trực quan.
              </p>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">Stripe</span>
              </div>
              <div className="project-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  <GithubIcon /> Mã nguồn
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="glass-card project-card">
            <div className="project-img-container">
              <span className="project-icon">🤖</span>
            </div>
            <div className="project-content">
              <h3 className="project-title">Trợ lý Chatbot AI</h3>
              <p className="project-desc">
                Ứng dụng web trợ lý AI tương tác sử dụng API của OpenAI, hỗ trợ hiển thị định dạng markdown, lưu trữ lịch sử trò chuyện và phản hồi thời gian thực siêu tốc.
              </p>
              <div className="project-tags">
                <span className="project-tag">Vite</span>
                <span className="project-tag">OpenAI</span>
                <span className="project-tag">CSS Modules</span>
              </div>
              <div className="project-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  <GithubIcon /> Mã nguồn
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="glass-card project-card">
            <div className="project-img-container">
              <span className="project-icon">⚡</span>
            </div>
            <div className="project-content">
              <h3 className="project-title">Blog Công nghệ Cloudflare Edge</h3>
              <p className="project-desc">
                Trang blog tĩnh serverless triển khai toàn cầu trên Cloudflare Pages, sử dụng KV store để phân tích dữ liệu và đếm lượt xem thời gian thực.
              </p>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Wrangler</span>
                <span className="project-tag">Cloudflare Pages</span>
              </div>
              <div className="project-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  <GithubIcon /> Mã nguồn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section container">
        <div className="glass-card">
          <div className="section-header">
            <span className="section-subtitle">Kết nối</span>
            <h2 className="section-title">Liên hệ với tôi</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-info-card">
              <h3>Thông tin liên hệ</h3>
              <p>Hãy thoải mái liên hệ với tôi để thảo luận về các dự án mới, ý tưởng thiết kế, hoặc chỉ đơn giản là gửi lời chào!</p>

              <div className="contact-method">
                <div className="contact-icon-box">
                  <MailIcon />
                </div>
                <div className="contact-text-box">
                  <h4>Email</h4>
                  <a href="mailto:nhut64463@gmail.com">nhut64463@gmail.com</a>
                </div>
              </div>

              <div>
                <h4>Theo dõi tôi</h4>
                <div className="social-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Họ và tên</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="Tên của bạn"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Địa chỉ Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="email.cua.ban@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Lời nhắn</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  required
                  placeholder="Chi tiết lời nhắn của bạn..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: 'max-content' }}>
                Gửi lời nhắn
              </button>

              {formSubmitted && (
                <div style={{ color: '#10b981', fontWeight: 600, marginTop: '1rem' }}>
                  ✓ Cảm ơn bạn! Lời nhắn của bạn đã được gửi thành công.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <p>© {new Date().getFullYear()} Trần Đình Nhứt. Bảo lưu mọi quyền.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.7 }}>
          Được xây dựng bằng React & Vite. Lưu trữ trên Cloudflare Pages.
        </p>
      </footer>
    </>
  );
}

export default App;
