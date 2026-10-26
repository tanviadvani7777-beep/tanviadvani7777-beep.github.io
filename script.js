/**
 * Portfolio Interactive Scripts
 * Features:
 * - Dynamic typing effect in hero section
 * - Mobile hamburger menu toggle
 * - Scroll spy for active navbar highlighting
 * - Project architecture modal details
 * - Resume preview & print modal
 * - Copy to clipboard with toast notification
 * - Client-side contact form validation & feedback
 * - Smooth scroll & Lucide icon rendering
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  /* ==========================================================================
     1. TYPING ANIMATION (Hero Section)
     ========================================================================== */
  const typedTextElement = document.getElementById('typed-text');
  const roles = [
    'MCA Student',
    'Aspiring Software Developer',
    'Java & Python Programmer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 120;
  let eraseDelay = 60;
  let newTextDelay = 1800; // Pause at end of text

  function typeRole() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = eraseDelay;
    } else {
      typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingDelay = newTextDelay;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 350;
    }

    setTimeout(typeRole, typingDelay);
  }

  if (typedTextElement) {
    setTimeout(typeRole, 600);
  }

  /* ==========================================================================
     2. NAVBAR SCROLL & ACTIVE LINK SPY
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Add scrolled class for shadow/background
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy
    let currentSection = '';
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     3. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close mobile menu on clicking any navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  /* ==========================================================================
     4. RESUME PREVIEW MODAL
     ========================================================================== */
  const resumeModal = document.getElementById('resume-modal');
  const resumeTriggerBtn = document.getElementById('resume-trigger-btn');
  const resumeModalClose = document.getElementById('resume-modal-close');

  function openResumeModal() {
    if (resumeModal) {
      resumeModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  }

  function closeResumeModal() {
    if (resumeModal) {
      resumeModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (resumeTriggerBtn) resumeTriggerBtn.addEventListener('click', openResumeModal);
  if (resumeModalClose) resumeModalClose.addEventListener('click', closeResumeModal);

  // Close on clicking backdrop
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }

  /* ==========================================================================
     5. PROJECT ARCHITECTURE MODAL
     ========================================================================== */
  const projectModal = document.getElementById('project-modal');
  const projectModalClose = document.getElementById('project-modal-close');
  const modalProjectTitle = document.getElementById('modal-project-title');
  const modalProjectContent = document.getElementById('modal-project-content');
  const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

  // Technical Project Deep-Dives
  const projectDetailsData = {
    'fashion-fusion': {
      title: 'The Fashion Fusion – Full-Stack E-Commerce Website',
      tech: ['React 19', 'Vite', 'Redux Toolkit', 'Node.js', 'Express 5', 'MongoDB', 'Razorpay', 'Cloudinary', 'JWT & Bcrypt'],
      repoUrl: 'https://github.com/tanviadvani7777-beep/mernstack',
      overview: 'A production-grade fashion e-commerce platform built with React 19, Redux Toolkit, Express 5 REST API, Razorpay payment processing, and Cloudinary media management.',
      sections: [
        {
          heading: 'Decoupled Client-Server MERN Architecture',
          body: 'Engineered a modern web application using React 19 and Vite for fast client rendering, communicating via RESTful API endpoints with an Express 5 and Node.js backend connected to MongoDB via Mongoose object modeling.'
        },
        {
          heading: 'Redux Toolkit Centralized State Management',
          body: 'Designed modular state slices (authSlice, cartSlice, productSlice, orderSlice, and uiSlice) to maintain predictable, immutable application state across cart sessions, checkout steps, live item counts, and UI drawers.'
        },
        {
          heading: 'Razorpay Payment Gateway Integration',
          body: 'Configured end-to-end checkout transactions leveraging the official Razorpay SDK, verifying server-side payment signatures and status flags before persisting confirmed customer orders into MongoDB.'
        },
        {
          heading: 'Authentication & Cloud Image Pipeline',
          body: 'Implemented secure user sign-up and sign-in using JSON Web Tokens (JWT) and bcryptjs hashing. Configured Multer middleware paired with Cloudinary cloud storage for reliable product and media asset uploading.'
        }
      ]
    },
    'ai-assistant': {
      title: 'AI Virtual Assistant (MERN Stack + Google Gemini AI)',
      tech: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Gemini AI', 'Web Speech API', 'Tailwind CSS', 'JWT Auth'],
      repoUrl: 'https://github.com/tanviadvani7777-beep/mernstack',
      overview: 'A full-stack, voice-interactive AI assistant (JARVIS clone) featuring real-time natural language intent parsing, automated browser workflows, persona personalization, and secure JWT authentication.',
      sections: [
        {
          heading: 'Google Gemini AI Intent Engine',
          body: 'Engineered backend natural language understanding using the Google Gemini API. Spoken user prompts are structured through semantic prompt templates that detect user intent (e.g. search, video playback, weather, math calculations) and format executable actions for frontend execution.'
        },
        {
          heading: 'Bidirectional Voice Interaction (Web Speech API)',
          body: 'Integrated native browser SpeechRecognition to capture real-time Hindi and English vocal commands with wake-word detection, combined with SpeechSynthesis to deliver natural vocalized responses to the user.'
        },
        {
          heading: 'Full-Stack MERN & Secure Authentication',
          body: 'Architected with a decoupled React frontend and Express/Node.js backend with MongoDB Mongoose schemas. User authentication is secured using bcryptjs password hashing and JSON Web Tokens (JWT) stored safely in HTTP-only cookies.'
        },
        {
          heading: 'Persona Customization & Cloud Storage',
          body: 'Enabled customizable assistant naming (e.g., Jarvis, Friday, Shifra) and custom profile avatar uploads handled through Multer middleware and Cloudinary cloud storage, with persistent interaction logs saved to MongoDB.'
        }
      ]
    },
    'sudoku': {
      title: 'Interactive Sudoku Application (Java & XML)',
      tech: ['Java', 'Android Studio', 'XML UI', 'Matrix Algorithms'],
      repoUrl: 'https://github.com/tanviadvani7777-beep/android',
      overview: 'A full-featured mobile puzzle engine designed with clean decoupled architecture and recursive algorithmic validation.',
      sections: [
        {
          heading: 'Core Architecture & Layout',
          body: 'Engineered a nested grid hierarchy utilizing XML component layouts configured to seamlessly scale across multiple screen sizes, pixel densities, and orientation shifts.'
        },
        {
          heading: 'Matrix Validation Algorithms',
          body: 'Implemented real-time 9x9 matrix checks that compute subgrid constraints, row conflicts, and column rules simultaneously upon input, giving immediate visual feedback.'
        },
        {
          heading: 'Session State & Data Safety',
          body: 'Encapsulated game progress logic natively in Java using defensive state variables to prevent runtime crashes and ensure zero-loss game pause/resume capability.'
        }
      ]
    },
    'tictactoe': {
      title: 'Python Tic-Tac-Toe Desktop Application (Python & Tkinter)',
      tech: ['Python 3', 'Tkinter GUI Engine', 'OOP Design', 'Event Handling'],
      repoUrl: 'https://github.com/tanviadvani7777-beep/python',
      overview: 'A desktop application demonstrating practical event-driven user interface engineering and modular class hierarchies.',
      sections: [
        {
          heading: 'Event-Driven UI Engine',
          body: 'Designed custom interactive grid buttons connected to Python callback handlers that record mouse click coordinates and update the active game matrix instantly.'
        },
        {
          heading: 'Object-Oriented Architecture',
          body: 'Structured the application into decoupled classes: GameBoard, PlayerManager, and LogicEngine to guarantee separation of concerns and maintainability.'
        },
        {
          heading: 'Victory Matrix Verification',
          body: 'Programmed automated checks across 8 distinct winning vectors (3 rows, 3 columns, 2 diagonals) with instant stalemate detection and one-click board reset.'
        }
      ]
    },
    'data-analysis': {
      title: 'Data Analysis & Visualization Project (Pandas & Matplotlib)',
      tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy', 'Jupyter Labs'],
      repoUrl: 'https://github.com/tanviadvani7777-beep/machinelearning',
      overview: 'Comprehensive data engineering and statistical visualization platform uncovering meaningful business patterns in large data matrices.',
      sections: [
        {
          heading: 'Data Cleaning & Vector Processing',
          body: 'Structured systematic null-value mitigation, typed conversions, and categorical encodings across thousands of transactional records using vectorized Pandas routines.'
        },
        {
          heading: 'Statistical Visualization Pipelines',
          body: 'Assembled clear, high-resolution figures including correlation heatmaps, multi-variable bar distributions, and trend analysis plots with Matplotlib.'
        },
        {
          heading: 'Insight Reporting & Notebook Documentation',
          body: 'Formulated executive summaries and analytical deduction notebooks in Jupyter Labs ready for engineering and stakeholder presentations.'
        }
      ]
    }
  };

  function openProjectModal(projectId) {
    const data = projectDetailsData[projectId];
    if (!data || !projectModal) return;

    modalProjectTitle.textContent = data.title;

    let tagsHtml = data.tech.map(t => `<span class="tech-tag">${t}</span>`).join(' ');

    let sectionsHtml = data.sections.map(s => `
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 1.05rem; color: #38bdf8; margin-bottom: 6px;">${s.heading}</h4>
        <p style="font-size: 0.92rem; color: #cbd5e1; line-height: 1.6;">${s.body}</p>
      </div>
    `).join('');

    modalProjectContent.innerHTML = `
      <div style="margin-bottom: 18px; display: flex; flex-wrap: wrap; gap: 6px;">
        ${tagsHtml}
      </div>
      <p style="font-size: 1rem; color: #ffffff; margin-bottom: 22px; font-weight: 500;">
        ${data.overview}
      </p>
      <div style="background: rgba(7, 13, 30, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 12px; padding: 22px; margin-bottom: 20px;">
        ${sectionsHtml}
      </div>
      <div style="display: flex; gap: 12px; justify-content: flex-end;">
        <a href="${data.repoUrl || 'https://github.com/tanviadvani7777-beep'}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i data-lucide="github"></i> View Repository
        </a>
      </div>
    `;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  viewDetailsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  if (projectModalClose) projectModalClose.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // Global ESC key listener to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeResumeModal();
      closeProjectModal();
    }
  });

  /* ==========================================================================
     6. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toastText.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  /* ==========================================================================
     7. ONE-CLICK COPY TO CLIPBOARD
     ========================================================================== */
  const copyButtons = document.querySelectorAll('.copy-trigger-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          showToast('Failed to copy to clipboard');
        });
      }
    });
  });

  /* ==========================================================================
     8. CONTACT FORM SUBMISSION
     ========================================================================== */
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.');
        return;
      }

      // Feedback for user
      showToast(`Thank you, ${name}! Your message has been sent successfully.`);
      contactForm.reset();
    });
  }

  /* ==========================================================================
     9. GITHUB PROFILE COPY & DYNAMIC REPOSITORY STATS
     ========================================================================== */
  const copyGithubBtn = document.getElementById('copy-github-btn');
  if (copyGithubBtn) {
    copyGithubBtn.addEventListener('click', () => {
      const githubUrl = 'https://github.com/tanviadvani7777-beep';
      navigator.clipboard.writeText(githubUrl).then(() => {
        showToast('GitHub link copied: ' + githubUrl);
      }).catch(() => {
        showToast('GitHub: ' + githubUrl);
      });
    });
  }

  // Gracefully fetch GitHub stars / updates if available
  async function enhanceGithubRepos() {
    try {
      const res = await fetch('https://api.github.com/users/tanviadvani7777-beep/repos?sort=updated');
      if (!res.ok) return;
      const repos = await res.json();
      if (!Array.isArray(repos)) return;

      repos.forEach(repo => {
        const repoLink = document.querySelector(`.repo-name[href*="/${repo.name}"]`);
        if (repoLink && repo.stargazers_count > 0) {
          const card = repoLink.closest('.repo-card');
          if (card && !card.querySelector('.repo-stars-count')) {
            const bottom = card.querySelector('.repo-card-bottom');
            if (bottom) {
              const starBadge = document.createElement('span');
              starBadge.className = 'repo-stars-count';
              starBadge.style.cssText = 'color: #facc15; font-size: 0.78rem; display: inline-flex; align-items: center; gap: 3px; font-weight: 600;';
              starBadge.innerHTML = `★ ${repo.stargazers_count}`;
              bottom.insertBefore(starBadge, bottom.lastElementChild);
            }
          }
        }
      });
    } catch (e) {
      // Graceful fallback to verified static repository cards
    }
  }

  enhanceGithubRepos();
});
