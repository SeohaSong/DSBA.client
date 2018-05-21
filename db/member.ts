export class Member {
	type: string;
	img: string;
	name_ko: string;
	name_en: string;
	status1: string;
	status2: number;
	mail: string;
	CV: string;
	research_areas: string;
	BS: string;
	MS: string;
	career: string;
	current: string;
	admission: string;
}


export const MEMBERS: Array<Member> = [
	{
		type: "students",
		img: "assets/img/member/s000.png",
		name_ko: "김준홍",
		name_en: "Junhong Kim",
		status1: "Ph.D. Candidate",
		status2: 5,
		mail: "junhongkim@korea.ac.kr",
		CV: "https://www.dropbox.com/s/juhrp084uikeswq/Curriculum%20Vaite_JunhongKim.pdf?dl=0",
		research_areas: "Deep learning for manufacturing, OCR and their applications NLP, Keystroke dynamics authentication",
		BS: "Industrial Engineering, Seoul Nat’l Univ. of Sci. & Tech., 2014",
		MS: "Data Science, Seoul Nat’l Univ. of Sci. & Tech., 2016",
		career: null,
		current: null,
		admission: "March 1, 2016"
	},
	{
		type: "students",
		img: "assets/img/member/s001.jpg",
		name_ko: "김창엽",
		name_en: "Czangyeob Kim",
		status1: "Ph.D. Student",
		status2: 4,
		mail: "czangyeob@korea.ac.kr",
		CV: null,
		research_areas: "Data Mining, Machine Learning",
		BS: "Computer Science, Kookmin Univ., 2006",
		MS: "Information Security, Sungkyunkwan Univ., 2009",
		career: "AhnLab, South Korea(2007.1 ~ 2016.8)",
		current: null,
		admission: "September 1, 2016"
	},
	{
		type: "students",
		img: "assets/img/member/s002.jpg",
		name_ko: "김동화",
		name_en: "Donghwa Kim",
		status1: "Integrated M.S/Ph.D. Student",
		status2: 7,
		mail: "donghwa89@korea.ac.kr",
		CV: null,
		research_areas: "Text Mining, Zero-Shot Learning",
		BS: "Industrial Engineering, Seoul Nat’l Univ. of Sci. & Tech., 2015",
		MS: null,
		career: null,
		current: null,
		admission: "March 1, 2015"
  },
	{
		type: "students",
		img: "assets/img/member/s003.png",
		name_ko: "김형석",
		name_en: "Hyungseok Kim",
		status1: "Integrated M.S/Ph.D. Student",
		status2: 7,
		mail: "hskim0263@korea.ac.kr",
		CV: null,
		research_areas: "Data Mining, Social Network Analysis",
		BS: "Information Statistics, Dankook Univ., 2015",
		MS: null,
		career: null,
		current: null,
		admission: "March 1, 2015"
  },
	{
		type: "students",
		img: "assets/img/member/s004.png",
		name_ko: "박민식",
		name_en: "Minsik Park",
		status1: "Integrated M.S/Ph.D. Student",
		status2: 6,
		mail: "msp3887@korea.ac.kr",
		CV: null,
		research_areas: "Data Mining, Reinforcement learning",
		BS: "Applied Statistics, Konkuk Univ., 2015",
		MS: null,
		career: null,
		current: null,
		admission: "September 1, 2015"
  },
	{
		type: "students",
		img: "assets/img/member/s005.jpg",
		name_ko: "서승완",
		name_en: "Seungwan Seo",
		status1: "Integrated M.S/Ph.D. Student",
		status2: 3,
		mail: "seungwan0206@korea.ac.kr",
		CV: null,
		research_areas: "NLP, Reinforcement Learning",
		BS: "IT management, Seoul Nat’l Univ. of Sci.&Tech. , 2017",
		MS: null,
		career: null,
		current: null,
		admission: "March 1, 2017"
  },
	{
		type: "students",
		img: "assets/img/member/s006.jpeg",
		name_ko: "박경찬",
		name_en: "Kyoungchan Park",
		status1: "Integrated M.S/Ph.D. Student",
		status2: 1,
		mail: "pkc9410@korea.ac.kr",
		CV: null,
		research_areas: "Deep Learning, data analysis",
		BS: "Industrial Management Engineering, Korea University, 2017",
		MS: null,
		career: null,
		current: null,
		admission: "March 1, 2018"
  },
	{
		type: "students",
		img: "assets/img/member/s007.jpeg",
		name_ko: "손규빈",
		name_en: "Gyubin Son",
		status1: "Integrated M.S/Ph.D. Student",
		status2: 1,
		mail: "gyubin_son@korea.ac.kr",
		CV: null,
		research_areas: "Question Answering, Generative models in NLP",
		BS: "Business administration, Yonsei University, 2017",
		MS: null,
		career: null,
		current: null,
		admission: "March 1, 2018"
	},
	{
		type: "students",
		img: "assets/img/member/s008.png",
		name_ko: "류나현",
		name_en: "Nahyeon Ryu",
		status1: "M.S. Student",
		status2: 4,
		mail: "willow6248@korea.ac.kr",
		CV: null,
		research_areas: "	Data Mining, Machine Learning",
		BS: "Physics, Chonbuk Nat’l Univ., 2013",
		MS: null,
		career: null,
		current: null,
		admission: "March 1, 2015"
	},
  {
		type: "alumni",
		img: "assets/img/member/a000.png",
		name_ko: "서동민",
		name_en: "Dongmin Seo",
		status1: "M.S.",
		status2: null,
		mail: null,
		CV: null,
		research_areas: null,
		BS: "Computer Science, Seoul Nat’l Univ. of Sci. & Tech., 2014",
		MS: "Data Science, Seoul Nat’l Univ. of Sci. & Tech., 2016",
		career: null,
		current: "Hyundai NGV, KOREA",
		admission: null
	},
	{
		type: "alumni",
		img: "assets/img/member/a001.jpg",
		name_ko: "김보섭",
		name_en: "Boseop Kim",
		status1: "M.S.",
		status2: null,
		mail: "svei89@korea.ac.kr",
		CV: null,
		research_areas: "Machine learning, Deep learning",
		BS: "Applied Statistics, Konkuk Univ., 2015",
		MS: "Industrial Management Engineering, Korea Univ, 2017",
		career: null,
		current: "KT Institute of Convenge Technology",
		admission: null
	}
]
