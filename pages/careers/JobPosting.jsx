import { useState } from "react";
import JobItem from "../../components/JobItem";
import Pagination from "../../components/Pagination";

const JobPosting = () => {
  const jobs = [
    {
      id: 1,
      title: "Web Designer",
      image: "/src/assets/images/jobs/01.jpg",
      time: "Full Time",
      location: "Bengaluru, India",
      description:
        "We are looking for a creative Web Designer to build engaging and visually appealing websites. You will work with our development team to create responsive and user-friendly interfaces.",
      experience: "3-5 Years",
      salary: "₹6,00,000 - ₹8,00,000 per annum",
      deadline: "20 Mar 2025",
    },
    {
      id: 2,
      title: "IOS Developer",
      image: "/src/assets/images/jobs/02.jpg",
      time: "Full Time",
      location: "Bengaluru, India",
      description:
        "Join our dynamic mobile development team as an iOS Developer. You'll be responsible for creating high-performance applications for iOS platforms with a focus on seamless user experiences.",
      experience: "2-4 Years",
      salary: "₹8,00,000 - ₹12,00,000 per annum",
      deadline: "15 Apr 2025",
    },
    {
      id: 3,
      title: "PHP Developer",
      image: "/src/assets/images/jobs/03.jpg",
      time: "Full Time",
      location: "Bengaluru, India",
      description:
        "We are seeking an experienced PHP Developer to build and maintain web applications. You will work on backend development and ensure the performance and scalability of our web solutions.",
      experience: "3-5 Years",
      salary: "₹5,50,000 - ₹7,50,000 per annum",
      deadline: "10 Feb 2025",
    },
    {
      id: 4,
      title: "React Developer",
      image: "/src/assets/images/jobs/03.jpg",
      time: "Remote",
      location: "Mumbai, India",
      description:
        "We are looking for a skilled React Developer to develop and maintain modern web applications. You will work closely with designers and backend developers to implement user-friendly interfaces.",
      experience: "2-4 Years",
      salary: "₹7,00,000 - ₹10,00,000 per annum",
      deadline: "28 Feb 2025",
    },
    {
      id: 5,
      title: "Data Analyst",
      image: "/src/assets/images/jobs/03.jpg",
      time: "Full Time",
      location: "Hyderabad, India",
      description:
        "We are hiring a Data Analyst to analyze large datasets and provide actionable insights for business growth. You will work with various teams to enhance data-driven decision-making.",
      experience: "1-3 Years",
      salary: "₹6,50,000 - ₹9,00,000 per annum",
      deadline: "10 Mar 2025",
    },
  ];

  const jobsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const displayedJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="space-pt xl:!pt-6 relative">
      <div className="container">
        <div className="row justify-center">
          <div className="col-md-10">
            <div className="section-title text-center">
              <span className="sub-title justify-center flex items-center">
                <img
                  className="img-fluid w-6 mr-2"
                  src="/src/assets/images/subtitle-icon.png"
                  alt="Subtitle Icon"
                />
                Open Positions
              </span>
              <h2 className="title">Find Your Job Here</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="find-job-wrapper">
              {displayedJobs.map((job, index) => (
                <JobItem key={index} {...job} />
              ))}
            </div>
          </div>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default JobPosting;
