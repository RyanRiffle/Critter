

class BeerColor
{
	static fromSRM(color)
	{
		var values = ["#F3F993", "#F5F75C", "#F6F513", "#EAE615", "#E0D01B", "#D5BC26", "#CDAA37", "#C1963C", "#BE8C3A", "#BE823A", "#C17A37", "#BF7138", "#BC6733", "#B26033", "#A85839", "#985336", "#8D4C32", "#7C452D", "#6B3A1E", "#5D341A", "#4E2A0C", "#4A2727", "#361F1B", "#261716", "#231716", "#19100F", "#16100F", "#120D0C", "#100B0A", "#050B0A"];
		return values[(Math.round(color) | 0)];
	}

	static fromLovibond(color)
	{
		
	}
}

export default SRM;