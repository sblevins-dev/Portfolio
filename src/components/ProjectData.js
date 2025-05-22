import bug from "../images/bug/bugHome.png"
import suite from "../images/suite.png"
import guitar from "../images/guitar.png"
import pbConsole from "../images/pb-console.png"
import mk from "../images/mk.png"

const ProjectData =
    [
        {
            "id": 1,
            "projectTitle": "Mortal Kombat Fan Page",
            "details": "This full-stack web application allows users to explore and manage a dynamic list of Mortal Kombat characters. Built with Angular on the frontend and .NET Core Web API on the backend, the app features CRUD operations for character data, admin login for secure updates, and a responsive UI for smooth user interactionThe project is deployed on AWS using Elastic Beanstalk for scalable hosting and integrates with Amazon RDS for persistent data storage. Backend APIs handle dynamic data retrieval and manipulation, while role-based access ensures only authorized users can perform sensitive operations. Continued work on this project coming soon.",
            "image": mk,
            "technologies": [
                ".NET Core, Angular, AWS Elastic Beanstalk, AWS RDS"
            ],
            "demoLink": "http://mk12-env.eba-3f8ut8bv.us-east-1.elasticbeanstalk.com/"
        },
        {
            "id": 2,
            "projectTitle": "Powerball Console",
            "details": "Powerball Console Application built with Java. This application fetches Powerball drawing data since 2020 and provides functionalities to print drawings, calculate the most frequently occurring white balls and Powerball, and generate a unique combination of numbers that has never been drawn before.",
            "image": pbConsole,
            "technologies": [
                "Java"
            ],
            "sourceLink": "https://github.com/sblevins-dev/powerball-console"
        },
        {
            "id": 3,
            "projectTitle": "Project Manager",
            "details": "MERN (MongoDB, Express.js, React.js, Node.js) stack application. This comprehensive solution offers CRUD capabilities for managing projects and issues efficiently. It features user authentication for secure access control and is seamlessly integrated with a backend server and MongoDB database. Enhance collaboration and productivity with real-time issue tracking and modern project management tools.",
            "image": bug,
            "technologies": [
                "MONGO",
                "EXPRESS",
                "REACT",
                "NODE",
                "MUI",

            ],
            // "demoLink": "https://project-manager-bug-tracker.herokuapp.com/",
            "sourceLink": "https://github.com/sblevins-dev/project-manager"
        },
        {
            "id": 4,
            "projectTitle": "Guitar-Shop",
            "details": "Guitar Haven is a personal e-commerce project built using the Next.js framework, ensuring a fast and seamless user experience. The site features a dynamic catalog of guitars and accessories, leveraging server-side rendering for optimal performance.",
            "image": guitar,
            "technologies": [
                "Nex.js"
            ],
            "demoLink": "https://sblevins-dev.github.io/GuitarShop/",
            "sourceLink": "https://github.com/sblevins-dev/GuitarShop"
        },
        
        {
            "id": 5,
            "projectTitle": "Hotel Booking",
            "details": "Built using React for the frontend and Java Spring for the backend, leverages the Booking.com API to deliver a seamless user experience. Users can search for hotels, view detailed listings, check real-time availability, and compare competitive rates, all through an intuitive and responsive interface. The integration with Booking.com ensures access to a vast database of accommodations, offering users a comprehensive selection tailored to their preferences and needs.",
            "image": suite,
            "technologies": [
                "REACT",
                "JAVA",
            ],
            "sourceLink": "https://github.com/sblevins-dev/suite-spot-client",
            "demoLink": "https://sblevins-dev.github.io/suite-spot-client/"
        },

    ]

export default ProjectData

