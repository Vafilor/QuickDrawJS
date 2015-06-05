
//Graphics class contains general purpose drawing methods
function Graphics()
{
}

Graphics.drawLine = function(brush, x1, y1, x2, y2, width, color)
{
    brush.strokeStyle = color;
    brush.lineWidth = width;
    brush.beginPath();

    brush.moveTo(x1, y1);
    brush.lineTo(x2, y2);

    brush.stroke();
    brush.closePath();
};


Graphics.drawQuadraticCurve = function(brush, startX, startY, controlX, controlY, endX, endY, width, color)
{
    brush.strokeStyle = color;
    brush.lineWidth = width;
    brush.beginPath();

    brush.moveTo(startX, startY);
    brush.quadraticCurveTo(controlX, controlY, endX, endY);
   // brush.quadraticCurveTo(controlX, controlY, )

    brush.stroke();
    brush.closePath();
}

Graphics.drawQuadraticCurveWithFill = function(brush, startX, startY, controlX, controlY, endX, endY, width, color)
{
    brush.fillStyle = color;
    brush.beginPath();

    brush.moveTo(startX, startY);
    brush.quadraticCurveTo(controlX, controlY, endX, endY);

    brush.fill();
    brush.closePath();
}

Graphics.drawArc = function(brush, startX, startY, radius, startRadians, endRadians, width, color)
{
    brush.strokeStyle = color;
    brush.lineWidth = width;
    brush.beginPath();

    brush.arc(startX, startY, radius, startRadians, endRadians );

    brush.stroke();
    brush.closePath();
};

Graphics.drawCircle = function(brush, centerX, centerY, radius, width, color) 
{
	Graphics.drawArc(brush, centerX, centerY, radius, 0, 2*Math.PI, width, color);
}

Graphics.drawFilledCircle = function(brush, centerX, centerY, radius, fillColor)
{
    brush.fillStyle = fillColor;
    brush.beginPath();

    brush.arc(centerX, centerY, radius, 0, 2 * Math.PI );

    brush.fill();
    brush.closePath();
};

Graphics.drawFilledCircleWithEdge = function(brush, centerX, centerY, radius, edgeWidth, fillColor, edgeColor)
{
    brush.strokeStyle = edgeColor;
    brush.fillStyle = fillColor;
    brush.lineWidth = edgeWidth;
    brush.beginPath();

    brush.arc(centerX, centerY, radius, 0, 2 * Math.PI );

    brush.fill();
    brush.stroke();
    brush.closePath();
};

Graphics.drawFilledRectangle = function(brush, topLeftX, topLeftY, width, height, color)
{
    brush.fillStyle = color;

    brush.fillRect(topLeftX, topLeftY, width, height);
};