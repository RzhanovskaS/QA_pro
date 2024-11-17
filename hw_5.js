const obj = {
    item : "laptop",
    brand_name: "Acer",
    ram: 32,
    proccessor: "AMD Ryzen7",

    getInfo: function() {
        for (let key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key}: ${this[key]}`);
        }
        }     
    }     
};



obj.newProperty = "mobile";
obj.getInfo();