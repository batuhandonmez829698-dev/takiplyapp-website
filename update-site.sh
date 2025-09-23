#!/bin/bash

# TakiplyApp.com otomatik güncelleme scripti
echo "🚀 TakiplyApp.com güncelleniyor..."

# Git durumunu kontrol et
cd /Users/batuhanesrefdonmez/Desktop/TakiplyApp.com

# Tüm değişiklikleri ekle
git add .

# Commit mesajı ile kaydet
git commit -m "Auto-update: $(date '+%Y-%m-%d %H:%M:%S')"

# GitHub'a gönder
git push origin main

echo "✅ Site başarıyla güncellendi!"
echo "🌐 takiplyapp.com adresinde değişiklikler görünecek (1-2 dakika sürebilir)"
