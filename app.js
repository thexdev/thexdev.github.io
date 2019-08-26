Vue.component('scroll-indicator', {
	template:'#indocator',
	mounted() {
		let self = this
		window.addEventListener('scroll', function (e) {
			let scrollPos  = window.scrollY
			let winHeight  = window.innerHeight
			let docHeight  = document.documentElement.scrollHeight
			let percen     = 100 * scrollPos / (docHeight - winHeight)
			self.$el.style.width = `${percen}%`
		})
	}
})

Vue.component('navigation-bar', {
	template: '#navbar'
})

Vue.component('big-banner', {
	template: `#jumbotron`
})

Vue.component('abstraction', {
	template: '#abstraction'
})


Vue.component('skill-set', {
	template: '#skill'
})

Vue.component('project', {
	template: '#project'
})

Vue.component('expirience', {
	template: '#expirience'
})

Vue.component('footer-content', {
	template: '#footer'
})

Vue.filter('stripless', (value) => {
	return value.split('-').join(' ')
})

const root = new Vue({
	el: '#root',
	data: {
		abstraction: [
			{text: 'belajar banyak bahasa pemrograman hanya dengan otodidak. fast learner dan pekerja keras.', image: 'assets/image/computer.png'},
			{text: 'kreatif dan dapat mengambil ide disetiap kesempatan. simpel, passionate dan logic person.', image: 'assets/image/botanic.png'},
			{text: 'Easy going. beradaptasi dengan cepat dan mampu bekerja sama sebagai team maupun individu.', image: 'assets/image/coffee.png'}
		],
		progress: {
			frontEnd: [
				{label: 'HTML 5', width: '85%'},
				{label: 'CSS 3', width: '70%'},
				{label: 'JavaScript', width: '65%'}
			],
			backEnd: [
				{label: 'PHP', width: '70%'},
				{label: 'NodeJS', width: '30%'},
				{label: 'Python', width: '20%'},
				{label: 'SQL', width: '40%'}
			],
			framework: [
				{label: 'CodeIgniter', width: '60%'},
				{label: 'Bootstrap', width: '80%'},
				{label: 'Materialize CSS', width: '50%'},
				{label: 'jQuery', width: '55%'},
				{label: 'Vue.js', width: '20%'}
			],
			database: [
				{label: 'MySQL', width: '45%'}
			],
			environtment: [
				{label: 'Ubuntu', width: '35%'},
				{label: 'Github / Git', width: '20%'}
			],
			other: [
				{label: 'Postman', width: '20%'},
				{label: 'REST APIs', width: '40%'},
				{label: 'NPM', width: '10%'},
				{label: 'Microsoft Office', width: '70%'}
			]
		},
		repos: null,
		timeline: {
			school: [
		        {
		        	school:'SMK Khaidir Nur Binjai',
		          	address: 'Jl. Samanhudi N0.213 Binjai Estate, Kota Binjai',
		          	course:'Rekayasa Perangkat Lunak',
		          	yearStart:'2016',
		          	yearEnd:'2019'
		        },
		        {
		          	school:'MTsN Kota Binjai',
		          	address: 'Jl. Pakan Baru No. 1A, Binjai ',
		          	course:'',
		          	yearStart:'2012',
		          	yearEnd:'2016'
		        },
		        {
		          	school: 'SDN 023972',
		          	address: 'Jl. Pembina 21 Berngam, Berngam, Kec. Binjai Kota',
		          	course:'',
		          	yearStart:'2006',
		          	yearEnd:'2012'
		        }
		    ],
		    pride: [
		    	'Ketua OSIS SMK Khaidir Nur Binjai',
		    	'Juara 4 LKS Web Design Kota Binjai'
		    ],
		    organization: [
		    	'OSIS SMK Khaidir Nur Binjai',
		    	'OSIS MTsN Binjai',
		    	'Pencak Silat MTsN Binjai',
		    	'Dojo Shorinji Kempo Kota Binjai',
		    	'Pasukan Penggalang Pramuka SDN 023972'
		    ]
		}
	},
	mounted() {
		 axios
      		.get('https://api.github.com/users/thexdev/repos')
      		.then(response => (this.repos = response.data))
	},
})

// https://api.github.com/users/thexdev/repos

// background: #abbaab;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to top, #ffffff, #abbaab);   Chrome 10-25, Safari 5.1-6 
// background: linear-gradient(to top, #ffffff, #abbaab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

