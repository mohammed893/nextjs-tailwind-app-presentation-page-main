# Use official Node.js image as base
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the Next.js app
COPY . .

# Build the app
RUN npm run build

# Expose the port Next.js will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
