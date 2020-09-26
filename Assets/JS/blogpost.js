$(document).ready(function(){
	$(document.body).on('scroll', function(){
		for(var i = 0; i < $('.blogcontent p').length; i++)
		{
			fadeOut($('.blogcontent p')[i]);
		}

		for(var i = 0; i < $('.blogcontent h1').length; i++)
		{
			fadeOut($('.blogcontent h1')[i]);
		}

		for(var i = 0; i < $('.blogcontent h2').length; i++)
		{
			fadeOut($('.blogcontent h2')[i]);
		}

		for(var i = 0; i < $('.blogcontent h3').length; i++)
		{
			fadeOut($('.blogcontent h3')[i]);
		}

		for(var i = 0; i < $('.blogcontent h4').length; i++)
		{
			fadeOut($('.blogcontent h4')[i]);
		}

		for(var i = 0; i < $('.blogcontent h5').length; i++)
		{
			fadeOut($('.blogcontent h5')[i]);
		}

        for(var i = 0; i < $('.blogcontent h6').length; i++)
		{
			fadeOut($('.blogcontent h6')[i]);
		}

        for(var i = 0; i < $('.blogcontent img').length; i++)
		{
			fadeOut($('.blogcontent img')[i]);
		}

        for(var i = 0; i < $('.blogcontent div').length; i++)
		{
			fadeOut($('.blogcontent div')[i]);
		}

        for(var i = 0; i < $('.blogcontent ul').length; i++)
		{
			fadeOut($('.blogcontent ul')[i]);
		}
	});
});

function fadeOut(element){
	var position = ((element.getBoundingClientRect().bottom));

	var h = $(window).height();
	var w = $(window).width();

	position -= ((100/768)*((h+w)/2));
	var top = ((110/768)*((h+w)/2));
	position/=top;

	if(position < 1)
	{
		element.style.opacity = position;
	}
	else
	{
		element.style.opacity = 1;
	}
}