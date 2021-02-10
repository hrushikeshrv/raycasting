class Ray {
    constructor(position, direction) {
        this.position = createVector(position);
        this.direction = createVector(direction);
    }

    cast(boundaries) {
        //Cast the ray on all of the boundaries.
        let minPoint = createVector(window.innerWidth*100, window.innerHeight*100);
        let drawFlag = false;
        for (boundary of boundaries) {
            const x1 = boundary.pt1.x;
            const x2 = boundary.pt2.x;
            const y1 = boundary.pt1.y;
            const y2 = boundary.pt2.y;

            const denominator = (x1 - x2) * (-1*this.direction.y) - (y1 - y2) * (-1*this.direction.x);
            
            if (denominator === 0) {
                //If the denominator is 0, the ray and the boundary are parallel, so skip to the next boundary
                continue;
            }

            const t = ((x1 - this.position.x) * (this.position.y - this.position.y + this.direction.y) - (y1 - this.position.y) * (this.position.x - this.position.x + this.direction.x)) / den;
            const u = -((x1 - x2) * (y1 - this.position.y) - (y1 - y2) * (x1 - this.position.x)) / den;

            if (0 < t < 1 && u > 0) {
                //If this condition is satisfied, the ray intersects with this boundary
                const intersection = createVector(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
                //If this intersection point is closer than the minimum distance point till now, set this as the min distance point
                if (intersection.dist(this.position) < minPoint.dist(this.position)) {
                    minPoint = intersection;
                    drawFlag = true;
                }
            }
        }

        if (drawFlag) {
            stroke(255);
            strokeWeight(1);
            line(this.position.x, this.position.y, minPoint.x, minPoint.y);
        }
    }
}