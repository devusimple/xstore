const { createApp, ref, computed, onMounted, onUnmounted, watch } = Vue;

        createApp({
            setup() {
                // --- THEME STATE ---
                const currentTheme = ref('system'); // 'light', 'dark', 'system'
                const isDark = ref(false);

                // Apply theme based on preference
                const applyTheme = (theme) => {
                    const html = document.documentElement;
                    if (theme === 'dark') {
                        html.classList.add('dark');
                        isDark.value = true;
                    } else if (theme === 'light') {
                        html.classList.remove('dark');
                        isDark.value = false;
                    } else {
                        // System
                        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                            html.classList.add('dark');
                            isDark.value = true;
                        } else {
                            html.classList.remove('dark');
                            isDark.value = false;
                        }
                    }
                };

                const setTheme = (theme) => {
                    currentTheme.value = theme;
                    localStorage.setItem('app-theme', theme);
                    applyTheme(theme);
                };

                // --- AUTH STATE ---
                const isLoggedIn = ref(false);

                const login = () => {
                    // Mock login
                    isLoggedIn.value = true;
                    // In a real app, you'd redirect to OAuth
                };

                const logout = () => {
                    isLoggedIn.value = false;
                };

                // --- NAVIGATION STATE ---
                const currentTab = ref('home');
                const currentView = ref('home');
                const searchQuery = ref('');
                const selectedApp = ref(null);
                const currentCarouselIndex = ref(0);
                let carouselInterval = null;

                // --- MOCK DATA ---
                const apps = ref([
                    { id: 1, name: "Pixel Studio", developer: "Creative Arts", category: "Graphics", rating: 4.8, size: "145 MB", icon: "https://picsum.photos/seed/pixel/200/200", description: "Professional pixel art editor.", link: "#" },
                    { id: 2, name: "TaskFlow Pro", developer: "Prod Masters", category: "Productivity", rating: 4.6, size: "52 MB", icon: "https://picsum.photos/seed/task/200/200", description: "Kanban boards and reminders.", link: "#" },
                    { id: 3, name: "Neon Racer", developer: "Speed Games", category: "Games", rating: 4.9, size: "1.2 GB", icon: "https://picsum.photos/seed/neon/200/200", description: "Cyberpunk racing game.", link: "#" },
                    { id: 4, name: "Learn Japanese", developer: "EduSoft", category: "Education", rating: 4.7, size: "230 MB", icon: "https://picsum.photos/seed/japan/200/200", description: "Master Japanese language.", link: "#" },
                    { id: 5, name: "Music Stream", developer: "Audio Vibes", category: "Music", rating: 4.5, size: "65 MB", icon: "https://picsum.photos/seed/music/200/200", description: "Stream millions of songs.", link: "#" },
                    { id: 6, name: "FitTrack", developer: "Health Corp", category: "Health", rating: 4.4, size: "45 MB", icon: "https://picsum.photos/seed/fit/200/200", description: "Track your daily workouts.", link: "#" },
                    { id: 7, name: "Photo Editor", developer: "Lens Lab", category: "Graphics", rating: 4.7, size: "89 MB", icon: "https://picsum.photos/seed/photo/200/200", description: "Edit photos like a pro.", link: "#" },
                    { id: 8, name: "ChatSafe", developer: "Secure Net", category: "Social", rating: 4.3, size: "30 MB", icon: "https://picsum.photos/seed/chat/200/200", description: "Encrypted messaging app.", link: "#" }
                ]);

                const suggestions = ["Top Games", "Social Networking", "Productivity", "Entertainment", "Educational"];
                const popularTags = ["Free", "Editor's Choice", "Puzzle", "Action", "New Release"];

                const tabs = [
                    { id: 'home', label: 'Home', icon: 'fas fa-home' },
                    { id: 'updates', label: 'Updates', icon: 'fas fa-cloud-download-alt' },
                    { id: 'search', label: 'Search', icon: 'fas fa-search' },
                    { id: 'profile', label: 'Profile', icon: 'fas fa-user' } // Renamed to Profile
                ];

                const categories = ['Top Charts', 'Games', 'Productivity', 'Social', 'Entertainment'];

                // --- COMPUTED ---
                const carouselApps = computed(() => apps.value.slice(0, 4));
                const topApps = computed(() => apps.value.slice(0, 5));
                const allApps = computed(() => apps.value);

                const filteredApps = computed(() => {
                    if (!searchQuery.value) return [];
                    const lower = searchQuery.value.toLowerCase();
                    return apps.value.filter(app => 
                        app.name.toLowerCase().includes(lower) || 
                        app.category.toLowerCase().includes(lower)
                    );
                });

                const pageTitle = computed(() => {
                    if(currentView.value === 'detail') return selectedApp.value ? selectedApp.value.name : 'App';
                    if(currentTab.value === 'home') return 'Discover';
                    if(currentTab.value === 'updates') return 'Updates';
                    if(currentTab.value === 'search') return 'Search';
                    if(currentTab.value === 'profile') return 'Profile';
                    return 'AppStore';
                });

                // --- METHODS ---
                const switchTab = (tabId) => {
                    currentTab.value = tabId;
                    currentView.value = tabId;
                    searchQuery.value = ''; 
                    selectedApp.value = null;
                };

                const openApp = (app) => {
                    selectedApp.value = app;
                    currentView.value = 'detail';
                };

                const goBack = () => {
                    if (currentView.value === 'detail') {
                        currentView.value = currentTab.value;
                        selectedApp.value = null;
                    }
                };

                const startCarousel = () => {
                    carouselInterval = setInterval(() => {
                        currentCarouselIndex.value = (currentCarouselIndex.value + 1) % carouselApps.value.length;
                    }, 4000);
                };

                const stopCarousel = () => {
                    if (carouselInterval) clearInterval(carouselInterval);
                };

                // Initialize Theme from LocalStorage
                onMounted(() => {
                    startCarousel();
                    const savedTheme = localStorage.getItem('app-theme') || 'system';
                    setTheme(savedTheme);
                });

                onUnmounted(() => {
                    stopCarousel();
                });

                return {
                    currentTab, currentView, searchQuery, selectedApp, currentCarouselIndex,
                    apps, carouselApps, topApps, allApps, filteredApps,
                    suggestions, popularTags, tabs, categories, pageTitle,
                    switchTab, openApp, goBack,
                    // Theme & Auth
                    currentTheme, isDark, setTheme, isLoggedIn, login, logout
                };
            }
        }).mount('#app');