let faker = require('faker');
let fs = require('fs');
let podcastArr = [];

for(let i = 0; i < 10; i++){
	let newEntry = JSON.stringify({
				title: faker.random.words(),
				genre: faker.commerce.department(),
				img_url: faker.image.business(),
				description: faker.lorem.paragraph(),
				station: faker.company.companyName(),
				listen_url: faker.internet.url()
	})
	podcastArr.push(newEntry);
}

fs.writeFile('message.json', podcastArr, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});