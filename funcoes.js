var app = new Vue({
	el: '#app',
	data: {
		items: [],
		array_historias: []
	},
	mounted: function() {
		axios.get('https://hacker-news.firebaseio.com/v0/beststories.json')
  		.then(response => {

		    this.items = response.data;
		    this.meu_array = []

		   	for(var i in this.items){
		   		if(i<20){
		   			this.meu_array.push(this.items[i])
		   		}
		   	}
		   	
		    for(var a in this.meu_array){
			
				axios.get('https://hacker-news.firebaseio.com/v0/item/'+this.meu_array[a].toString()+'.json')
				.then(resposta => {

				    this.estorias = resposta.data;
				    this.array_historias.push(this.estorias);
		  		})

				.catch(error => {
					console.log(error);
				});
			}

  		})
		.catch(error => {
			console.log(error);
		});

	},
})