# Dynamic Webshop Generator

This repository provides a solution to generate multiple copies of a Vite+Vue webshop template with dynamic content. Each generated project can have its own title, homepage content, and theme settings by using external JSON configuration files.

## Overview

- **templates.json**: Contains an array of project configurations. Each configuration includes the project name, title, homepage file (from the `homepages/` folder), and a theme identifier.
- **themes.json**: Defines available themes and their color settings.
- **configure.js**: A Node.js script that reads both configuration files and merges theme data into the project settings. It then injects dynamic content (e.g., title and homepage content) into the template files.
- **generate-multiple.sh**: A Bash script that iterates over all entries in `templates.json`, clones the base webshop template, cleans up its Git history, installs dependencies, and runs `configure.js` to update the project with dynamic content.
- **homepages/**: A folder containing Vue component files (e.g., `home-1.vue`, `home-2.vue`, `home-3.vue`) that serve as homepage content options.
- **src/views/Home.vue**: A Vue component with a placeholder comment (`<!-- homepage-content -->`) where the homepage content will be injected.

## Prerequisites

- **Node.js** and **npm** (v14+ recommended)
- **Git**
- **jq** (a command-line JSON processor; install via your package manager if not already available)

## Setup and Usage

1. **Clone or Download the Repository**  
   Create a working directory and place the following files/folders in it:
   - `templates.json`
   - `themes.json`
   - `configure.js`
   - `generate-multiple.sh`
   - `homepages/` (with your homepage Vue files)

2. **Customize the Configuration Files**

   - **templates.json**  
     Define your projects. For example:
     ```json
     [
       {
         "projectName": "Sepatune.com",
         "title": "Sepatune.com",
         "homepageFile": "home-1.vue",
         "theme": "light"
       },
       {
         "projectName": "ToteKita.com",
         "title": "ToteKita.com",
         "homepageFile": "home-2.vue",
         "theme": "dark"
       }
       // ... more projects
     ]
     ```
     
   - **themes.json**  
     Define the available themes:
     ```json
     [
       {
         "name": "light",
         "colors": {
           "primary": "#ffffff",
           "secondary": "#000000"
         }
       },
       {
         "name": "dark",
         "colors": {
           "primary": "#000000",
           "secondary": "#ffffff"
         }
       },
       {
         "name": "blue",
         "colors": {
           "primary": "#1E3A8A",
           "secondary": "#60A5FA"
         }
       },
       {
         "name": "pastel",
         "colors": {
           "primary": "#F9A8D4",
           "secondary": "#FDE68A"
         }
       }
     ]
     ```

3. **Prepare Homepage Vue Files**  
   In the `homepages/` folder, add your homepage Vue files (e.g., `home-1.vue`, `home-2.vue`, `home-3.vue`). Each file should at minimum include a `<template>` block containing the homepage content. For example, `home-1.vue` might look like:
   ```vue
   <template>
     <div>
       <h1>Welcome to Sepatune!</h1>
       <p>Your one-stop shop for quality products.</p>
     </div>
   </template>