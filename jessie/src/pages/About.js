import { useState } from 'react';

import work from '../icons/work.svg';
import education from '../icons/education.svg';
import gpa from '../icons/gpa.svg';
import project from '../icons/project.svg';
import company from '../icons/company.svg';
import calender from '../icons/calender.svg';

function About() {
	const [ workIsShown, setIsShown ] = useState(true);

	const handleWorkClick = (event) => {
		setIsShown(true);
	};

	const handleEducationClick = (event) => {
		setIsShown(false);
	};

	return (
		<div className="w-[79%]  border-gray border-[0.5px] flex flex-col px-[60px] py-9">
			{/* About */}
			<div className="h-[55%] flex flex-col gap-2">
				<div className="h-[18%] text-[32px] font-semibold text-primary">About</div>
				<div className="h-[42%] text-[14px] font-medium text-[#616161]">
					<div>
						Hi, my name is Jessie (Jiaxin) Luo from Beijing, China, and I am a junior at Johns Hopkins
						University double majoring in Computer Science and Computer Engineering with minors in Applied
						Mathematics and Statistics and Marketing.
					</div>
					<div className="h-[16px]" />
					<div>
						I started coding in high school because I wish I could be like those hackers in sci-fi movies.
						Later I realized it’s not exactly like that... yet I love building things and communicating with
						computers is kind of cool!
					</div>
				</div>
				<div className="flex flex-row w-full gap-24">
					<Number icon={gpa} name="CS Major GPA" num="3.98/4.0" />
					<Number icon={project} name="Completed Projects" num="15" />
					<Number icon={company} name="Companies Worked" num="3" />
				</div>
			</div>

			{/* Qualification */}
			<div className="h-[45%] flex flex-col gap-1">
				<div className="h-[20%] flex flex-row gap-5">
					<div className="text-[32px] font-semibold text-primary">Qualification</div>
					<div className="text-[12px] font-medium text-[#616161] mt-5">My personal journey</div>
				</div>
				<div className="h-[20%] flex flex-col gap-2 ml-2">
					<div className="flex flex-row gap-[110px]">
						<div onClick={handleWorkClick}>
							<img src={work} class="h-[24px]" alt="work" />
						</div>
						<div onClick={handleEducationClick}>
							<img src={education} class="h-[24px]" alt="education" />
						</div>
					</div>
					<div className="h-[2px] bg-[#DBDBDB]" />
				</div>
				{workIsShown && (
					<div className="h-[60%] flex flex-row gap-[35px]">
						<Card title="Front-end developer Intern" company="Groovv" time="2022.6 - Present" />
						<Card title="Software Engineer Intern" company="Ucredit" time="2022.5 - Present" />
						<Card
							title="Course Assistant & Personalized Tutor"
							company="Johns Hopkins University"
							time="2021.9 - Present"
						/>
						<Card title="Project Manager Intern" company="ByteDance" time="2021.5 - 2021.7" />
					</div>
				)}

				{!workIsShown && (
					<div className="h-[60%] flex flex-row gap-[35px]">
						<Card title="Johns Hopkins University" company="Baltimore, MD" time="2020.9 - 2024.5" />
						<Card title="Beijing No.101 Middle School" company="Beijing, China" time="2018.9 - 2020.5" />
					</div>
				)}
			</div>
		</div>
	);
}

function Card(props) {
	return (
		<div className="tracking-wide h-[170px] w-[240px] flex flex-col gap-4 border-[#DBDBDB] border-[2px] rounded-[10px] px-6 py-5">
			<div className="h-[75%] text-[14px] font-semibold text-[#383838]">{props.title}</div>
			<div className="h-[10%] text-[14px] font-medium text-[#000000]">{props.company}</div>
			<div className="h-[15%] flex flex-row">
				<img src={calender} class="scale-[90%]" alt="time" />
				<div className="text-[#616161] text-[12px] font-regular ml-2">{props.time}</div>
			</div>
		</div>
	);
}

function Number(props) {
	return (
		<div className="flex flex-col gap-4 mt-[-5px]">
			<div className="h-[30%]">
				<img src={props.icon} class="scale-[90%]" alt="time" />
			</div>
			<div className="flex flex-row h-[70%] gap-10">
				<div className="w-[65px] text-[14px] font-medium text-[#383838]">{props.name}</div>
				{props.name == 'CS Major GPA' ? (
					<div className="w-[65px] text-[32px] font-extrabold text-[#383838] mr-16 ml-[-18px]">
						{props.num}
					</div>
				) : (
					<div className="w-[65px] text-[32px] font-extrabold text-[#383838]">{props.num}</div>
				)}
			</div>
		</div>
	);
}

export default About;
