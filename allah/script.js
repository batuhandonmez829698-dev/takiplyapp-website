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
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
            turkish: "Allah'ım! Senden faydalı ilim, temiz rızık ve kabul edilen amel dilerim."
        },
        {
            arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
            turkish: "Allah'ım! Beni tevbe edenlerden ve temizlenenlerden kıl."
        },
        // Akşam Duaları
        {
            arabic: "اللَّهُمَّ أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ",
            turkish: "Allah'ım! Akşamladık ve mülk Allah'ındır. Hamd Allah'a mahsustur."
        },
        {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا خَلَقْتَ",
            turkish: "Allah'ım! Yarattığın şeylerin şerrinden sana sığınırım."
        },
        {
            arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ",
            turkish: "Allah'ım! Seninle akşamladık, seninle sabahladık, seninle yaşarız, seninle ölürüz."
        },
        // Yemek Duaları
        {
            arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
            turkish: "Allah'ım! Bize verdiğin rızıkta bereket ver ve bizi cehennem azabından koru."
        },
        {
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
            turkish: "Bizi doyuran, içiren ve Müslüman kılan Allah'a hamd olsun."
        },
        // Yolculuk Duaları
        {
            arabic: "اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ",
            turkish: "Allah'ım! Bu yolculuğumuzu kolaylaştır ve mesafesini kısalt."
        },
        {
            arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى",
            turkish: "Allah'ım! Bu yolculuğumuzda senden iyilik ve takva dileriz."
        },
        // Hastalık Duaları
        {
            arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ وَاشْفِ أَنْتَ الشَّافِي",
            turkish: "Allah'ım! İnsanların Rabbi, sıkıntıyı gider, şifa ver. Şifa veren sensin."
        },
        {
            arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي اللَّهُمَّ عَافِنِي فِي سَمْعِي اللَّهُمَّ عَافِنِي فِي بَصَرِي",
            turkish: "Allah'ım! Bedenimde, kulağımda, gözümde afiyet ver."
        },
        // İş Duaları
        {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ",
            turkish: "Allah'ım! Acizlikten ve tembellikten sana sığınırım."
        },
        {
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
            turkish: "Allah'ım! Dünya ve ahirette af ve afiyet dilerim."
        },
        // Aile Duaları
        {
            arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
            turkish: "Rabbimiz! Bize eşlerimizden ve çocuklarımızdan göz aydınlığı ver."
        },
        {
            arabic: "اللَّهُمَّ بَارِكْ لِي فِي أَوْلَادِي وَاحْفَظْهُمْ مِنْ شَرِّ الشَّيْطَانِ",
            turkish: "Allah'ım! Çocuklarımda bereket ver ve onları şeytanın şerrinden koru."
        },
        // Öğrenim Duaları
        {
            arabic: "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي",
            turkish: "Allah'ım! Bana öğrettiğinle faydalandır ve bana faydalı olanı öğret."
        },
        {
            arabic: "رَبِّ زِدْنِي عِلْمًا وَارْزُقْنِي فَهْمًا",
            turkish: "Rabbim! İlmimi artır ve bana anlayış ver."
        },
        // Gece Duaları
        {
            arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
            turkish: "Allah'ım! Seninle akşamladık, seninle sabahladık, seninle yaşarız, seninle ölürüz ve sana döneceğiz."
        },
        {
            arabic: "اللَّهُمَّ أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ",
            turkish: "Allah'ım! Akşamladık ve mülk Allah'ındır. Hamd Allah'a mahsustur. Allah'tan başka ilah yoktur."
        },
        // Sabır Duaları
        {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ وَدَرَكِ الشَّقَاءِ",
            turkish: "Allah'ım! Belanın zorluğundan ve felaketin gelmesinden sana sığınırım."
        },
        {
            arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا",
            turkish: "Rabbimiz! Unuttuğumuz veya hata ettiğimizde bizi hesaba çekme."
        },
        // Şükür Duaları
        {
            arabic: "اللَّهُمَّ لَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
            turkish: "Allah'ım! Hamd sana mahsustur ve şükür sana mahsustur."
        },
        {
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ",
            turkish: "Nimetiyle salih amellerin tamamlandığı Allah'a hamd olsun."
        },
        // Ek Dualar - Günlük Hayat
        {
            arabic: "اللَّهُمَّ أَحْسِنْ عَاقِبَتَنَا فِي الْأُمُورِ كُلِّهَا",
            turkish: "Allah'ım! Bütün işlerimizde sonumuzu güzel eyle."
        },
        {
            arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ الْمُحْسِنِينَ",
            turkish: "Allah'ım! Beni ihsan edenlerden kıl."
        },
        {
            arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
            turkish: "Rabbimiz! Bizden kabul et. Şüphesiz sen işitensin, bilensin."
        },
        {
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ",
            turkish: "Allah'ım! Senden af ve afiyet dilerim."
        },
        {
            arabic: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي",
            turkish: "Allah'ım! İşimin koruyucusu olan dinimi ıslah et."
        },
        {
            arabic: "اللَّهُمَّ أَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي",
            turkish: "Allah'ım! Geçimimin olduğu dünyamı ıslah et."
        },
        {
            arabic: "اللَّهُمَّ أَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي",
            turkish: "Allah'ım! Dönüş yerim olan ahiretimi ıslah et."
        },
        {
            arabic: "اللَّهُمَّ اجْعَلِ الْحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ",
            turkish: "Allah'ım! Hayatı her hayırda artış vesilesi kıl."
        },
        {
            arabic: "اللَّهُمَّ اجْعَلِ الْمَوْتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ",
            turkish: "Allah'ım! Ölümü her şerden rahatlama vesilesi kıl."
        },
        // Sabah Duaları - Ek
        {
            arabic: "اللَّهُمَّ أَصْبَحْنَا نُشْهِدُكَ وَنُشْهِدُ حَمَلَةَ عَرْشِكَ",
            turkish: "Allah'ım! Sabahladık, seni ve arşının taşıyıcılarını şahit tutuyoruz."
        },
        {
            arabic: "اللَّهُمَّ أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",
            turkish: "Allah'ım! Sabahladık ve mülk Allah'ındır."
        },
        {
            arabic: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ",
            turkish: "Allah'ım! Sabahladım, seni ve arşının taşıyıcılarını şahit tutuyorum."
        },
        {
            arabic: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ",
            turkish: "Allah'ım! Bende veya yaratıklarından birinde sabahlayan nimet."
        },
        {
            arabic: "فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
            turkish: "Sadece sendendir, ortağın yoktur. Hamd sana mahsustur ve şükür sana mahsustur."
        },
        // Akşam Duaları - Ek
        {
            arabic: "اللَّهُمَّ أَمْسَيْنَا نُشْهِدُكَ وَنُشْهِدُ حَمَلَةَ عَرْشِكَ",
            turkish: "Allah'ım! Akşamladık, seni ve arşının taşıyıcılarını şahit tutuyoruz."
        },
        {
            arabic: "اللَّهُمَّ أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ",
            turkish: "Allah'ım! Akşamladık ve mülk Allah'ındır."
        },
        {
            arabic: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ",
            turkish: "Allah'ım! Akşamladım, seni ve arşının taşıyıcılarını şahit tutuyorum."
        },
        {
            arabic: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ",
            turkish: "Allah'ım! Bende veya yaratıklarından birinde akşamlayan nimet."
        },
        {
            arabic: "فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
            turkish: "Sadece sendendir, ortağın yoktur. Hamd sana mahsustur ve şükür sana mahsustur."
        },
        // Yemek Duaları - Ek
        {
            arabic: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
            turkish: "Allah'ın adıyla ve Allah'ın bereketiyle."
        },
        {
            arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
            turkish: "Allah'ım! Bize verdiğin rızıkta bereket ver ve bizi cehennem azabından koru."
        },
        {
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
            turkish: "Bizi doyuran, içiren ve Müslüman kılan Allah'a hamd olsun."
        },
        {
            arabic: "اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي وَاسْقِ مَنْ سَقَانِي",
            turkish: "Allah'ım! Beni doyuranı doyur ve beni içireni içir."
        },
        {
            arabic: "اللَّهُمَّ اجْعَلْهُ نُورًا وَبَرَكَةً وَرِزْقًا",
            turkish: "Allah'ım! Bunu nur, bereket ve rızık kıl."
        },
        // Yolculuk Duaları - Ek
        {
            arabic: "اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ",
            turkish: "Allah'ım! Bu yolculuğumuzu kolaylaştır ve mesafesini kısalt."
        },
        {
            arabic: "اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ وَالْخَلِيفَةُ فِي الْأَهْلِ",
            turkish: "Allah'ım! Yolculukta arkadaş, ailede halife sensin."
        },
        {
            arabic: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ",
            turkish: "Allah'ım! Yolculuğun zorluklarından sana sığınırız."
        },
        {
            arabic: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ كَآبَةِ الْمَنْظَرِ",
            turkish: "Allah'ım! Üzücü manzaralardan sana sığınırız."
        },
        {
            arabic: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ سُوءِ الْمَنْزِلِ",
            turkish: "Allah'ım! Kötü konaklama yerlerinden sana sığınırız."
        },
        // Hastalık Duaları - Ek
        {
            arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ وَاشْفِ أَنْتَ الشَّافِي",
            turkish: "Allah'ım! İnsanların Rabbi, sıkıntıyı gider, şifa ver. Şifa veren sensin."
        },
        {
            arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي اللَّهُمَّ عَافِنِي فِي سَمْعِي",
            turkish: "Allah'ım! Bedenimde afiyet ver. Allah'ım! Kulağımda afiyet ver."
        },
        {
            arabic: "اللَّهُمَّ عَافِنِي فِي بَصَرِي اللَّهُمَّ عَافِنِي فِي لِسَانِي",
            turkish: "Allah'ım! Gözümde afiyet ver. Allah'ım! Dilimde afiyet ver."
        },
        {
            arabic: "اللَّهُمَّ عَافِنِي فِي قَلْبِي اللَّهُمَّ عَافِنِي فِي جَمِيعِ جَوَارِحِي",
            turkish: "Allah'ım! Kalbimde afiyet ver. Allah'ım! Bütün organlarımda afiyet ver."
        },
        {
            arabic: "اللَّهُمَّ اشْفِ مَرْضَانَا وَمَرْضَى الْمُسْلِمِينَ",
            turkish: "Allah'ım! Hastalarımızı ve Müslüman hastaları şifa ver."
        },
        // İş Duaları - Ek
        {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ",
            turkish: "Allah'ım! Acizlikten ve tembellikten sana sığınırım."
        },
        {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ",
            turkish: "Allah'ım! Korkaklıktan ve cimrilikten sana sığınırım."
        },
        {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
            turkish: "Allah'ım! Borç altında kalmaktan ve insanların zulmünden sana sığınırım."
        },
        {
            arabic: "اللَّهُمَّ بَارِكْ لِي فِي عَمَلِي وَاجْعَلْهُ مُبَارَكًا",
            turkish: "Allah'ım! İşimde bereket ver ve onu mübarek kıl."
        },
        {
            arabic: "اللَّهُمَّ يَسِّرْ لِي عَمَلِي وَاجْعَلْهُ خَيْرًا",
            turkish: "Allah'ım! İşimi kolaylaştır ve onu hayırlı kıl."
        },
        // Aile Duaları - Ek
        {
            arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
            turkish: "Rabbimiz! Bize eşlerimizden ve çocuklarımızdan göz aydınlığı ver."
        },
        {
            arabic: "اللَّهُمَّ بَارِكْ لِي فِي أَوْلَادِي وَاحْفَظْهُمْ مِنْ شَرِّ الشَّيْطَانِ",
            turkish: "Allah'ım! Çocuklarımda bereket ver ve onları şeytanın şerrinden koru."
        },
        {
            arabic: "اللَّهُمَّ اجْعَلْ أَوْلَادِي صَالِحِينَ وَاجْعَلْهُمْ قُرَّاتِ أَعْيُنٍ",
            turkish: "Allah'ım! Çocuklarımı salih kıl ve onları göz aydınlığı yap."
        },
        {
            arabic: "اللَّهُمَّ أَصْلِحْ لِي أَهْلِي وَاجْعَلْهُمْ مُبَارَكِينَ",
            turkish: "Allah'ım! Ailemi ıslah et ve onları mübarek kıl."
        },
        {
            arabic: "اللَّهُمَّ اجْعَلْ بَيْنِي وَبَيْنَ أَهْلِي مَحَبَّةً وَرَحْمَةً",
            turkish: "Allah'ım! Benimle ailem arasında sevgi ve merhamet kıl."
        },
        // Öğrenim Duaları - Ek
        {
            arabic: "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي",
            turkish: "Allah'ım! Bana öğrettiğinle faydalandır ve bana faydalı olanı öğret."
        },
        {
            arabic: "رَبِّ زِدْنِي عِلْمًا وَارْزُقْنِي فَهْمًا",
            turkish: "Rabbim! İlmimi artır ve bana anlayış ver."
        },
        {
            arabic: "اللَّهُمَّ فَقِّهْنِي فِي الدِّينِ وَعَلِّمْنِي التَّأْوِيلَ",
            turkish: "Allah'ım! Beni dinde fakih kıl ve bana tevil öğret."
        },
        {
            arabic: "اللَّهُمَّ اجْعَلْ عِلْمِي نَافِعًا وَاجْعَلْهُ زِيَادَةً فِي الْخَيْرِ",
            turkish: "Allah'ım! İlmimi faydalı kıl ve onu hayırda artış vesilesi yap."
        },
        {
            arabic: "اللَّهُمَّ عَلِّمْنَا مَا يَنْفَعُنَا وَانْفَعْنَا بِمَا عَلَّمْتَنَا",
            turkish: "Allah'ım! Bize faydalı olanı öğret ve bize öğrettiğinle faydalandır."
        },
        // Gece Duaları - Ek
        {
            arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ",
            turkish: "Allah'ım! Seninle akşamladık, seninle sabahladık, seninle yaşarız, seninle ölürüz."
        },
        {
            arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
            turkish: "Allah'ım! Seninle akşamladık, seninle sabahladık, seninle yaşarız, seninle ölürüz ve sana döneceğiz."
        },
        {
            arabic: "اللَّهُمَّ أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ",
            turkish: "Allah'ım! Akşamladık ve mülk Allah'ındır. Hamd Allah'a mahsustur."
        },
        {
            arabic: "اللَّهُمَّ أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ",
            turkish: "Allah'ım! Akşamladık ve mülk Allah'ındır. Hamd Allah'a mahsustur. Allah'tan başka ilah yoktur."
        },
        {
            arabic: "اللَّهُمَّ أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
            turkish: "Allah'ım! Akşamladık ve mülk Allah'ındır. Hamd Allah'a mahsustur. Allah'tan başka ilah yoktur, O tektir, ortağı yoktur."
        },
        // Sabır Duaları - Ek
        {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ وَدَرَكِ الشَّقَاءِ",
            turkish: "Allah'ım! Belanın zorluğundan ve felaketin gelmesinden sana sığınırım."
        },
        {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا أَعْطَيْتَنَا وَشَرِّ مَا مَنَعْتَنَا",
            turkish: "Allah'ım! Bize verdiğin şeyin şerrinden ve bize vermediğin şeyin şerrinden sana sığınırım."
        },
        {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ فِتْنَةِ النَّارِ وَعَذَابِ النَّارِ",
            turkish: "Allah'ım! Cehennem fitnesinden ve cehennem azabından sana sığınırım."
        },
        {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ فِتْنَةِ الْقَبْرِ وَعَذَابِ الْقَبْرِ",
            turkish: "Allah'ım! Kabir fitnesinden ve kabir azabından sana sığınırım."
        },
        {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ",
            turkish: "Allah'ım! Hayat ve ölüm fitnesinden sana sığınırım."
        },
        // Şükür Duaları - Ek
        {
            arabic: "اللَّهُمَّ لَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
            turkish: "Allah'ım! Hamd sana mahsustur ve şükür sana mahsustur."
        },
        {
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ",
            turkish: "Nimetiyle salih amellerin tamamlandığı Allah'a hamd olsun."
        },
        {
            arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            turkish: "Alemlerin Rabbi Allah'a hamd olsun."
        },
        {
            arabic: "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ",
            turkish: "Allah'a çok, güzel ve bereketli hamd olsun."
        },
        {
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
            turkish: "Bizi öldürdükten sonra dirilten ve ona döneceğimiz Allah'a hamd olsun."
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
        },
        {
            arabic: "مَنْ صَمَتَ نَجَا",
            turkish: "Sükut eden kurtulur."
        },
        {
            arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
            turkish: "Güzel söz sadakadır."
        },
        {
            arabic: "مَنْ تَوَاضَعَ لِلَّهِ رَفَعَهُ اللَّهُ",
            turkish: "Allah için tevazu gösteren kimseyi Allah yükseltir."
        },
        // Ahlak Hadisleri
        {
            arabic: "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ",
            turkish: "Ben güzel ahlakı tamamlamak için gönderildim."
        },
        {
            arabic: "أَكْمَلُ الْمُؤْمِنِينَ إِيمَاناً أَحْسَنُهُمْ خُلُقاً",
            turkish: "Müminlerin iman bakımından en mükemmeli, ahlakı en güzel olanıdır."
        },
        {
            arabic: "الْمُؤْمِنُ مَنْ أَمِنَهُ النَّاسُ عَلَى دِمَائِهِمْ وَأَمْوَالِهِمْ",
            turkish: "Mümin, insanların canları ve malları konusunda güvendiği kimsedir."
        },
        {
            arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
            turkish: "Kim kardeşinin ihtiyacında olursa, Allah da onun ihtiyacında olur."
        },
        // İlim Hadisleri
        {
            arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
            turkish: "İlim öğrenmek her Müslüman üzerine farzdır."
        },
        {
            arabic: "مَنْ سَلَكَ طَرِيقاً يَلْتَمِسُ فِيهِ عِلْماً سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقاً إِلَى الْجَنَّةِ",
            turkish: "Kim ilim öğrenmek için bir yol tutarsa, Allah ona cennete giden yolu kolaylaştırır."
        },
        {
            arabic: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ وَأَهْلَ السَّمَاوَاتِ وَالْأَرْضِ حَتَّى النَّمْلَةَ فِي جُحْرِهَا وَحَتَّى الْحُوتَ لَيُصَلُّونَ عَلَى مُعَلِّمِ النَّاسِ الْخَيْرَ",
            turkish: "Allah, melekleri, gökler ve yer ehli, hatta deliğindeki karınca ve balık bile insanlara hayır öğretene salat eder."
        },
        // Sabır Hadisleri
        {
            arabic: "مَا أَصَابَ مُسْلِماً مُصِيبَةٌ إِلَّا كَفَّرَ اللَّهُ بِهَا عَنْهُ حَتَّى الشَّوْكَةِ يُشَاكُهَا",
            turkish: "Müslümana isabet eden her musibet, hatta diken batması bile onun günahlarını siler."
        },
        {
            arabic: "عَجَباً لِأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ وَلَيْسَ ذَاكَ لِأَحَدٍ إِلَّا لِلْمُؤْمِنِ",
            turkish: "Müminin işi ne kadar şaşırtıcıdır! Onun her işi hayırdır. Bu sadece mümin için geçerlidir."
        },
        // Cömertlik Hadisleri
        {
            arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
            turkish: "Kim bir müminin dünya sıkıntılarından birini giderirse, Allah da onun kıyamet günü sıkıntılarından birini giderir."
        },
        {
            arabic: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى",
            turkish: "Veren el, alan elden hayırlıdır."
        },
        // Namaz Hadisleri
        {
            arabic: "الصَّلَاةُ عِمَادُ الدِّينِ",
            turkish: "Namaz dinin direğidir."
        },
        {
            arabic: "أَوَّلُ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ الصَّلَاةُ",
            turkish: "Kıyamet gününde kulun ilk hesaba çekileceği şey namazdır."
        },
        // Oruç Hadisleri
        {
            arabic: "مَنْ صَامَ رَمَضَانَ إِيمَاناً وَاحْتِسَاباً غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
            turkish: "Kim Ramazan'ı iman ederek ve sevabını Allah'tan bekleyerek oruç tutarsa, geçmiş günahları bağışlanır."
        },
        {
            arabic: "الصِّيَامُ جُنَّةٌ مِنَ النَّارِ",
            turkish: "Oruç ateşten koruyucu kalkandır."
        },
        // Zikir Hadisleri
        {
            arabic: "مَنْ قَرَأَ حَرْفاً مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا",
            turkish: "Kim Allah'ın kitabından bir harf okursa, ona bir hasene vardır. Hasene ise on misliyle karşılık görür."
        },
        {
            arabic: "لَا يَزَالُ لِسَانُكَ رَطْباً مِنْ ذِكْرِ اللَّهِ",
            turkish: "Dilin Allah'ı zikretmekten ıslak kalsın."
        },
        // Tevbe Hadisleri
        {
            arabic: "كُلُّ ابْنِ آدَمَ خَطَّاءٌ وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ",
            turkish: "Ademoğlunun hepsi hata eder. Hata edenlerin en hayırlısı tevbe edenlerdir."
        },
        {
            arabic: "إِنَّ اللَّهَ يَبْسُطُ يَدَهُ بِاللَّيْلِ لِيَتُوبَ مُسِيءُ النَّهَارِ وَيَبْسُطُ يَدَهُ بِالنَّهَارِ لِيَتُوبَ مُسِيءُ اللَّيْلِ",
            turkish: "Allah geceleyin elini uzatır ki gündüz günah işleyen tevbe etsin, gündüz elini uzatır ki gece günah işleyen tevbe etsin."
        },
        // Aile Hadisleri
        {
            arabic: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ وَأَنَا خَيْرُكُمْ لِأَهْلِي",
            turkish: "En hayırlınız ailesine en hayırlı olanınızdır. Ben de aileme en hayırlı olanınızım."
        },
        {
            arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ",
            turkish: "Kim rızkının genişletilmesini ve ömrünün uzatılmasını istiyorsa, akrabalarını görüp gözetsin."
        },
        // Komşuluk Hadisleri
        {
            arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلَا يُؤْذِ جَارَهُ",
            turkish: "Allah'a ve ahiret gününe iman eden kimse komşusuna eziyet etmesin."
        },
        {
            arabic: "لَيْسَ الْمُؤْمِنُ الَّذِي يَشْبَعُ وَجَارُهُ جَائِعٌ إِلَى جَنْبِهِ",
            turkish: "Komşusu açken kendisi tok olan mümin değildir."
        },
        // Ek Hadisler - İbadet
        {
            arabic: "الصَّلَاةُ نُورٌ وَالصَّدَقَةُ بُرْهَانٌ وَالصَّبْرُ ضِيَاءٌ",
            turkish: "Namaz nur, sadaka burhan, sabır ziyadır."
        },
        {
            arabic: "مَنْ صَلَّى الصُّبْحَ فَهُوَ فِي ذِمَّةِ اللَّهِ",
            turkish: "Kim sabah namazını kılarsa, o Allah'ın himayesindedir."
        },
        {
            arabic: "أَوَّلُ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ الصَّلَاةُ",
            turkish: "Kıyamet gününde kulun ilk hesaba çekileceği şey namazdır."
        },
        {
            arabic: "الصَّلَاةُ عِمَادُ الدِّينِ مَنْ أَقَامَهَا أَقَامَ الدِّينَ",
            turkish: "Namaz dinin direğidir. Kim onu ikame ederse dini ikame etmiş olur."
        },
        {
            arabic: "مَنْ حَافَظَ عَلَى الصَّلَوَاتِ الْخَمْسِ كَانَتْ لَهُ نُورًا وَبُرْهَانًا",
            turkish: "Kim beş vakit namaza devam ederse, ona nur ve burhan olur."
        },
        // Oruç Hadisleri - Ek
        {
            arabic: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
            turkish: "Kim Ramazan'ı iman ederek ve sevabını Allah'tan bekleyerek oruç tutarsa, geçmiş günahları bağışlanır."
        },
        {
            arabic: "الصِّيَامُ جُنَّةٌ مِنَ النَّارِ",
            turkish: "Oruç ateşten koruyucu kalkandır."
        },
        {
            arabic: "لِلصَّائِمِ فَرْحَتَانِ فَرْحَةٌ عِنْدَ فِطْرِهِ وَفَرْحَةٌ عِنْدَ لِقَاءِ رَبِّهِ",
            turkish: "Oruçlunun iki sevinci vardır: İftar ettiğinde ve Rabbi ile buluştuğunda."
        },
        {
            arabic: "مَنْ لَمْ يَدَعْ قَوْلَ الزُّورِ وَالْعَمَلَ بِهِ فَلَيْسَ لِلَّهِ حَاجَةٌ فِي أَنْ يَدَعَ طَعَامَهُ وَشَرَابَهُ",
            turkish: "Kim yalan söylemeyi ve yalanla iş yapmayı bırakmazsa, Allah'ın onun yemeğini ve içeceğini bırakmasına ihtiyacı yoktur."
        },
        {
            arabic: "الصِّيَامُ نِصْفُ الصَّبْرِ",
            turkish: "Oruç sabrın yarısıdır."
        },
        // Zikir Hadisleri - Ek
        {
            arabic: "مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا",
            turkish: "Kim Allah'ın kitabından bir harf okursa, ona bir hasene vardır. Hasene ise on misliyle karşılık görür."
        },
        {
            arabic: "لَا يَزَالُ لِسَانُكَ رَطْبًا مِنْ ذِكْرِ اللَّهِ",
            turkish: "Dilin Allah'ı zikretmekten ıslak kalsın."
        },
        {
            arabic: "أَحَبُّ الْكَلَامِ إِلَى اللَّهِ أَرْبَعٌ سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ",
            turkish: "Allah'a en sevimli söz dörttür: Sübhânallâh, elhamdülillâh, lâ ilâhe illallâh, allâhü ekber."
        },
        {
            arabic: "مَنْ قَالَ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ فِي يَوْمٍ مِائَةَ مَرَّةٍ كَانَتْ لَهُ عَدْلَ عَشْرِ رِقَابٍ",
            turkish: "Kim bir günde yüz defa 'Lâ ilâhe illallâhü vahdehû lâ şerîke leh, lehülmülkü ve lehülhamdü ve hüve alâ külli şey'in kadîr' derse, on köle azat etmiş gibi sevap alır."
        },
        {
            arabic: "مَنْ قَالَ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ فِي يَوْمٍ مِائَةَ مَرَّةٍ حُطَّتْ خَطَايَاهُ وَلَوْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ",
            turkish: "Kim bir günde yüz defa 'Sübhânallâhi ve bihamdihî' derse, günahları deniz köpüğü kadar olsa bile silinir."
        },
        // Tevbe Hadisleri - Ek
        {
            arabic: "كُلُّ ابْنِ آدَمَ خَطَّاءٌ وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ",
            turkish: "Ademoğlunun hepsi hata eder. Hata edenlerin en hayırlısı tevbe edenlerdir."
        },
        {
            arabic: "إِنَّ اللَّهَ يَبْسُطُ يَدَهُ بِاللَّيْلِ لِيَتُوبَ مُسِيءُ النَّهَارِ وَيَبْسُطُ يَدَهُ بِالنَّهَارِ لِيَتُوبَ مُسِيءُ اللَّيْلِ",
            turkish: "Allah geceleyin elini uzatır ki gündüz günah işleyen tevbe etsin, gündüz elini uzatır ki gece günah işleyen tevbe etsin."
        },
        {
            arabic: "التَّائِبُ مِنَ الذَّنْبِ كَمَنْ لَا ذَنْبَ لَهُ",
            turkish: "Günahtan tevbe eden, günahı olmayan gibidir."
        },
        {
            arabic: "لَلَّهُ أَفْرَحُ بِتَوْبَةِ عَبْدِهِ مِنْ أَحَدِكُمْ بِرَاحِلَتِهِ",
            turkish: "Allah, kulunun tevbesine, sizden birinin kayıp devesini bulduğunda sevindiğinden daha çok sevinir."
        },
        {
            arabic: "مَنْ تَابَ قَبْلَ أَنْ تَطْلُعَ الشَّمْسُ مِنْ مَغْرِبِهَا تَابَ اللَّهُ عَلَيْهِ",
            turkish: "Kim güneş batıdan doğmadan önce tevbe ederse, Allah onun tevbesini kabul eder."
        },
        // Aile Hadisleri - Ek
        {
            arabic: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ وَأَنَا خَيْرُكُمْ لِأَهْلِي",
            turkish: "En hayırlınız ailesine en hayırlı olanınızdır. Ben de aileme en hayırlı olanınızım."
        },
        {
            arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ",
            turkish: "Kim rızkının genişletilmesini ve ömrünün uzatılmasını istiyorsa, akrabalarını görüp gözetsin."
        },
        {
            arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ",
            turkish: "Allah'a ve ahiret gününe iman eden kimse misafirini ağırlasın."
        },
        {
            arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
            turkish: "Allah'a ve ahiret gününe iman eden kimse ya hayır söylesin ya da sussun."
        },
        {
            arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلَا يُؤْذِ جَارَهُ",
            turkish: "Allah'a ve ahiret gününe iman eden kimse komşusuna eziyet etmesin."
        },
        // Cömertlik Hadisleri - Ek
        {
            arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
            turkish: "Kim bir müminin dünya sıkıntılarından birini giderirse, Allah da onun kıyamet günü sıkıntılarından birini giderir."
        },
        {
            arabic: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى",
            turkish: "Veren el, alan elden hayırlıdır."
        },
        {
            arabic: "مَنْ تَصَدَّقَ بِعَدْلِ تَمْرَةٍ مِنْ كَسْبٍ طَيِّبٍ وَلَا يَقْبَلُ اللَّهُ إِلَّا الطَّيِّبَ",
            turkish: "Kim temiz kazançtan bir hurma değerinde sadaka verirse, Allah sadece temizi kabul eder."
        },
        {
            arabic: "الصَّدَقَةُ تَمْحُو الْخَطِيئَةَ كَمَا يَمْحُو الْمَاءُ النَّارَ",
            turkish: "Sadaka hatayı siler, tıpkı suyun ateşi söndürdüğü gibi."
        },
        {
            arabic: "مَنْ أَعْطَى فِي سَبِيلِ اللَّهِ أُعْطِيَ فِي الْجَنَّةِ",
            turkish: "Kim Allah yolunda verirse, cennette ona verilir."
        },
        // Sabır Hadisleri - Ek
        {
            arabic: "مَا أَصَابَ مُسْلِماً مُصِيبَةٌ إِلَّا كَفَّرَ اللَّهُ بِهَا عَنْهُ حَتَّى الشَّوْكَةِ يُشَاكُهَا",
            turkish: "Müslümana isabet eden her musibet, hatta diken batması bile onun günahlarını siler."
        },
        {
            arabic: "عَجَباً لِأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ وَلَيْسَ ذَاكَ لِأَحَدٍ إِلَّا لِلْمُؤْمِنِ",
            turkish: "Müminin işi ne kadar şaşırtıcıdır! Onun her işi hayırdır. Bu sadece mümin için geçerlidir."
        },
        {
            arabic: "إِنَّمَا الصَّبْرُ عِنْدَ الصَّدْمَةِ الْأُولَى",
            turkish: "Sabır ilk darbede olur."
        },
        {
            arabic: "مَنْ يَتَصَبَّرْ يُصَبِّرْهُ اللَّهُ",
            turkish: "Kim sabırlı olmaya çalışırsa, Allah ona sabır verir."
        },
        {
            arabic: "الصَّبْرُ نِصْفُ الْإِيمَانِ",
            turkish: "Sabır imanın yarısıdır."
        },
        // İlim Hadisleri - Ek
        {
            arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
            turkish: "İlim öğrenmek her Müslüman üzerine farzdır."
        },
        {
            arabic: "مَنْ سَلَكَ طَرِيقاً يَلْتَمِسُ فِيهِ عِلْماً سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقاً إِلَى الْجَنَّةِ",
            turkish: "Kim ilim öğrenmek için bir yol tutarsa, Allah ona cennete giden yolu kolaylaştırır."
        },
        {
            arabic: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ وَأَهْلَ السَّمَاوَاتِ وَالْأَرْضِ حَتَّى النَّمْلَةَ فِي جُحْرِهَا وَحَتَّى الْحُوتَ لَيُصَلُّونَ عَلَى مُعَلِّمِ النَّاسِ الْخَيْرَ",
            turkish: "Allah, melekleri, gökler ve yer ehli, hatta deliğindeki karınca ve balık bile insanlara hayır öğretene salat eder."
        },
        {
            arabic: "مَنْ يُرِدِ اللَّهُ بِهِ خَيْراً يُفَقِّهْهُ فِي الدِّينِ",
            turkish: "Allah kimin hayrını isterse, onu dinde fakih kılar."
        },
        {
            arabic: "إِنَّمَا الْعِلْمُ بِالتَّعَلُّمِ",
            turkish: "İlim ancak öğrenmekle elde edilir."
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
        },
        {
            arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
            turkish: "Şüphesiz güçlükle beraber kolaylık vardır."
        },
        {
            arabic: "وَاللَّهُ غَالِبٌ عَلَى أَمْرِهِ",
            turkish: "Allah işinde galip olandır."
        },
        {
            arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا",
            turkish: "Kim Allah'tan sakınırsa, Allah ona işinde kolaylık verir."
        },
        // İman Ayetleri
        {
            arabic: "وَمَن يَبْتَغِ غَيْرَ الْإِسْلَامِ دِينًا فَلَن يُقْبَلَ مِنْهُ",
            turkish: "Kim İslam'dan başka bir din ararsa, o kabul edilmez."
        },
        {
            arabic: "إِنَّ الدِّينَ عِندَ اللَّهِ الْإِسْلَامُ",
            turkish: "Allah katında din İslam'dır."
        },
        {
            arabic: "وَمَن يَرْغَبُ عَن مِّلَّةِ إِبْرَاهِيمَ إِلَّا مَن سَفِهَ نَفْسَهُ",
            turkish: "İbrahim'in milletinden kim yüz çevirirse, ancak kendini alçaltmış olur."
        },
        // Sabır Ayetleri
        {
            arabic: "وَبَشِّرِ الصَّابِرِينَ",
            turkish: "Sabredenleri müjdele."
        },
        {
            arabic: "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ",
            turkish: "Sabredenlerin ecirleri hesapsız olarak verilir."
        },
        {
            arabic: "وَاللَّهُ يُحِبُّ الصَّابِرِينَ",
            turkish: "Allah sabredenleri sever."
        },
        // Tevbe Ayetleri
        {
            arabic: "وَتُوبُوا إِلَى اللَّهِ جَمِيعًا أَيُّهَ الْمُؤْمِنُونَ لَعَلَّكُمْ تُفْلِحُونَ",
            turkish: "Ey müminler! Hepiniz Allah'a tevbe edin ki kurtuluşa eresiniz."
        },
        {
            arabic: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ",
            turkish: "Allah tevbe edenleri ve temizlenenleri sever."
        },
        {
            arabic: "وَمَن يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَّحِيمًا",
            turkish: "Kim kötülük yapar veya kendine zulmeder, sonra Allah'tan bağışlanma dilerse, Allah'ı bağışlayıcı ve merhametli bulur."
        },
        // İlim Ayetleri
        {
            arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
            turkish: "Rabbim! İlmimi artır."
        },
        {
            arabic: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ",
            turkish: "Allah'tan ancak kullarından alimler korkar."
        },
        {
            arabic: "هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ",
            turkish: "Bilenlerle bilmeyenler bir olur mu?"
        },
        // Cömertlik Ayetleri
        {
            arabic: "وَمَا تُنفِقُوا مِنْ خَيْرٍ يُوَفَّ إِلَيْكُمْ",
            turkish: "Hayır olarak ne harcarsanız, size karşılığı verilir."
        },
        {
            arabic: "مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ",
            turkish: "Mallarını Allah yolunda harcayanların durumu, yedi başak veren bir tohum gibidir."
        },
        {
            arabic: "وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ",
            turkish: "Kul kardeşine yardım ettiği sürece Allah da ona yardım eder."
        },
        // Aile Ayetleri
        {
            arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا",
            turkish: "O'nun ayetlerinden biri de, kendilerine huzur bulasınız diye kendi cinsinizden eşler yaratmasıdır."
        },
        {
            arabic: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا",
            turkish: "Rabbin, yalnızca kendisine kulluk etmenizi ve ana-babaya iyilik etmenizi emretti."
        },
        {
            arabic: "وَبِالْوَالِدَيْنِ إِحْسَانًا وَذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ",
            turkish: "Ana-babaya, yakınlara, yetimlere ve yoksullara iyilik edin."
        },
        // Adalet Ayetleri
        {
            arabic: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ",
            turkish: "Allah adalet ve ihsanı emreder."
        },
        {
            arabic: "وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا",
            turkish: "Bir topluma olan kininiz sizi adaletsizliğe sürüklemesin."
        },
        {
            arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ",
            turkish: "Ey iman edenler! Adaletle ayakta durun."
        },
        // Sabır ve Şükür Ayetleri
        {
            arabic: "وَلَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
            turkish: "Eğer şükrederseniz, size daha fazla veririm."
        },
        {
            arabic: "وَمَن يَشْكُرْ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ",
            turkish: "Kim şükrederse, ancak kendisi için şükretmiş olur."
        },
        {
            arabic: "وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ",
            turkish: "Andolsun ki sizi biraz korku, açlık ve mal, can, ürün eksikliği ile imtihan edeceğiz."
        },
        // Dua Ayetleri
        {
            arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
            turkish: "Rabbiniz dedi ki: Bana dua edin, size icabet edeyim."
        },
        {
            arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
            turkish: "Kullarım sana beni sorduğunda, ben yakınım."
        },
        {
            arabic: "أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
            turkish: "Dua eden dua ettiğinde ona icabet ederim."
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
        },
        {
            arabic: "أَسْتَغْفِرُ اللَّهَ",
            turkish: "Allah'tan bağışlanma dilerim."
        },
        {
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
            turkish: "Allah'ı hamd ile birlikte tesbih ederim."
        },
        {
            arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
            turkish: "Senden başka ilah yoktur. Seni tesbih ederim. Ben zalimlerden oldum."
        },
        // Günlük Zikirler
        {
            arabic: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ",
            turkish: "Allah'ı tesbih ederim, hamd Allah'a mahsustur, Allah'tan başka ilah yoktur, Allah en büyüktür."
        },
        {
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            turkish: "Allah'tan başka ilah yoktur, O tektir, ortağı yoktur. Mülk O'nundur, hamd O'na mahsustur ve O her şeye kadirdir."
        },
        {
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",
            turkish: "Allah'ı hamd ile birlikte tesbih ederim. Yüce Allah'ı tesbih ederim."
        },
        {
            arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            turkish: "Yüce ve büyük Allah'tan başka güç ve kuvvet yoktur."
        },
        // Sabah Zikirleri
        {
            arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ",
            turkish: "Sabahladık ve mülk Allah'ındır. Hamd Allah'a mahsustur."
        },
        {
            arabic: "اللَّهُمَّ أَصْبَحْنَا نُشْهِدُكَ وَنُشْهِدُ حَمَلَةَ عَرْشِكَ",
            turkish: "Allah'ım! Sabahladık, seni ve arşının taşıyıcılarını şahit tutuyoruz."
        },
        {
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ",
            turkish: "Allah'ı yaratıklarının sayısınca, kendi rızasınca ve arşının ağırlığınca hamd ile birlikte tesbih ederim."
        },
        // Akşam Zikirleri
        {
            arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ",
            turkish: "Akşamladık ve mülk Allah'ındır. Hamd Allah'a mahsustur."
        },
        {
            arabic: "اللَّهُمَّ أَمْسَيْنَا نُشْهِدُكَ وَنُشْهِدُ حَمَلَةَ عَرْشِكَ",
            turkish: "Allah'ım! Akşamladık, seni ve arşının taşıyıcılarını şahit tutuyoruz."
        },
        {
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            turkish: "Allah'ı yaratıklarının sayısınca, kendi rızasınca, arşının ağırlığınca ve kelimelerinin mürekkebince hamd ile birlikte tesbih ederim."
        },
        // İstiaze Zikirleri
        {
            arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
            turkish: "Kovulmuş şeytandan Allah'a sığınırım."
        },
        {
            arabic: "أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
            turkish: "İşiten ve bilen Allah'a kovulmuş şeytandan sığınırım."
        },
        {
            arabic: "أَعُوذُ بِاللَّهِ مِنْ شَرِّ مَا خَلَقَ",
            turkish: "Yarattığı şeylerin şerrinden Allah'a sığınırım."
        },
        // Tevhid Zikirleri
        {
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ",
            turkish: "Allah'tan başka ilah yoktur, Muhammed Allah'ın elçisidir."
        },
        {
            arabic: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
            turkish: "Allah'tan başka ilah olmadığına ve Muhammed'in O'nun kulu ve elçisi olduğuna şahitlik ederim."
        },
        {
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
            turkish: "Allah'tan başka ilah yoktur, O tektir, ortağı yoktur."
        },
        // Şükür Zikirleri
        {
            arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            turkish: "Alemlerin Rabbi Allah'a hamd olsun."
        },
        {
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ",
            turkish: "Nimetiyle salih amellerin tamamlandığı Allah'a hamd olsun."
        },
        {
            arabic: "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ",
            turkish: "Allah'a çok, güzel ve bereketli hamd olsun."
        },
        // İstiğfar Zikirleri
        {
            arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ",
            turkish: "Kendisinden başka ilah olmayan, diri ve ayakta tutan büyük Allah'tan bağışlanma dilerim."
        },
        {
            arabic: "أَسْتَغْفِرُ اللَّهَ رَبِّي وَأَتُوبُ إِلَيْهِ",
            turkish: "Rabbim Allah'tan bağışlanma dilerim ve O'na tevbe ederim."
        },
        {
            arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
            turkish: "Rabbim! Beni bağışla ve bana tevbe nasip et. Şüphesiz sen tevbe edenleri kabul eden ve merhamet edensin."
        },
        // Salat Zikirleri
        {
            arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
            turkish: "Allah'ım! Muhammed'e ve Muhammed'in ailesine salat et."
        },
        {
            arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ",
            turkish: "Allah'ım! Muhammed'e ve ailesine, İbrahim'e ve ailesine salat ettiğin gibi salat et."
        },
        {
            arabic: "اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ",
            turkish: "Allah'ım! Muhammed'e ve ailesine, İbrahim'e ve ailesine bereket verdiğin gibi bereket ver."
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

// Arka plan yükleme fonksiyonları
function setupBackgroundUpload() {
    if (!uploadArea || !backgroundInput) return;
    
    // Upload area'ya tıklama
    uploadArea.addEventListener('click', () => {
        if (backgroundInput) backgroundInput.click();
    });
    
    // Dosya seçimi
    backgroundInput.addEventListener('change', handleFileSelect);
    
    // Drag & drop
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);
    
    // Arka plan kaldırma
    if (removeBackground) {
        removeBackground.addEventListener('click', removeUserBackground);
    }
}

// Dosya seçimi
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        loadUserBackground(file);
    }
}

// Drag over
function handleDragOver(event) {
    event.preventDefault();
    uploadArea.classList.add('dragover');
}

// Drag leave
function handleDragLeave(event) {
    event.preventDefault();
    uploadArea.classList.remove('dragover');
}

// Drop
function handleDrop(event) {
    event.preventDefault();
    uploadArea.classList.remove('dragover');
    
    const files = event.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
        loadUserBackground(files[0]);
    }
}

// Kullanıcı arka planını yükle
function loadUserBackground(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        userBackground = e.target.result;
        if (previewImage) previewImage.src = userBackground;
        if (backgroundPreview) backgroundPreview.style.display = 'block';
        if (uploadArea) uploadArea.style.display = 'none';
        
        // Post canvas'a arka planı uygula
        if (postCanvas) {
            postCanvas.style.backgroundImage = `url(${userBackground})`;
            postCanvas.style.backgroundSize = 'cover';
            postCanvas.style.backgroundPosition = 'center';
        }
    };
    reader.readAsDataURL(file);
}

// Kullanıcı arka planını kaldır
function removeUserBackground() {
    userBackground = null;
    if (backgroundPreview) backgroundPreview.style.display = 'none';
    if (uploadArea) uploadArea.style.display = 'block';
    
    // Post canvas'tan arka planı kaldır
    if (postCanvas) {
        postCanvas.style.backgroundImage = '';
        postCanvas.style.backgroundSize = '';
        postCanvas.style.backgroundPosition = '';
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
    fullscreenModal.addEventListener('click', (e) => {
        if (e.target === fullscreenModal) {
            closeFullscreenModal();
        }
    });
    
    // ESC tuşu ile modal kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && fullscreenModal.classList.contains('active')) {
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

// Tam ekran aç
function openFullscreen() {
    fullscreenPreview.innerHTML = postCanvas.outerHTML;
    fullscreenModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Tam ekran kapat
function closeFullscreenModal() {
    fullscreenModal.classList.remove('active');
    document.body.style.overflow = 'auto';
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
    clearSearch.style.display = 'flex';
}

// Arama sonuçlarını gizle
function hideSearchResults() {
    searchResults.style.display = 'none';
    clearSearch.style.display = 'none';
}

// Arama sonucu seç
function selectSearchResult(result) {
    arabicText.textContent = result.arabic;
    turkishText.textContent = result.turkish;
    contentSelect.value = result.category;
    
    // Arama sonuçlarını temizle
    contentSearch.value = '';
    hideSearchResults();
}

// Arama sonuçlarını temizle
function clearSearchResults() {
    contentSearch.value = '';
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
