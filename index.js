"use strict"

var fs = require('fs');

RegExp.quote = function(str) {
  return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};

module.exports = function (name, cb) {
	// /Users/alessandrominoccheri/Sites/klikkahotel.com/css/backend/_style.css
	var path_explode = name.split('/');
	var last_value = path_explode[path_explode.length-1];
	if(last_value.indexOf('.css') > 0){
		fs.readFile(name, 'utf8', function (err,data) {
			if (err)
			    return console.log(err);

			var class_to_find = 'label-blu';
			var reg = new RegExp('\\.' + RegExp.quote(class_to_find) + '([,:\\s\\.][^\\{]*)?\\{', 'gmi');
			var found = data.match(reg);
			
			if((found != '') && (found != null))
				found = found.length;
			else
				found = 0;

			console.log('found in ' + name + ': ' + found + ' match of ' + class_to_find);
		});
	}
	else{
		if(last_value.indexOf('.') == -1){
			fs.readdir(name, function(err,files){
			    if (err) 
			    	return console.log(err);

			    var c=0;
			    files.forEach(function(file){
			    	var path_explode = file.split('/');
					var last_value = path_explode[path_explode.length-1];
					if(last_value.indexOf('.css') > 0){
				        fs.readFile(name+file,'utf-8',function(err, data){
				            if (err) 
				            	return console.log(err);

				            var class_to_find = 'label-blu';
							var reg = new RegExp('\\.' + RegExp.quote(class_to_find) + '([,:\\s\\.][^\\{]*)?\\{', 'gmi');
							var found = data.match(reg);
							
							if((found != '') && (found != null))
								found = found.length;
							else
								found = 0;

							console.log('found in ' + name + file + ': ' + found + ' match of ' + class_to_find);
				        });
				    }
			    });
			});
		}
	}
};
