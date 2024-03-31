import { useEffect, useState } from "react";
import Job from "../Job/Job";
 

const FeaturedJobs = () => {
    const [jobs, setJob] = useState([])

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJob(data))

    }, [])

    return (
        <div>
            <p className="text-3xl font-bold">I tall me FeaturedJobs. i live in thakurgaon :{jobs.length} </p>
            <div className="grid grid-cols-2 gap-10 p-3">
            {
                jobs.map((job)=><Job key={job.id} job={job}></Job>)
            }
            </div>

        </div>
    );
};

export default FeaturedJobs;