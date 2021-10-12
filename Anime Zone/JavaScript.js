
fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
	.then(response => {
		return response.json();
	})
	.then(data => {
		//console.log(data);
		//console.log(data.top);
		//console.log(data.top.slice(0,10));
		//console.log(data.top.url);
	
			for (let i = 0; i <= 15; i++) {
				


				let list = document.getElementById('topAnime')
				let link = document.createElement('li')
				listItem = document.createElement("a")

				
				listItem.href = data.top[i].url;
				listItem.innerHTML = data.top[i].title;

				link.appendChild(listItem);
				list.appendChild(link);
				
				
			} 
	})


fetch('https://api.jikan.moe/v3/schedule/monday')
	.then(response => {
		return response.json();
	})
	.then(data => {
		//console.log(data.monday);
		//console.log(data.monday[1].image_url);

		for  (i=0; i <= 6; i++) {
			img = document.createElement("img");
			
			let schedule = document.getElementById('scheduleList');
			img.src = data.monday[i].image_url;
			
			bannerUrl = document.createElement("a");
			bannerUrl.href = data.monday[i].url;
			
			bannerUrl.appendChild(img);
			schedule.appendChild(bannerUrl);

		}
		

		

	}) 

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
	e.preventDefault();
	
	console.log(e.target.value);
	FetchAnime(e.target.value);
})


const FetchAnime = async (query) => {
	const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=20`)
		.then(response => {
			return response.json();
		})
		.then(temp => {
			console.log(temp.results);
	
			for (i=0; i <= 20; i++) {
				
				console.log(temp.results[i])
				let SetAnimeList = document.getElementById('mainContent');
				animeCard = document.createElement("div")
				animeTitle = document.createElement("h3")
				animeUrl = document.createElement("a")
				img = document.createElement("img")

				animeTitle.innerHTML = temp.results[i].title;
				console.log(animeTitle);
				animeUrl.href = temp.results[i].url;
				console.log(animeUrl);
				img.src = temp.results[i].image_url

				animeUrl.appendChild(img);
				animeCard.appendChild(animeUrl);
				animeCard.appendChild(animeTitle);
				SetAnimeList.appendChild(animeCard);



			}
			

		})
}