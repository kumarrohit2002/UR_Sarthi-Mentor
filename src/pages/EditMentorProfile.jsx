import { useContext, useState } from 'react';
import { MentorProfileContext } from '../context/MentorProfileContext';
import Navbar from '../components/Navbar';

const EditMentorProfile = () => {
    const { mentorData, handleProfilePicChange, updateMentorProfile, profilePic } = useContext(MentorProfileContext);
    const [skills, setSkills] = useState(mentorData.skills || []);
    const [achievements, setAchievements] = useState(mentorData.achievements || []);
    const [language, setLanguage] = useState(mentorData.language || []);
    const [socialMedia, setSocialMedia] = useState(mentorData.socialMedia || {});

    const [formData, setFormData] = useState({
        name: mentorData.name || '',
        profession: mentorData.profession || '',
        areaOfExpertise: mentorData.areaOfExpertise || '',
        yearsOfExperience: mentorData.yearsOfExperience || '',
        address: mentorData.address || '',
        about: mentorData.about || '',
        language: language,
        socialMedia: socialMedia,
        skills: skills,
        achievements: achievements,
        profileImage: '',
        perHourcharge: mentorData.perHourcharge || '',
        preferredSchedule: mentorData.preferredSchedule || [{ day: 'Monday', times: [{ time: '', ampm: 'AM' }] }],
        phone: mentorData.phone || '+91', 
        category: mentorData.category || ''  
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSkillChange = (e, index) => {
        const updatedSkills = skills.map((skill, i) => (i === index ? e.target.value : skill));
        setSkills(updatedSkills);
        setFormData({ ...formData, skills: updatedSkills });
    };

    const handleAchievementChange = (e, index) => {
        const updatedAchievements = achievements.map((achievement, i) => (i === index ? e.target.value : achievement));
        setAchievements(updatedAchievements);
        setFormData({ ...formData, achievements: updatedAchievements });
    };

    const handleLanguageChange = (e, index) => {
        const updatedLanguages = language.map((lang, i) => (i === index ? e.target.value : lang));
        setLanguage(updatedLanguages);
        setFormData({ ...formData, language: updatedLanguages });
    };

    const handleSocialMediaChange = (e) => {
        const { name, value } = e.target;
        setSocialMedia({ ...socialMedia, [name]: value });
        setFormData({ ...formData, socialMedia: { ...socialMedia, [name]: value } });
    };

    const handleScheduleChange = (dayIndex, timeIndex, value, ampm) => {
        const updatedSchedule = formData.preferredSchedule.map((schedule, index) => {
            if (index === dayIndex) {
                const updatedTimes = schedule.times.map((timeObj, i) =>
                    i === timeIndex ? { time: value, ampm: ampm || timeObj.ampm } : timeObj
                );
                return { ...schedule, times: updatedTimes };
            }
            return schedule;
        });
        setFormData({ ...formData, preferredSchedule: updatedSchedule });
    };

    const addTimeSlot = (dayIndex) => {
        const updatedSchedule = formData.preferredSchedule.map((schedule, index) => {
            if (index === dayIndex) {
                return { ...schedule, times: [...schedule.times, { time: '', ampm: 'AM' }] };
            }
            return schedule;
        });
        setFormData({ ...formData, preferredSchedule: updatedSchedule });
    };

    const addDaySlot = () => {
        setFormData({
            ...formData,
            preferredSchedule: [...formData.preferredSchedule, { day: 'Monday', times: [{ time: '', ampm: 'AM' }] }]
        });
    };

    const handleDayChange = (dayIndex, newDay) => {
        const updatedSchedule = formData.preferredSchedule.map((schedule, index) => {
            if (index === dayIndex) {
                return { ...schedule, day: newDay };
            }
            return schedule;
        });
        setFormData({ ...formData, preferredSchedule: updatedSchedule });
    };

    return (
        <div>
    <Navbar />
    <div className='flex bg-[#020617] min-h-screen'>
        {/* Sidebar */}
        <div className='bg-[#020617] border-r border-gray-500 w-[20%] flex flex-col items-center pt-8'>
            <img
                className="w-48 h-48 rounded-lg object-cover mb-4"
                src={profilePic}
                alt={mentorData.name}
            />
            <div className="mt-1 flex justify-center">
                <label className="block">
                    <input
                        type="file"
                        onChange={handleProfilePicChange}
                        className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                            file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100"
                    />
                </label>
            </div>
        </div>

        {/* Main Content */}
        <div className='w-[80%] flex justify-center items-start pt-8'>
            <div className='w-[90%] bg-[#0F172A] p-8 rounded-lg shadow-lg'>
                <h1 className='text-center text-3xl font-semibold text-white mb-6'>Edit Profile</h1>
                <form onSubmit={(e) => { e.preventDefault(); updateMentorProfile(formData); }}>
                    
                    {/* Name */}
                    <div className='mb-4'>
                        <label className='text-white text-lg'>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full mt-2 p-3 bg-[#1E293B] text-white rounded-md border-[2px] border-blue-400"
                        />
                    </div>

                    {/* Profession */}
                    <div className='mb-4'>
                        <label className='text-white text-lg'>Profession:</label>
                        <input
                            type="text"
                            name="profession"
                            value={formData.profession}
                            onChange={handleChange}
                            className="block w-full mt-2 p-3 bg-[#1E293B] text-white rounded-md border-[2px] border-blue-400"
                        />
                    </div>

                    {/* Area of Expertise */}
                    <div className='mb-4'>
                        <label className='text-white text-lg'>Area of Expertise:</label>
                        <input
                            type="text"
                            name="areaOfExpertise"
                            value={formData.areaOfExpertise}
                            onChange={handleChange}
                            className="block w-full mt-2 p-3 bg-[#1E293B] text-white rounded-md border-[2px] border-blue-400"
                        />
                    </div>

                    {/* Years of Experience */}
                    <div className='mb-4'>
                        <label className='text-white text-lg'>Years of Experience:</label>
                        <input
                            type="number"
                            name="yearsOfExperience"
                            value={formData.yearsOfExperience}
                            onChange={handleChange}
                            className="block w-full mt-2 p-3 bg-[#1E293B] text-white rounded-md border-[2px] border-blue-400"
                        />
                    </div>

                    {/* Address */}
                    <div className='mb-4'>
                        <label className='text-white text-lg'>Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="block w-full mt-2 p-3 bg-[#1E293B] text-white rounded-md border-[2px] border-blue-400"
                        />
                    </div>

                    {/* About */}
                    <div className='mb-4'>
                        <label className='text-white text-lg'>About:</label>
                        <textarea
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            className="block w-full mt-2 p-3 bg-[#1E293B] text-white rounded-md border-[2px] border-blue-400"
                        />
                    </div>

                    {/* Languages */}
                    <div className='mb-4'>
                        <label className='text-white text-lg'>Languages:</label>
                        <div className="grid grid-cols-3 gap-2">
                            {language.map((lang, index) => (
                                <input
                                    type="text"
                                    key={index}
                                    className="p-2 bg-[#1E293B] text-white rounded-md border-[2px] border-blue-400"
                                    value={lang}
                                    onChange={(e) => handleLanguageChange(e, index)}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            className="mt-2 bg-blue-500 px-3 py-1 text-white rounded-lg"
                            onClick={() => setLanguage([...language, ''])}
                        >
                            Add Language
                        </button>
                    </div>

                    {/* Skills */}
                    <div className='mb-4'>
                        <label className='text-white text-lg'>Skills:</label>
                        <div className="grid grid-cols-3 gap-2">
                            {skills.map((skill, index) => (
                                <input
                                    type="text"
                                    key={index}
                                    className="p-2 bg-[#1E293B] text-white rounded-md border-[2px] border-blue-400"
                                    value={skill}
                                    onChange={(e) => handleSkillChange(e, index)}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            className="mt-2 bg-blue-500 px-3 py-1 text-white rounded-lg"
                            onClick={() => setSkills([...skills, ''])}
                        >
                            Add Skill
                        </button>
                    </div>

                    {/* Achievements */}
                    <div className='mb-4'>
                        <label className='text-white text-lg'>Achievements:</label>
                        <div className="grid grid-cols-1 gap-2">
                            {achievements.map((achievement, index) => (
                                <input
                                    type="text"
                                    key={index}
                                    className="p-2 bg-[#1E293B] text-white rounded-md border-[2px] border-blue-400"
                                    value={achievement}
                                    onChange={(e) => handleAchievementChange(e, index)}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            className="mt-2 bg-blue-500 px-3 py-1 text-white rounded-lg"
                            onClick={() => setAchievements([...achievements, ''])}
                        >
                            Add Achievement
                        </button>
                    </div>

                    {/* Social Media */}
                    <div className='mb-4'>
                        <label className='text-white text-lg'>Social Media:</label>
                        <div className="flex flex-col gap-2">
                            {Object.keys(socialMedia).map((platform) => (
                                <div key={platform} className="flex items-center gap-2">
                                    <label className='text-white text-lg'>{platform.charAt(0).toUpperCase() + platform.slice(1)}:</label>
                                    <input
                                        type="text"
                                        name={platform}
                                        value={socialMedia[platform]}
                                        onChange={handleSocialMediaChange}
                                        className="p-2 bg-[#1E293B] text-white rounded-md border-[2px] border-blue-400 w-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Per Hour Charge */}
                    <div className='mb-4'>
                        <label className='text-white text-lg'>Per Hour Charge:</label>
                        <input
                            type="text"
                            name="perHourcharge"
                            value={formData.perHourcharge}
                            onChange={handleChange}
                            className="block w-full mt-2 p-3 bg-[#1E293B] text-white rounded-md border-[2px] border-blue-400"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className='mb-4'>
                        <label className='text-white text-lg'>Phone Number:</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full mt-2 p-3 bg-[#1E293B] text-white rounded-md border-[2px] border-blue-400"
                        />
                    </div>

                    {/* Category */}
                    <div className='mb-4'>
                        <label className='text-white text-lg'>Category:</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="block w-full mt-2 p-3 bg-[#1E293B] text-white rounded-md border-[2px] border-blue-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className='text-center'>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

    );
};

export default EditMentorProfile;
