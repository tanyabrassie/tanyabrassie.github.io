 //YOU ARE NOW ENTERING THE JAVASCRIPT ZONE. PLEASE ACT ACCORDINGLY.
	  // Whoo! tanya's javascripts.

	  	//ENCAPSULATION ZONE
	  	(function encapsulationZone () {

		  	 
		  //VARIABLE ZONE 
			  var hamburger = document.getElementById("hamburger");
			  var menuHidden = true;
			  var nav = document.getElementsByClassName("global-nav")[0];
			  var firstNavItem = document.getElementsByClassName("global-nav__item")[0];
			  var hamburgerContainer = document.getElementsByClassName("hamburger__container")[0];
			  var sosLogo = document.getElementsByClassName("global-nav__logo--mobile")[0];


		//FUNCTION FUN TIME ZONE
			function styleChanges (navTop, navDisplay, hamburgerContainerHeight, sosLogoMargin, menuHide) {
				nav.style.top = navTop;
				nav.style.display = navDisplay;
				hamburgerContainer.style.height = hamburgerContainerHeight;
				sosLogo.style.margin = sosLogoMargin;
				menuHidden = menuHide;
			};

			window.onresize = function() {	
				var screenWidth = document.documentElement.clientWidth;	  	
				if (screenWidth > 900) {
				  	nav.style.display = "block";
			  	} 
				else {
			  		nav.style.display = "none";
			  		hamburgerContainer.style.height ="50px";
			  		sosLogo.style.margin = "-50px auto 5px";
			  	}
			};  	

			window.onload = function() {	
				var screenWidth = document.documentElement.clientWidth;	  		  	
			  	if (screenWidth < 900) {
			  		nav.style.display = "none";
			  	}
			 };




			hamburger.addEventListener("click", function () {
		  		var nav = document.getElementsByClassName("global-nav")[0];
		  		if (menuHidden) {

		  			styleChanges ("-44px", "block", "95px", "-95px auto 40px", false);	
		  		} 
		  		else {
		  			styleChanges ("-440px", "none", "50px", "-50px auto 5px", true);
		  		}
		  	});


			//old function:

			// hamburger.addEventListener("click", function () {
		 //  		var nav = document.getElementsByClassName("global-nav")[0];
		 //  		if (menuHidden) {

		 //  			nav.style.top = "-44px";
		 //  			nav.style.display = "block";
		 //  			hamburgerContainer.style.height = "95px";
		 //  			sosLogo.style.margin = "-95px auto 40px";
		 //  			menuHidden = false;	  			
		 //  		} 
		 //  		else {
		 //  			nav.style.top = "-440px";
		 //  			nav.style.display = "none";
		 //  			hamburgerContainer.style.height = "50px";
		 //  			sosLogo.style.margin = "-50px auto 40px";
		 //  			menuHidden = true;
		 //  		}
		 //  	});

		})();  