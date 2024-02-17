
# Project Structure
`app/`: Contains Next.js pages for routing and rendering components.<br/>
`layout.jsx`: Main page of the application, rendering the video player and playlist components.<br/>
`components/`: Contains reusable React components used throughout the application.<br/>
`Header.js`: Component for the application header. <br/>
`Playlist.js`: Component for displaying and interacting with the video playlist.<br/>
`VideoDetails.js`: Component for displaying details about the currently playing video.<br/>
`VideoPlayer.js`: Main component for the video player functionality.<br/>
`data/`: Contains JSON data files used to populate the video playlist.<br/>
`mediaJson.js`: JSON data file containing information about the videos, such as title, description, source URLs, and thumbnails.<br/>
`utils/`: Contains utility functions used across the application.<br/>
`formatTime.js`: Utility function for formatting time in minutes and seconds.<br/>
`public/`: Contains static assets such as images and videos used in the application.<br/>
`package.json`: Configuration file for npm dependencies and scripts.<br/>
`README.md`: Documentation file containing instructions on how to run the application locally and other relevant information.<br/>

# Additional Notes
This project uses Tailwind CSS for styling, providing a clean and responsive user interface.
The video player component utilizes HTML5 <video> element and various React hooks for managing state and interactions.

## Getting Started

To run this application locally, follow these steps:

# Prerequisites
Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

# Installation
1. Clone this repository to your local machine:

```bash
git clone https://github.com/jishanpathan7/rigi-next-app.git
```

2. Install the project dependencies:

```bash
npm install
# or
yarn add
```


# Running the Application

Once the installation is complete, you can start the development server:

```bash
npm run dev
# or
yarn dev

# or
pnpm dev
# or
bun dev
```

## LightHouse Score
![rigi-lighthouse](https://github.com/jishanpathan7/rigi-next-app/assets/88240594/50ff0868-f103-4a5c-92dc-6360ac585d59)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
