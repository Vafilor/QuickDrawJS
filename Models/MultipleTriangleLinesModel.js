//Expects:
//{
//	triangleLength,
//	numberOfTriangles,
// 	triangleColor,
// 	backgroundColor,
// 	numberOfSteps,
//	lineThickness		
//}

function MultipleTriangleLinesModel( args ) {
	this.validateArguments(args);
	
	//TODO autopopulate triangleLength at runtime
	this.triangleLength = args.triangleLength;
	this.numberOfTriangles = args.numberOfTriangles;
	this.numberOfSteps = args.numberOfSteps;
	this.lineThickness= args.lineThickness;
	this.backgroundColor = args.backgroundColor;
	this.triangleColor = args.triangleColor;
}

MultipleTriangleLinesModel.prototype.validateTriangleLength = function(triangleLength) {
	if( isNaN(triangleLength) ) {
		throw "Triangle length is not a number";
	}
}

MultipleTriangleLinesModel.prototype.validateNumberOfTriangles = function(numberOfTriangles) {
	if( isNaN(numberOfTriangles) ) {
		throw "Number of Triangles is not a number";
	}	
}

MultipleTriangleLinesModel.prototype.validateNumberOfSteps = function(numberOfSteps) {
	if( isNaN(numberOfSteps) ) {
		throw "Number of steps is not a number";
	}
}

MultipleTriangleLinesModel.prototype.validateLineThickness = function(lineThickness) {
	if( isNaN( lineThickness) ) {
		throw "Line thickness is not a number";
	}
}

MultipleTriangleLinesModel.prototype.validateArguments = function(args) {
	this.validateTriangleLength(args.triangleLength);
	this.validateNumberOfTriangles(args.numberOfTriangles);
	this.validateNumberOfSteps(args.numberOfSteps);
	this.validateLineThickness(args.lineThickness);
}