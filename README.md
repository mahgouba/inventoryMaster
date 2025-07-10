# نظام إدارة المخزون | Inventory Management System

نظام شامل لإدارة المخزون مبني بتقنيات الويب الحديثة مع واجهة عربية متكاملة ومساعد صوتي ذكي.

A comprehensive inventory management system built with modern web technologies, featuring an Arabic-first interface and intelligent voice assistant.

## المميزات | Features

### العربية
- **واجهة عربية كاملة**: تصميم متجاوب مع دعم كامل للغة العربية
- **مساعد صوتي ذكي**: استخدام الذكاء الاصطناعي لإدارة المخزون صوتياً
- **استخراج رقم الهيكل**: تقنية OCR لاستخراج أرقام الهيكل من الصور
- **إدارة الشركات المصنعة**: رفع وإدارة شعارات الشركات
- **تخصيص المظهر**: تحكم كامل في ألوان وشعارات النظام
- **إدارة المستخدمين**: نظام مصادقة متقدم مع أدوار المستخدمين
- **تقارير وإحصائيات**: لوحة تحكم شاملة مع إحصائيات مفصلة

### English
- **Complete Arabic Interface**: Responsive design with full Arabic language support
- **Intelligent Voice Assistant**: AI-powered voice commands for inventory management
- **Chassis Number OCR**: Extract chassis numbers from images using OCR technology
- **Manufacturer Management**: Upload and manage manufacturer logos
- **Appearance Customization**: Full control over system colors and branding
- **User Management**: Advanced authentication system with user roles
- **Reports & Analytics**: Comprehensive dashboard with detailed statistics

## التقنيات المستخدمة | Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** with Arabic font support (Noto Sans Arabic)
- **shadcn/ui** components built on Radix UI
- **TanStack Query** for server state management
- **Wouter** for lightweight routing

### Backend
- **Node.js** with Express.js framework
- **TypeScript** with ES modules
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** database with connection pooling
- **OpenAI GPT-4o** for voice assistant and OCR

### DevOps & Deployment
- **GitHub Actions** for CI/CD
- **Render** for hosting with PostgreSQL database
- **Docker** support with multi-stage builds

## التشغيل المحلي | Local Development

### المتطلبات | Prerequisites
- Node.js 20.x or higher
- PostgreSQL database
- OpenAI API key

### التثبيت | Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/inventory-management-system.git
cd inventory-management-system

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL and OpenAI API key

# Push database schema
npm run db:push

# Seed the database (optional)
npm run db:seed

# Start development server
npm run dev
```

### متغيرات البيئة | Environment Variables

```env
DATABASE_URL=postgresql://username:password@localhost:5432/inventory_db
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
```

## النشر | Deployment

### GitHub + Render

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial deployment setup"
git push origin main
```

2. **Render Setup**:
   - Connect your GitHub repository to Render
   - The `render.yaml` file will automatically configure your deployment
   - Add your `OPENAI_API_KEY` in Render environment variables
   - Database will be automatically created and connected

3. **Environment Variables in Render**:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `DATABASE_URL`: Automatically set by Render
   - `NODE_ENV`: Set to `production`

### Docker Deployment

```bash
# Build and run with Docker Compose
npm run docker:up

# Or build manually
docker build -t inventory-system .
docker run -p 5000:5000 inventory-system
```

## استخدام النظام | System Usage

### تسجيل الدخول | Login
- **Username**: `abdullah`
- **Password**: `25533`
- **Role**: Admin

### المميزات الرئيسية | Main Features

1. **إدارة المخزون**: إضافة، تعديل، وحذف المركبات
2. **المساعد الصوتي**: أوامر صوتية ونصية لإدارة المخزون
3. **استخراج رقم الهيكل**: رفع صور وخراج أرقام الهيكل تلقائياً
4. **إدارة المظهر**: تخصيص الألوان والشعارات
5. **التقارير**: إحصائيات مفصلة وتقارير المخزون

## الهيكل التنظيمي | Project Structure

```
inventory-management-system/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility libraries
├── server/                # Backend Express application
│   ├── db.ts             # Database connection
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data access layer
│   └── index.ts          # Server entry point
├── shared/               # Shared TypeScript schemas
├── .github/              # GitHub Actions workflows
├── render.yaml           # Render deployment config
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
└── package.json         # Dependencies and scripts
```

## المساهمة | Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## الترخيص | License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## الدعم | Support

For support and questions, please open an issue on GitHub or contact the development team.

---

Built with ❤️ for Arabic-speaking businesses and organizations.