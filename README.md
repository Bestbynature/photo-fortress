# 📗 Table of Contents
- [📗 Table of Contents](#-table-of-contents)
- [📖 Photo Fortress App](#-Photo-Fortress-App)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
    - [Live Demo](#live-demo)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Usage](#usage)
    - [Api Documentation](#api-documentation)
    - [To start the development server](#to-start-the-development-server)
  - [👥 Author ](#-author-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)


 <hr>

<!-- PROJECT DESCRIPTION -->

# 📖 Photo Fortress App<a name="Photo-Fortress-App"></a>

The "Photo Fortress" GitHub repository is a secure image upload and retrieval application built using TypeScript and MongoDB. This repository contains endpoints for uploading images (/upload) and retrieving images (/get_image) securely. It includes validation checks to ensure only image files are accepted for upload, with informative error messages provided for invalid file types. Error handling is implemented to address various issues, such as invalid credentials or database errors. The repository also includes documentation explaining how to use the API endpoints, including details on required request parameters and response formats. With features for storing images securely and efficiently, "Photo Fortress" offers a robust solution for managing and accessing image assets in web applications.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Project languages and Libraries </summary>
  <ul>
    <li>TypeScript</li>
    <li>JavaScript</li>
  </ul>
</details>

<details>
  <summary>FrameWork</summary>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>Dotenv</li>
    <li>multer</li>
  </ul>
</details>

<details>
  <summary>DataBase</summary>
  <ul>
    <li>MongoDB</li>
    <li>Mongoose</li>
  </ul>
</details>


### Key Features <a name="key-features"></a>

- [x] Secure image upload endpoint ('/upload')
- [x] Secure image retrieval endpoint ('/get_image')
- [x] Validation checks for image file types
- [x] Error handling for invalid credentials and database errors
- [x] Documentation for API endpoints ('/api/docs')


### Live Demo <a name="live-demo"></a>

[Please check back for the hosted version](#). The video demonstration is given below:

# [Photo_Fortress_App_Demonstration.mp4](https://drive.google.com/file/d/1LFj3T5j9kyXrdPIWlK3YrjBbdQF9Zdu6/view?usp=sharing)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Setup

for cloning follow this steps
- go to the green `code` button at the top left of this Repository
- copy either `SSH` or `https` link depending on your preference and the previous setup you've made on your system
- open your terminal and navigate into your desired folder
-  Then run `git clone <copied link>` command
- or just download `ZIP` file
- Create `.env` file in root directory and add your database connection string as `MONGO_URI` and your port number as `PORT`
- Then run `yarn install` or `npm install`  to install all dependencies

### Usage
To run the project, execute the following command:

- [x] `npm run dev` or `yarn dev` to start the development server
- [x] A message should display on the terminal saying `connected to database` if the connection is successful.
- [x] Another message should be at the terminal saying `Server running on port 3000 or the port you specified in the .env file`
- [x] Open your browser and navigate to `http://localhost:3000` to access the application.
- [x] You can now upload and retrieve images using the API endpoints provided in the documentation.
- [x] Click the get all Ids button to get a list of all the ids of the images you have uploaded and paste the id in the get image by id input field to get the image.
- [x] To upload an image, click the choose file button and select an image file from your local machine. Then click the upload button to submit the image.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Api Documentation <a name="api-documentation"></a>

- [x] The API documentation is available at [Api Documentation](./documentation/api-documentation.md) and provides comprehensive information on how to interact with the API endpoints to upload and retrieve images.

<!-- AUTHORS -->

## 👥 Author <a name="authors"></a>

👤 Author: Damilare

- GitHub: [@githubhandle](https://github.com/Bestbynature)
- Twitter: [@twitterhandle](https://twitter.com/Dammybest)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/damilareismailabestbynature/)



## 🔭 Future Features <a name="future-features"></a>

- [x] Add user authentication
- [x] Implement image resizing and compression
- [x] Add support for additional file types (e.g., PDFs, videos)
- [x] Implement image search functionality
- [x] Add support for image metadata (e.g., tags, descriptions)
- [x] Implement image sharing and collaboration features
- [x] Add support for image editing (e.g., cropping, filters)
- [x] Implement image categorization and organization features
- [x] Add support for image galleries and albums
- [x] Implement image versioning and rollback features
- [x] Add support for image annotations and comments


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project please give it a star or [buy me a coffee](https://www.buymeacoffee.com/dammylare) to show your support!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>


I appreciate [Tobams Group](https://tobamsgroup.com) for providing the inspiration for this work.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.


<p align="right">(<a href="#readme-top">back to top</a>)</p>
