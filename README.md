# Dynamic Webshop Generator

This repository provides a solution to generate multiple copies of a Vite+Vue webshop template with dynamic content. Each generated project can have its own title, homepage content, and theme settings by using external JSON configuration files.

## Overview

- **templates.json**: Contains an array of project configurations. Each configuration includes the project name, title, homepage file (from the `homepages/` folder), and a theme identifier.
- **themes.json**: Defines available themes and their color settings.
- **configure.js**: A Node.js script that reads both configuration files and merges theme data into the project settings. It then injects dynamic content (e.g., title and homepage content) into the template files.
- **generate-multiple.sh**: A Bash script that iterates over all entries in `templates.json`, clones the base webshop template, cleans up its Git history, installs dependencies, and runs `configure.js` to update the project with dynamic content.
- **homepages/**: A folder containing HTML files (e.g., `home-1.html`, `home-2.html`, `home-3.html`) that serve as different homepage content options.

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
   - `homepages/` (with your homepage HTML files)

2. **Customize the Configuration Files**

   - **templates.json**  
     Define your projects. For example:
     ```json
     [
       {
         "projectName": "Sepatune.com",
         "title": "Sepatune.com",
         "homepageFile": "home-1.html",
         "theme": "light"
       },
       {
         "projectName": "ToteKita.com",
         "title": "ToteKita.com",
         "homepageFile": "home-2.html",
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

3. **Prepare Homepage Files**  
   In the `homepages/` folder, add your homepage HTML files (e.g., `home-1.html`, `home-2.html`, `home-3.html`). These files contain the HTML snippet or content that you want to inject into your Vue component.

4. **Run the Generation Script**  
   Make sure `generate-multiple.sh` is executable:
   ```bash
   chmod +x generate-multiple.sh
