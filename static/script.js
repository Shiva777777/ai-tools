// AI Tools Data
const aiTools = [
    {
        name: "ChatGPT",
        description: "AI language model for text generation, conversation, and creative writing assistance.",
        url: "https://chat.openai.com/",
        icon: "🤖"
    },
    {
        name: "MidJourney",
        description: "AI image generator that creates stunning visuals from text prompts and descriptions.",
        url: "https://www.midjourney.com/",
        icon: "🎨"
    },
    {
        name: "Canva",
        description: "Graphic design platform with AI-powered templates and design tools for all skill levels.",
        url: "https://www.canva.com/",
        icon: "🎭"
    },
    {
        name: "Grammarly",
        description: "Writing assistant that provides grammar, clarity, and style suggestions in real-time.",
        url: "https://www.grammarly.com/",
        icon: "✍️"
    },
    {
        name: "Perplexity AI",
        description: "AI-powered search engine that provides comprehensive answers with cited sources.",
        url: "https://www.perplexity.ai/",
        icon: "🔍"
    },
    {
        name: "Synthesia",
        description: "AI video creation platform with virtual avatars and natural-sounding voice synthesis.",
        url: "https://www.synthesia.io/",
        icon: "🎬"
    },
    {
        name: "Copy AI",
        description: "AI tool for marketing copywriting, content generation, and creative writing assistance.",
        url: "https://www.copy.ai/",
        icon: "📝"
    },
    {
        name: "Jasper AI",
        description: "AI content generation platform for blogs, SEO content, and marketing materials.",
        url: "https://www.jasper.ai/",
        icon: "📊"
    },
    {
        name: "Pictory AI",
        description: "AI text-to-video converter and video editing tool for content creators.",
        url: "https://www.pictory.ai/",
        icon: "🎥"
    },
    {
        name: "Replit",
        description: "Online IDE with real-time collaboration and AI-powered coding assistance.",
        url: "https://www.replit.com/",
        icon: "💻"
    },
    {
        name: "Claude AI",
        description: "Advanced AI assistant by Anthropic for complex reasoning and creative tasks.",
        url: "https://claude.ai/",
        icon: "🧠"
    },
    {
        name: "DALL-E 3",
        description: "OpenAI's latest image generation model for creating high-quality images from text.",
        url: "https://openai.com/dall-e-3",
        icon: "🎭"
    },
    {
        name: "Notion AI",
        description: "AI-powered workspace for notes, docs, and project management with smart features.",
        url: "https://www.notion.so/",
        icon: "📚"
    },
    {
        name: "Runway ML",
        description: "Creative AI tools for video editing, image generation, and multimedia content.",
        url: "https://runwayml.com/",
        icon: "🎬"
    },
    {
        name: "Character.AI",
        description: "Chat with AI characters, celebrities, and fictional personalities.",
        url: "https://character.ai/",
        icon: "👥"
    },
    {
        name: "ElevenLabs",
        description: "AI voice synthesis and text-to-speech with natural-sounding voices.",
        url: "https://elevenlabs.io/",
        icon: "🎤"
    },
    {
        name: "GitHub Copilot",
        description: "AI pair programmer that helps you write code faster and more efficiently.",
        url: "https://github.com/features/copilot",
        icon: "⚡"
    },
    {
        name: "Luma AI",
        description: "AI-powered 3D capture and video generation from simple photos.",
        url: "https://lumalabs.ai/",
        icon: "📷"
    },
    {
        name: "Gamma",
        description: "AI-powered presentation and document creation with beautiful designs.",
        url: "https://gamma.app/",
        icon: "📊"
    },
    {
        name: "Framer",
        description: "AI-powered website builder with advanced design and animation capabilities.",
        url: "https://www.framer.com/",
        icon: "🌐"
    },
    {
        name: "Uizard",
        description: "AI-powered UI/UX design tool that converts sketches to digital designs.",
        url: "https://uizard.io/",
        icon: "🎨"
    },
    {
        name: "Beautiful.AI",
        description: "AI-powered presentation software that creates stunning slides automatically.",
        url: "https://www.beautiful.ai/",
        icon: "✨"
    },
    {
        name: "Tome",
        description: "AI storytelling platform for creating interactive presentations and stories.",
        url: "https://tome.app/",
        icon: "📖"
    },
    {
        name: "Descript",
        description: "AI-powered video and audio editing with transcription and voice cloning.",
        url: "https://www.descript.com/",
        icon: "🎙️"
    }
];

// DOM Elements
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const themeToggle = document.getElementById('themeToggle');
const discoverButton = document.getElementById('discoverButton');
const toolsSection = document.getElementById('toolsSection');
const noResults = document.getElementById('noResults');

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeIcon = themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    themeToggle.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`);
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
}

// Search Functionality
let filteredTools = [...aiTools];

function renderTools() {
    toolsGrid.innerHTML = '';
    
    filteredTools.forEach((tool, index) => {
        const card = document.createElement('article');
        card.className = 'tool-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', `${tool.name}: ${tool.description}`);

        card.innerHTML = `
            <div class="tool-header">
                <div class="tool-icon" aria-hidden="true">${tool.icon}</div>
                <h3 class="tool-name">${tool.name}</h3>
            </div>
            <p class="tool-description">${tool.description}</p>
            <a 
                href="${tool.url}" 
                class="tool-link" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit ${tool.name} website (opens in new tab)"
            >
                Visit Website
            </a>
        `;

        // Add click handler for the entire card
        card.addEventListener('click', () => {
            window.open(tool.url, '_blank', 'noopener,noreferrer');
        });

        // Add keyboard navigation
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(tool.url, '_blank', 'noopener,noreferrer');
            }
        });

        toolsGrid.appendChild(card);
    });
}

function handleSearch(query) {
    const searchTerm = query.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredTools = [...aiTools];
    } else {
        filteredTools = aiTools.filter(tool => 
            tool.name.toLowerCase().includes(searchTerm)
        );
    }

    renderTools();
    toggleNoResults();
}

function toggleNoResults() {
    if (filteredTools.length === 0) {
        noResults.style.display = 'block';
        toolsGrid.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        toolsGrid.style.display = 'grid';
    }
}

// Smooth Scrolling
function scrollToElement(element) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const elementPosition = element.offsetTop - headerHeight - 20;
    
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// Event Listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });
    
    searchButton.addEventListener('click', () => {
        handleSearch(searchInput.value);
    });
    
    // Enter key for search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch(e.target.value);
        }
    });
    
    // Discover button smooth scroll
    discoverButton.addEventListener('click', () => {
        scrollToElement(toolsSection);
    });
    
    // Escape key to clear search
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            handleSearch('');
            searchInput.focus();
        }
    });
}

// Loading animation
function showLoadingAnimation() {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = '';
    
    for (let i = 0; i < 12; i++) {
        const skeletonCard = document.createElement('div');
        skeletonCard.className = 'skeleton-card';
        skeletonCard.innerHTML = `
            <div class="skeleton-icon"></div>
            <div class="skeleton-content">
                <div class="skeleton-title"></div>
                <div class="skeleton-description"></div>
                <div class="skeleton-description short"></div>
                <div class="skeleton-button"></div>
            </div>
        `;
        toolsGrid.appendChild(skeletonCard);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Apply saved theme
        applyTheme(currentTheme);
        
        // Setup event listeners
        setupEventListeners();
        
        // Show loading animation
        showLoadingAnimation();
        
        // Render tools after a short delay
        setTimeout(() => {
            renderTools();
        }, 1000);
        
        console.log('AI Tools Directory initialized successfully!');
        
    } catch (error) {
        console.error('Failed to initialize AI Tools Directory:', error);
    }
fetch("/api/tools/")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if (Array.isArray(data) && data.length > 0) {
      filteredTools = data;
    } else {
      filteredTools = [...aiTools];
    }
    renderTools();
  })
  .catch(err => {
    console.error("API error:", err);
    filteredTools = [...aiTools];
    renderTools();
  });

});