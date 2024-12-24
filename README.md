# Fertilizer Recommendation System - Expert System

## Project Overview

The **Fertilizer Recommendation System** is an expert system designed to recommend fertilizer mixes based on soil and crop analysis. This system processes input data from users, performs inference logic using an engine, and provides personalized fertilizer recommendations, including the necessary amounts of Nitrogen (N), Phosphorus (P), and Potassium (K), as well as a suitable fertilizer type and application plan.

The project features two main download options for users:

1. **Download JSON Report**: Users can download the detailed recommendation data in JSON format.
2. **Download PDF Report**: A formatted, printable PDF report is available for download, including all recommendation details.

The expert system uses a simple rule-based inference engine to suggest optimal fertilizer choices. The system also allows for easy scalability and can be integrated with other soil and crop analysis technologies.

## Key Features

- Personalized fertilizer recommendations based on crop type and soil analysis.
- NPK values and application modes included in recommendations.
- Dynamic recommendations and reasoning for why a specific fertilizer was chosen.
- Multiple report formats: JSON for raw data and PDF for a printable summary.
- Mobile-friendly design with PDF scaling based on screen size.
- Simple integration of the expert system for other agricultural applications.

## Technologies Used

- **Frontend**: React.js, React Router, html2canvas, jsPDF
- **Backend (Inference Engine)**: Custom-built inference logic (assumed to be an external `inferRecommendations` function)
- **Styling**: CSS
- **Version Control**: GitHub

## Installation & Setup

### Prerequisites

- **Node.js** (v16.0 or higher)
- **npm** (Node package manager)

### Setup Steps

1. Clone this repository:

   ```bash
   git clone https://github.com/Programming-Sai/Fertilizer-Recommendation-System.git
   cd Fertilizer-Recommendation-System
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app locally:

   ```bash
   npm start
   ```

   The app should now be available at `http://localhost:3000`.

## How the System Works

1. **Data Input**: The user provides crop type and soil data through a form.
2. **Inference Engine**: The `inferRecommendations` function processes the input data and returns fertilizer recommendations.
3. **Recommendation Display**: The frontend renders the recommendations, including NPK values, fertilizer type, and application details.
4. **Download Options**:
   - **JSON**: The user can download the recommendation data in JSON format for further analysis or record-keeping.
   - **PDF**: The system generates a neatly formatted PDF containing the recommendations for printing.

## Contributing

We welcome contributors to help improve and expand the system. Here’s how you can contribute:

1. **Fork the repository** and create your branch:

   ```bash
   git checkout -b feature-name
   ```

2. **Make changes** and ensure everything is well-documented and tested.

3. **Commit your changes**:

   ```bash
   git commit -m "Add feature"
   ```

4. **Push to your branch**:

   ```bash
   git push origin feature-name
   ```

5. **Open a pull request** to merge your changes into the `main` branch.

## Expected Contributions

- Expanding the inference engine logic for more advanced recommendation systems.
- Improving UI/UX for a better user experience, especially on mobile.
- Integrating additional data sources for enhanced soil and crop analysis.
- Adding unit and integration tests to ensure robustness.
- Enhancing PDF generation capabilities (e.g., adding charts or images).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to reach out to the repository owner at [contact-email@example.com](mailto:contact-email@example.com).

---
