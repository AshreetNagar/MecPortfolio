import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Mechatronics Portfolio</h1>
            <ul>
                <li><Link to="/project1">Project 1</Link></li>
                <li><Link to="/project2">Project 2</Link></li>
                <li><Link to="/project3">Project 3</Link></li>
                <li><Link to="/project4">Project 4</Link></li>
                <li><Link to="/project5">Project 5</Link></li>
            </ul>
        </div>
    );
}

export default HomePage;
