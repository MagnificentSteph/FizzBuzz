exports.fizzBuzz = (req, res) => {

  console.log("Max Number:", req.body)

  const max_range = req.query.max_range || req.body.max_range || 100;

  console.log("Interpreted:", max_range);

  if(isNaN(max_range)){

    res.status(400).send(`not a valid number, return 400 error with message\n`);

  }
  else if(max_range < 0){

    res.status(400).send(`not a valid number, return 400 error with message. Try a number greater than zero.\n`);

  }
  else{

    const numbersToCheck = createArray(1, max_range);

   	const fizzBuzzResults = numbersToCheck.map((number, index) => {

      if(number%5==0 && number%3==0){
      	return `FizzBuzz ${number}`;
      }
      else if(number%5==0){
      	return `Buzz ${number}`;
      }
      else if(number%3==0){
      	return `Fizz ${number}`;
      }
      else{
      	return number.toString();
      }
    });

    const results = {
    	'results_array': fizzBuzzResults
    }

    res.status(200).send(results)

  }

};

const createArray = (min_range, max_range) => Array(max_range).fill().map((_, index) => min_range + index);
