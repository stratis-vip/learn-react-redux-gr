module.exports  = {
	/*Το κύριο αρχείο της εφαρμογής */
	entry:  "./src/app.tsx",
	/*Που θα αποθηκεύονται τα αρχεία που δημιουργεί το webpack */
	output: {
				path:  __dirname  +  "/public",	//ο κατάλογος
				filename:  "build/app.js"		//το όνομα του αρχείου
		},
	/*Ποιούς τύπους αρχείων θα μετατρέπει */
	resolve: {
				extensions: [".ts", ".tsx", ".js", ".jsx"]
		},
	/*Πως θα τα μετατρέπει */
	module: {
			rules: [
						{
							test: /\.tsx$/,		//όποιο αρχείο καταλήγει σε "test" (.tsx)
							use: ["ts-loader"]	//χρησιμοποίησε τον αντίστοιχο loader (ts-loader)
						},
						{
							test: /\.css$/, 
							use: ["style-loader", "css-loader"]
						},
						{
							test: /\.(woff|woff2|eot|ttf|otf)$/, 
							use: ["file-loader"]
						}
					]
				}
			}