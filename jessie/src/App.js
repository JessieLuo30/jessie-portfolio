import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import back from './icons/back.svg';
import cat from './icons/cat.svg';
import work from './icons/work.svg';
import education from './icons/education.svg';
import gpa from './icons/gpa.svg';
import project from './icons/project.svg';
import company from './icons/company.svg';
import calender from './icons/calender.svg';
import react from './icons/frontend/react.svg';
import tailwind from './icons/frontend/tailwind.svg';
import swift from './icons/frontend/swift.svg';
import js from './icons/frontend/js.svg';

import mongodb from './icons/databases/mongodb.svg';
import sql from './icons/databases/sql.svg';

import figma from './icons/design/figma.svg';
import powerpoint from './icons/design/powerpoint.svg';
import pr from './icons/design/pr.svg';

import c from './icons/backend/c.svg';
import java from './icons/backend/java.svg';
import php from './icons/backend/php.svg';
import python from './icons/backend/python.svg';

import quiz from './videos/quiz.mp4';
import chatroom from './videos/chatroom.mp4';
import weather from './videos/weather.mp4';

import bloochat from './icons/proj/bloochat.svg';
import ucredit from './icons/proj/ucredit.svg';
import course from './icons/proj/course.svg';
import space from './icons/proj/space.svg';
import meme from './icons/proj/meme.svg';
import db from './icons/proj/db.svg';
import research from './icons/proj/research.svg';
import ruby from './icons/proj/ruby.svg';
import chess from './icons/proj/chess.svg';

function App() {
	return (
		<Router>
			<div>
				<div className="font-[Poppins] flex flex-col h-screen w-full bg-cover bg-fixed bg-[url('https://s3-alpha-sig.figma.com/img/4d01/9258/132506b7dfdd6884efb5d11b548183d4?Expires=1658707200&Signature=EsO8aT~4FgoXIFugn~jd92uuiA8BiPWQz1TxnFRlnwhM~iOynLuqOCO2y2A3p6drOVLjXqVahq7vzgKzMIT3xjm6nSX-~~TsZpZmqPLVVoiPVf6URNXIraLLD6qvb1MUnPw3QMHhQnuLTlSTpKLhy1trTIfU5S1GAp7GPxdXUJh~7soLTBR2nh2vqTX~5vAS07PqyBDo0oYXYGdWXwBpYffX59R1I~MZhrIgJhcFevkBEbx4UZECxBpMISC3HnJnllaptO9xX9xzCHF891kdVZbDmf1OKzbe6NEB3~9WmfkaLw8QYUF0zjuaJaBrmuY6T8yBoC74z8rQtarVwAU4Tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')]">
					{/* top bar */}
					<div className="h-[90px] fixed w-screen border-[0.5px] font-semibold  border-gray flex flex-row text-primary">
						<div className="text-[36px] py-4 px-6 tracking-widest w-[65%]"> ♥ WELCOME ╰(●’◡’●)╮ ♥</div>
						<div className="text-[18px] py-8 px-6 flex flex-row gap-[70px] ">
							<a
								onClick={() => {
									window.location.href = '/';
								}}
								className=" hover:text-[#DBDBDB]"
							>
								ABOUT
							</a>
							<a
								onClick={() => {
									window.location.href = '/skills';
								}}
								className=" hover:text-[#DBDBDB]"
							>
								SKILLS
							</a>
							<a
								onClick={() => {
									window.location.href = '/portfolio';
								}}
								className=" hover:text-[#DBDBDB]"
							>
								PORTFOLIO
							</a>
						</div>
						<img src={cat} class="scale-[50%]" alt="meow" />
					</div>

					<div className="h-[89%] mt-[90px] flex flex-row ">
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
								<a href="https://github.com/JessieLuo30">
									<img src={github} class="" alt="github" />
								</a>
								<a href="https://www.linkedin.com/in/jessie-luo-bc076/">
									<img src={linkedin} class="" alt="linkedin" />
								</a>
							</div>
							<div className="h-[18%]">
								<a href="mailto:jluo30@jhu.edu">
									<button className="py-2 h-[44px] w-[164px] rounded-[100px] bg-primary text-center hover:bg-[#8EA8DC] ">
										<div className="text-[16px] font-semibold text-white ">Contact Me</div>
									</button>
								</a>
							</div>
						</div>
						<Switch>
							<Route exact path="/">
								<About />
							</Route>
							<Route exact path="/about">
								<About />
							</Route>
							<Route exact path="/portfolio">
								<Portfolio />
							</Route>
							<Route path="/portfolio/ios">
								<IOS />
							</Route>
							<Route path="/portfolio/frontend">
								<Frontend />
							</Route>
							<Route path="/portfolio/backend">
								<Backend />
							</Route>
							<Route path="/portfolio/databases">
								<Databases />
							</Route>
							<Route path="/portfolio/game">
								<Game />
							</Route>
							<Route path="/skills">
								<Skills />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

function Game() {
	return (
		<div className="font-[Poppins] pt-4 flex flex-col px-[120px] ml-2 gap-5">
			<div className="h-[12%] font-semibold text-[#383838] text-center">
				<div className="text-[34px]">Frontend</div>
				<div className="text-[16px] font-medium text-[#616161] top-[20%]">My recent Work</div>
			</div>
			<div className="h-[80%] flex flex-col gap-14 ">
				<div className="h-[25%] flex flex-row gap-16 ">
					<img src={ruby} className="scale-[120%]" />
					<ProjectIntro
						type="long"
						title="Ruby's Advanture"
						github="https://learn.unity.com/project/ruby-s-2d-rpg?uv=2020.3"
						content="A 2D adventure game that introduces me to 2D game development and coding. A town is in peril after their friendly robots become broken! It's Ruby's quest to fix them!"
					/>
				</div>
				<div className="h-[25%] flex flex-row gap-16 ">
					<img src={space} className="scale-[120%]" />
					<ProjectIntro
						type="long"
						website="https://space-invaders-jluo30.netlify.app"
						title="Space Invaders"
						github="https://github.com/cs280spring-classroom/space-invaders-Jessie-ghub"
						content="The classic arcade game written in Javascript."
					/>
				</div>
				<div className="h-[25%] flex flex-row gap-16">
					<img src={meme} className="scale-[118%] " />
					<ProjectIntro
						type="long"
						title="Meme"
						website="https://meme-generator-jluo30.netlify.app/"
						github="https://github.com/cs280spring-classroom/meme-generator-Jessie-ghub"
						content="A React application that randomly generates cute memes. Fetch image data from https://api.imgflip.com/get_memes API."
					/>
				</div>
			</div>
		</div>
	);
}

function Frontend() {
	return (
		<div className="font-[Poppins] pt-4 flex flex-col px-[120px] ml-2 gap-5">
			<div className="h-[12%] font-semibold text-[#383838] text-center">
				<div className="text-[34px]">Frontend</div>
				<div className="text-[16px] font-medium text-[#616161] top-[20%]">My recent Work</div>
			</div>
			<div className="h-[80%] flex flex-col gap-14 ">
				<div className="h-[25%] flex flex-row gap-16 ">
					<img src={ucredit} className="scale-[120%]" />
					<ProjectIntro
						type="long"
						title="Ucredit"
						github="https://github.com/uCredit-Dev/ucredit_frontend_typescript"
						content="A simple real time messaging application build with Node, Express, and Socket.io. Complete with usernames and connect/disconnect messages."
					/>
				</div>
				<div className="h-[25%] flex flex-row gap-16 ">
					<img src={bloochat} className="scale-[120%]" />
					<ProjectIntro
						type="long"
						website="https://bloochat-jluo30.herokuapp.com"
						title="Bloochat"
						github="https://github.com/cs280spring-classroom/bloo-chat-Jessie-ghub"
						content="A simple real time messaging application build with Node, Express, and Socket.io. Complete with usernames and connect/disconnect messages."
					/>
				</div>
				<div className="h-[25%] flex flex-row gap-16">
					<img src={course} className="scale-[118%] " />
					<ProjectIntro
						type="long"
						title="Course Planner"
						website="https://course-planner-jluo30.netlify.app/"
						github="https://github.com/cs280spring-classroom/course-planner-Jessie-ghub"
						content="A simple real time messaging application build with Node, Express, and Socket.io. Complete with usernames and connect/disconnect messages."
					/>
				</div>
			</div>
		</div>
	);
}

function Backend() {
	return (
		<div className="font-[Poppins] pt-4 flex flex-col px-[120px] gap-5">
			<div className="h-[18%] font-semibold text-[#383838] text-center">
				<div className="text-[34px]">Backend</div>
				<div className="text-[16px] font-medium text-[#616161] top-[20%]">My recent Work</div>
			</div>
			<div className="h-[80%] flex flex-col gap-14 ">
				<div className="h-[25%] flex flex-row gap-24">
					<img src={chess} className="scale-[140%]" />
					<div className="mt-[-15px]">
						<ProjectIntro
							type="long"
							special="yes"
							title="Chess Console Game"
							github="https://github.com/robertzhidealx/phase-e"
							content="The most popular 2-player chess game written in C++. The game features validating a move, storing the moves and captured pieces, saving / loading a game, and Detect and alert Checked Positions, Checkmate and End-of-Game Situations.
							"
						/>
						<a href="https://github.com/JessieLuo30/2021-CS-course-project">
							<div className="text-[13px] hover:bg-[#D0D7D0]/25 h-[40px] w-[380px] rounded-[50px] font-semibold text-primary border-primary border-2 px-6 py-2">
								Source Code for All Project on this Page and More
							</div>
						</a>
					</div>
				</div>
				<div className="h-[25%] flex flex-row ">
					<div className="flex flex-col gap-7 mt-2">
						<div>
							<div className="text-[22px] font-semibold text-[#383838] "> Audio Processing</div>
							<div className="text-[15px] w-[950px] font-medium text-[#747474] mt-1">
								A C application that allows users to perform tasks including song production, remix, and
								echo
							</div>
						</div>
						<div>
							<div className="text-[22px] font-semibold text-[#383838] ">
								{' '}
								Course Registration Pre-req Check Helper{' '}
							</div>
							<div className="text-[15px] w-[950px] font-medium text-[#747474] mt-1">
								A Java implemented algorithm built on directed graph and binary tree
							</div>
						</div>
						<div>
							<div className="text-[22px] font-semibold text-[#383838] "> Digraph Analyzer</div>
							<div className="text-[15px] w-[950px] font-medium text-[#747474] mt-1">
								A C++ program to analyze digraphs and trigraphs in an input text file. If a number is
								entered, list all the digraphs/trigraphs (in ASCII order) that occur that many times and
								their corresponding containing words. If a digraph/trigraph is entered, list how many
								times the digraph/trigraph occurs and in which words (in order of their appearance in
								the text).
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Databases() {
	return (
		<div className="font-[Poppins] pt-4 flex flex-col px-[120px] ml-2 gap-5">
			<div className="h-[16%] font-semibold text-[#383838] text-center mt-1">
				<div className="text-[34px]">Databases</div>
				<div className="text-[16px] font-medium text-[#616161] top-[20%]">My recent Work</div>
			</div>
			<div className="h-[80%] flex flex-col gap-24">
				<div className="h-[25%] flex flex-row gap-24 ">
					<img src={db} className="scale-[140%]" />
					<div className="mt-[-15px]">
						<ProjectIntro
							type="long"
							title="NPM Packages Trend"
							website="https://ugrad.cs.jhu.edu/~jluo30/phase-e/jzhan239_jluo30.html"
							github="https://github.com/robertzhidealx/phase-e"
							content="A database system that supports complex SQL queries regarding patterns and trends in JavaScript development. Database populated by real-world data from GITHUB and NPM API."
						/>
					</div>
				</div>
				<div className="h-[25%] flex flex-row gap-24 ">
					<img src={research} className="scale-[140%]" />
					<ProjectIntro
						type="long"
						website="https://bloochat-jluo30.herokuapp.com"
						title="Robotic Lab Experiment Result Analysis"
						github="https://livejohnshopkins-my.sharepoint.com/:w:/g/personal/jluo30_jh_edu/EQCM6BUPq-hIrDsDsZDfRJgBVgVGAJu8gl03rINftkG4Tg?e=wc6Rfo"
						content="Automate weekly robot performance evaluations based on experiments data in the logs database using SQL"
					/>
				</div>
			</div>
		</div>
	);
}

function Skills(props) {
	return (
		<div className="font-[Poppins] py-8 w-[1150px] flex flex-col text-center items-center">
			<div className="h-[18%] text-center">
				<div className="text-[40px] font-semibold text-[#383838]">Skills</div>
				<div className="text-[18px] font-medium text-[#616161]">My technical level</div>
			</div>
			<div className="h-[80%] w-full flex flex-row px-6 items-center mr-1">
				<div className="w-1/2 h-full flex flex-col">
					<div className="h-1/2 flex flex-col px-6 border-r-2 border-[#DBDBDB] border-dotted items-center">
						<div className="text-[16px] h-[10%] font-semibold  mt-6 ">Frontend</div>
						<div className="text-[14px] font-medium text-[#616161]">8 months</div>
						<div className="h-[200px] flex flex-row mt-2 ml-[-100px]">
							<img src={react} class="scale-[60%]" />
							<img src={tailwind} class="scale-[60%]  ml-[-60px]  " />
							<img src={swift} class="scale-[60%] ml-[-60px] " />
						</div>
					</div>

					<div className="h-1/2 flex flex-col px-6 border-t-2 border-r-2 border-[#DBDBDB] border-dotted items-center">
						<div className="text-[16px] h-[10%] font-semibold  mt-6 ">Databases</div>
						<div className="text-[14px] font-medium text-[#616161]">8 months</div>
						<div className="h-[200px] flex flex-row ml-[-70px]">
							<img src={sql} class="scale-[70%]" />
							<img src={mongodb} class="scale-[70%] ml-[-40px] " />
						</div>
					</div>
				</div>
				<div className="w-1/2 h-full flex flex-col">
					<div className="h-1/2 flex flex-col px-6">
						<div className="text-[16px] h-[10%] font-semibold  mt-6 ">Backend</div>
						<div className="text-[14px] font-medium text-[#616161]">8 months</div>
						<div className="h-[200px] flex flex-row mt-2 items-center">
							<img src={c} class="scale-[70%]" />
							<img src={python} class="scale-[70%]  ml-[-40px]  " />
							<img src={java} class="scale-[70%]  ml-[-40px] " />
							<img src={php} class="scale-[70%]  ml-[-40px] " />
						</div>
					</div>
					<div className="h-1/2 flex flex-col px-6 border-t-2 border-[#DBDBDB] border-dotted">
						<div className="text-[16px] h-[10%] font-semibold  mt-6 ">Design</div>
						<div className="text-[14px] font-medium text-[#616161]">8 months</div>
						<div className="h-[200px] flex flex-row">
							<img src={figma} class="scale-[70%]" />
							<img src={powerpoint} class="scale-[70%] ml-[-40px]" />
							<img src={pr} class="scale-[70%] ml-[-40px]" />
						</div>
					</div>
				</div>
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

function Portfolio() {
	return (
		<div className="w-[79%] static border-gray border-[0.5px] flex flex-col px-[60px] py-9">
			<div className="text-[112px] absolute font-semibold text-primary top-[40%] left-[35%]">Portfolio</div>
			<div className="text-[24px] absolute font-medium text-[#616161] top-[35%] left-[55%]">My recent Work</div>
			<a
				onClick={() => {
					window.location.href = '/portfolio/ios';
				}}
			>
				<div className="absolute left-[70%] top-[18%] h-[85px] w-[240px] rounded-[35px] border-[#DBDBDB] border-2 hover:bg-[#D0D7D0]/25 py-[15px] text-center">
					<div className="text-[32px] font-lg text-[#616161]">IOS</div>
				</div>
			</a>
			<a
				onClick={() => {
					window.location.href = '/portfolio/frontend';
				}}
			>
				<div className="absolute left-[75%] top-[35%] h-[85px] w-[280px] rounded-[35px] border-[#DBDBDB] border-2 hover:bg-[#D0D7D0]/25 py-[15px] text-center">
					<div className="text-[32px] font-lg text-[#616161]">Frontend</div>
				</div>
			</a>
			<a
				onClick={() => {
					window.location.href = '/portfolio/backend';
				}}
			>
				<div className="absolute left-[77%] top-[52%] h-[85px] w-[280px] rounded-[35px] border-[#DBDBDB] border-2 hover:bg-[#D0D7D0]/25 py-[15px] text-center">
					<div className="text-[32px] font-lg text-[#616161]">Backend</div>
				</div>
			</a>
			<a
				onClick={() => {
					window.location.href = '/portfolio/databases';
				}}
			>
				<div className="absolute left-[71%] top-[68%] h-[85px] w-[280px] rounded-[35px] border-[#DBDBDB] border-2 hover:bg-[#D0D7D0]/25 py-[15px] text-center">
					<div className="text-[32px] font-lg text-[#616161]">Databases</div>
				</div>
			</a>
			<a
				onClick={() => {
					window.location.href = '/portfolio/game';
				}}
			>
				<div className="absolute left-[56%] top-[82%] h-[85px] w-[240px] rounded-[35px] border-[#DBDBDB] border-2 hover:bg-[#D0D7D0]/25 py-[15px] text-center">
					<div className="text-[32px] font-lg text-[#616161]">Game</div>
				</div>
			</a>
			{/* <div className="absolute left-[32%] top-[81%] h-[85px] w-[280px] rounded-[35px] border-[#DBDBDB] border-2 hover:bg-[#D0D7D0]/25 py-[15px] text-center">
				<div className="text-[32px] font-lg text-[#616161]">Crochet 🧶</div>
			</div> */}
		</div>
	);
}

function IOS() {
	return (
		<div className="font-[Poppins] pt-4 flex flex-col px-[104px]">
			<div className="h-[90px] font-semibold text-[#383838] text-center">
				<div className="text-[34px] left-[56%]">IOS</div>
				<div className="text-[16px] font-medium text-[#616161] top-[20%] ">My recent Work</div>
			</div>
			<div className="h-[260px] flex flex-row gap-12 ">
				<video width="125" height="170" class=" mt-[-10px]" controls>
					<source src={chatroom} type="video/mp4" />
				</video>
				<ProjectIntro
					type="medium"
					title="Flash Chat"
					content="An internet based messaging application that has authentication built in so that users are able to register and log in, using Firestore as a backend database to store and retrieve our messages from the cloud."
					github="https://github.com/JessieLuo30/Flash-Chat-iOS13"
				/>
			</div>
			<div className="h-[260px] flex flex-row gap-12 align-right mt-[-13%] ml-[390px] z-30">
				<ProjectIntro
					type="short"
					title="Clima"
					content="A weather application that allows you to use GPS to get real-time weather data for your current location, or enter the name of a city to check the weather there."
					github="https://github.com/JessieLuo30/Clima-iOS13"
				/>
				<video width="125" height="170" controls>
					<source src={weather} type="video/mp4" class="h-[250px] mt-[-20px]" />
				</video>
			</div>
			<div className="h-[260px] flex flex-row gap-12 mt-[-10%] z-10">
				<video width="125" height="170" controls>
					<source src={quiz} type="video/mp4" class="h-[250px] mt-[-10px]" />
				</video>
				<div class="mt-[50px]">
					<ProjectIntro
						type="medium"
						title="Quizzler"
						content="A quiz app is developed for educational purpose, allowing the users to prepare True/False questions
					for different examinations. It shows progress feedback during quiz play, and the player’s cumulative
					score at top left."
						github="https://github.com/JessieLuo30/Quizzler-iOS13"
					/>
				</div>
			</div>
		</div>
	);
}

function ProjectIntro(props) {
	return (
		<div className="flex flex-col">
			{props.type == 'medium' && (
				<div>
					<div className="text-[22px] font-semibold text-[#383838] ">{props.title}</div>
					<div className="text-[15px] w-[550px] font-medium text-[#747474] mt-1">{props.content}</div>
					<div className="mt-8">
						<CodeButton url={props.github} />
					</div>
				</div>
			)}
			{props.type == 'short' && (
				<div className="text-right mt-8">
					<div className="text-[22px] font-semibold text-[#383838] ">{props.title}</div>
					<div className="text-[15px] w-[420px] font-medium text-[#747474] mt-1">{props.content}</div>
					<div className="mt-8 ml-[307px]">
						<CodeButton url={props.github} />
					</div>
				</div>
			)}
			{props.type == 'long' && (
				<div>
					<div className="text-[22px] font-semibold text-[#383838] ">{props.title}</div>
					<div className="text-[15px] w-[650px] font-medium text-[#747474] mt-1">{props.content}</div>
					<div className="mt-8">
						{!props.special && (
							<div className="mt-8 flex flex-row gap-4">
								<CodeButton url={props.github} />
								{props.website && <WebButton url={props.website} />}
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

function CodeButton(props) {
	return (
		<a href={props.url}>
			<div className="hover:bg-[#D0D7D0]/25 text-[13px] h-[33px] w-[115px] rounded-[50px] font-semibold text-primary border-primary border-2 px-3 py-1">
				Source Code
			</div>
		</a>
	);
}

function WebButton(props) {
	return (
		<a href={props.url}>
			<div className="hover:bg-[#D0D7D0]/25 text-[13px] h-[33px] w-[80px] rounded-[50px] font-semibold text-[#CEDFD7] border-[#CEDFD7] border-2 px-3 py-1">
				Website
			</div>
		</a>
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
						Hi! I'm Jessie (Jiaxin) Luo from Beijing, China, a junior at Johns Hopkins University double
						majoring in Computer Science and Computer Engineering with minors in Applied Mathematics and
						Statistics and Marketing.
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

export default App;
