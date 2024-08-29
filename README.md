# Data Sharing Risk Assessment Editor

The **Data Sharing Risk Assessment Editor** is a web-based tool for loading, editing, and downloading JSON data files related to data sharing risk assessments. It allows users to either load the latest JSON data from a live tool or upload a JSON file from their computer. After making edits, users can download the modified JSON data for further use.

## Features

- **Load JSON from URL**: Load the latest JSON data from a live tool at `https://dsra.theodi.org/json/checkpoints.json`.
- **Upload JSON File**: Upload a JSON file from your computer to edit it within the tool.
- **Edit JSON Data**: Modify the JSON data using a user-friendly form interface, including rich text fields using the Quill WYSIWYG editor.
- **Download JSON Data**: After editing, download the updated JSON data to your computer.

## Warning

**This tool does not save state.** Ensure you download your changes before closing the tool. To continue editing later, you can re-upload the downloaded JSON file.

## Getting Started

### Prerequisites

To run the Data Sharing Risk Assessment Editor, you need the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12.x or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/dsra-editor.git
   cd dsra-editor
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

To run the application locally:

```bash
npm start
```

This will start the application on `http://localhost:3000/`. Open this URL in your browser to use the Data Sharing Risk Assessment Editor.

### Deployment

To deploy the application, follow these steps:

#### 1. Build the Application

First, create a production build of the application:

```bash
npm run build
```

This command will generate a `build` directory with all the static assets required to deploy the application.

#### 2. Deploy to a Static Server

You can deploy the contents of the `build` directory to any static file server. Here are a few popular options:

- **GitHub Pages**:
  - If you want to deploy to GitHub Pages, install the `gh-pages` package and add the following scripts to your `package.json`:
    ```json
    "homepage": "https://yourusername.github.io/dsra-editor",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```
  - Deploy using:
    ```bash
    npm run deploy
    ```

- **Netlify**:
  - Simply drag and drop the `build` folder into Netlify’s dashboard, or use the Netlify CLI:
    ```bash
    npm install -g netlify-cli
    netlify deploy
    ```

- **Vercel**:
  - Deploy using Vercel CLI:
    ```bash
    npm install -g vercel
    vercel
    ```

- **AWS S3**:
  - Upload the contents of the `build` directory to an S3 bucket. Ensure the bucket is configured to serve static content.

#### 3. Access the Deployed Application

After deploying, your application will be available at the URL provided by your hosting service.

## Contributing

If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.