## PlayTech Coding Challenge

## Project Overview
This project is a **Product Catalogue Application** built using **JavaScript** and **React**. The task is to create a small product catalogue that categorizes products into three main categories: **Software**, **Mobile Devices**, and **Fashion**. Each product has a name, description, image, price, and category-specific characteristics. The application is designed to be responsive, with a simple yet intuitive UI for easy navigation and exploration of products.

## Table of Contents
- [Requirements](#requirements)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Requirements
The application needs to meet the following requirements:
- **Product Categories**:
  - **Software**: Characteristics may include license type, platform, version, etc.
  - **Mobile Devices**: Characteristics may include battery life, processor, RAM, camera, etc.
  - **Fashion**: Characteristics may include size, color, material, etc.
- **Product Information**:
  - Each product should have a name, description, image, and price.
- **Responsive UI**:
  - The UI should be simple and responsive.
  - The main page should list a fixed number of products with a "Load More" button at the bottom to display additional products.
  - Clicking on a product should open a detailed pop-up modal with full product information.
- **Data Handling**:
  - The configuration for products is stored locally in the project as a JSON file.

## Features
- **Category-Based Product Listing**: Browse products categorized under Software, Mobile Devices, and Fashion.
- **Product Details Modal**: View detailed information of a product in a modal pop-up, including category-specific characteristics.
- **Load More Functionality**: Dynamically load more products on the page using the "Load More" button.
- **Responsive Design**: Ensures a smooth user experience across both mobile and desktop devices.
- **Dropdown Navigation**: Quickly switch between different product categories.
- **CSS Animations**: Provides smooth transitions for a polished user interface.

## Technologies Used
- **React**: For building the user interface and managing components.
- **JavaScript (ES6+)**: Core logic for implementing functionalities.
- **SCSS**: For styling the application with responsive and maintainable stylesheets.
- **React Router**: For navigation between different pages and categories.
- **JSON**: Local data storage for product information.

## Installation

To set up the project locally, follow these steps:

### Prerequisites
- **Node.js** (v14 or later)
- **npm** (v6 or later) or **yarn** (v1.22 or later)

### Clone the Repository
```bash
git clone https://github.com/craftina/Playtech.git
cd Playtech/catalogue