# دليل النشر | Deployment Guide

## نشر على GitHub + Render | GitHub + Render Deployment

### 1. إعداد GitHub Repository

```bash
# إنشاء repository جديد على GitHub
# Create new repository on GitHub

# ربط المشروع بـ GitHub
# Connect project to GitHub
git init
git add .
git commit -m "Initial commit: Arabic inventory management system"
git branch -M main
git remote add origin https://github.com/yourusername/inventory-management-system.git
git push -u origin main
```

### 2. إعداد Render

#### خطوات النشر | Deployment Steps:

1. **إنشاء حساب على Render**
   - اذهب إلى [render.com](https://render.com)
   - قم بالتسجيل باستخدام GitHub account

2. **إنشاء PostgreSQL Database**
   - في Render Dashboard اضغط "New +"
   - اختر "PostgreSQL"
   - اختر اسم: `inventory-db`
   - اختر المنطقة: `Frankfurt` (أقرب للشرق الأوسط)
   - اختر الخطة: `Free`

3. **إنشاء Web Service**
   - اضغط "New +" → "Web Service"
   - اربط GitHub repository
   - املأ البيانات:
     - **Name**: `inventory-management-system`
     - **Region**: `Frankfurt`
     - **Branch**: `main`
     - **Runtime**: `Node`
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`

4. **إعداد Environment Variables**
   - في Web Service settings → Environment
   - أضف المتغيرات التالية:
   ```
   NODE_ENV=production
   DATABASE_URL=[copy from PostgreSQL service]
   OPENAI_API_KEY=[your_openai_api_key]
   ```

### 3. النشر التلقائي | Auto Deployment

الملف `render.yaml` سيقوم بإعداد كل شيء تلقائياً:
- إنشاء قاعدة البيانات PostgreSQL
- ربط Web Service بقاعدة البيانات
- إعداد متغيرات البيئة

### 4. بعد النشر | Post Deployment

```bash
# تشغيل database migration
# Run database migration
npm run db:push

# بذر قاعدة البيانات (اختياري)
# Seed database (optional)
npm run db:seed
```

## Docker Deployment (Alternative)

### إعداد Docker

```bash
# إنشاء وتشغيل البيئة
# Build and run environment
docker-compose up --build

# تشغيل في الخلفية
# Run in background
docker-compose up -d

# إيقاف الخدمات
# Stop services
docker-compose down
```

### متغيرات البيئة للـ Docker

إنشئ ملف `.env`:
```env
DATABASE_URL=postgresql://postgres:password@db:5432/inventory_management
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=production
```

## الاختبار | Testing

### اختبار محلي | Local Testing
```bash
npm run build
npm start
```

### اختبار الإنتاج | Production Testing
- تأكد من تشغيل جميع الصفحات
- اختبر المساعد الصوتي
- اختبر رفع الشعارات
- تأكد من عمل قاعدة البيانات

## استكشاف الأخطاء | Troubleshooting

### مشاكل شائعة | Common Issues

1. **Database Connection Error**
   ```
   تأكد من صحة DATABASE_URL
   تحقق من إعدادات firewall
   ```

2. **OpenAI API Error**
   ```
   تحقق من صحة OPENAI_API_KEY
   تأكد من وجود رصيد في حساب OpenAI
   ```

3. **Build Errors**
   ```
   npm run type-check
   تحقق من TypeScript errors
   ```

### سجلات Render | Render Logs
- اذهب إلى Service → Logs
- راقب أخطاء startup
- تحقق من database connection

## الأمان | Security

### متغيرات البيئة | Environment Variables
- لا تضع API keys في الكود
- استخدم Render Environment Variables
- قم بتدوير المفاتيح بانتظام

### قاعدة البيانات | Database Security
- استخدم SSL connections
- قم بعمل backup منتظم
- راقب الوصول غير المصرح

## التحديثات | Updates

### تحديث الكود | Code Updates
```bash
git add .
git commit -m "Update: description"
git push origin main
# Render will auto-deploy
```

### تحديث قاعدة البيانات | Database Updates
```bash
# تحديث schema
npm run db:push

# تشغيل migrations
npm run db:migrate
```

## الصيانة | Maintenance

### مراقبة الأداء | Performance Monitoring
- راقب Render metrics
- تحقق من استخدام memory
- راقب database performance

### النسخ الاحتياطي | Backups
- قم بعمل backup منتظم لقاعدة البيانات
- احفظ نسخة من environment variables
- اختبر استعادة البيانات

---

## الدعم | Support

للحصول على المساعدة:
- راجع Render documentation
- تحقق من GitHub issues
- استخدم Render community forum