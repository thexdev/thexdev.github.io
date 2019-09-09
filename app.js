Vue.component('app-navbar', {
	template: `
		<nav id="scrollspy" class="navbar navbar-expand-lg navbar-light bg-light py-md-3 sticky-top shadow-sm">
			<div class="container">
				<img src="favicon.png" class="img-fluid">
				<a class="navbar-brand ml-md-2" href="https://thexdev.github.io">THEXDEV</a>
				<button class="navbar-toggler border-0 p-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="typcn typcn-th-large-outline"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a class="nav-link text-serif" href="#skill">Skill</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-serif" href="#project">Project</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-serif" href="#experience">Experience</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-serif" href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	`
})

Vue.component('big-banner', {
	template: `
		<div class="jumbotron jumbotron-fluid text-center">
			<div class="container">
				<p class="lead d-block d-md-none d-lg-none">
					<span class="badge badge-pill badge-light animated fadeInUp delay-3s">A Full-Stack Web Developer</span>
				</p>
				<div class="p-0 animated fadeInDown delay-1s" style="font-size:2.5rem">
					<a href="https://github.com/thexdev/" target="_blank" class="text-secondary mx-2">
						<i class="typcn typcn-social-github-circular"></i>
					</a>
					<a href="https://www.instagram.com/akbar.n253_/" target="_blank" class="text-secondary mx-2">
						<i class="typcn typcn-social-instagram-circular"></i>
					</a>
					<a href="https://www.facebook.com/axeone.dev" target="_blank" class="text-secondary mx-2">
						<i class="typcn typcn-social-facebook-circular"></i>
					</a>
					<a href="https://twitter.com/AxeoneDeveloper/" class="text-secondary mx-2" target="_blank">
						<i class="typcn typcn-social-twitter-circular"></i>
					</a>
				</div>
				<h1 class="display-1 d-none d-md-block align-middle">THEXDEV</h1>
				<p class="lead d-none d-md-block d-lg-block">
					<span class="badge badge-pill badge-light animated fadeInDown delay-3s">A Full-Stack Web Developer</span>
				</p>
			</div>
		</div>
	`
})

Vue.component('three-point', {
	data() {
		return {
			points: [
				{text: 'belajar banyak bahasa pemrograman hanya dengan otodidak. fast learner dan pekerja keras.', image: 'public/image/computer.png'},
				{text: 'kreatif dan dapat mengambil ide disetiap kesempatan. simpel, passionate dan logic person.', image: 'public/image/botanic.png'},
				{text: 'Easy going. beradaptasi dengan cepat dan mampu bekerja sama sebagai team maupun individu.', image: 'public/image/coffee.png'}
			],
		}
	},
	template: `
		<div class="container mt-md-5 animated fadeInUp delay-2s">
			<div class="row">
				<div v-for="(me, index) in points" :key="index" class="col-sm-12 col-md-4 text-center">
					<img class="w-50 mb-2" :src="me.image">
					<p class="text-serif text-capitalize">
						<span class="w-75 m-auto d-block lead">{{ me.text }}</span>
					</p>
				</div>
			</div>
		</div>
	`
})


Vue.component('skill-set', {
	data() {
		return {
			progress: {
				frontEnd: [
					{label: 'HTML 5', level: 'Expert', width: '85%'},
					{label: 'CSS 3', level: 'Advance', width: '70%'},
					{label: 'JavaScript', level: 'Advance', width: '67%'},
					{label: 'Sass', level: 'Intermediate', width: '40%'}
				],
				backEnd: [
					{label: 'NodeJS', level: 'Advance', width: '75%'},
					{label: 'Python', level: 'Intermediate', width: '45%'},
					{label: 'PHP', level: 'Advance', width: '65%'},
					{label: 'SQL', level: 'Intermediate', width: '40%'}
				],
				framework: [
					{label: 'CodeIgniter', level: 'Advance', width: '75%'},
					{label: 'Bootstrap', level: 'Expert', width: '80%'},
					{label: 'Materialize CSS', level: 'Intermediate', width: '50%'},
					{label: 'jQuery', level: 'Advance', width: '55%'},
					{label: 'Vue.js', level: 'Intermediate', width: '50%'}
				],
				database: [
					{label: 'MySQL', level: 'Intermediate', width: '45%'}
				],
				environtment: [
					{label: 'Ubuntu', level: 'Intermediate', width: '55%'},
					{label: 'Github / Git', level: 'Intermediate', width: '50%'}
				],
				other: [
					{label: 'Postman', level: 'Intermediate', width: '45%'},
					{label: 'REST APIs', level: 'Intermediate', width: '50%'},
					{label: 'Microsoft Office', level: 'Advance', width: '70%'}
				]
			},
		}
	},
	template: `
		<div class="container mt-5" data-spy="scroll" data-target="#scrollspy" data-offset="0">
			<div class="row">
				<div class="col-md-4" id="skill">
					<div class="card border-0 same-hight">
						<div class="card-header bg-light text-center border-0">
							<h4><span class="typcn typcn-flash-outline mr-2"></span>Front-end</h4>
						</div>
						<div class="card-body">
							<div v-for="skill in progress.frontEnd" class="mb-4">
								<strong class="card-text">{{ skill.label }} <small class="float-right"><strong>{{ skill.level }}</strong></small></strong>
								<div class="progress" style="height: 2px">
									<div class="progress-bar bg-dark" role="progressbar" :style="'width:' + skill.width" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card border-0 same-hight">
						<div class="card-header bg-light text-center border-0">
							<h4><span class="typcn typcn-cog-outline mr-2"></span>Back-end</h4>
						</div>
						<div class="card-body">
							<div v-for="skill in progress.backEnd" :key="skill.label" class="mb-4">
								<strong class="card-text">{{ skill.label }} <small class="float-right"><strong>{{ skill.level }}</strong></small></strong>
								<div class="progress" style="height: 2px">
									<div class="progress-bar bg-dark" role="progressbar" :style="'width:' + skill.width" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card border-0 same-hight">
						<div class="card-header bg-light text-center border-0">
							<h4><span class="typcn typcn-puzzle-outline mr-2"></span>Framework</h4>
						</div>
						<div class="card-body">
							<div v-for="skill in progress.framework" :key="skill.label" class="mb-4">
								<strong class="card-text">{{ skill.label }} <small class="float-right"><strong>{{ skill.level }}</strong></small></strong>
								<div class="progress" style="height: 2px">
									<div class="progress-bar bg-dark" role="progressbar" :style="'width:' + skill.width" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card border-0 same-hight">
						<div class="card-header bg-light text-center border-0">
							<h4><span class="typcn typcn-document-text mr-2"></span>Database</h4>
						</div>
						<div class="card-body">
							<div v-for="skill in progress.database" :key="skill.label" class="mb-4">
								<strong class="card-text">{{ skill.label }} <small class="float-right"><strong>{{ skill.level }}</strong></small></strong>
								<div class="progress" style="height: 2px">
									<div class="progress-bar bg-dark" role="progressbar" :style="'width:' + skill.width" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card border-0 same-hight">
						<div class="card-header bg-light text-center border-0">
							<h4><span class="typcn typcn-globe-outline mr-2"></span>Environtment</h4>
						</div>
						<div class="card-body">
							<div v-for="skill in progress.environtment" :key="skill.label" class="mb-4">
								<strong class="card-text">{{ skill.label }} <small class="float-right"><strong>{{ skill.level }}</strong></small></strong>
								<div class="progress" style="height: 2px">
									<div class="progress-bar bg-dark" role="progressbar" :style="'width:' + skill.width" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card border-0 same-hight">
						<div class="card-header bg-light text-center border-0">
							<h4><span class="typcn typcn-th-small-outline mr-2"></span>Other</h4>
						</div>
						<div class="card-body">
							<div v-for="skill in progress.other" :key="skill.label" class="mb-4">
								<strong class="card-text">{{ skill.label }} <small class="float-right"><strong>{{ skill.level }}</strong></small></strong>
								<div class="progress" style="height: 2px">
									<div class="progress-bar bg-dark" role="progressbar" :style="'width:' + skill.width" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`
})

Vue.component('open-source-project', {
	data() {
		return {
			repos: null
		}
	},
	template: `
		<div class="container">
			<div class="row">
				<div class="col-md-12" id="project">
					<div class="table-responsive shadow border-light p-4 rounded">
						<table class="table table-hover">
							<thead>
								<tr>
									<th>#</th>
									<th>Proyek</th>
									<th>Bahasa</th>
									<th>Deskripsi</th>
									<th>Ukuran</th>
									<th>Stars</th>
									<th>Opsi</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(project, index) in repos" :key="project.name">
									<td>{{ index + 1 }}</td>
									<td>{{ project.name | stripless}}</td>
									<td>{{ project.language }}</td>
									<td>{{ project.description }}</td>
									<td>{{ project.size + 'kb' }}</td>
									<td>{{ project.stargazers_count }}</td>
									<td>
										<a class="btn btn-outline-dark btn-sm rounded-pill text-dark" :href="project.html_url"><i class="typcn typcn-arrow-down-outline"></i> Download</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	`,
	mounted() {
		axios
  			.get('https://api.github.com/users/thexdev/repos')
  			.then(response => (this.repos = response.data))
	}
})

Vue.component('work-experience', {
	data() {
		return {
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
		}
	},
	template: `
		<div class="container mt-5">
			<div class="row">
				<div class="col-md-3" id="experience">
					<div class="card border-0">
						<div class="card-header text-center bg-light border-0 text-serif">
							<h4>
								<span class="typcn typcn-mortar-board mr-1"></span>Pendidikan
							</h4>
						</div>
						<div class="card-body timeline">
							<ul>
								<li v-for="(info, index) in timeline.school" :key="index">
									<span></span>
									<div>{{ info.school }}</div>
									<div class="text-wrap">{{ info.address }}</div>
									<div>{{ info.course }}</div>
									<div class="year">
										<span>{{ info.yearEnd }}</span>
										<span>{{ info.yearStart }}</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card border-0">
						<div class="card-header text-center bg-light border-0 text-serif">
							<h4>
								<span class="typcn typcn-watch mr-1"></span>Pengalaman
							</h4>
						</div>
						<div class="card-body timeline">
							<ul>
								<li>
									<span></span>
									<div>Front End Developer</div>
									<div>PT. Hayuning Indo Tech</div>
									<div>. . .</div>
									<div class="year">
										<span>2019</span>
										<span>Now</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card border-0">
						<div class="card-header text-center bg-light border-0 text-serif">
							<h4>
								<span class="typcn typcn-thumbs-up mr-1"></span>Prestasi
							</h4>
						</div>
						<div class="card-body">
							<ol class="p-0 m-auto">
								<li class="mb-3" v-for="(info, index) in timeline.pride" :key="index">
									{{ info }}
								</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card border-0">
						<div class="card-header text-center bg-light border-0 text-serif">
							<h4>
								<span class="typcn typcn-group-outline mr-1"></span>Organisasi
							</h4>
						</div>
						<div class="card-body">
							<ol class="p-0 m-auto">
								<li class="mb-3" v-for="(info, index) in timeline.organization" :key="index">
									{{ info }}
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	`
})

Vue.component('app-footer', {
	template: `
		<div class="jumbotron jumbotron-fluid mb-0">
			<div class="container">
				<div class="row" id="contact">
					<div class="col-md-4 text-center text-md-left text-lg-left">
						<p>&copy;2019 - M. Akbar Nugroho</p>
						<a class="btn btn-sm btn-light rounded-pill text-dark" target="_blank" href="https://drive.google.com/drive/folders/1QDg2m6QfyhXlxYUqgxUAUm3RiJ2BeM1-?usp=sharing">Download My CV</a>
					</div>
					<div class="col-md-4">
						<strong class="my-2 mb-md-2 mt-md-0 d-block text-center text-md-left text-lg-left">Contact</strong>
						<ul class="px-4 p-md-0 p-lg-0 list-unstyled">
							<li class="my-1"><i class="fa fa-envelope-open-o mr-2"></i>akbarnugroho253@gmail.com</li>
							<li class="my-1"><i class="fa fa-whatsapp mr-2"></i>+62852956686526</li>
							<li class="my-1"><i class="fa fa-telegram mr-2"></i>@thexdev</li>
						</ul>
					</div>
					<div class="col-md-4">
						<div class="p-0 text-center text-md-left text-lg-left" style="font-size:2.5rem">
							<a href="https://github.com/thexdev/" target="_blank" class="text-secondary mx-2">
								<i class="typcn typcn-social-github-circular"></i>
							</a>
							<a href="https://www.instagram.com/akbar.n253_/" target="_blank" class="text-secondary mx-2">
								<i class="typcn typcn-social-instagram-circular"></i>
							</a>
							<a href="https://www.facebook.com/axeone.dev" target="_blank" class="text-secondary mx-2">
								<i class="typcn typcn-social-facebook-circular"></i>
							</a>
							<a href="https://twitter.com/AxeoneDeveloper/" class="text-secondary mx-2" target="_blank">
								<i class="typcn typcn-social-twitter-circular"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	`
})

Vue.filter('stripless', (value) => {
	return value.split('-').join(' ')
})

new Vue({
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
	}
})

// https://api.github.com/users/thexdev/repos

// background: #abbaab;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to top, #ffffff, #abbaab);   Chrome 10-25, Safari 5.1-6 
// background: linear-gradient(to top, #ffffff, #abbaab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

