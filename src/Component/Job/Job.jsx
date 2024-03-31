import PropTypes from 'prop-types';

const Job =({job})=> {
    const {logo,job_title,company_name,remote_or_onsite,job_type,contact_information,salary} = job

    return (
        <div className='border-2 p-10'>
            <img src={logo} alt="" />
            <p className='text-2xl font-bold'>{job_title}</p>
            <p>{company_name}</p>
            <div className='flex gap-10'>
                <button className='btn'>{remote_or_onsite}</button>
                <button className='btn'>{job_type}</button>
            </div>
            <div className='flex justify-start'>
                <div>
                    <div className='flex gap-3'>
                        <img src="../../assets/icons/email.png" alt="" />
                        <p>{contact_information.address}</p>
                    </div>
                </div>
                <div>
                    <div className='flex gap-3'>
                        <img src="../../assets/icons/Location.png" alt="" />
                        <p>Sallery : {salary}</p>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary'>View Details</button>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
};

export default Job;