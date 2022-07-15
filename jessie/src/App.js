import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import cat from './icons/cat.svg';
import work from './icons/work.svg';
import education from './icons/education.svg';
import gpa from './icons/gpa.svg';
import project from './icons/project.svg';
import company from './icons/company.svg';
import calender from './icons/calender.svg';
function App() {
	return (
		<Router>
			<div>
				<div className="font-[Poppins] flex flex-col h-screen w-full bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/4d01/9258/132506b7dfdd6884efb5d11b548183d4?Expires=1658707200&Signature=EsO8aT~4FgoXIFugn~jd92uuiA8BiPWQz1TxnFRlnwhM~iOynLuqOCO2y2A3p6drOVLjXqVahq7vzgKzMIT3xjm6nSX-~~TsZpZmqPLVVoiPVf6URNXIraLLD6qvb1MUnPw3QMHhQnuLTlSTpKLhy1trTIfU5S1GAp7GPxdXUJh~7soLTBR2nh2vqTX~5vAS07PqyBDo0oYXYGdWXwBpYffX59R1I~MZhrIgJhcFevkBEbx4UZECxBpMISC3HnJnllaptO9xX9xzCHF891kdVZbDmf1OKzbe6NEB3~9WmfkaLw8QYUF0zjuaJaBrmuY6T8yBoC74z8rQtarVwAU4Tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')]">
					{/* top bar */}
					<div className="h-[11%] border-[0.5px] font-semibold  border-gray flex flex-row text-primary">
						<div className="text-[36px] py-4 px-6 tracking-widest w-[65%]"> ♥ WELCOME ╰(●’◡’●)╮ ♥</div>
						<div className="text-[18px] py-8 px-6 flex flex-row gap-[70px]">
							<div>ABOUT</div>
							<div>SKILLS</div>
							<div>PORTFOLIO</div>
						</div>
						<img src={cat} class="scale-[50%]" alt="meow" />
					</div>

					<div className="h-[89%] flex flex-row ">
						{/* introduction */}
						<div className="w-[21%] flex flex-col items-center border-gray border-[0.5px] gap-4">
							<div className="h-[35%]  ">
								<div className="pl-1 pb-1 h-[172px] w-[172px] bg-primary mt-12 rounded-[86px]">
									<img
										src="https://s3-alpha-sig.figma.com/img/7fab/d69d/dbfa772f3dcd36cb6f0ce3eced913728?Expires=1658707200&Signature=gIC5vKX6g4ZKNapCFyEbPu8IzL~00H24aoRXf6kiPF7IF74M0evMqTOr4yBcidewWiAkAPBBAx2S~oe0bsfqfRTLvMZT04Zubp6gL0kERg6yc1c8WqPrh1twHci-7SnFJASKJPzoqyXMBu9K7bScde2reaMuwDpcOhIkpS3JxWEO~vFCw4XLMJ0CVQfRhQDmz5cvrWj54zMxlYySw9bh0zub6DDD7Q7TPEyWnpNK8zFdcBypyKloOjWyyu7lQF93CXmQaGdJaYvgS2GB4WSyUj8eV2MoGZkdL7PhyPyX0hg-6wksNRz73bUqb2TN1bAYTomR0cIFZs0-rZeVaPsKGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
										class="w-[164px] h-[164px] mb-5 rounded-[82px]"
										alt="..."
									/>
								</div>
							</div>

							<div className="h-[12%] font-semibold text-center">
								<div className=" text-primary text-[24px] ">Jessie Luo</div>
								<div className=" text-[#383838] text-[16px] ">Softwear Engineer</div>
							</div>

							<div className="h-[32%] text-[14px] text-[#616161] text-left font-medium px-16">
								<div>College student interested in website and IOS development</div>
								<div className="h-[20px]" />
								<div>
									Experience in UI/UX design, project management, and marketing, delivering quality
									work.
								</div>
							</div>

							<div className="h-[6%] flex flex-row items-stretch gap-4">
								<img src={github} class="" alt="github" />
								<img src={linkedin} class="" alt="linkedin" />
							</div>
							<div className="h-[18%]">
								<a href="mailto:jluo30@jhu.edu">
									<button className="py-2 h-[44px] w-[164px] rounded-[100px] bg-primary text-center">
										<div className="text-[16px] font-semibold text-white">Contact Me</div>
									</button>
								</a>
							</div>
						</div>
						<Switch>
							<Route exact path="/">
								<About />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</Router>
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
				{/* <div className="h-[30%]">
						<img src={gpa} class="scale-[90%]" alt="time" />
					</div>
					<div className="flex flex-row h-[70%] gap-4">
						<div className="w-[65px] text-[14px] font-medium text-[#383838]">CS Major GPA</div>
						<div className="w-[65px] text-[32px] font-extrabold text-[#383838]">3.98</div>
					</div> */}
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

export default App;
