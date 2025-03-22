import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const recipes = [
    { title: "Spicy Chicken Curry", image: "https://vaya.in/recipes/wp-content/uploads/2019/02/Spicy-Malvani-Chicken-Curry.jpg", description: "A fiery and flavorful chicken curry." },
    { title: "Homemade Pasta", image: "https://www.vincenzosplate.com/wp-content/uploads/2020/04/egg-pasta-dough.png", description: "Freshly made pasta with a rich sauce." },
    { title: "Chocolate Cake", image: "https://mojo.generalmills.com/api/public/content/QYYSZSvDmU2BEzvW_HnVkg_gmi_hi_res_jpeg.jpeg?v=3668f321&t=466b54bb264e48b199fc8e83ef1136b4", description: "A moist and decadent chocolate delight." },
    { title: "Grilled Salmon", image: "https://www.allrecipes.com/thmb/CfocX_0yH5_hFxtbFkzoWXrlycs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg", description: "Perfectly grilled salmon with herbs." },
    { title: "Vegan Salad", image: "https://www.noracooks.com/wp-content/uploads/2021/05/sq-10.jpg", description: "A healthy and refreshing vegan salad." },
    { title: "Cheese Pizza", image: "https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1-500x375.jpg", description: "A classic cheesy pizza with fresh toppings." },
    { title: "Cupcakes", image: "https://swansdown.com/wp-content/uploads/2021/07/Cupcakes_Quick-Preset_1020x500.jpg", description: "Sweet and fluffy cupcakes with frosting." },
  ];

  return (
    <div>
      {/* Bootstrap Carousel */}
      <div id="carouselExampleAutoplaying" className="carousel slide pt-2" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img.webp" className="d-block w-100" height="400px" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./img2.png" className="d-block w-100" height="400px" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./img3.jpg" className="d-block w-100" height="400px" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://png.pngtree.com/background/20210711/original/pngtree-brown-cartoon-snack-gourmet-restaurant-tea-e-commerce-banner-picture-image_1094319.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-10 text-center rounded-xl">
        <h1 className="text-4xl md:text-6xl text-red-500 font-bold">Welcome to ZestyVerse</h1>
        <p className="text-lg text-green-500 mt-3">Share & Discover the Best Recipes from Around the World</p>


          <Link to="/recipes">
          </Link>
        </div>
      </div>
<br />
      {/* Featured Recipes Section */}
      <div className="max-w-7xl mx-auto py-10 px-5">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Featured Recipes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {recipes.map((recipe, index) => (
            <div key={index} className="relative w-[300px] h-[300px] rounded-lg overflow-hidden shadow-lg group">
              <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                <h3 className="text-lg text-white font-semibold">{recipe.title}</h3>
                <p className="text-sm text-gray-300">{recipe.description}</p>
              </div>
              <Link to="/recipes" className="absolute inset-0" aria-label={recipe.title}></Link>
            </div>
          ))}
        </div>
      </div>
<br /><br />
      {/* Latest Recipes Section */}
      <div className="max-w-7xl mx-auto py-10 px-5">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Latest Recipes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {recipes.slice().reverse().map((recipe, index) => (
            <div key={index} className="relative w-[300px] h-[300px] rounded-lg overflow-hidden shadow-lg group">
              <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                <h3 className="text-lg text-white font-semibold">{recipe.title}</h3>
                <p className="text-sm text-gray-300">{recipe.description}</p>
              </div>
              <Link to="/recipes" className="absolute inset-0" aria-label={recipe.title}></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;