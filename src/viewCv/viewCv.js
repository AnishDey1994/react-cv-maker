import './viewCv.css';
import CVImage from '../assets/profile.jpg';
import Rating from '../rating/rating';

const ViewCv = ({ jsonData }) => {
    const name = jsonData.name;
    const personalInformation = jsonData.personalInformation;
    const professionalInformation = jsonData.professionalInformation;
    const education = jsonData.educationInformation;
    const cvHighlights = jsonData.cvHighlights;
    const techStack = jsonData.techStack;
    const language = jsonData.language;

    return (
        <div className='cvWrapper'>
            <div className='cvHeader'>
                <div className='cvImage'>
                    <img className='cvImage' src={CVImage} alt="placeholder" />
                </div>
                <div className='cvTitle'>
                    <div className='xlg-textBlock'>{name}</div>
                    <div className='lg-textBlock'>{cvHighlights.currentRole}</div>
                </div>
            </div>
            <div className='cvBody'>
                <div className='cvBodyLeft'>
                    <div className='cvHighlights'>
                        <ul>
                            {
                                cvHighlights.cvSummary.map((cvSummary, index) => (
                                    <li key={index}>{cvSummary}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='workHistory'>
                        <div className='sectionTitle headBlock'>Work history</div>
                        <hr />
                        {
                            professionalInformation.map((jobExpItem, index) => (
                                <div className='cvSectionItemWrapper md-textBlock' key={index}>
                                    <div className='cvSectionItemDuration'>{jobExpItem.jobDuration}</div>
                                    <div className='cvSectionItemDetails'>
                                        <div className='sectionItems'>
                                            <span className='headBlock'>{jobExpItem.jobTitle}</span>
                                            <span className='subHeadBlock'>{jobExpItem.companyName}, {jobExpItem.companyLocation}</span>
                                        </div>
                                        <div className='jobResponsibilities'>
                                            <ul>
                                                {
                                                    jobExpItem.jobResponsibility.length > 0 && jobExpItem.jobResponsibility.map((jobResponsibility, index) => (
                                                        <li key={index}>{jobResponsibility}</li>
                                                    ))
                                                }
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='educationHistory'>
                        <div className='sectionTitle headBlock'>Education</div>
                        <hr />
                        {
                            education.map((eduItem, index) => (
                                <div className='cvSectionItemWrapper md-textBlock' key={index}>
                                    <div className='cvSectionItemDuration'>{eduItem.duration}</div>
                                    <div className='cvSectionItemDetails'>
                                        <div className='sectionItems'>
                                            <span className='headBlock'>{eduItem.degree} {'[' + eduItem.points + ']'}</span>
                                            <span className='subHeadBlock'>{eduItem.institution}, {eduItem.address}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='cvBodyRight'>
                    <div className='personalDetails'>
                        <div className='sectionTitle'>Contact</div>
                        <hr />
                        {
                            Object.entries(personalInformation).map(([key, value], index) => (
                                value &&
                                <div className='sectionItems sm-textBlock' key={index}>
                                    <span className='headBlock'>{key}</span>
                                    <span className='subHeadBlock'>{value}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className='skills'>
                        <div className='sectionTitle'>Tech stack</div>
                        <hr />
                        {
                            Array.isArray(techStack) ?
                                techStack.map((skill, index) => (
                                    <div className='sectionItems sm-textBlock' key={index}>
                                        {skill}
                                    </div>
                                ))
                                :
                                Object.entries(techStack).map(([key, value], index) => (
                                    value &&
                                    <div className='sectionItems sm-textBlock' key={index}>
                                        {
                                            typeof value === 'object' ?
                                                <div className='headBlock'>{key}:
                                                    {Object.entries(value).map(([ValueKey, ValueRating], index) => (
                                                        <>
                                                            <div className='headBlockSub' key={index}>
                                                                <span className='headBlock'>{ValueKey}</span>
                                                                <span className='subHeadBlock'><Rating value={ValueRating} /></span>
                                                            </div>
                                                        </>
                                                    ))}
                                                </div> :
                                                <>
                                                    <span className='headBlock'>{key}</span>
                                                    <span className='subHeadBlock'><Rating value={value} /></span>
                                                </>
                                        }

                                    </div>
                                ))
                        }
                    </div>
                    <div className='language'>
                        <div className='sectionTitle'>Language</div>
                        <hr />
                        {
                            Object.entries(language).map(([key, value], index) => (
                                value &&
                                <div className='sectionItems sm-textBlock' key={index}>
                                    <span className='headBlock'>{key}</span>
                                    <span className='subHeadBlock'>{value}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewCv;
