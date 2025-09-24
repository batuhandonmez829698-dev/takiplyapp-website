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

    // Post'u indir
    function downloadPost() {
        // Canvas oluştur - Instagram için optimize edilmiş
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Instagram için kare format (1:1 oran)
        const size = 1080; // Instagram'ın kabul ettiği boyut
        canvas.width = size;
        canvas.height = size;
        
        // Canvas kalitesini artır
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        
        // DPI ayarı (Instagram için önemli)
        const dpi = 2; // Retina ekranlar için
        canvas.width = size * dpi;
        canvas.height = size * dpi;
        ctx.scale(dpi, dpi);
        
        // Kullanıcı arka planı varsa onu kullan
        if (userBackground) {
            const img = new Image();
            img.onload = function() {
                // Arka plan görselini çiz
                ctx.drawImage(img, 0, 0, size, size);
                
                // Koyu overlay ekle
                ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
                ctx.fillRect(0, 0, size, size);
                
                // Metinleri çiz
                drawTexts(ctx, size);
                
                // İndirme işlemini burada yap
                downloadCanvas(canvas);
            };
            img.src = userBackground;
        } else {
            // Varsayılan gradient arka plan
            const gradient = ctx.createLinearGradient(0, 0, size, size);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, size, size);
            
            // Metinleri çiz
            drawTexts(ctx, size);
            
            // İndirme işlemini burada yap
            downloadCanvas(canvas);
        }
    }

    // Canvas'ı indir
    function downloadCanvas(canvas) {
        // Türkçe metni dosya adı olarak kullan
        const turkishText = document.getElementById('turkishText').textContent;
        const fileName = turkishText
            .replace(/[^\w\s]/gi, '') // Özel karakterleri kaldır
            .replace(/\s+/g, '-') // Boşlukları tire ile değiştir
            .substring(0, 50) // Maksimum 50 karakter
            .toLowerCase();
        
        // İndirme linkini oluştur - Instagram için optimize edilmiş
        const link = document.createElement('a');
        link.download = fileName || 'islami-post';
        
        // Instagram için JPEG formatı (daha iyi uyumluluk)
        link.href = canvas.toDataURL('image/jpeg', 0.95); // Yüksek kalite JPEG
        link.click();
    }

    // Metinleri çiz
    function drawTexts(ctx, size) {
        const activeAlign = document.querySelector('.align-btn.active');
        const textAlign = activeAlign ? activeAlign.dataset.align : 'center';
        
        ctx.textAlign = textAlign;
        ctx.textBaseline = 'middle';
        
        // Metin kalitesini artır
        ctx.textRenderingOptimization = 'optimizeQuality';
        
        // Arapça metin
        const arabicText = document.getElementById('arabicText');
        const arabicSize = document.getElementById('arabicSize');
        const arabicColor = document.getElementById('arabicColor');
        
        ctx.fillStyle = arabicColor.value;
        ctx.font = `bold ${arabicSize.value * 2}px Amiri, serif`;
        
        const arabicLines = wrapText(ctx, arabicText.textContent, size - 100);
        const arabicY = (size / 2) - (arabicLines.length * arabicSize.value);
        
        arabicLines.forEach((line, index) => {
            ctx.fillText(line, size / 2, arabicY + (index * arabicSize.value * 2.5));
        });
        
        // Türkçe metin
        const turkishText = document.getElementById('turkishText');
        const turkishSize = document.getElementById('turkishSize');
        const turkishColor = document.getElementById('turkishColor');
        
        ctx.fillStyle = turkishColor.value;
        ctx.font = `${turkishSize.value * 2}px Poppins, sans-serif`;
        
        const turkishLines = wrapText(ctx, turkishText.textContent, size - 100);
        const turkishY = (size / 2) + 50;
        
        turkishLines.forEach((line, index) => {
            ctx.fillText(line, size / 2, turkishY + (index * turkishSize.value * 2));
        });
        
        // Watermark ekle - kalbimizdeiman
        drawWatermark(ctx, size);
    }

    // Watermark çiz
    function drawWatermark(ctx, size) {
        // Watermark ayarları
        const watermarkText = '@kalbimizdeiman';
        const fontSize = Math.max(16, size * 0.02); // Boyuta göre ayarlanabilir font boyutu
        
        // Watermark pozisyonu (sağ alt köşe)
        const x = size - 20;
        const y = size - 20;
        
        // Watermark stili
        ctx.save();
        ctx.textAlign = 'right';
        ctx.textBaseline = 'bottom';
        ctx.font = `bold ${fontSize}px Poppins, sans-serif`;
        
        // Gölge efekti
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillText(watermarkText, x + 1, y + 1);
        
        // Ana watermark - sarı renk (önizlemedeki gibi)
        ctx.fillStyle = '#ffd700'; // Altın sarı renk
        ctx.fillText(watermarkText, x, y);
        
        ctx.restore();
    }

    // Metni satırlara böl
    function wrapText(ctx, text, maxWidth) {
        const words = text.split(' ');
        const lines = [];
        let currentLine = words[0];
        
        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = ctx.measureText(currentLine + ' ' + word).width;
            if (width < maxWidth) {
                currentLine += ' ' + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }

    // Post'u paylaş
    function sharePost() {
        if (navigator.share) {
            navigator.share({
                title: 'İslami Instagram Post',
                text: `${arabicText.textContent}\n\n${turkishText.textContent}`,
                url: window.location.href
            });
        } else {
            // Fallback: metni panoya kopyala
            const textToShare = `${arabicText.textContent}\n\n${turkishText.textContent}`;
            navigator.clipboard.writeText(textToShare).then(() => {
                alert('Metin panoya kopyalandı!');
            });
        }
    }

    // Tam ekran aç
    function openFullscreen() {
        if (fullscreenModal && fullscreenPreview) {
            fullscreenPreview.innerHTML = postCanvas.outerHTML;
            fullscreenModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Tam ekran kapat
    function closeFullscreenModal() {
        if (fullscreenModal) {
            fullscreenModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    // Arama fonksiyonu
    function handleSearch() {
        const searchTerm = contentSearch.value.toLowerCase().trim();
        
        if (searchTerm.length < 2) {
            hideSearchResults();
            return;
        }
        
        const results = searchContent(searchTerm);
        displaySearchResults(results);
    }

    // İçerik arama
    function searchContent(searchTerm) {
        const results = [];
        
        Object.keys(islamicContent).forEach(category => {
            islamicContent[category].forEach((item, index) => {
                const arabicMatch = item.arabic.toLowerCase().includes(searchTerm);
                const turkishMatch = item.turkish.toLowerCase().includes(searchTerm);
                
                if (arabicMatch || turkishMatch) {
                    results.push({
                        ...item,
                        category: category,
                        index: index
                    });
                }
            });
        });
        
        return results.slice(0, 10); // Maksimum 10 sonuç
    }

    // Arama sonuçlarını göster
    function displaySearchResults(results) {
        if (results.length === 0) {
            hideSearchResults();
            return;
        }
        
        if (searchResults) {
            searchResults.innerHTML = '';
            
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <div class="search-result-category">${getCategoryName(result.category)}</div>
                    <div class="search-result-arabic">${result.arabic}</div>
                    <div class="search-result-turkish">${result.turkish}</div>
                `;
                
                resultItem.addEventListener('click', () => {
                    selectSearchResult(result);
                });
                
                searchResults.appendChild(resultItem);
            });
            
            searchResults.style.display = 'block';
            if (clearSearch) clearSearch.style.display = 'flex';
        }
    }

    // Arama sonuçlarını gizle
    function hideSearchResults() {
        if (searchResults) searchResults.style.display = 'none';
        if (clearSearch) clearSearch.style.display = 'none';
    }

    // Arama sonucu seç
    function selectSearchResult(result) {
        if (arabicText) arabicText.textContent = result.arabic;
        if (turkishText) turkishText.textContent = result.turkish;
        if (contentSelect) contentSelect.value = result.category;
        
        // Arama sonuçlarını temizle
        if (contentSearch) contentSearch.value = '';
        hideSearchResults();
    }

    // Arama sonuçlarını temizle
    function clearSearchResults() {
        if (contentSearch) contentSearch.value = '';
        hideSearchResults();
    }

    // Kategori adını al
    function getCategoryName(category) {
        const names = {
            'dua': 'Dua',
            'hadis': 'Hadis',
            'ayet': 'Ayet',
            'zikir': 'Zikir'
        };
        return names[category] || category;
    }

    // Mevcut içerik için hashtag'leri göster
    function showHashtagsForCurrentContent() {
        const turkishText = document.getElementById('turkishText').textContent;
        showHashtags(turkishText);
    }

    // Mevcut içerik için açıklama göster
    function showDescriptionForCurrentContent() {
        const arabicText = document.getElementById('arabicText').textContent;
        const turkishText = document.getElementById('turkishText').textContent;
        const category = document.getElementById('contentSelect').value;
        showDescription(arabicText, turkishText, category);
    }

    // Hashtag'leri oluştur ve göster
    function showHashtags(turkishText) {
        const hashtags = generateHashtags(turkishText);
        
        // Hashtag modal'ını oluştur
        const modal = document.createElement('div');
        modal.className = 'hashtag-modal';
        modal.innerHTML = `
            <div class="hashtag-content">
                <div class="hashtag-header">
                    <h3><i class="fas fa-hashtag"></i> Instagram Hashtag'leri</h3>
                    <button class="close-hashtag" onclick="this.parentElement.parentElement.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="hashtag-body">
                    <p class="hashtag-instruction">Bu hashtag'leri kopyalayıp Instagram'da kullanabilirsiniz:</p>
                    <div class="hashtag-list">
                        ${hashtags.map(tag => `<span class="hashtag-item">${tag}</span>`).join('')}
                    </div>
                    <button class="copy-hashtags" onclick="copyHashtags()">
                        <i class="fas fa-copy"></i> Tümünü Kopyala
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Kopyalama fonksiyonunu global yap
        window.copyHashtags = function() {
            const hashtagText = hashtags.join(' ');
            navigator.clipboard.writeText(hashtagText).then(() => {
                alert('Hashtag\'ler kopyalandı!');
            });
        };
    }

    // Hashtag'leri oluştur
    function generateHashtags(turkishText) {
        // Tüm mevcut hashtag'ler
        const allHashtags = [
            // Genel İslami
            '#islam', '#muslim', '#allah', '#muhammad', '#quran', '#hadith',
            '#deen', '#iman', '#taqwa', '#sunnah', '#islamic', '#islamicquotes',
            '#islamicpost', '#islamicart', '#islamiccalligraphy', '#islamicremembrance',
            
            // Dua ve İbadet
            '#dua', '#prayer', '#supplication', '#islamicprayer', '#dhikr', '#remembrance',
            '#tasbih', '#subhanallah', '#alhamdulillah', '#bismillah', '#besmele',
            '#mashallah', '#inshallah', '#barakallahu', '#jazakallahu',
            
            // Kuran ve Hadis
            '#quranicverses', '#holyquran', '#prophetmuhammad', '#sahih', '#authentic',
            '#quranrecitation', '#tilawah', '#memorization', '#hifz',
            
            // İslami Yaşam
            '#ramadan', '#hajj', '#umrah', '#masjid', '#mosque', '#kaaba', '#madinah',
            '#makkah', '#jerusalem', '#alquds', '#palestine', '#ummah', '#brotherhood',
            
            // İslami Değerler
            '#patience', '#sabr', '#gratitude', '#shukr', '#forgiveness', '#mercy',
            '#compassion', '#kindness', '#charity', '#zakat', '#sadaqah', '#gooddeeds',
            
            // İslami Eğitim
            '#islamiceducation', '#islamicstudies', '#islamiclearning', '#islamicwisdom',
            '#islamicteachings', '#islamicguidance', '#islamicinspiration',
            
            // İslami Sanat
            '#islamicdesign', '#islamicpattern', '#islamicgeometry', '#islamicarchitecture',
            '#islamiccalligraphy', '#islamicartwork', '#islamicbeauty',
            
            // İslami Topluluk
            '#islamiccommunity', '#islamicbrotherhood', '#islamicunity', '#islamiclove',
            '#islamicpeace', '#islamicharmony', '#islamicfamily', '#islamicmarriage',
            
            // İslami Motivasyon
            '#islamicmotivation', '#islamicinspiration', '#islamicwisdom', '#islamicquotes',
            '#islamicreminder', '#islamicreflection', '#islamicmeditation', '#islamicmindfulness',
            
            // Sayfa reklamı hashtag'leri
            '#kalbimizdeiman', '#kalbimizdeimanpage', '#kalbimizdeimanquotes', '#kalbimizdeimanposts',
            '#kalbimizdeimanislamic', '#kalbimizdeimancontent', '#kalbimizdeimanart', '#kalbimizdeimanreminder'
        ];
        
        // İçeriğe göre özel hashtag'ler
        const contentHashtags = [];
        
        if (turkishText.toLowerCase().includes('besmele') || turkishText.toLowerCase().includes('bismillah')) {
            contentHashtags.push('#bismillah', '#besmele', '#islamicquotes', '#islamicreminder');
        }
        
        if (turkishText.toLowerCase().includes('dua') || turkishText.toLowerCase().includes('prayer')) {
            contentHashtags.push('#dua', '#prayer', '#supplication', '#islamicprayer', '#dhikr');
        }
        
        if (turkishText.toLowerCase().includes('hadis') || turkishText.toLowerCase().includes('hadith')) {
            contentHashtags.push('#hadith', '#sunnah', '#prophetmuhammad', '#islamicquotes', '#authentic');
        }
        
        if (turkishText.toLowerCase().includes('ayet') || turkishText.toLowerCase().includes('verse')) {
            contentHashtags.push('#quran', '#quranicverses', '#holyquran', '#islamicquotes', '#tilawah');
        }
        
        if (turkishText.toLowerCase().includes('zikir') || turkishText.toLowerCase().includes('dhikr')) {
            contentHashtags.push('#dhikr', '#remembrance', '#tasbih', '#islamicremembrance', '#subhanallah');
        }
        
        // Rastgele hashtag'ler seç (her foto için farklı)
        const shuffled = [...allHashtags].sort(() => 0.5 - Math.random());
        
        // Sayfa reklamı hashtag'lerini her zaman dahil et
        const brandingHashtags = ['#kalbimizdeiman', '#kalbimizdeimanpage'];
        const selectedHashtags = [...brandingHashtags, ...contentHashtags, ...shuffled.slice(0, 18)];
        
        // Benzersiz yap ve maksimum 25 hashtag döndür
        const uniqueHashtags = [...new Set(selectedHashtags)];
        return uniqueHashtags.slice(0, 25);
    }

    // Açıklama oluştur ve göster
    function showDescription(arabicText, turkishText, category) {
        const description = generateDescription(arabicText, turkishText, category);
        
        // Açıklama modal'ını oluştur
        const modal = document.createElement('div');
        modal.className = 'hashtag-modal'; // Aynı stil kullan
        modal.innerHTML = `
            <div class="hashtag-content">
                <div class="hashtag-header">
                    <h3><i class="fas fa-file-text"></i> Instagram Açıklaması</h3>
                    <button class="close-hashtag" onclick="this.parentElement.parentElement.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="hashtag-body">
                    <p class="hashtag-instruction">Bu açıklamayı kopyalayıp Instagram'da kullanabilirsiniz:</p>
                    <div class="description-text">
                        ${description}
                    </div>
                    <button class="copy-hashtags" onclick="copyDescription()">
                        <i class="fas fa-copy"></i> Açıklamayı Kopyala
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Kopyalama fonksiyonunu global yap
        window.copyDescription = function() {
            navigator.clipboard.writeText(description).then(() => {
                alert('Açıklama kopyalandı!');
            });
        };
    }

    // Açıklama oluştur
    function generateDescription(arabicText, turkishText, category) {
        const categoryNames = {
            'dua': 'Dua',
            'hadis': 'Hadis',
            'ayet': 'Ayet',
            'zikir': 'Zikir'
        };
        
        const categoryName = categoryNames[category] || 'İslami İçerik';
        
        // Açıklama şablonları (hashtag'siz)
        const descriptions = [
            `🕌 ${categoryName} Paylaşımı\n\n${turkishText}\n\n✨ Bu güzel ${categoryName.toLowerCase()} ile gününüzü bereketli kılın.\n\n📱 @kalbimizdeiman sayfasından daha fazla İslami içerik için takip edin!`,
            
            `📖 ${categoryName}\n\n${turkishText}\n\n💫 Allah'ın rahmeti ve bereketi üzerinize olsun.\n\n🕌 @kalbimizdeiman - Kalbinizde iman, hayatınızda huzur`,
            
            `🕯️ ${categoryName} Paylaşımı\n\n${turkishText}\n\n🌟 Bu güzel sözlerle kalbinizi huzurla doldurun.\n\n📱 @kalbimizdeiman sayfasından ilham alın!`,
            
            `📿 ${categoryName}\n\n${turkishText}\n\n🙏 Allah'ın sevgisi ve rahmeti hepimizin üzerine olsun.\n\n🕌 @kalbimizdeiman - İslami içeriklerle dolu sayfa`
        ];
        
        // Rastgele bir açıklama seç
        const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
        
        return randomDescription;
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
