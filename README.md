# EasyBazaar 🛍️

EasyBazaar is a modern e-commerce platform built using React Native, Expo, and TypeScript. The application allows users to browse products, view product details, and explore different categories. This project focuses on providing a clean user interface and seamless navigation with infinite scrolling and category-based filtering.

## Features ✨

- **Category Chip List**: Displays a list of categories for easy filtering.
- **Product Listing**: Infinite scrolling to display products dynamically fetched from an API.
- **Product Detail Page**: View detailed information about each product, including images, description, price, and reviews.
- **API Integration**: Fetching data from an API using Axios and React Query for efficient data fetching.
- **Responsive UI**: Built with Expo and React Native, ensuring compatibility across different devices.

## Technologies Used 🛠️

- **React Native**: Framework for building cross-platform mobile apps.
- **Expo**: A toolset and platform for universal React apps.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **React Query**: A data-fetching and caching library for React applications.
- **Axios**: Promise-based HTTP client for making requests to APIs.
<!--- **Zustand**: State management library for React applications.
- **Tailwind CSS**: A utility-first CSS framework for fast UI development.-->
- **React Navigation**: Navigation library for routing and navigation in React Native apps.
- **Expo Router**: A routing system based on file-system-based routing.

## Installation ⚡

1. **Clone the Repository**:

```bash
git clone https://github.com/Vishnu473/EasyBazaar.git
```

2. **Install Dependencies**:

Navigate to the project directory and install the dependencies:

```bash
cd EasyBazaar
npm install
```

3. **Start the Application**:

You can run the app using Expo by running:

```bash
npm start
```

This will open the Expo CLI, which will give you options to run the app on your device, simulator, or browser.

## Directory Structure 📂

- **/app**: Contains the main app components and screens.
- **/services**: Contains the logic for interacting with APIs and managing data.
- **/themes**: Custom themes and styling for the app.
- **/components**: Reusable UI components such as headers, cards, buttons, etc.
- **/assets**: Contains images and other assets used in the app.

## API Endpoints 🌐

- **Categories API**: `GET /categories` - Fetches a list of categories.
- **Products API**: `GET /products?category={category}` - Fetches products based on the selected category.
- **Product Details API**: `GET /product/{productId}` - Fetches detailed information for a single product.

## Contributing 🤝

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request for any improvements or bug fixes.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy building with EasyBazaar! 🎉 Feel free to adjust it to match your project’s specifics.
