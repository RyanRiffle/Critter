var Helpers = 
{
	CelciusToFahrenheit: function(cel) 
	{
		return Math.round((cel * (9/5)) + 32);
	},

	DaysToWeeks: function(days)
	{
		return days / 7;
	},

	DaysToWeeksString: function(days)
	{
		var weeks = days / 7;

		if (weeks > 1)
			return (days / 7) + ' weeks';
		else if (weeks === 1)
			return '1 week';

		//Finally return nothing
		return '';
	},

	LiterToGal: function(liter)
	{
		return Math.round(liter * 0.26);
	},

	GalToLiter: function(gal)
	{
		return Math.round(gal * 3.785412);
	}
};

export default Helpers;
