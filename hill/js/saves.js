$(document).ready(function() {


//LOGIN FUNCTIONALITY///////////////////////////////////
		$('form[name="login"]').submit(function(e)
	{
		// Prevent our browser from submitting our form in
		// the traditional way
		e.preventDefault();
		var user = $('input[name="user"]').val();
		var pass = $('input[name="pass"]').val();

		// Clear out the errors!
		$('form[name="login"] output').empty();

		$.getJSON('checklogin.php', { "user":user, "pass":pass }, function(data)
		{
		

			if (data.status == true)
			{
				// Successful!
				loginOrSignupSuccess();
				// Defined the function up above, because it gets repeated on register
			}
			else
			{
				
				// For each error that was returned...
				$.each(data.errors, function(i, err)
				{
					// Print out the error
					$('output[for="'   +   err.field   +   '"]').text(err.message);

					// Clear out the input field with the error
					$('input[name="'   +   err.field   +   '"]').addClass('error').val('');
				}); // $.each
			} // else
		}); // getJSON
	}); // submit()


//REGISTER FUNCTIONALITY///////////////////////////////////

$('form[name="register"]').submit(function(e)
	{

		
		// Prevent our browser from submitting our form in
		// the traditional way
		e.preventDefault();
		var email = $('input[name="email"]').val();
		var pass1 = $('input[name="pass1"]').val();
		var pass2 = $('input[name="pass2"]').val();
		var fname = $('input[name="fname"]').val();
		var lname = $('input[name="lname"]').val();


		// Clear out the errors!
		$('form[name="register"] output').empty();

		var jqxhr=$.getJSON('doregister.php', { "email":email, "pass1":pass1, "pass2":pass2, "fname":fname, "lname":lname }, function(data)
		{
			console.log(data);

			if (data.status == true)
			{
				// Successful!
				loginOrSignupSuccess();
			}
			else
			{
				// You are invalid
				// For each error that was returned...
				$.each(data.errors, function(i, err)
				{
					// Print out the error
					$('output[for="'   +   err.field   +   '"]').text(err.message);

					// Clear out the input field with the error
					$('input[name="'   +   err.field   +   '"]').addClass('error').val('');
				}); // $.each
			} // else
		}).fail(function(d, text, error){
			 alert(jqxhr.responseText);
			 console.log("Json failed, status: " + text + ", error" + error);

		}); // getJSON
	}); // submit()


//SAVE MAP FUNCTIONALITY///////////////////////////////////

	
	$('form[name="work"]').submit(function(e)
	{
		// Prevent our browser from submitting our form in
		// the traditional way
		e.preventDefault();
		var address = $('input[name="address"]').val();
		var kind = $(this).attr('name');
	

		// Clear out the errors!
		$('form[name="work"] output').empty();

		$.getJSON('address.php', { "address":address, "kind":kind }, function(data)
		{
			console.log(data);

			if (data.status == true)
			{
				// Successful!
				 SavedAddressSuccess();
			
			}
			else
			{
				// You are invalid
				// For each error that was returned...
				$.each(data.errors, function(i, err)
				{
					// Print out the error
					$('output[for="'   +   err.field   +   '"]').text(err.message);

					// Clear out the input field with the error
					$('input[name="'   +   err.field   +   '"]').addClass('error').val('');
				}); // $.each
			} // else
		}); // getJSON
	}); // submit()

	$('form[name="home"]').submit(function(e)
	{
		// Prevent our browser from submitting our form in
		// the traditional way
		e.preventDefault();
		var address = $('input[name="address"]').val();
		var kind = $(this).attr('name');
	

		// Clear out the errors!
		$('form[name="home"] output').empty();

		$.getJSON('address.php', { "address":address, "kind":kind }, function(data)
		{
			console.log(data);

			if (data.status == true)
			{
				// Successful!
				 SavedAddressSuccess();
			
			}
			else
			{
				// You are invalid
				// For each error that was returned...
				$.each(data.errors, function(i, err)
				{
					// Print out the error
					$('output[for="'   +   err.field   +   '"]').text(err.message);

					// Clear out the input field with the error
					$('input[name="'   +   err.field   +   '"]').addClass('error').val('');
				}); // $.each
			} // else
		}); // getJSON
	}); // submit()

	$('form[name="misc"]').submit(function(e)
	{
		// Prevent our browser from submitting our form in
		// the traditional way
		e.preventDefault();
		var address = $('input[name="address"]').val();
		var kind = $(this).attr('name');
	

		// Clear out the errors!
		$('form[name="misc"] output').empty();

		$.getJSON('address.php', {"address":address, "kind":kind }, function(data)
		{
			console.log(data);

			if (data.status == true)
			{
				// Successful!
				 SavedAddressSuccess();

			}
			else
			{
				// You are invalid
				// For each error that was returned...
				$.each(data.errors, function(i, err)
				{
					// Print out the error
					$('output[for="'   +   err.field   +   '"]').text(err.message);

					// Clear out the input field with the error
					$('input[name="'   +   err.field   +   '"]').addClass('error').val('');
				}); // $.each
			} // else
		}); // getJSON
	}); // submit()


	var loginOrSignupSuccess = function(first)
	{
		$('.popup.log').fadeOut();
		$('a.logout').show();
		// Change the "Login" to be the "New" button
		$('button.login').fadeOut();
		$('.HAL p').text('Hello, ' + first);
		$('a.logout').show();
		$('.new').show();
	};

	$('#home').click(function(){
		$('.popup.new').fadeIn();
		$('form[name="home"]').fadeIn();

	});

	$('#work').click(function(){
		$('.popup.new').fadeIn();
		$('form[name="work"]').fadeIn();
	});

	$('#misc').click(function(){
		$('.popup.new').fadeIn();
		$('form[name="misc"]').fadeIn();
	});


		

	var SavedAddressSuccess = function(address) {
		$('.popup').fadeOut();
		$('a.logout').show();
		$(this).css("box-shadow", "2px 2px goldenrod");
	};

//	$('.savemaps').click(function() {
//		$('.popup.new').fadeIn();
//	$('form[name="work"]').fadeIn();
//	$('form[name="home"]').fadeIn();
//	$('form[name="misc"]').fadeIn();

//	});



	// When I clicked on the "LOGIN" button...
	$('.login').click(function() {
		$('.popup.log').fadeIn();
	});

	// Show the register form
	$('.register').click(function() {
		$('form[name="login"]').fadeOut();
		$('form[name="register"]').fadeIn();


	});

	// Show the sign-in form
	$('.signin').click(function() {
		$('form[name="login"]').fadeIn();
		$('form[name="register"]').fadeOut();
	});

	// Close the popup when you click on the gray portion
	$('.popup').click(function() {
		$(this).fadeOut();

	});

	// Prevent things inside of the popup from triggering it to close (google: "bubbling")
	$('.popup *').click(function(e) {
		if (e.stopPropagation) {
	        e.stopPropagation();
	    } else {
	    	// Older IE method
	        e.cancelBubble = true;
		}
	});




});

