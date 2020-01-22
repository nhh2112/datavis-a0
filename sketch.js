function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(250);

    //hours
    fill (0, 255, 0, 0);
    stroke (0, 180, 0);
    ellipse (100, 320, 150, 150);

    fill (255, 0, 0, 0);
    stroke (200, 0, 0);
    ellipse (width-100, 320, 150, 150);

		let hr = map (hour(), 0, 23, 100, width-100);
		fill (hour()*11.1,255-(hour()*11.1),0, (hour()*11.1)+8);
    noStroke();
		ellipse(hr, 320, 150, 150);

    //minutes

    fill (0, 255, 0, 0);
    stroke (0, 180, 0);
    ellipse (100, 150, 75, 75);

    fill (255, 0, 0, 0);
    stroke (200, 0, 0);
    ellipse (width-100, 150, 75, 75);

		let min = map (minute(), 0, 60, 100, width-100);
		fill (minute()*4.5,255-(minute()*4.5),0, (minute()*4)+8);
    noStroke();
		ellipse(min, 150, 75, 75);

    //seconds
    fill (0, 255, 0, 0);
    stroke (0, 180, 0);
    ellipse (100, 50, 30, 30);

    fill (255, 0, 0, 0);
    stroke (200, 0, 0);
    ellipse (width-100, 50, 30, 30);

		let sec = map (second(), 0, 60, 100, width-100);
		fill (second()*4.5,255-(second()*4.5),0, (second()*4)+8);
    noStroke();
		ellipse(sec, 50, 30, 30);
}
