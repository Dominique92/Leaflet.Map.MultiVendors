var deps = {
	Core: {
		src: [
			'MapMultiCRS.js',
			'OSM.js',
			'IGN. js',
			'IGM.js',
			'IDEE.js',
			'SwissTopo. js',
			'MapMultiVendors.js'
		],
		desc: 'Mix layers using different CRS.'
	}
};

if (typeof exports !== 'undefined') {
	exports.deps = deps;
}