
	const w = "Homework_by_Alen"
    alert (w);	
	const a = 15;
	const b = 25;
	const c = 10;
	const N = "=NaturalNumber"

  //1st part  
    console.log (a + b);
	console.log ((a+b)/c);
	console.log ((b+c)-a);
	console.log ((15*10)/25);
	console.log (a + " =NaturalNumber");

  //2nd part  
    const maxVideoSize_mb = 200;
	const inputedVideoSize = 525;
	const VideoFormat1 = ".mp4";
	const VideoFormat2 = ".flv";
	const VideoFormat3 = ".mov";
	const VideoFormat4 = ".3gp";
	const VideoFormat5 = ".wmv";
	const inputedVideoFormat = ".mp4";
	const inputedVideoName = "How to install MacOs on Windows ?";



    if( (VideoFormat1 !== inputedVideoFormat) && (VideoFormat2 !== inputedVideoFormat) && (VideoFormat3 !== inputedVideoFormat)	&& (VideoFormat4 !== inputedVideoFormat) && (VideoFormat5 !== inputedVideoFormat) ){
    	console.log("Invalid type of video");
    } else {
    	console.log("Yay, your selected file has correct format")
    }

    if(inputedVideoName.length === 15 ){
    	alert ("Damn, you are so lucky!!! So get ready for surprise!!");
    	console.log (" + unlimited free mb for upload !!!"); 	
    } else if(inputedVideoSize <= maxVideoSize_mb){
		console.log ("Press upload button");
	} else {
		console.log ("The size of your video is too much");
	}

   