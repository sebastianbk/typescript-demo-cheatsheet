// Step 1
function sortByName(a) {
    var result = a.slice(0);

    result.sort(function (x, y) {
        return x.name.localCompare(y.name);
    });

    return result;
}

// Step 2
sortByName(5);

// Step 3
function sortByName(a: any[]) {
    var result = a.slice(0);

    result.sort(function (x, y) {
        return x.name.localCompare(y.name);
    });

    return result;
}

// Step 4
interface Entity {
    name: string;
}

function sortByName(a: Entity[]) {
    var result = a.slice(0);

    result.sort(function (x, y) {
        return x.name.localCompare(y.name);
    });

    return result;
}

// Step 5
// Fix typo.

// Step 6
// Refactoring: Rename name to entityName.
interface Entity {
    name: string;
}

function sortByName(a: Entity[]) {
    var result = a.slice(0);
	var name = "123";

    result.sort(function (x, y) {
        return x.name.localCompare(y.name);
    });

    return result;
}

// Step 7
interface Entity {
    name: string;
    price: number;
}

var e: Entity = {
    name: "Guitar",
    price: 989.95
}

// Step 8
interface Entity {
    name: string;
    price: number;
    inStock?: boolean;
}

var e: Entity = {
    name: "Guitar",
    price: 989.95,
    inStock: true
}

// Step 9
interface Entity {
    name: string;
    price: number;
    inStock?: boolean;
    getName(): string;
    setName(newName: string): void;
}

var e: Entity = {
    name: "Guitar",
    price: 989.95,
    inStock: true,
    getName: function () {
        return this.name;
    },
    setName: function (s) {
        this.name = s;
    }
}

// Step 10
// Show in the TypeScript Playground.

// Step 11
var products = [
	{ name: "Piano", price: 2999.95, id: 3 },
	{ name: "Drums", price: 1479.95, id: 1 },
	{ name: "Trumpet", price: 649.95, id: 2 },
	{ name: "Bass", price: 729.95, id: 4 },
];

var sorted = sortByName(products);

sorted[0];

document.body.innerHTML = JSON.stringify(sorted);

// Step 12
function sortByName<T>(a: T[]) {
    var result = a.slice(0);
    var name = "123";

    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });

    return result;
}

// Step 13
function sortByName<T extends Entity>(a: T[]) {
    var result = a.slice(0);
    var name = "123";

    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });

    return result;
}

// Step 14
interface Entity {
    name: string;
}

function sortByName<T extends Entity>(a: T[], callback: (item: T) => any) {
    var result = a.slice(0);
    var name = "123";

    result.sort(function (x, y) {
		var kx = callback(x);
		var ky = callback(y);
		return kx > ky ? 1 : kx < ky ? - 1 : 0;
    });

    return result;
}

var products = [
	{ name: "Piano", price: 2999.95, id: 3 },
	{ name: "Drums", price: 1479.95, id: 1 },
	{ name: "Trumpet", price: 649.95, id: 2 },
	{ name: "Bass", price: 729.95, id: 4 },
];

var sorted = sortByName(products, x => x.price);

document.body.innerHTML = JSON.stringify(sorted);

// Step 15
interface Entity {
    name: string;
}

function sortByName<T extends Entity>(a: T[], key: string | ((item: T) => any)) {
    var result = a.slice(0);
    var name = "123";
	
	var callback = typeof key === "string" ? x => x[key] : key;

    result.sort(function (x, y) {
		var kx = callback(x);
		var ky = callback(y);
		return kx > ky ? 1 : kx < ky ? - 1 : 0;
    });

    return result;
}

var products = [
	{ name: "Piano", price: 2999.95, id: 3 },
	{ name: "Drums", price: 1479.95, id: 1 },
	{ name: "Trumpet", price: 649.95, id: 2 },
	{ name: "Bass", price: 729.95, id: 4 },
];

var sorted = sortByName(products, "price");

document.body.innerHTML = JSON.stringify(sorted);

// Step 16
// Show the definition file for JavaScript.

// Step 17
class Point {
	x: number;
	y: number;
}

// Step 18
class Point {
	x: number;
	y: number;
}

var p = new Point();
p.x = 10;
p.y = 20;

// Step 19
class Point {
	x: number;
	y: number;
	
	constructor(x: number, y: number) {
		this.x = y;
		this.y = y;
	}
}

var p = new Point(10, 20);

// Step 20
class Point {
	x: number;
	y: number;
	
	constructor(x: number, y: number) {
		this.x = y;
		this.y = y;
	}
	
	dist() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}

var p = new Point(10, 20);
p.dist();

// Step 21
class Point {
	x: number;
	y: number;
	
	constructor(x: number, y: number) {
		this.x = y;
		this.y = y;
	}
	
	dist() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	
	static origin = new Point(0, 0);
}

var p = new Point(10, 20);
p.dist();
Point.origin;

// Step 22
class Point {
	x: number;
	y: number;
	
	private color: string;
	
	constructor(x: number, y: number) {
		this.x = y;
		this.y = y;
		this.color = "Blue";
	}
}

var p = new Point(5, 10);
p.color;

// Step 23
class Point {
	x: number;
	y: number;
	
	protected color: string;
	
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
		this.color = "Blue";
	}
}

var p = new Point(5, 10);

class Point3D extends Point {
	z: number;
	
	constructor(x: number, y: number, z: number) {
		super(x, y);
		this.z = z;
		this.color = "Red";
	}
}

var p3d = new Point3D(10, 20, 30);

document.write(p3d.x.toString());

// Step 24
class Point {	
	constructor(public x: number, public y: number) {
		this.x = x;
		this.y = y;
	}
}

var p = new Point(10, 20);
p.x;
p.y;

// Step 25
class Point {	
	constructor(public x: number = 0, public y: number = 0) {
		this.x = x;
		this.y = y;
	}
}

var p = new Point(10, 20);
p.x;
p.y;

// Step 26
module Utils {
	export class Point {	
		constructor(public x: number = 0, public y: number = 0) {
			this.x = x;
			this.y = y;
		}
	}
}

var p = new Utils.Point(10, 20);
p.x;
p.y;