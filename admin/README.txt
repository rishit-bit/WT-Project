RD Share — Static HTML/CSS/JavaScript conversion

OPENING
- Extract this folder and open index.html in a modern browser.
- For the best experience (especially uploads/downloads), run from a local static server such as VS Code Live Server.
- Bootstrap 5.3.3 is loaded from CDN, so an internet connection is needed for Bootstrap styling.

DEMO LOGIN
- Admin: username admin / password admin123
- Client: username rishit / password rishit123

WHAT WORKS
- Login and role-based dashboard routing
- Client uploads files, searches files, downloads files in the same browser, removes files
- Client creates and deletes folders
- Admin views all file metadata and can remove files
- Admin demo user list

IMPORTANT STATIC-SITE LIMITATIONS
The PHP/MySQL server was replaced with front-end JavaScript. This is a visual/demo conversion, not a secure production authentication system. Data is stored in browser localStorage; uploaded file data may be limited by browser storage. No cross-device sharing, server-side permissions, real share links, or database persistence is available without a backend.
