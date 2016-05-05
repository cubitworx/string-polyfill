if( !String.prototype.capitalise ) {
	/**
	 * Capitalise the first letter of words in the string
	 *
	 * @param {boolean} [all=false] Boolean true to capitalise all words. false to capitalise only first character
	 * @param {string} [separator=\s] Character used to separate words in input string
	 * @returns {string}
	 */
	String.prototype.capitalise = function(all,separator) {
		'use strict';

		if( !this )
			return this;

		if( !all )
			return this.charAt(0).toUpperCase() + this.slice(1);

		separator = separator || ' ';
		let words = this.split( separator );
		for( let i = 0; i < words.length; i++ )
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

		return words.join( separator );
	}
}
