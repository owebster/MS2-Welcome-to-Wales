$.ajax({
    url: 'https://api.weatherstack.com/current',
    data: {
      access_key: 'be6ea8e1d22896aa92288375aa53cb4f',
      query: 'New York'
    },
    dataType: 'json',
    success: function(apiResponse) {
      console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    }
  });