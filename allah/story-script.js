// Story sayfası JavaScript

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
            arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
            turkish: "Rabbim! Göğsümü genişlet, işimi kolaylaştır."
        },
        {
            arabic: "اللَّهُمَّ بَارِكْ لِي فِي وَقْتِي",
            turkish: "Allah'ım! Vaktimi bereketli kıl."
        },
        {
            arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
            turkish: "Rabbimiz! Bizden kabul et, şüphesiz Sen işitensin, bilensin."
        }
    ],
    hadis: [
        {
            arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
            turkish: "Ameller niyetlere göredir."
        },
        {
            arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
            turkish: "Kim Allah'a ve ahiret gününe iman ediyorsa, ya hayır söylesin ya da sussun."
        },
        {
            arabic: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا",
            turkish: "Mümin mümine, bir binanın parçaları gibidir, birbirini destekler."
        },
        {
            arabic: "مَنْ لَا يَرْحَمُ النَّاسَ لَا يَرْحَمُهُ اللَّهُ",
            turkish: "İnsanlara merhamet etmeyen, Allah'ın merhametini görmez."
        },
        {
            arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
            turkish: "İnsanların en hayırlısı, insanlara en faydalı olanıdır."
        }
    ],
    ayet: [
        {
            arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
            turkish: "Kim Allah'tan sakınırsa, Allah ona bir çıkış yolu gösterir."
        },
        {
            arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
            turkish: "Kim Allah'a güvenirse, O ona yeter."
        },
        {
            arabic: "وَلَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
            turkish: "Üzülme, şüphesiz Allah bizimle beraberdir."
        },
        {
            arabic: "وَبَشِّرِ الصَّابِرِينَ",
            turkish: "Sabredenleri müjdele."
        },
        {
            arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
            turkish: "Şüphesiz güçlükle beraber kolaylık vardır."
        }
    ],
    zikir: [
        {
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
            turkish: "Allah'ı hamd ile birlikte tesbih ederim."
        },
        {
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ",
            turkish: "Allah'tan başka ilah yoktur."
        },
        {
            arabic: "اللَّهُ أَكْبَرُ",
            turkish: "Allah en büyüktür."
        },
        {
            arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
            turkish: "Güç ve kuvvet ancak Allah'tandır."
        },
        {
            arabic: "حَسْبِيَ اللَّهُ وَنِعْمَ الْوَكِيلُ",
            turkish: "Allah bana yeter, O ne güzel vekildir."
        }
    ]
};

// DOM elementleri
const categorySelect = document.getElementById('categorySelect');
const contentSelect = document.getElementById('contentSelect');
const contentSearch = document.getElementById('contentSearch');
const backgroundUpload = document.getElementById('backgroundUpload');
const removeBackground = document.getElementById('removeBackground');
const generateStoryBtn = document.getElementById('generateStory');
const randomStoryBtn = document.getElementById('randomStory');


// Önizleme elementleri
const previewCategory = document.getElementById('previewCategory');
const previewArabic = document.getElementById('previewArabic');
const previewTurkish = document.getElementById('previewTurkish');

// Kullanıcı arka planı
let userBackground = null;

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    loadDefaultContent();
    populateContentSelect();
});

// Event listener'ları ayarla
function setupEventListeners() {
    categorySelect.addEventListener('change', handleCategoryChange);
    contentSelect.addEventListener('change', loadSelectedContent);
    contentSearch.addEventListener('input', handleSearch);
    backgroundUpload.addEventListener('change', handleBackgroundUpload);
    removeBackground.addEventListener('click', handleRemoveBackground);
    generateStoryBtn.addEventListener('click', generateStory);
    randomStoryBtn.addEventListener('click', loadRandomContent);
    
}

// İçerik seçeneklerini doldur
function populateContentSelect() {
    const category = categorySelect.value;
    const content = islamicContent[category];
    
    // Mevcut seçenekleri temizle
    while (contentSelect.children.length > 0) {
        contentSelect.removeChild(contentSelect.lastChild);
    }
    
    // İçerikleri ekle
    content.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = item.turkish.substring(0, 50) + (item.turkish.length > 50 ? '...' : '');
        contentSelect.appendChild(option);
    });
    
    // İlk seçeneği seç
    if (contentSelect.children.length > 0) {
        contentSelect.selectedIndex = 0;
    }
}

// Varsayılan içeriği yükle
function loadDefaultContent() {
    const category = categorySelect.value;
    const content = islamicContent[category][0];
    
    previewCategory.textContent = getCategoryName(category);
    previewArabic.textContent = content.arabic;
    previewTurkish.textContent = content.turkish;
}

// Kategori değiştirme
function handleCategoryChange() {
    populateContentSelect();
    loadDefaultContent();
}

// Seçilen içeriği yükle
function loadSelectedContent() {
    const category = categorySelect.value;
    const selectedIndex = contentSelect.selectedIndex;
    
    if (selectedIndex >= 0) {
        const content = islamicContent[category][selectedIndex];
        previewCategory.textContent = getCategoryName(category);
        previewArabic.textContent = content.arabic;
        previewTurkish.textContent = content.turkish;
    }
}

// Rastgele içerik yükle
function loadRandomContent() {
    const category = categorySelect.value;
    const content = islamicContent[category];
    const randomIndex = Math.floor(Math.random() * content.length);
    const randomContent = content[randomIndex];
    
    // Önizlemeyi güncelle
    previewCategory.textContent = getCategoryName(category);
    previewArabic.textContent = randomContent.arabic;
    previewTurkish.textContent = randomContent.turkish;
    
    // Select'i güncelle
    contentSelect.selectedIndex = randomIndex;
    
    // Arama kutusunu temizle
    contentSearch.value = '';
}

// Arama işlemi
function handleSearch() {
    const searchTerm = contentSearch.value.toLowerCase();
    const category = categorySelect.value;
    const content = islamicContent[category];
    
    if (searchTerm === '') {
        populateContentSelect();
        return;
    }
    
    // Arama sonuçlarını filtrele
    const filteredContent = content.filter(item => 
        item.arabic.toLowerCase().includes(searchTerm) ||
        item.turkish.toLowerCase().includes(searchTerm)
    );
    
    // Select'i güncelle
    while (contentSelect.children.length > 0) {
        contentSelect.removeChild(contentSelect.lastChild);
    }
    
    filteredContent.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = content.indexOf(item);
        option.textContent = item.turkish.substring(0, 50) + (item.turkish.length > 50 ? '...' : '');
        contentSelect.appendChild(option);
    });
    
    // Eğer arama sonucu varsa ilkini seç
    if (filteredContent.length > 0) {
        contentSelect.selectedIndex = 0;
        const firstResult = filteredContent[0];
        previewCategory.textContent = getCategoryName(category);
        previewArabic.textContent = firstResult.arabic;
        previewTurkish.textContent = firstResult.turkish;
    }
}

// Arka plan yükleme
function handleBackgroundUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            userBackground = e.target.result;
            // Arka plan yüklendiğinde önizlemeyi güncelle
            updatePreviewBackground();
        };
        reader.readAsDataURL(file);
    }
}

// Önizleme arka planını güncelle
function updatePreviewBackground() {
    const storyPreview = document.querySelector('.story-preview');
    if (userBackground && storyPreview) {
        storyPreview.style.backgroundImage = `url(${userBackground})`;
        storyPreview.style.backgroundSize = 'cover';
        storyPreview.style.backgroundPosition = 'center';
        removeBackground.style.display = 'block';
    }
}

// Arka planı kaldır
function handleRemoveBackground() {
    userBackground = null;
    const storyPreview = document.querySelector('.story-preview');
    if (storyPreview) {
        storyPreview.style.backgroundImage = '';
        storyPreview.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
    removeBackground.style.display = 'none';
    backgroundUpload.value = '';
}


// Kategoriye emoji ekle
function addEmojiToCategory(category) {
    const categoryLower = category.toLowerCase();
    
    if (categoryLower.includes('dua') || categoryLower.includes('prayer')) {
        return '🙏 ' + category;
    } else if (categoryLower.includes('hadis') || categoryLower.includes('hadith')) {
        return '📖 ' + category;
    } else if (categoryLower.includes('ayet') || categoryLower.includes('verse')) {
        return '📜 ' + category;
    } else if (categoryLower.includes('zikir') || categoryLower.includes('dhikr')) {
        return '📿 ' + category;
    } else if (categoryLower.includes('islam') || categoryLower.includes('islamic')) {
        return '🕌 ' + category;
    } else if (categoryLower.includes('allah') || categoryLower.includes('god')) {
        return '☪️ ' + category;
    } else if (categoryLower.includes('ramadan') || categoryLower.includes('ramazan')) {
        return '🌙 ' + category;
    } else if (categoryLower.includes('hajj') || categoryLower.includes('hac')) {
        return '🕋 ' + category;
    } else {
        return '✨ ' + category;
    }
}


// Kategori adını al
function getCategoryName(category) {
    const categoryNames = {
        'dua': 'Dua',
        'hadis': 'Hadis',
        'ayet': 'Ayet',
        'zikir': 'Zikir'
    };
    return categoryNames[category] || 'İslami İçerik';
}

// Story oluştur
function generateStory() {
    // Önizlemedeki metinleri al
    const arabicText = previewArabic.textContent;
    const turkishText = previewTurkish.textContent;
    
    createStoryImage(arabicText, turkishText, '');
}

// Seçili Arapça metni al
function getSelectedArabic() {
    const category = categorySelect.value;
    const selectedIndex = contentSelect.selectedIndex;
    if (selectedIndex >= 0) {
        return islamicContent[category][selectedIndex].arabic;
    }
    return '';
}

// Seçili Türkçe metni al
function getSelectedTurkish() {
    const category = categorySelect.value;
    const selectedIndex = contentSelect.selectedIndex;
    if (selectedIndex >= 0) {
        return islamicContent[category][selectedIndex].turkish;
    }
    return '';
}

// Story resmi oluştur
function createStoryImage(arabicText, turkishText, category) {
    // Canvas oluştur - Instagram Story formatı (9:16 oran)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Instagram Story boyutları
    const width = 1080;
    const height = 1920; // 9:16 oran - Instagram Story formatı
    canvas.width = width;
    canvas.height = height;
    
    // Canvas kalitesini artır
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    // DPI ayarı
    const dpi = 2;
    canvas.width = width * dpi;
    canvas.height = height * dpi;
    ctx.scale(dpi, dpi);
    
    // Arka plan
    if (userBackground) {
        const img = new Image();
        img.onload = function() {
            // Arka plan görselini çiz
            ctx.drawImage(img, 0, 0, width, height);
            
            // Koyu overlay ekle
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.fillRect(0, 0, width, height);
            
            // Story metinlerini çiz
            drawStoryTexts(ctx, width, height, arabicText, turkishText, category);
            
            // İndirme işlemini burada yap
            downloadStoryImage(canvas, turkishText, category);
        };
        img.onerror = function() {
            // Resim yüklenemezse varsayılan gradient kullan
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            
            // Story metinlerini çiz
            drawStoryTexts(ctx, width, height, arabicText, turkishText, category);
            
            // İndirme işlemini burada yap
            downloadStoryImage(canvas, turkishText, category);
        };
        img.src = userBackground;
    } else {
        // Varsayılan gradient arka plan
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Story metinlerini çiz
        drawStoryTexts(ctx, width, height, arabicText, turkishText, category);
        
        // İndirme işlemini burada yap
        downloadStoryImage(canvas, turkishText, category);
    }
}

// Story metinlerini çiz
function drawStoryTexts(ctx, width, height, arabicText, turkishText, category) {
    // Metin ayarları
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Arapça metin (ortada) - önizlemedeki gibi boyut
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.font = 'bold 60px Amiri, serif';
    ctx.fillText(arabicText, width / 2, height / 2 - 80);
    
    // Türkçe metin (alt kısım) - önizlemedeki gibi boyut
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.font = 'bold 36px Poppins, sans-serif';
    ctx.fillText(turkishText, width / 2, height / 2 + 80);
    
    // Alt kısım - sayfa adı
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = 'bold 20px Poppins, sans-serif';
    ctx.fillText('@kalbimizdeiman', width / 2, height - 150);
    
    // Watermark ekle - story için
    drawStoryWatermark(ctx, width, height);
}

// Story watermark çiz
function drawStoryWatermark(ctx, width, height) {
    const watermarkText = '@kalbimizdeiman';
    const fontSize = 16;
    
    // Watermark pozisyonu (sağ alt köşe)
    const x = width - 20;
    const y = height - 20;
    
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

// Story resmini indir
function downloadStoryImage(canvas, turkishText, category) {
    const categoryName = getCategoryName(category);
    const fileName = `${categoryName}-${turkishText}`
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-')
        .substring(0, 50)
        .toLowerCase();
    
    // İndirme linkini oluştur
    const link = document.createElement('a');
    link.download = fileName + '-instagram-story' || 'islami-story';
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    
    // Link'i DOM'a ekle, tıkla ve kaldır
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
