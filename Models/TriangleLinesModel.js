//Expects:
//{
//	triangleHeight,
//	triangleWidth,
//	numberOfSteps,
//	triangleColor,
//	backgroundColor,
//	lineThickness,
//}
function TriangleLinesModel( args ) {
	//Validate args, if false, throw exception
	this.validateArguments( args );

	this.triangleHeight = args.triangleHeight;
	this.triangleWidth = args.triangleWidth;
	this.numberOfSteps = args.numberOfSteps;
	this.triangleColor = args.triangleColor;
	this.backgroundColor = args.backgroundColor;
	this.lineThickness = args.lineThickness;
	
}


TriangleLinesModel.prototype.validateTriangleHeight = function(height) {
	if( isNaN(height) ) {
		throw "Triangle Height is not a number";
	}
}

TriangleLinesModel.prototype.validateTriangleWidth = function(width) {
	if( isNaN(width) ) {
		throw "Triangle Width is not a number";
	}
}

TriangleLinesModel.prototype.validateSteps = function(steps) {
	if( isNaN(steps) ) {
		throw "Left Steps is not a number";
	}
}

TriangleLinesModel.prototype.validateLineThickness = function(thickness) {
	if( isNaN(thickness) ) {
		throw "Line Thickness is not a number";
	}
}

TriangleLinesModel.prototype.validateArguments = function(args) {
	this.validateTriangleHeight( args.triangleHeight );
	this.validateTriangleWidth( args.triangleWidth);
	this.validateSteps( args.numberOfSteps );
	this.validateLineThickness( args.lineThickness);
}
//Make the rest of the validators