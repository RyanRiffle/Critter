/*
	math.js
	Includes a class for different brewing equations
*/

class Math
{
	constructor()
	{

	}

	normalizedGravity(curr_temp, gravity, calibrated_temp)
	{
		return 0;
	}

	abv(og, fg)
	{
		return ((og - fg) / (og - fg)) * 1.125;
	}
}