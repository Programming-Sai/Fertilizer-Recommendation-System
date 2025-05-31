# Fertilizer Recommendation System - Expert System

<div align='center'>

<picture>
  <source srcset="https://raw.githubusercontent.com/Programming-SaiFertilizer-Recommendation-System/snapmock-output/output_laptop.png" media="(prefers-color-scheme: dark)" />
  <source srcset="https://raw.githubusercontent.com/Programming-Sai/Fertilizer-Recommendation-System/snapmock-output/output_laptop.png" media="(prefers-color-scheme: light)" />
  <img src="https://raw.githubusercontent.com/Programming-Sai/Fertilizer-Recommendation-System/snapmock-output/output_laptop.png" alt="Fertilizer Recomendation System Site Preview" />
</picture>
</div>

<br>
<br>


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
   npm run dev
   ```

   The app should now be available at `http://localhost:3000`.

## How the System Works

1. **Data Input**: The user provides crop type and soil data through a form.
2. **Inference Engine**: The `inferRecommendations` function processes the input data and returns fertilizer recommendations.
3. **Recommendation Display**: The frontend renders the recommendations, including NPK values, fertilizer type, and application details.
4. **Download Options**:
   - **JSON**: The user can download the recommendation data in JSON format for further analysis or record-keeping.
   - **PDF**: The system generates a neatly formatted PDF containing the recommendations for printing.

Got it! Here's an updated section that focuses on contributors adding a comprehensive knowledge base:

---

## Contributing

We welcome contributors to help enhance the system. Here's how you can contribute:

1. **Fork the repository** and create your branch:

   ```bash
   git checkout -b add-knowledge-base
   ```

2. **Expand the knowledge base** by adding more rules, facts, or fertilizer recommendations based on different crop types and soil conditions. Ensure that the knowledge base is well-documented for easy understanding. (basically try and add as many combinations of the options in each field in the Knowledge base skeleton)

3. **Commit your changes**:

   ```bash
   git commit -m "Expand knowledge base with new fertilizer recommendations"
   ```

4. **Push to your branch**:

   ```bash
   git push origin add-knowledge-base
   ```

5. **Open a pull request** to merge your changes into the `main` branch.

## Expected Contributions

- Expanding the knowledge base by adding new fertilizer recommendations for a variety of crops and soil conditions.
- Updating existing rules with more detailed and accurate information.
- Ensuring all additions are well-documented for future contributors.

---
