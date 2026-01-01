import { useState } from "react";
import { ProfileCard } from "./ProfileCard";

export const NavBar = () => {

  const employees = [
    {
      id: 1,
      name: "Alice Johnson",
      position: "Frontend Developer",
      location: "San Francisco, CA",
      image: "https://picsum.photos/200/200?random=1",
      bio: "Frontend developer with a passion for clean UI and accessibility.",
    },
    {
      id: 2,
      name: "Brian Smith",
      position: "Backend Engineer",
      location: "Austin, TX",
      image: "https://picsum.photos/200/200?random=2",
      bio: "Backend engineer specializing in APIs and database design.",
    },
    {
      id: 3,
      name: "Carla Martinez",
      position: "UX Designer",
      location: "Barcelona, Spain",
      image: "https://picsum.photos/200/200?random=3",
      bio: "UX designer focused on user-centered design and research.",
    },
    {
      id: 4,
      name: "David Lee",
      position: "DevOps Engineer",
      location: "Seattle, WA",
      image: "https://picsum.photos/200/200?random=4",
      bio: "DevOps engineer ensuring scalable and reliable systems.",
    },
    {
      id: 5,
      name: "Emma Wilson",
      position: "Project Manager",
      location: "London, UK",
      image: "https://picsum.photos/200/200?random=5",
      bio: "Project manager with experience leading cross-functional teams.",
    },
    {
      id: 6,
      name: "Frank Brown",
      position: "Mobile Developer",
      location: "Toronto, Canada",
      image: "https://picsum.photos/200/200?random=6",
      bio: "Mobile developer building performant iOS and Android apps.",
    },
    {
      id: 7,
      name: "Grace Kim",
      position: "Data Analyst",
      location: "Seoul, South Korea",
      image: "https://picsum.photos/200/200?random=7",
      bio: "Data analyst passionate about turning data into insights.",
    },
    {
      id: 8,
      name: "Henry Adams",
      position: "QA Engineer",
      location: "Denver, CO",
      image: "https://picsum.photos/200/200?random=8",
      bio: "QA engineer focused on automation and software quality.",
    },
    {
      id: 9,
      name: "Isabella Rossi",
      position: "Marketing Specialist",
      location: "Milan, Italy",
      image: "https://picsum.photos/200/200?random=9",
      bio: "Marketing specialist with a background in digital strategy.",
    },
    {
      id: 10,
      name: "Jack Turner",
      position: "Full Stack Developer",
      location: "New York, NY",
      image: "https://picsum.photos/200/200?random=10",
      bio: "Full-stack developer experienced in React and Node.js.",
    },
    {
      id: 11,
      name: "Karen Lopez",
      position: "HR Manager",
      location: "Mexico City, Mexico",
      image: "https://picsum.photos/200/200?random=11",
      bio: "HR professional focused on talent growth and company culture.",
    },
    {
      id: 12,
      name: "Liam Nguyen",
      position: "Cloud Engineer",
      location: "Sydney, Australia",
      image: "https://picsum.photos/200/200?random=12",
      bio: "Cloud engineer working with AWS and distributed systems.",
    },
    {
      id: 13,
      name: "Mia Patel",
      position: "Product Designer",
      location: "Ahmedabad, India",
      image: "https://picsum.photos/200/200?random=13",
      bio: "Product designer blending creativity with usability.",
    },
    {
      id: 14,
      name: "Noah Garcia",
      position: "Security Engineer",
      location: "Madrid, Spain",
      image: "https://picsum.photos/200/200?random=14",
      bio: "Security engineer focused on application and cloud security.",
    },
    {
      id: 15,
      name: "Olivia Chen",
      position: "Technical Writer",
      location: "Taipei, Taiwan",
      image: "https://picsum.photos/200/200?random=15",
      bio: "Technical writer simplifying complex technical concepts.",
    },
    {
      id: 16,
      name: "Paul Anderson",
      position: "Systems Administrator",
      location: "Berlin, Germany",
      image: "https://picsum.photos/200/200?random=16",
      bio: "Systems administrator with a passion for automation.",
    },
    {
      id: 17,
      name: "Quinn Roberts",
      position: "Customer Support Lead",
      location: "Dublin, Ireland",
      image: "https://picsum.photos/200/200?random=17",
      bio: "Customer support lead focused on user satisfaction.",
    },
    {
      id: 18,
      name: "Rachel Thompson",
      position: "Business Analyst",
      location: "Chicago, IL",
      image: "https://picsum.photos/200/200?random=18",
      bio: "Business analyst bridging technical and business needs.",
    },
    {
      id: 19,
      name: "Samuel Wright",
      position: "Machine Learning Engineer",
      location: "Boston, MA",
      image: "https://picsum.photos/200/200?random=19",
      bio: "Machine learning engineer working on predictive models.",
    },
    {
      id: 20,
      name: "Tina Morales",
      position: "Operations Manager",
      location: "São Paulo, Brazil",
      image: "https://picsum.photos/200/200?random=20",
      bio: "Operations manager optimizing workflows and processes.",
    },
  ];
  const [search, setSearch] = useState("");

  const FilteredEmp = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    console.log("Searching Employee . . .", search);

  }

  return (
    <>
      <nav className="p-3 bg-blue-400 text-white  flex justify-center gap-2 rounded-md border border-gray-400">
        <a href="" className="hover:bg-gray-400 rounded-md bg-white text-blue-400" >Home</a>
        <a href="" className="hover:bg-gray-400 rounded-md bg-white text-blue-400" >Add</a>
        <a href="" className="hover:bg-gray-400 rounded-md bg-white text-blue-400" >Delete</a>
        <input className="border border-white rounded-md bg-white text-blue-400"
          placeholder=" Search an Employee" type="search"
          onChange={(e) => setSearch(e.target.value)} />
        <button href="" className="hover:bg-gray-400 rounded-md bg-white text-blue-400" onClick={handleSearch} >Search</button>
      </nav>

      {FilteredEmp.length === 0 ? <p>No employees found with that name</p> : FilteredEmp.map(employee =>
        <div>
          <ProfileCard key={employee.id} img={employee.image} name={employee.name} location={employee.location} position={employee.position} bio={employee.bio} />
        </div>
      )}

    </>
  );
};
