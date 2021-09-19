var adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
var nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];
let loremIpsum = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur','adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero','eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut','orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia','a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis', 'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros','dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa','volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus','quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus','at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam','tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in','hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque','fusce', 'augue', 'leo', 'eget', 'semper', 'mattis', 'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada','rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam','suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat','donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante','primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae','etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl','feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu','ad', 'litora', 'torquent', 'per', 'conubia', 'nostra','inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae','urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu','morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis','felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis','sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam','bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi','fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus','netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus','elementum', 'tempor', 'risus', 'cras'];

function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
		  .toString(16)
		  .substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
}

function randomEl(list) {
	var i = Math.floor(Math.random() * list.length);
	return list[i];
}

function randomTextGenerator(){
	return randomEl(loremIpsum)+' '+randomEl(loremIpsum)+' '+randomEl(loremIpsum);
}

class UsersService {
	constructor(){
		this.users = [];
		
		for(let i = 0; i < 50 ; i++){
			let newUser = {
				id:guid(),
				name: randomEl(adjectives)+' '+randomEl(nouns)
			}
			this.users.push(newUser);
		}		
	}	
	
	getUsers(){
		return Promise.resolve(this.users);
	}
}
	
class PostsService {
	constructor(users){
		this.posts = [];
		
		users.forEach( (user)=>{
		let randomNumberOfPosts = Math.floor(Math.random() * 3	)
		for(let i=0; i < randomNumberOfPosts; i++) {
			this.posts.push(this.createRandPostFromUser(user));
		}

		let newPosts = Array(randomNumberOfPosts).fill(null).map(()=>{return this.createRandPostFromUser(user)});
		this.posts = this.posts.concat(newPosts);
		});
	}
	createRandPostFromUser(user){
		return {
			id:guid(),
			user_id : user.id,
			text : randomTextGenerator(),
			comments : [guid(),guid(),guid()]
		}
	}
	getUserPost(userId){
		return Promise.resolve( this.posts.filter((post)=>{
			return post.user_id == userId
		}));
	}
}

class CommentsService{
	constructor(posts){
		this.comments = [];
		
		posts.forEach( (post)=>{
		let newComments = post.comments.map((comment)=>{return {id:comment,text:randomTextGenerator()}});
		this.comments = this.comments.concat(newComments);
		});
	}	
	
	getComment(id){
		return Promise.resolve(this.comments.find((comment)=>id===comment.id));
	}
}

let users = new UsersService();
let posts = new PostsService(users.users);
let comments = new CommentsService(posts.posts);
