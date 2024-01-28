# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<h1>The Goal</h1>
I had to create a functional reservation system for the fictional online restaurant 'Little Lemon." I Built the website from scratch using React + Vite and styled with Tailwind. 

<h1>The Process</h1>
To begin, the API COursera provided me did not work. This posed a huge problem - I have no idea what the data looks like. I had no idea how i was going to build a reservation system around a non existent API. My solution? I built one. I knew I wanted the user to be able to pick from certain dates but for the scope of the project, i narrowed it down to three or four dates you can pick from. Once a date was chosen, you could choose a time. I used an array of objects where each object represents one of the dates, and contains a total amount of each time that is available. I made it like this so I could decrement the time availabily by one everytime someone books a certain date. This was so complicated for me and well beyond my scope of understanding I needed help from a friend to really fledge this out. Thinking through how we wanted to structure the data, was we wanted the form to do, and how we wanted the user to see the information they chose after theyve clicked through, took up so much time and brain power that I left the styling of the website to be a bit underwhelming. All in all, I am really happy to have worked on something that was well out of my comfort zone - its the only way you learn!

<h1>What I Learned</h1>
Building an API. Everything else I dealt with I had encountered before like form verification, styling, react router dom, and useState but actually building an API was so far away from things I knew. This project really opened my eyes to how deep all of this goes. I think i spent more time talking through the project and shooting down ideas than I actually did coding - and its such a small project! I completed this project in the beginning of December and decided to take a break since I earned my certificate after this project. Its not the middle of January at the time of writing this and ive encountered Data Structures and learned some basic swapping algorithms for Linked Lists and what not - and returning to this project - I cant believe I attempted this with absolutely no knowlege of data structures or anything beyond the very surface level of Front End Development.

<h1>What to Improve?</h1>
CSS 100%. The reservation form is lacking big time and so is the confirmation page. I also think its worth while going back into the Booking component and trying move some things out of that file. Its a big file. 
