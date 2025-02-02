# Use an official Node.js image as the base  
FROM node:18-alpine  

# Set the working directory inside the container  
WORKDIR /app  

# Copy package.json and package-lock.json before installing dependencies  
COPY package*.json ./

# Install dependencies  
RUN npm install  

# Copy the rest of the application files  
COPY . .  

# Build the React application (adjust if necessary)  
RUN npm run build  

# Expose the port the app will run on  
EXPOSE 3000  

# Start the app  
CMD ["npm", "run", "dev"]

# EXPOSE 5173
# CMD ["npm", "run", "dev", "--", "--host"]

