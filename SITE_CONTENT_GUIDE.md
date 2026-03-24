# 📖 Author's Guide: Managing Your Content

This guide explains exactly where to go to change your books, images, and links.

---

### 1. 📚 Changing Books (Titles, Descriptions, Amazon Links)
All book data is stored in one file:
📍 **File Path:** [`src/data/books.js`](file:///c:/Users/bhavi/OneDrive/Desktop/Coding/projects/mom-author-site/src/data/books.js)

*   **To add a book:** Copy an existing book object and change the `title`, `description`, and `amazonUrl`.
*   **To change the cover:** Update the `image` path (e.g., `/images/my-new-book.jpg`).

### 2. 🖼️ Adding Images (Covers, Author Photo)
Place all your images in this folder:
📍 **Folder Path:** `public/images/`

*   **Author Photo:** Rename your photo to `mom.jpg` and replace the one in this folder.
*   **Book Covers:** Upload your `.jpg` or `.png` covers here.

### 3. 👤 Changing Author Bio ("About Me")
To edit the "About the Author" text or your name:
📍 **File Path:** [`src/components/about/AuthorSection.jsx`](file:///c:/Users/bhavi/OneDrive/Desktop/Coding/projects/mom-author-site/src/components/about/AuthorSection.jsx)
*(Look for the `<ProfileCard>` and the `<p>` tags with the bio text).*

### 4. 🔗 Social Media & Email Links
I have made this very easy! You don't even need to touch the code. Just edit this file:
📍 **File Path:** [`.env`](file:///c:/Users/bhavi/OneDrive/Desktop/Coding/projects/mom-author-site/.env)

*   Change `VITE_INSTAGRAM_URL` to your Instagram link.
*   Change `VITE_AMAZON_AUTHOR_URL` to your Amazon Author page.
*   Change `VITE_AUTHOR_EMAIL` to your public email.

### 🎨 5. Deck Logos & Category Images
*   **Deck Icons (Footer):** Place new icons (Instagram, Amazon, etc.) in the `public/icons/` folder. To update which icon is used, edit [`FooterDock.jsx`](file:///c:/Users/bhavi/OneDrive/Desktop/Coding/projects/mom-author-site/src/components/footer/FooterDock.jsx).
*   **Category Covers:** The 3D bookshelf categories (Poetry, Novels, etc.) use images from `public/images/`. You can change these in [`CategorySection.jsx`](file:///c:/Users/bhavi/OneDrive/Desktop/Coding/projects/mom-author-site/src/components/books/CategorySection.jsx).

### 🚀 6. Deployment (Seeing changes live)
*   **If using Vercel:** Just save your files and use `git add .`, `git commit -m "Update"`, and `git push`. The site updates automatically.
*   **If using Firebase:** Run `npm run build` and then `firebase deploy`.

---
> [!TIP]
> **Pro Tip:** Always name your image files without spaces (e.g., `book_cover.jpg` instead of `book cover.jpg`) to avoid errors!
