let listCards = $(".product-card");
let json = ["nome", "desconto", "valor"]

for(let i = 0; i < listCards.length; i++)
{
	json.push({
		"nome": listCards.find(".product-card__title")[i].innerText,
		"desconto": listCards.find(".promotion__tag-discount")[i].innerText,
		"valor": listCards.find(".promotion-price")[i].innerText,
	});
}

console.log(json);