# Deployment Guide

This guide will help you deploy the Roammate application to Vercel.

## Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Vercel account (https://vercel.com)
- Vercel CLI (optional)

## Deployment Steps

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Build the Application

```bash
npm run build
# or
yarn build
```

### 3. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New..." > "Project"
4. Import your repository
5. Configure project settings:
   - Framework Preset: Vite
   - Root Directory: (leave as default)
   - Build Command: `npm run build` or `yarn build`
   - Output Directory: `dist`
   - Install Command: `npm install` or `yarn`
6. Click "Deploy"

#### Option B: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run the following command and follow the prompts:
   ```bash
   vercel
   ```
3. For production deployment:
   ```bash
   vercel --prod
   ```

## Environment Variables

If your application requires environment variables, add them in the Vercel project settings:

1. Go to your project in Vercel Dashboard
2. Navigate to Settings > Environment Variables
3. Add your environment variables

## Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Navigate to Settings > Domains
3. Add your custom domain and follow the verification steps

## Troubleshooting

- If you encounter build errors, check the build logs in the Vercel Dashboard
- Ensure all required environment variables are set
- Make sure your `vercel.json` and `next.config.js` are properly configured

## Support

For additional help, please contact the development team or refer to the Vercel documentation: https://vercel.com/docs
