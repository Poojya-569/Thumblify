# Thumblify – AI-Powered Thumbnail Generator

Thumblify is a full-stack MERN application that helps content creators generate high-quality YouTube thumbnail concepts using AI. The platform streamlines the thumbnail creation process by optimizing user prompts, generating visually appealing thumbnails, recreating existing designs with controlled modifications, and providing a secure workspace to manage generated assets.

## Problem Statement

Creating engaging thumbnails is often time-consuming and requires multiple rounds of prompt refinement. Existing AI image generators frequently produce results that do not accurately match the creator's vision, forcing users to repeatedly modify prompts and regenerate images. Additionally, many tools lack features such as recreation from existing thumbnails, persistent storage, creator authentication, and a community platform for inspiration.

## Solution

Thumblify solves these challenges by combining AI-powered prompt optimization with image generation to deliver a faster and more consistent thumbnail creation workflow.

The application allows creators to:

* Generate thumbnails from a topic or idea.
* Recreate existing thumbnails with targeted modifications.
* Automatically optimize prompts using Groq before image generation.
* Generate thumbnail images using Pollinations AI.
* Store generated thumbnails permanently in MongoDB.
* Secure user accounts using JWT authentication.
* Track user credits for generation usage.
* Browse personal thumbnail history.
* Explore a public community gallery.
* Like and download public thumbnails.

## Features

* 🔐 JWT Authentication
* 🎨 AI Prompt Optimization using Groq
* 🖼️ AI Thumbnail Generation using Pollinations
* ♻️ Recreate Existing Thumbnail Workflow
* 💾 MongoDB Thumbnail Storage
* 👤 Personal Thumbnail Library
* 🌍 Public Community Feed
* ❤️ Like Community Thumbnails
* ⬇️ Download Generated Images
* 💳 Credit-Based Generation System
* 📱 Responsive React Frontend

## Tech Stack

### Frontend

* React.js
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt

### AI Services

* Groq API (Prompt Optimization)
* Pollinations AI (Image Generation)

## Application Workflow

1. User registers or logs into the application.
2. JWT authentication grants access to protected routes.
3. User selects one of two creation modes:

   * Generate Thumbnail
   * Recreate Thumbnail
4. User enters the required inputs such as title, style, aspect ratio, color palette, prompt, or reference image.
5. Groq optimizes the input into a thumbnail-focused prompt.
6. The optimized prompt is passed to Pollinations AI to generate the image.
7. The generated thumbnail and metadata are stored in MongoDB.
8. User can:

   * View personal thumbnails
   * Download generated images
   * Explore public creations
   * Like community thumbnails

## Project Structure

```
Thumblify/
│
├── client/                 # React Frontend
├── server/                 # Express Backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── README.md
└── package.json
```

## Future Enhancements

* AI-powered thumbnail quality scoring
* Multiple image generation models
* Image editing tools
* Team collaboration
* Advanced search and filtering
* Prompt history and favorites
* Premium subscription plans
* Analytics dashboard

## Author

**Poojya Kavuru**

Thumblify was developed as a full-stack MERN project to simplify AI-assisted thumbnail creation by combining prompt engineering, image generation, secure authentication, persistent storage, and community-driven inspiration into a single platform.
