// google clusre
var obj = {
    doSomething: function () {
        this.a = "bob";
        function doAnotherThing() {
            console.log("Name: " + this.a);
        };
        console.log("Name: " + this.a);
        doAnotherThing();
    }
};
//What does this print?
obj.doSomething();