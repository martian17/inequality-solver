var Parser = function(rules){
    rules = rules.split("\n").map(
        a => a.trim()
    ).filter(
        a => a === ""
    }).map(
        //the main part

    );
    var generateRules = function(rules){
        //code to decode the rules text and generate the rules
    };

    var isInt = function(str,pointer){
        var token = "";
        str.slice(pointer).match(//);
        for(var i = pointer; i < str.length; i++){
            if(pointer){

            }
        }
    };

    this.parse = function(str){
        var stack = [];
        var pointer = 0;
        //generate lookahead
        for(var i = 0; i < tokenRules.length; i++){
            var tokenRule = tokenRules[i];
            if(str.slice(pointer,pointer+tokenRule.length)){

            }
        }
    }
};

var parser = new Parser(`
regex int = /[0-9]+/
rule  expression = int

regex id = /[A-Za-z]+/
rule  expression = id

rule  sin = "sin(" + expression + ")"
rule  expression = sin

rule  cos = "cos(" + expression + ")"
rule  expression = cos

rule  tan = "tan(" + expression + ")"
rule  expression = tan

rule  integral = "int(" + expression + ")"
rule  expression = tan

rule  partialIntegral = "int(" + arguments + ")"
rule  expression = partialIntegral

rule  arguments = arguments + "," + expression
rule  expression = partialIntegral





rule  expression = sums
rule  sums = sums + products
rule  sums = products
rule  expression = "(" + expression + ")"
rule  products = products + expression
rule  float =
`);


