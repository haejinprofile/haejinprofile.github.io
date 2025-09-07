// Gallery Images Data
const galleryImages = [
    { src: "해진 에셋/affectionate_gaze.jpg", title: "애정 어린 시선", category: "emotion" },
    { src: "해진 에셋/affectionate_hug.jpg", title: "애정 어린 포옹", category: "emotion" },
    { src: "해진 에셋/bathe_by_river.jpg", title: "강가에서 목욕", category: "daily" },
    { src: "해진 에셋/be_led_by_holding_hands.jpg", title: "손잡고 이끌림", category: "interaction" },
    { src: "해진 에셋/be_surprised.jpg", title: "놀라는 표정", category: "emotion" },
    { src: "해진 에셋/before_sleep_on_bed.jpg", title: "잠들기 전", category: "daily" },
    { src: "해진 에셋/BL_standing_carry_sex_bottom.jpg", title: "서서 안고 (하)", category: "adult", isAdult: true },
    { src: "해진 에셋/BL_standing_carry_sex_top.jpg", title: "서서 안고 (상)", category: "adult", isAdult: true },
    { src: "해진 에셋/BL_standing_carry_sex.jpg", title: "서서 안고", category: "adult", isAdult: true },
    { src: "해진 에셋/bursting_laughter.jpg", title: "폭소", category: "emotion" },
    { src: "해진 에셋/caress_hammer.jpg", title: "망치 어루만지기", category: "tool" },
    { src: "해진 에셋/catch_fish_by_hand.jpg", title: "손으로 물고기 잡기", category: "survival" },
    { src: "해진 에셋/catch_fish_with_spear.jpg", title: "창으로 물고기 잡기", category: "survival" },
    { src: "해진 에셋/chop_firewood.jpg", title: "장작 패기", category: "survival" },
    { src: "해진 에셋/cold_gaze_and_alert.jpg", title: "차가운 시선과 경계", category: "emotion" },
    { src: "해진 에셋/conversation_by_campfire.jpg", title: "모닥불 곁 대화", category: "interaction" },
    { src: "해진 에셋/conversation_during_farming.jpg", title: "농사 중 대화", category: "interaction" },
    { src: "해진 에셋/cry.jpg", title: "눈물", category: "emotion" },
    { src: "해진 에셋/curiosity_by_campfire.jpg", title: "모닥불 곁 호기심", category: "emotion" },
    { src: "해진 에셋/determination.jpg", title: "결의", category: "emotion" },
    { src: "해진 에셋/discovery_at_beach.jpg", title: "해변에서의 발견", category: "story" },
    { src: "해진 에셋/doggy_sex_orgasm.jpg", title: "후배위 절정", category: "adult", isAdult: true },
    { src: "해진 에셋/doggy_sex_thrust_hard.jpg", title: "후배위 격렬", category: "adult", isAdult: true },
    { src: "해진 에셋/doggy_sex.jpg", title: "후배위", category: "adult", isAdult: true },
    { src: "해진 에셋/dry_wet_clothes_by_campfire.jpg", title: "모닥불에 젖은 옷 말리기", category: "daily" },
    { src: "해진 에셋/eat_meat_by_campfire.jpg", title: "모닥불에서 고기 먹기", category: "daily" },
    { src: "해진 에셋/excited_expression.jpg", title: "흥분한 표정", category: "emotion" },
    { src: "해진 에셋/fall_into_deep_sleep_on_bed.jpg", title: "침대에서 깊이 잠들기", category: "daily" },
    { src: "해진 에셋/fellatio_orgasm.jpg", title: "펠라치오 절정", category: "adult", isAdult: true },
    { src: "해진 에셋/gather_firewood_in_winter.jpg", title: "겨울 장작 모으기", category: "survival" },
    { src: "해진 에셋/gather_firewood.jpg", title: "장작 모으기", category: "survival" },
    { src: "해진 에셋/gather_plants.jpg", title: "식물 채집", category: "survival" },
    { src: "해진 에셋/gentle_smile.jpg", title: "부드러운 미소", category: "emotion" },
    { src: "해진 에셋/get_angry.jpg", title: "분노", category: "emotion" },
    { src: "해진 에셋/get_injured.jpg", title: "부상당함", category: "survival" },
    { src: "해진 에셋/grill_meat_on_campfire.jpg", title: "모닥불에서 고기 굽기", category: "daily" },
    { src: "해진 에셋/happy_smile.jpg", title: "행복한 미소", category: "emotion" },
    { src: "해진 에셋/harvest_crops.jpg", title: "작물 수확", category: "survival" },
    { src: "해진 에셋/heal_wounds_on_his_own.jpg", title: "혼자 상처 치료", category: "survival" },
    { src: "해진 에셋/hide_tears.jpg", title: "눈물 숨기기", category: "emotion" },
    { src: "해진 에셋/HL_standing_carry_sex_orgasm.jpg", title: "서서 안고 절정", category: "adult", isAdult: true },
    { src: "해진 에셋/HL_standing_carry_sex.jpg", title: "서서 안고 사랑", category: "adult", isAdult: true },
    { src: "해진 에셋/hold_back_moan_masturbate_on_bed.jpg", title: "침대에서 신음 참으며", category: "adult", isAdult: true },
    { src: "해진 에셋/hold_back_strongly_not_to_leave.jpg", title: "떠나지 못하게 강하게 붙잡기", category: "interaction" },
    { src: "해진 에셋/hug_indifferently.jpg", title: "무관심한 포옹", category: "interaction" },
    { src: "해진 에셋/hug_with_excitation.jpg", title: "흥분한 포옹", category: "interaction" },
    { src: "해진 에셋/lead_by_holding_hands.jpg", title: "손잡고 이끌기", category: "interaction" },
    { src: "해진 에셋/look_at_wide_sea.jpg", title: "넓은 바다 바라보기", category: "scenery" },
    { src: "해진 에셋/masturbate_against_wall_excited.jpg", title: "벽에 기대 흥분", category: "adult", isAdult: true },
    { src: "해진 에셋/masturbate_against_wall.jpg", title: "벽에 기대", category: "adult", isAdult: true },
    { src: "해진 에셋/masturbate_in_cabin.jpg", title: "오두막에서", category: "adult", isAdult: true },
    { src: "해진 에셋/masturbate_on_bed.jpg", title: "침대에서", category: "adult", isAdult: true },
    { src: "해진 에셋/masturbate_orgasm_against_wall.jpg", title: "벽에 기대 절정", category: "adult", isAdult: true },
    { src: "해진 에셋/masturbate_orgasm_in_cabin.jpg", title: "오두막에서 절정", category: "adult", isAdult: true },
    { src: "해진 에셋/meal.jpg", title: "식사", category: "daily" },
    { src: "해진 에셋/missionary_sex_excited.jpg", title: "정상위 흥분", category: "adult", isAdult: true },
    { src: "해진 에셋/missionary_sex_orgasm.jpg", title: "정상위 절정", category: "adult", isAdult: true },
    { src: "해진 에셋/missionary_sex_panting.jpg", title: "정상위 헐떡임", category: "adult", isAdult: true },
    { src: "해진 에셋/missionary_sex_pleasure.jpg", title: "정상위 쾌락", category: "adult", isAdult: true },
    { src: "해진 에셋/missionary_sex.jpg", title: "정상위", category: "adult", isAdult: true },
    { src: "해진 에셋/orgasm_face_closeup.jpg", title: "절정 표정 클로즈업", category: "adult", isAdult: true },
    { src: "해진 에셋/pillow_talk.jpg", title: "베개 위 대화", category: "interaction" },
    { src: "해진 에셋/pull_out_weeds.jpg", title: "잡초 뽑기", category: "survival" },
    { src: "해진 에셋/repair_cabin.jpg", title: "오두막 수리", category: "survival" },
    { src: "해진 에셋/serious_conversation_by_campfire.jpg", title: "모닥불 곁 진지한 대화", category: "interaction" },
    { src: "해진 에셋/serious_talk_on_bed.jpg", title: "침대에서 진지한 대화", category: "interaction" },
    { src: "해진 에셋/sigh_of_relief.jpg", title: "안도의 한숨", category: "emotion" },
    { src: "해진 에셋/sincere_smile.jpg", title: "진심 어린 미소", category: "emotion" },
    { src: "해진 에셋/sit_and_rest_for_a_while.jpg", title: "잠시 앉아 쉬기", category: "daily" },
    { src: "해진 에셋/slight_contemplation.jpg", title: "가벼운 사색", category: "emotion" },
    { src: "해진 에셋/smoke_cigarette_and_talk.jpg", title: "담배 피우며 대화", category: "daily" },
    { src: "해진 에셋/smoke_cigarette_looking_elsewhere.jpg", title: "담배 피우며 딴 곳 보기", category: "daily" },
    { src: "해진 에셋/smoke_cigarette.jpg", title: "담배 피우기", category: "daily" },
    { src: "해진 에셋/stand_guard_with_axe.jpg", title: "도끼로 경계", category: "survival" },
    { src: "해진 에셋/take_off_clothes.jpg", title: "옷 벗기", category: "adult", isAdult: true },
    { src: "해진 에셋/take_off_pants.jpg", title: "바지 벗기", category: "adult", isAdult: true },
    { src: "해진 에셋/take_out_herbs.jpg", title: "약초 꺼내기", category: "survival" },
    { src: "해진 에셋/tend_crops.jpg", title: "작물 돌보기", category: "survival" },
    { src: "해진 에셋/trauma_trigger.jpg", title: "트라우마 발동", category: "emotion" },
    { src: "해진 에셋/treat_others_wounds .jpg", title: "타인의 상처 치료", category: "interaction" },
    { src: "해진 에셋/undress_by_river.jpg", title: "강가에서 옷 벗기", category: "daily" },
    { src: "해진 에셋/vigilance_on_bed.jpg", title: "침대에서 경계", category: "emotion" },
    { src: "해진 에셋/wash_hair_by_river.jpg", title: "강가에서 머리 감기", category: "daily" }
];

// DOM Elements
let loadingScreen, header, hamburger, navMenu, navLinks, audioBtn, bgMusic, galleryGrid, modal, modalImage, modalClose, prevBtn, nextBtn;
let currentImageIndex = 0;
let filteredImages = galleryImages;
let isAdultContentVisible = false;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    initializeLoadingScreen();
    initializeNavigation();
    initializeScrollEffects();
    initializeAudioPlayer();
    initializeGallery();
    initializeModal();
    initializeScrollReveal();
});

function initializeElements() {
    loadingScreen = document.getElementById('loadingScreen');
    header = document.getElementById('header');
    hamburger = document.getElementById('hamburger');
    navMenu = document.getElementById('navMenu');
    navLinks = document.querySelectorAll('.nav-link');
    audioBtn = document.getElementById('audioBtn');
    bgMusic = document.getElementById('bgMusic');
    galleryGrid = document.getElementById('galleryGrid');
    modal = document.getElementById('galleryModal');
    modalImage = document.getElementById('modalImage');
    modalClose = document.getElementById('modalClose');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
}

function initializeLoadingScreen() {
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

function initializeNavigation() {
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeScrollEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header scroll effect
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active navigation based on scroll position
        updateActiveNavigation();
        
        lastScrollTop = scrollTop;
    });
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = header.offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollTop = window.pageYOffset;
        
        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            const sectionId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function initializeAudioPlayer() {
    if (audioBtn && bgMusic) {
        audioBtn.addEventListener('click', function() {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    audioBtn.classList.add('playing');
                    audioBtn.innerHTML = '<span class="audio-icon">🔊</span>';
                }).catch(error => {
                    console.log('Audio play failed:', error);
                });
            } else {
                bgMusic.pause();
                audioBtn.classList.remove('playing');
                audioBtn.innerHTML = '<span class="audio-icon">🎵</span>';
            }
        });
        
        // Reset button when audio ends
        bgMusic.addEventListener('ended', function() {
            audioBtn.classList.remove('playing');
            audioBtn.innerHTML = '<span class="audio-icon">🎵</span>';
        });
    }
}

function initializeGallery() {
    if (!galleryGrid) return;
    
    // Create gallery filter buttons
    createGalleryFilters();
    
    // Load all images initially (excluding adult content by default)
    updateGallery();
}

function createGalleryFilters() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'gallery-filters';
    filterContainer.innerHTML = `
        <div class="filter-buttons">
            <button class="filter-btn active" data-filter="all">전체</button>
            <button class="filter-btn" data-filter="emotion">감정</button>
            <button class="filter-btn" data-filter="daily">일상</button>
            <button class="filter-btn" data-filter="survival">생존</button>
            <button class="filter-btn" data-filter="interaction">상호작용</button>
            <button class="filter-btn" data-filter="scenery">풍경</button>
            <button class="filter-btn adult-filter" data-filter="adult">성인 콘텐츠</button>
        </div>
        <div class="adult-content-toggle">
            <label class="toggle-switch">
                <input type="checkbox" id="adultToggle">
                <span class="toggle-slider"></span>
                <span class="toggle-label">성인 콘텐츠 표시</span>
            </label>
        </div>
    `;
    
    galleryGrid.parentNode.insertBefore(filterContainer, galleryGrid);
    
    // Add filter button event listeners
    const filterButtons = filterContainer.querySelectorAll('.filter-btn');
    const adultToggle = document.getElementById('adultToggle');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterGallery(filter);
        });
    });
    
    // Adult content toggle
    if (adultToggle) {
        adultToggle.addEventListener('change', function() {
            isAdultContentVisible = this.checked;
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            filterGallery(activeFilter);
        });
    }
}

function filterGallery(filter) {
    if (filter === 'all') {
        filteredImages = isAdultContentVisible ? 
            galleryImages : 
            galleryImages.filter(img => !img.isAdult);
    } else {
        filteredImages = galleryImages.filter(img => {
            const categoryMatch = img.category === filter;
            const adultFilter = isAdultContentVisible || !img.isAdult;
            return categoryMatch && adultFilter;
        });
    }
    
    updateGallery();
}

function updateGallery() {
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    filteredImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}" loading="lazy">
            <div class="gallery-overlay">
                <span>👁</span>
            </div>
            ${image.isAdult ? '<div class="adult-badge">18+</div>' : ''}
        `;
        
        galleryItem.addEventListener('click', function() {
            openModal(index);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

function initializeModal() {
    if (!modal) return;
    
    // Close modal events
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Navigation events
    if (prevBtn) {
        prevBtn.addEventListener('click', showPrevImage);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', showNextImage);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('show')) {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    showPrevImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        }
    });
}

function openModal(index) {
    currentImageIndex = index;
    const image = filteredImages[index];
    
    if (modalImage) {
        modalImage.src = image.src;
        modalImage.alt = image.title;
    }
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    const image = filteredImages[currentImageIndex];
    
    if (modalImage) {
        modalImage.src = image.src;
        modalImage.alt = image.title;
    }
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    const image = filteredImages[currentImageIndex];
    
    if (modalImage) {
        modalImage.src = image.src;
        modalImage.alt = image.title;
    }
}

function initializeScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const elementsToReveal = document.querySelectorAll('.profile-section, .world-card, .reaction-card, .dialogue-category');
    elementsToReveal.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add resize listener for responsive adjustments
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on resize
    if (window.innerWidth > 1024) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}, 250));

// Preload critical images
function preloadCriticalImages() {
    const criticalImages = [
        '해진 썸네일.png',
        '해진 에셋/serious_conversation_by_campfire.jpg',
        '해진 에셋/look_at_wide_sea.jpg',
        '해진 에셋/discovery_at_beach.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadCriticalImages();

// Add CSS for gallery filters
const galleryFilterStyles = `
<style>
.gallery-filters {
    margin-bottom: 3rem;
    text-align: center;
}

.filter-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.filter-btn {
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    transition: var(--transition-smooth);
    font-family: var(--font-primary);
    font-size: 0.9rem;
    font-weight: 500;
}

.filter-btn:hover,
.filter-btn.active {
    background: var(--cyan-bright);
    color: var(--primary-navy);
    border-color: var(--cyan-bright);
    transform: translateY(-2px);
}

.filter-btn.adult-filter {
    border-color: var(--sand-golden);
    color: var(--sand-light);
}

.filter-btn.adult-filter:hover,
.filter-btn.adult-filter.active {
    background: var(--sand-golden);
    color: var(--primary-navy);
}


.adult-content-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.toggle-switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    user-select: none;
}

.toggle-switch input {
    display: none;
}

.toggle-slider {
    position: relative;
    width: 50px;
    height: 24px;
    background: var(--border-color);
    border-radius: 12px;
    transition: var(--transition-smooth);
}

.toggle-slider::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: var(--transition-smooth);
}

.toggle-switch input:checked + .toggle-slider {
    background: var(--sand-golden);
}

.toggle-switch input:checked + .toggle-slider::before {
    transform: translateX(26px);
}

.toggle-label {
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
}

.adult-badge {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: var(--sand-golden);
    color: var(--primary-navy);
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: bold;
    z-index: 2;
}

@media (max-width: 768px) {
    .filter-buttons {
        gap: 0.5rem;
    }
    
    .filter-btn {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
    }
    
    .adult-content-toggle {
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>
`;

// Add the styles to the page
document.head.insertAdjacentHTML('beforeend', galleryFilterStyles);
