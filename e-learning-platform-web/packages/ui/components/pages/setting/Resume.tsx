import { IconTypography } from './../../molecules/typography/IconTypography';
import { ListTypography } from './../../molecules/typography/ListTypography';
import { Typography } from './../../atoms/typography/Typography';
import { Title } from './../../atoms/typography/Title';
import { content, skill, language, experience, trained, hobbies, education } from '../../../utils/constant/titleResume';
import { contactResume, skillResume, languageResume, typography, experienceResume, trainedCourseResume, hobbiesResume, educationResume, } from '../../../utils/constant/resume';

interface Props {
    src: string;
    alt?: string;
};

export default function Resume({ src, alt }: Props) {
    return (
        <div className="rounded-lg border border-slate-300 p-4">
            <div className="text-center mb-4">
                <h5 className="text-gray-900 text-xl font-medium">
                    Create a professional CV/Resume
                </h5>
            </div>
            {/* Resume */}
            <div className=" p-6">
                <div className="grid grid-cols-3 gap-4 ">
                    <div>
                        {/* Profile */}
                        <img
                            className="w-32 h-40 mr-3 sm:w-40 sm:h-48 rounded ... mt-2"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUp7JTYB2Pk20BDxVsmHlGsLYmqrcF9QYtmjiBsU9i5xiYomSlrDeCYUT1R3bPwitC7wE&usqp=CAU" alt="profile"
                        /><br />
                        <div>
                            {/* contact me  */}
                            <div>
                                {content.map((item, index) => {
                                    return (
                                        <Title
                                            key={index}
                                            children={item.children}
                                        />
                                    );
                                })}
                            </div>
                            <div>
                                {contactResume.map((item, index) => {
                                    return (
                                        <IconTypography
                                            key={index}
                                            icon={item.icon}
                                            alt={item.alt}
                                            title={item.title}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        {/*   skills*/}
                        <div>
                            <div>
                                {skill.map((item, index) => {
                                    return (
                                        <Title
                                            key={index}
                                            children={item.children}
                                        />
                                    );
                                })}
                            </div>
                            <div>
                                {skillResume.map((item, index) => {
                                    return (
                                        <ListTypography
                                            key={index}
                                            icon={item.icon}
                                            desc={item.desc}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        {/* language */}
                        <div>
                            <div>
                                {language.map((item, index) => {
                                    return (
                                        <Title
                                            key={index}
                                            children={item.children}
                                        />
                                    );
                                })}
                            </div>
                            <div>
                                {languageResume.map((item, index) => {
                                    return (
                                        <ListTypography
                                            key={index}
                                            icon={item.icon}
                                            desc={item.desc}
                                        />
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                    {/* layout */}
                    <div className="col-span-2 ...">
                        <div>
                            <h4 style={{ color: ' #FFC107' }} className="text-gray-900 uppercase text-xl font-medium space-y-3 my-5">
                                seirey leanghak
                            </h4>
                            <h6 style={{ color: '#F81818' }} className="text-gray-900 uppercase text-lg font-medium space-y-3 my-5">
                                web developer
                            </h6>
                            <div className="space-y-3 my-5">
                                {typography.map((item, index) => {
                                    return (
                                        <Typography
                                            key={index}
                                            children={item.children}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        {/*   work experience */}
                        <div>
                            <div>
                                {experience.map((item, index) => {
                                    return (
                                        <Title
                                            key={index}
                                            children={item.children}
                                        />
                                    );
                                })}
                            </div>
                            <div>
                                {experienceResume.map((item, index) => {
                                    return (
                                        <ListTypography
                                            key={index}
                                            icon={item.icon}
                                            desc={item.desc}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        {/*  trained course*/}
                        <div>
                            <div>
                                {trained.map((item, index) => {
                                    return (
                                        <Title
                                            key={index}
                                            children={item.children}
                                        />
                                    );
                                })}
                            </div>
                            <div>
                                {trainedCourseResume.map((item, index) => {
                                    return (
                                        <ListTypography
                                            key={index}
                                            icon={item.icon}
                                            desc={item.desc}
                                        />
                                    );
                                })}
                            </div>

                        </div>

                        {/* Interests and Hobbies*/}
                        <div>
                            <div>
                                {hobbies.map((item, index) => {
                                    return (
                                        <Title
                                            key={index}
                                            children={item.children}
                                        />
                                    );
                                })}
                            </div>
                            <div>
                                {hobbiesResume.map((item, index) => {
                                    return (
                                        <ListTypography
                                            key={index}
                                            icon={item.icon}
                                            desc={item.desc}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        {/*education*/}
                        <div>
                            <div>
                                {education.map((item, index) => {
                                    return (
                                        <Title
                                            key={index}
                                            children={item.children}
                                        />
                                    );
                                })}
                            </div>
                            <div>
                                {educationResume.map((item, index) => {
                                    return (
                                        <ListTypography
                                            key={index}
                                            icon={item.icon}
                                            desc={item.desc}
                                        />
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
