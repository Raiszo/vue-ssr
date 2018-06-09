const express = require('express'),
			app = express(),
			fs = require('fs'),
			path = require('path'),
			bundlePublic =  require('./dist/server_public.bundle.js'),
			bundleAdmin = require('./dist/server_admin.bundle.js');

//get renderer from vue app renderer
let renderer_public = require('vue-server-renderer').createRenderer({
	//set template
	template: fs.readFileSync('./index_public.html', 'utf-8')
});
let renderer_admin = require('vue-server-renderer').createRenderer({
	//set template
	template: fs.readFileSync('./index_admin.html', 'utf-8')
});

app.use('/dist', express.static(path.join(__dirname, './dist')));

//start app
app.get('/:type(about|yay|)', (req, res) => { 

	console.log(req.url)
  bundlePublic.default({ url: req.url }).then((vue_app) => {    
    //context to use as data source
    //in the template for interpolation
    const context = {
      title: 'Vue JS - Server Render',
      meta: `
                <meta description="vuejs app side render">
            `
    };

    renderer_public.renderToString(vue_app, context, function (err, html) {   
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    });        
  }, (err) => {
    console.log(err);
  });  
});  

app.get('/admin*', (req, res) => { 

	console.log(req.url)
  bundleAdmin.default({ url: req.url }).then((vue_app) => {
    //context to use as data source
    //in the template for interpolation
    const context = {
      title: 'Vue JS - Server Render',
      meta: `
                <meta description="vuejs app side render">
            `
    };

    renderer_admin.renderToString(vue_app, context, function (err, html) {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    });        
  })
		.catch( err => {
			console.log(err);
			res.send('ne')
		});  
});  


app.listen(8888, () => console.log('running on port 8888'));
