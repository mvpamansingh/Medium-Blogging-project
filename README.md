# 📝 StoryHub - Modern Blogging Platform

A full-stack modern blogging platform built with **React**, **Hono**, and **Prisma**. Features a beautiful magazine-style UI, serverless backend, and type-safe development experience.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Hono](https://img.shields.io/badge/Hono-E36002?style=for-the-badge&logo=hono&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23336791?style=for-the-badge&logo=postgresql&logoColor=white)


## ✨ Features

- 🎨 **Modern UI/UX** - Magazine-style design with smooth animations
- 🔐 **Authentication** - JWT-based secure authentication system
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚡ **Serverless Backend** - Deployed on Cloudflare Workers
- 🗄️ **Database** - PostgreSQL with Prisma ORM + Accelerate
- 🔒 **Type Safety** - Full TypeScript coverage with shared types
- 🚀 **Performance** - Optimized with Vite and edge deployment
- 📊 **Real-time Stats** - Reading progress, word count, estimated time

## 🏗️ Architecture

```
medium/
├── backend/          # Hono serverless API
├── frontend/         # React application  
├── common/          # Shared types & validation
└── README.md
```
<img width="1844" height="953" alt="bloggingArchitecure" src="https://github.com/user-attachments/assets/d5414f24-f0da-4361-90d2-a25e017ae0f4" />

## 🛠️ Tech Stack

### **Backend**
- **Framework**: [Hono](https://hono.dev/) - Lightweight serverless framework
- **Runtime**: [Cloudflare Workers](https://workers.cloudflare.com/) - Edge computing platform
- **Database**: [PostgreSQL](https://www.postgresql.org/) - Relational database
- **ORM**: [Prisma](https://www.prisma.io/) with Accelerate - Database toolkit
- **Authentication**: [JWT](https://jwt.io/) - JSON Web Tokens
- **Validation**: [Zod](https://zod.dev/) - TypeScript-first schema validation

### **Frontend**
- **Framework**: [React 19](https://react.dev/) - UI library
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Routing**: [React Router](https://reactrouter.com/) - Client-side routing
- **HTTP Client**: [Axios](https://axios-http.com/) - Promise-based HTTP client

### **Common Package**
- **Validation**: Shared Zod schemas
- **Types**: TypeScript type definitions
- **Package**: Published as `@aman108/medium-project-zod-types`

##App Screenshots

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** database
- **Cloudflare Workers** account (for deployment)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <[repository-url](https://github.com/mvpamansingh/Medium-Blogging-project.git)>
cd medium
```

### 2. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies  
cd ../frontend
npm install

# Install common package dependencies
cd ../common
npm install
```

### 3. Database Setup

1. **Create PostgreSQL Database**
   ```bash
   # Create a new PostgreSQL database
   createdb medium_blog
   ```

2. **Set up Prisma**
   ```bash
   cd backend
   
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   
   # (Optional) Seed the database
   npx prisma db seed
   ```

### 4. Environment Variables

#### **Backend** (`backend/wrangler.jsonc`)
```json
{
  "vars": {
    "DATABASE_URL": "your_prisma_accelerate_url_here",
    "secret_key": "your_jwt_secret_key_here"
  }
}
```

#### **Frontend** (`frontend/src/CONFIG.ts`)
```typescript
const BACKEND_URL = "http://127.0.0.1:8787"; // Local development
// const BACKEND_URL = "https://your-worker.your-subdomain.workers.dev"; // Production

export { BACKEND_URL }
```

### 5. Set up Prisma Accelerate

1. Go to [Prisma Console](https://console.prisma.io/)
2. Create a new project
3. Enable Accelerate
4. Get your Accelerate connection string
5. Update `DATABASE_URL` in `wrangler.jsonc`

## 💻 Development

### Start Development Servers

#### **Backend** (Port 8787)
```bash
cd backend
npm run dev
```

#### **Frontend** (Port 5173)
```bash
cd frontend  
npm run dev
```

### Build for Production

#### **Frontend**
```bash
cd frontend
npm run build
```

#### **Backend**
```bash
cd backend
npm run deploy
```

## 📡 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/v1/signup` | User registration | ❌ |
| `POST` | `/api/v1/user/signin` | User login | ❌ |
| `POST` | `/api/v1/blog` | Create new blog post | ✅ |
| `PUT` | `/api/v1/blog` | Update blog post | ✅ |
| `GET` | `/api/v1/blog/bulk` | Get all blog posts | ✅ |
| `GET` | `/api/v1/blog/:id` | Get specific blog post | ✅ |

### Example API Usage

#### **User Registration**
```javascript
POST /api/v1/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

#### **Create Blog Post**
```javascript
POST /api/v1/blog
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "title": "My First Blog Post",
  "content": "This is the content of my blog post..."
}
```
## 🗂 App Screenshots
<img width="1875" height="993" alt="blogpage1" src="https://github.com/user-attachments/assets/3f935d7e-ed42-45a0-b1b0-a197be63a5ad" />
<img width="1810" height="963" alt="blogpage2" src="https://github.com/user-attachments/assets/b4d4b176-8a7d-4c68-b892-04d0c85ead59" />
<img width="1821" height="972" alt="createblog" src="https://github.com/user-attachments/assets/c2a6944b-9ff5-4a3c-80f3-3bb45532b742" />
<img width="1822" height="999" alt="readingpage1" src="https://github.com/user-attachments/assets/7d805d8f-67db-4f9e-8404-acb61fc3fbc2" />
<img width="1812" height="994" alt="readingpage2" src="https://github.com/user-attachments/assets/9d7a6b1d-45ce-4144-847d-f938116b79b9" />

## 🗂️ Project Structure

### **Backend Structure**
```
backend/
├── src/
│   ├── index.ts              # Main application entry
│   ├── components/
│   │   └── Middleware.ts     # Authentication middleware
│   └── generated/            # Prisma generated files
├── prisma/
│   ├── schema.prisma         # Database schema
│   └── migrations/           # Database migrations
├── package.json
├── wrangler.jsonc           # Cloudflare Workers config
└── tsconfig.json
```

### **Frontend Structure**
```
frontend/
├── src/
│   ├── pages/               # Route components
│   │   ├── BlogsPage.tsx    # Home page with blog feed
│   │   ├── CreateBlog.tsx   # Blog creation page
│   │   ├── Blog.tsx         # Individual blog page
│   │   ├── SignUpPage.tsx   # User registration
│   │   └── SignInPage.tsx   # User login
│   ├── components/          # Reusable UI components
│   │   ├── AppBar.tsx       # Navigation header
│   │   ├── BlogCard.tsx     # Blog preview card
│   │   └── ParticularBlogComponent.tsx
│   ├── customHooks/         # Custom React hooks
│   │   ├── useBlogHook.ts   # Fetch all blogs
│   │   └── showParticularBlog.ts
│   ├── CONFIG.ts            # API configuration
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

### **Common Package Structure**
```
common/
├── src/
│   └── index.ts             # Shared Zod schemas & types
├── package.json
└── tsconfig.json
```

## 🔧 Available Scripts

### **Backend**
```bash
npm run dev      # Start development server
npm run deploy   # Deploy to Cloudflare Workers
```

### **Frontend**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```


## 🔐 Authentication Flow

1. **User Registration/Login** → JWT token generated
2. **Token Storage** → Stored in localStorage
3. **Protected Routes** → Token required for API calls
4. **Middleware Validation** → Server validates JWT on protected endpoints

## 🚀 Deployment

### **Backend (Cloudflare Workers)**
```bash
cd backend
npm run deploy
```

### **Frontend (Static Hosting)**
```bash
cd frontend
npm run build
# Deploy the dist/ folder to your preferred hosting service
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Database Schema

```prisma
model User {
  id       Int    @id @default(autoincrement())
  email    String @unique
  name     String?
  password String
  posts    Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Issues**
   - Ensure PostgreSQL is running
   - Check DATABASE_URL in wrangler.jsonc
   - Verify Prisma Accelerate setup

2. **CORS Errors**
   - Check BACKEND_URL in CONFIG.ts
   - Ensure backend is running on correct port

3. **Build Errors**
   - Clear node_modules and reinstall dependencies
   - Check TypeScript errors

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aman** - [@mvpamansingh](https://github.com/mvpamansingh)



**⭐ Star this repository if you found it helpful!** 
