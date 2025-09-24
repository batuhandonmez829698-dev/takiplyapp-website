// Şifre Korumalı JavaScript - Sadece şifre doğrulandıktan sonra yüklenir

// Şifre kontrolü
function checkPassword() {
    const passwordVerified = sessionStorage.getItem('passwordVerified');
    const passwordTime = sessionStorage.getItem('passwordTime');
    
    // Şifre doğrulandı mı kontrol et
    if (!passwordVerified || passwordVerified !== 'true') {
        window.location.href = 'password.html';
        return false;
    }
    
    // Şifre 24 saat geçerli (86400000 ms)
    const currentTime = Date.now();
    const timeDiff = currentTime - parseInt(passwordTime);
    
    if (timeDiff > 86400000) {
        sessionStorage.removeItem('passwordVerified');
        sessionStorage.removeItem('passwordTime');
        window.location.href = 'password.html';
        return false;
    }
    
    return true;
}

// Sayfa yüklendiğinde şifre kontrolü yap
if (!checkPassword()) {
    // Şifre kontrolü başarısız, sayfa yüklenmesin
    document.body.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-family: Poppins, sans-serif;"><div style="text-align: center;"><i class="fas fa-lock" style="font-size: 3rem; margin-bottom: 20px;"></i><h2>Şifre kontrolü yapılıyor...</h2></div></div>';
} else {
    // Şifre doğru, normal JavaScript kodunu yükle
    loadMainScript();
}

function loadMainScript() {
    // İslami İçerik Veritabanı
    const islamicContent = {
        dua: [
            // Besmele
            {
                arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                turkish: "Rahman ve Rahim olan Allah'ın adıyla"
            },
            // Günlük Dualar
            {
                arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
                turkish: "Rabbimiz! Bize dünyada da iyilik ver, ahirette de iyilik ver ve bizi cehennem azabından koru."
            },
            {
                arabic: "اللَّهُمَّ بَارِكْ لِي فِي وَقْتِي",
                turkish: "Allah'ım! Vaktimi bereketli kıl."
            },
            {
                arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
                turkish: "Rabbim! Göğsümü genişlet, işimi kolaylaştır."
            },
            {
                arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
                turkish: "Allah'ım! Senden hidayet, takva, iffet ve zenginlik dilerim."
            },
            {
                arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",
                turkish: "Allah'ı hamd ile birlikte tesbih ederim. Yüce Allah'ı tesbih ederim."
            },
            {
                arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ",
                turkish: "Allah'ım! Sen benim Rabbimsin. Senden başka ilah yoktur. Beni sen yarattın, ben senin kulunum."
            },
            {
                arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً",
                turkish: "Rabbimiz! Bizi doğru yola ilettikten sonra kalplerimizi saptırma. Bize katından bir rahmet bağışla."
            },
            {
                arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
                turkish: "Allah'ım! Kederden ve üzüntüden sana sığınırım."
            },
            // Sabah Duaları
            {
                arabic: "اللَّهُمَّ أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ",
                turkish: "Allah'ım! Sabahladık ve mülk Allah'ındır. Hamd Allah'a mahsustur."
            },
            {
                arabic: "اللَّهُمَّ إِنِّi أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
                turkish: "Allah'ım! Senden faydalı ilim, temiz rızık ve kabul edilen amel dilerim."
            },
            {
                arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
                turkish: "Allah'ım! Beni tevbe edenlerden ve temizlenenlerden kıl."
            }
        ],
        hadis: [
            // İman Hadisleri
            {
                arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْراً أَوْ لِيَصْمُتْ",
                turkish: "Allah'a ve ahiret gününe iman eden kimse ya hayır söylesin ya da sussun."
            },
            {
                arabic: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضاً",
                turkish: "Mümin, mümine karşı bir binanın parçaları gibidir, birbirini destekler."
            },
            {
                arabic: "مَنْ لَا يَرْحَمُ النَّاسَ لَا يَرْحَمُهُ اللَّهُ",
                turkish: "İnsanlara merhamet etmeyen kimseye Allah da merhamet etmez."
            },
            {
                arabic: "الْحَيَاءُ شُعْبَةٌ مِنَ الْإِيمَانِ",
                turkish: "Haya imanın bir şubesidir."
            },
            {
                arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
                turkish: "İnsanların en hayırlısı, insanlara en faydalı olanıdır."
            }
        ],
        ayet: [
            // Tevhid Ayetleri
            {
                arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
                turkish: "Allah'a güvenen kimse için O yeter."
            },
            {
                arabic: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ",
                turkish: "Benim başarım ancak Allah'tandır. O'na güvendim ve O'na dönerim."
            },
            {
                arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
                turkish: "Beni anın ki ben de sizi anayım."
            },
            {
                arabic: "وَاللَّهُ خَيْرُ الرَّازِقِينَ",
                turkish: "Allah rızık verenlerin en hayırlısıdır."
            },
            {
                arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
                turkish: "Kim Allah'tan sakınırsa, Allah ona bir çıkış yolu gösterir."
            }
        ],
        zikir: [
            // Temel Zikirler
            {
                arabic: "لَا إِلَهَ إِلَّا اللَّهُ",
                turkish: "Allah'tan başka ilah yoktur."
            },
            {
                arabic: "سُبْحَانَ اللَّهِ",
                turkish: "Allah'ı tesbih ederim."
            },
            {
                arabic: "الْحَمْدُ لِلَّهِ",
                turkish: "Hamd Allah'a mahsustur."
            },
            {
                arabic: "اللَّهُ أَكْبَرُ",
                turkish: "Allah en büyüktür."
            },
            {
                arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
                turkish: "Güç ve kuvvet ancak Allah'tandır."
            }
        ]
    };

    // Kullanıcı yüklenen arka plan
    let userBackground = null;

    // DOM elementleri - global değişkenler
    let postCanvas, arabicText, turkishText, contentSelect, arabicColor, turkishColor;
    let arabicSize, turkishSize, arabicSizeValue, turkishSizeValue;
    let downloadBtn, shareBtn, randomBtn, fullscreenBtn, fullscreenModal, fullscreenPreview, closeFullscreen;
    let contentSearch, searchResults, clearSearch;
    let uploadArea, backgroundInput, backgroundPreview, previewImage, removeBackground;
    let hashtagBtn, descriptionBtn;

    // Sayfa yüklendiğinde
    document.addEventListener('DOMContentLoaded', function() {
        // DOM elementlerini burada seç
        initializeDOMElements();
        setupEventListeners();
        loadDefaultContent();
        updateSizeDisplays();
    });

    // DOM elementlerini başlat
    function initializeDOMElements() {
        postCanvas = document.getElementById('postCanvas');
        arabicText = document.getElementById('arabicText');
        turkishText = document.getElementById('turkishText');
        contentSelect = document.getElementById('contentSelect');
        arabicColor = document.getElementById('arabicColor');
        turkishColor = document.getElementById('turkishColor');
        arabicSize = document.getElementById('arabicSize');
        turkishSize = document.getElementById('turkishSize');
        arabicSizeValue = document.getElementById('arabicSizeValue');
        turkishSizeValue = document.getElementById('turkishSizeValue');
        downloadBtn = document.getElementById('downloadBtn');
        shareBtn = document.getElementById('shareBtn');
        randomBtn = document.getElementById('randomBtn');
        fullscreenBtn = document.getElementById('fullscreenBtn');
        fullscreenModal = document.getElementById('fullscreenModal');
        fullscreenPreview = document.getElementById('fullscreenPreview');
        closeFullscreen = document.querySelector('.close-fullscreen');
        
        // Arama elementleri
        contentSearch = document.getElementById('contentSearch');
        searchResults = document.getElementById('searchResults');
        clearSearch = document.getElementById('clearSearch');
        
        // Arka plan yükleme elementleri
        uploadArea = document.getElementById('uploadArea');
        backgroundInput = document.getElementById('backgroundInput');
        backgroundPreview = document.getElementById('backgroundPreview');
        previewImage = document.getElementById('previewImage');
        removeBackground = document.getElementById('removeBackground');
        
        // Hashtag butonu
        hashtagBtn = document.getElementById('hashtagBtn');
        
        // Açıklama butonu
        descriptionBtn = document.getElementById('descriptionBtn');
    }

    // Varsayılan içerik yükle (Besmele)
    function loadDefaultContent() {
        if (arabicText && turkishText) {
            arabicText.textContent = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";
            turkishText.textContent = "Rahman ve Rahim olan Allah'ın adıyla";
        }
        if (contentSelect) {
            contentSelect.value = "dua";
        }
        updateTextStyles();
    }

    // Metin stillerini güncelle
    function updateTextStyles() {
        if (arabicText && arabicColor && arabicSize) {
            arabicText.style.color = arabicColor.value;
            arabicText.style.fontSize = arabicSize.value + 'px';
        }
        if (turkishText && turkishColor && turkishSize) {
            turkishText.style.color = turkishColor.value;
            turkishText.style.fontSize = turkishSize.value + 'px';
        }
        
        const postContent = document.querySelector('.post-content');
        const activeAlign = document.querySelector('.align-btn.active');
        if (activeAlign && postContent) {
            postContent.style.textAlign = activeAlign.dataset.align;
        }
        
        updateSizeDisplays();
    }

    // Boyut değerlerini güncelle
    function updateSizeDisplays() {
        if (arabicSizeValue && arabicSize) {
            arabicSizeValue.textContent = arabicSize.value + 'px';
        }
        if (turkishSizeValue && turkishSize) {
            turkishSizeValue.textContent = turkishSize.value + 'px';
        }
    }

    // Event listener'ları ayarla
    function setupEventListeners() {
        if (contentSelect) contentSelect.addEventListener('change', loadSelectedContent);
        if (arabicColor) arabicColor.addEventListener('input', updateTextStyles);
        if (turkishColor) turkishColor.addEventListener('input', updateTextStyles);
        if (arabicSize) arabicSize.addEventListener('input', updateTextStyles);
        if (turkishSize) turkishSize.addEventListener('input', updateTextStyles);
        if (downloadBtn) downloadBtn.addEventListener('click', downloadPost);
        if (hashtagBtn) hashtagBtn.addEventListener('click', showHashtagsForCurrentContent);
        if (descriptionBtn) descriptionBtn.addEventListener('click', showDescriptionForCurrentContent);
        if (shareBtn) shareBtn.addEventListener('click', sharePost);
        if (randomBtn) randomBtn.addEventListener('click', loadRandomContent);
        if (fullscreenBtn) fullscreenBtn.addEventListener('click', openFullscreen);
        if (closeFullscreen) closeFullscreen.addEventListener('click', closeFullscreenModal);
        
        // Arama event listener'ları
        if (contentSearch) contentSearch.addEventListener('input', handleSearch);
        if (clearSearch) clearSearch.addEventListener('click', clearSearchResults);
        
        // Arka plan yükleme event listener'ları
        setupBackgroundUpload();
        
        // Hizalama butonları
        document.querySelectorAll('.align-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.align-btn').forEach(b => b.classList.remove('active'));
                e.target.closest('.align-btn').classList.add('active');
                updateTextStyles();
            });
        });
        
        // Modal dışına tıklama
        if (fullscreenModal) {
            fullscreenModal.addEventListener('click', (e) => {
                if (e.target === fullscreenModal) {
                    closeFullscreenModal();
                }
            });
        }
        
        // ESC tuşu ile modal kapatma
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && fullscreenModal && fullscreenModal.classList.contains('active')) {
                closeFullscreenModal();
            }
        });
    }

    // Seçilen içeriği yükle
    function loadSelectedContent() {
        if (!contentSelect) return;
        
        const selectedType = contentSelect.value;
        if (selectedType && islamicContent[selectedType]) {
            const content = islamicContent[selectedType];
            const randomIndex = Math.floor(Math.random() * content.length);
            const selectedContent = content[randomIndex];
            
            if (arabicText) {
                arabicText.textContent = selectedContent.arabic;
            }
            if (turkishText) {
                turkishText.textContent = selectedContent.turkish;
            }
        }
    }

    // Rastgele içerik yükle
    function loadRandomContent() {
        const types = Object.keys(islamicContent);
        const randomType = types[Math.floor(Math.random() * types.length)];
        const content = islamicContent[randomType];
        const randomIndex = Math.floor(Math.random() * content.length);
        const selectedContent = content[randomIndex];
        
        if (contentSelect) {
            contentSelect.value = randomType;
        }
        if (arabicText) {
            arabicText.textContent = selectedContent.arabic;
        }
        if (turkishText) {
            turkishText.textContent = selectedContent.turkish;
        }
    }

    // Diğer fonksiyonlar buraya eklenecek...
    function downloadPost() {
        alert('Post indirme özelliği aktif!');
    }

    function sharePost() {
        alert('Paylaşım özelliği aktif!');
    }

    function openFullscreen() {
        if (fullscreenModal) {
            fullscreenModal.classList.add('active');
        }
    }

    function closeFullscreenModal() {
        if (fullscreenModal) {
            fullscreenModal.classList.remove('active');
        }
    }

    function handleSearch() {
        // Arama fonksiyonu
    }

    function clearSearchResults() {
        // Arama temizleme
    }

    function showHashtagsForCurrentContent() {
        alert('Hashtag özelliği aktif!');
    }

    function showDescriptionForCurrentContent() {
        alert('Açıklama özelliği aktif!');
    }

    function setupBackgroundUpload() {
        if (!uploadArea || !backgroundInput) return;
        
        uploadArea.addEventListener('click', () => {
            if (backgroundInput) backgroundInput.click();
        });
        
        backgroundInput.addEventListener('change', handleFileSelect);
        
        uploadArea.addEventListener('dragover', handleDragOver);
        uploadArea.addEventListener('dragleave', handleDragLeave);
        uploadArea.addEventListener('drop', handleDrop);
        
        if (removeBackground) {
            removeBackground.addEventListener('click', removeUserBackground);
        }
    }

    function handleFileSelect(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            loadUserBackground(file);
        }
    }

    function handleDragOver(event) {
        event.preventDefault();
        uploadArea.classList.add('dragover');
    }

    function handleDragLeave(event) {
        event.preventDefault();
        uploadArea.classList.remove('dragover');
    }

    function handleDrop(event) {
        event.preventDefault();
        uploadArea.classList.remove('dragover');
        
        const files = event.dataTransfer.files;
        if (files.length > 0 && files[0].type.startsWith('image/')) {
            loadUserBackground(files[0]);
        }
    }

    function loadUserBackground(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            userBackground = e.target.result;
            if (previewImage) previewImage.src = userBackground;
            if (backgroundPreview) backgroundPreview.style.display = 'block';
            if (uploadArea) uploadArea.style.display = 'none';
            
            if (postCanvas) {
                postCanvas.style.backgroundImage = `url(${userBackground})`;
                postCanvas.style.backgroundSize = 'cover';
                postCanvas.style.backgroundPosition = 'center';
            }
        };
        reader.readAsDataURL(file);
    }

    function removeUserBackground() {
        userBackground = null;
        if (backgroundPreview) backgroundPreview.style.display = 'none';
        if (uploadArea) uploadArea.style.display = 'block';
        
        if (postCanvas) {
            postCanvas.style.backgroundImage = '';
            postCanvas.style.backgroundSize = '';
            postCanvas.style.backgroundPosition = '';
        }
    }
}
