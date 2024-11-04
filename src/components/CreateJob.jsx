import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { MentorProfileContext } from '../context/MentorProfileContext';

const CreateJob = () => {
    const { createNewPost } = useContext(MentorProfileContext);
    const [formData, setFormData] = useState({
        company: "",
        jobTitle: "",
        location: "",
        typeOfWork: "Work from Home", // Default option for type of work
        skillsRequired: [""], // Initialize skills as an array
        minSalary: "",
        maxSalary: "",
        minExperience: "",
        maxExperience: "",
        lastDateToApply: "", // Add lastDateToApply field to state
    });

    // Handle input changes for regular fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle skill input changes
    const handleSkillChange = (index, value) => {
        const newSkills = [...formData.skillsRequired];
        newSkills[index] = value;
        setFormData({ ...formData, skillsRequired: newSkills });
    };

    // Add a new skill input
    const addSkillField = () => {
        setFormData({
            ...formData,
            skillsRequired: [...formData.skillsRequired, ""],
        });
    };

    // Remove a skill input
    const removeSkillField = (index) => {
        const newSkills = formData.skillsRequired.filter((_, i) => i !== index);
        setFormData({ ...formData, skillsRequired: newSkills });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        createNewPost(formData);
    };

    return (
        <div>
            <Navbar />
            <form
                className="bg-blue-900 p-10 flex flex-col justify-center items-center gap-4"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-semibold text-orange-600">Create Job Portal</h1>
                <div>
                    <label>Company</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Type of Work</label>
                    <select
                        name="typeOfWork"
                        value={formData.typeOfWork}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="Work from Home">Work from Home</option>
                        <option value="In Office">In Office</option>
                    </select>
                </div>
                <div>
                    <label>Skills Required</label>
                    {formData.skillsRequired.map((skill, index) => (
                        <div key={index} className="flex items-center gap-4 mb-2">
                            <input
                                type="text"
                                placeholder="Skill"
                                value={skill}
                                onChange={(e) => handleSkillChange(index, e.target.value)}
                            />
                            <button
                                type="button"
                                className="bg-red-500 text-white p-2"
                                onClick={() => removeSkillField(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="bg-green-500 text-white p-2 mt-2"
                        onClick={addSkillField}
                    >
                        Add Skill
                    </button>
                </div>
                <div>
                    <label>Salary</label>
                    <div className="flex gap-4">
                        <input
                            type="number"
                            name="minSalary"
                            placeholder="Min Salary"
                            value={formData.minSalary}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="number"
                            name="maxSalary"
                            placeholder="Max Salary"
                            value={formData.maxSalary}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label>Experience</label>
                    <div className="flex gap-4">
                        <input
                            type="number"
                            name="minExperience"
                            placeholder="Min Experience"
                            value={formData.minExperience}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="number"
                            name="maxExperience"
                            placeholder="Max Experience"
                            value={formData.maxExperience}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label>Last Date to Apply</label>
                    <input
                        type="date"
                        name="lastDateToApply"
                        value={formData.lastDateToApply}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button type="submit" className="bg-green-500 text-white p-2 mt-4">
                    Create Job
                </button>
            </form>
        </div>
    );
};

export default CreateJob;
