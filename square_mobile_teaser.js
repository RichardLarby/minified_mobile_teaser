		
	(function(){
		window.innerHTMLForCircle="?";
		
	if(typeof setHtmlInsideCircle == 'function') window.innerHTMLForCircle=setHtmlInsideCircle();
	function outerLoad(){
		
		//Prepend custom styles to head
		var customCssPath = 'https://drive.google.com/open?id=0B6Cv3O3J8y3caDh4VzBHbUxuMlE';
		var styleEl = document.createElement("link");
        styleEl.setAttribute("rel", "stylesheet");
        styleEl.setAttribute("type", "text/css");
        document.getElementsByTagName("head")[0].appendChild(styleEl);
        styleEl.setAttribute("href", customCssPath);
		_nRepData["float"].expandMobileButton.className = "nanoRep_mobileTeaser collapseTeaser";
		window.textInTitle= _nRepData["float"].expandMobileButton.innerHTML;
		_nRepData["float"].expandMobileButton.className = "nanoRep_mobileTeaser collapseTeaser";
		_nRepData["float"].expandMobileButton.innerHTML=window.innerHTMLForCircle;
		var expandOriginal = nanoRep.Float.afterExpandMobileCallback;
		nanoRep.Float.afterExpandMobileCallback = function()
		{
			_nRepData["float"].expandMobileButton.className = "nanoRep_mobileTeaser";
			_nRepData["float"].expandMobileButton.innerHTML=window.textInTitle;
			expandOriginal();
		}

		var collapseOriginal = nanoRep.Float.afterCollapseMobileCallback;
		nanoRep.Float.afterCollapseMobileCallback = function()
		{
			_nRepData["float"].expandMobileButton.className = "nanoRep_mobileTeaser collapseTeaser";
						_nRepData["float"].expandMobileButton.innerHTML=window.innerHTMLForCircle;


			collapseOriginal();
		}

	}

	function waitForLoadWidget()
	{
		if (_nRepData["float"].expandMobileButton) 
		{
			outerLoad();
		}
		else
		{
			setTimeout(function(){
				waitForLoadWidget();
			},100);
		}
	}

	waitForLoadWidget();
    
	})();

   // document.body.insertBefore(content,document.body.firstChild);
	//var ea=document.getElementById("widgetContainer");
	//ea.style.display="none";