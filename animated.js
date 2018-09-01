function main_move(element, ratio, pointer, side, speed) {
    var config = {
        positionX: jQuery(element).offset().top || "",
        positionY: jQuery(element).offset().left || "",
    };
    if (side === "X") {
        position = config.positionX;
        position2 = config.positionY;
    } else if (side === "Y") {
        position = config.positionY;
        position2 = config.positionX;
    } else {
        return false;
    }
    setTimeout(function () {
        if (pointer == "+") {
            if (position >= ratio) {
                return false;
            } else {
                position = position + 10;
            }
        }
        if (pointer == "-") {
            if (position <= ratio) {
                return false;
            } else {
                position = position - 10;
            }
        }
        if (side === "X") {
            jQuery(element).offset({
                top: position,
                left: position2
            });
        } else if (side === "Y") {
            jQuery(element).offset({
                top: position2,
                left: position
            });
        }

        main_move(element, ratio, pointer, side, speed);

    }, speed);
}

function animated_move(element, ratio, pointer, side, speed, ratio2) {
    var config = {
        positionX: jQuery(element).offset().top || "",
        positionY: jQuery(element).offset().left || "",
    };
    if (side === "X") {
        position = config.positionX;
        position2 = config.positionY;
    } else if (side === "Y") {
        position = config.positionY;
        position2 = config.positionX;
    } else {
        return false;
    }
    setTimeout(function () {
        if (pointer == "+") {
            if (position >= ratio) {
                main_move(element, ratio2, "-", side, speed / 5);
                return false;
            } else {
                position = position + 5;
            }
        }
        if (pointer == "-") {
            if (position <= ratio) {
                main_move(element, ratio2, "+", side, speed / 5);
                return false;
            } else {
                position = position - 5;
            }
        }
        if (side === "X") {
            jQuery(element).offset({
                top: position,
                left: position2
            });
        } else if (side === "Y") {
            jQuery(element).offset({
                top: position2,
                left: position
            });
        }

        animated_move(element, ratio, pointer, side, speed, ratio2);

    }, speed);
}

function upDownMove(element) {
    animated_move(element, jQuery(element).offset().top - 10, "-", "X", 50, jQuery(element).offset().top + 200);
}
function downUpMove(element) {
    animated_move(element, jQuery(element).offset().top + 10, "+", "X", 50, jQuery(element).offset().top - 200);
}
function rightLeftMove(element) {
    animated_move(element, jQuery(element).offset().left + 10, "+", "Y", 50, jQuery(element).offset().left - 200);
}
function leftRightMove(element) {
    animated_move(element, jQuery(element).offset().left - 10, "-", "Y", 50, jQuery(element).offset().left + 200);
}
function rightMove(element) {
    main_move(element, jQuery(element).offset().left + 200, "+", "Y", 10);
}

function leftMove(element) {
    main_move(element, jQuery(element).offset().left - 200, "-", "Y", 10);
}

function downMove(element) {
    main_move(element, jQuery(element).offset().top + 200, "+", "X", 10);
}

function upMove(element) {
    main_move(element, jQuery(element).offset().top - 200, "-", "X", 10);
}