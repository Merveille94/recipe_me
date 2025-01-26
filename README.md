<img src="/public/images/Screenshot%202025-01-26%20011724.png">

# Modern Interactive Recipe Finder  

A web application for exploring, discovering, and saving recipes tailored to your preferences. Built with modern technologies like Next.js (App Router), Tailwind CSS, Clerk for authentication, and an external recipe API for seamless data integration.  

---

## Features  

- **Search Recipes**: Find recipes with customizable filters like ingredients, cuisine, and dietary preferences.  
- **User Authentication**: Secure sign-up and login functionality using Clerk.  
- **Save Favorites**: Create a personalized list of your favorite recipes.  
- **Responsive Design**: Optimized for both desktop and mobile experiences.  

---

## Technologies Used  

### Frontend  
- **Next.js (App Router)**: For building a fast and efficient user interface.  
- **TypeScript**: Ensures type safety and cleaner code.  
- **Tailwind CSS**: Provides a responsive and modern design system.  

### Authentication  
- **Clerk**: Handles user authentication and profile management.  

### API Integration  
- **Free Recipe API** (e.g., Edamam, Spoonacular): Fetches recipes and related details dynamically.  

---

## Installation  

Follow these steps to run the project locally:  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/modern-recipe-finder.git
   cd modern-recipe-finder
   ```  

2. Install dependencies:
   ```bash
   npm install
   ```  

3. Set up environment variables:  
   Create a `.env.local` file in the root directory with the following:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
   CLERK_API_KEY=your-clerk-api-key
   RECIPE_API_KEY=your-recipe-api-key
   RECIPE_API_BASE_URL=https://api.example.com
   ```  

4. Run the development server:
   ```bash
   npm run dev
   ```  

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## File Structure

```plaintext
modern-recipe-finder/
├── public/          # Static assets  
├── src/  
│   ├── components/  # Reusable UI components  
│   ├── pages/       # Next.js pages  
│   ├── styles/      # Tailwind CSS configurations  
│   ├── utils/       # Helper functions  
├── .env.local       # Environment variables  
├── next.config.js   # Next.js configuration  
├── package.json     # Dependencies and scripts  
└── README.md        # Project documentation  
```  

---

## Key Challenges

1. **API Integration**: Managing rate limits and ensuring reliable data fetching.
2. **UI/UX Design**: Creating a visually appealing and intuitive user experience.
3. **Authentication**: Implementing secure user management with Clerk.

---

## Future Enhancements

- Add support for user-generated recipes.
- Enable meal planning and shopping list features.
- Improve search filters with more advanced options.
- Implement a dark mode for better user accessibility.

---

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Contact

For questions or feedback, please contact:  
[Emanuele Merveille]  
[emanueleguehi@gmail.com]  
[emanuelemerveille - Linkedin]